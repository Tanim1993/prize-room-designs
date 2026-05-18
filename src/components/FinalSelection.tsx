import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Check, Plus, Pencil, Trash2, ArrowUp, ArrowDown, Star, Code2, FileCode } from "lucide-react";
import { toast } from "sonner";

/* ------------------------------------------------------------------ */
/*  Copy buttons — copies rendered HTML or auto-converted JSX         */
/* ------------------------------------------------------------------ */

/** Convert raw HTML markup to paste-ready JSX (Tailwind-friendly). */
function htmlToJsx(html: string): string {
  let out = html;
  // attribute renames
  out = out.replace(/\sclass=/g, " className=");
  out = out.replace(/\sfor=/g, " htmlFor=");
  out = out.replace(/\stabindex=/g, " tabIndex=");
  out = out.replace(/\sreadonly(=|\s|>)/g, " readOnly$1");
  out = out.replace(/\smaxlength=/g, " maxLength=");
  out = out.replace(/\scolspan=/g, " colSpan=");
  out = out.replace(/\srowspan=/g, " rowSpan=");
  out = out.replace(/\sautocomplete=/g, " autoComplete=");
  // inline style="a:b;c:d" → style={{ a: "b", c: "d" }}
  out = out.replace(/\sstyle="([^"]*)"/g, (_m, css: string) => {
    const obj = css
      .split(";")
      .map((s) => s.trim())
      .filter(Boolean)
      .map((decl) => {
        const i = decl.indexOf(":");
        if (i < 0) return "";
        const prop = decl.slice(0, i).trim().replace(/-([a-z])/g, (_x, c: string) => c.toUpperCase());
        const val = decl.slice(i + 1).trim().replace(/"/g, '\\"');
        return `${prop}: "${val}"`;
      })
      .filter(Boolean)
      .join(", ");
    return ` style={{ ${obj} }}`;
  });
  // self-close void elements
  const voids = ["br", "hr", "img", "input", "meta", "link", "source", "track", "wbr", "area", "base", "col", "embed", "param"];
  for (const tag of voids) {
    const re = new RegExp(`<${tag}([^>]*?)(?<!/)>`, "g");
    out = out.replace(re, `<${tag}$1 />`);
  }
  return out;
}

async function copyText(text: string, label: string) {
  try {
    await navigator.clipboard.writeText(text);
    toast.success(`${label} copied`, { description: `${text.length.toLocaleString()} characters` });
  } catch {
    toast.error(`Could not copy ${label}`);
  }
}

export function CopyButtons({ targetRef }: { targetRef: React.RefObject<HTMLDivElement> }) {
  const getHtml = () => targetRef.current?.firstElementChild?.outerHTML ?? targetRef.current?.innerHTML ?? "";
  return (
    <div className="inline-flex items-center gap-1">
      <button
        type="button"
        onClick={() => copyText(getHtml(), "HTML")}
        className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-sky-50 hover:text-sky-700 hover:ring-sky-300"
        title="Copy rendered HTML (for Figma plugins, design-to-code tools)"
      >
        <Code2 className="h-3 w-3" />
        HTML
      </button>
      <button
        type="button"
        onClick={() => copyText(htmlToJsx(getHtml()), "JSX")}
        className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-violet-50 hover:text-violet-700 hover:ring-violet-300"
        title="Copy as React/JSX (Tailwind, paste into a .tsx file)"
      >
        <FileCode className="h-3 w-3" />
        JSX
      </button>
    </div>
  );
}

type RegistryEntry = {
  node: React.ReactNode;
  frame: "phone" | "detail" | "channel";
  defaultLabel: string;
};

type Item = { key: string; customName: string };

type Ctx = {
  register: (key: string, entry: RegistryEntry) => void;
  unregister: (key: string) => void;
  items: Item[];
  has: (key: string) => boolean;
  add: (key: string) => void;
  remove: (key: string) => void;
  rename: (key: string, name: string) => void;
  move: (key: string, dir: -1 | 1) => void;
  registry: Map<string, RegistryEntry>;
};

const FinalCtx = createContext<Ctx | null>(null);
const STORAGE_KEY = "finalSelectionItems_v1";

export function FinalSelectionProvider({ children }: { children: React.ReactNode }) {
  const registryRef = useRef<Map<string, RegistryEntry>>(new Map());
  const [, force] = useState(0);
  const [items, setItems] = useState<Item[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items, hydrated]);

  const register = useCallback((key: string, entry: RegistryEntry) => {
    const previous = registryRef.current.get(key);
    registryRef.current.set(key, entry);
    if (!previous || previous.frame !== entry.frame || previous.defaultLabel !== entry.defaultLabel) {
      force((n) => n + 1);
    }
  }, []);
  const unregister = useCallback((key: string) => {
    registryRef.current.delete(key);
    force((n) => n + 1);
  }, []);

  const has = useCallback((key: string) => items.some((i) => i.key === key), [items]);
  const add = useCallback(
    (key: string) =>
      setItems((prev) => {
        if (prev.some((i) => i.key === key)) return prev;
        const def = registryRef.current.get(key)?.defaultLabel ?? key;
        return [...prev, { key, customName: def }];
      }),
    [],
  );
  const remove = useCallback(
    (key: string) => setItems((prev) => prev.filter((i) => i.key !== key)),
    [],
  );
  const rename = useCallback(
    (key: string, name: string) =>
      setItems((prev) => prev.map((i) => (i.key === key ? { ...i, customName: name } : i))),
    [],
  );
  const move = useCallback(
    (key: string, dir: -1 | 1) =>
      setItems((prev) => {
        const idx = prev.findIndex((i) => i.key === key);
        const j = idx + dir;
        if (idx < 0 || j < 0 || j >= prev.length) return prev;
        const next = [...prev];
        [next[idx], next[j]] = [next[j], next[idx]];
        return next;
      }),
    [],
  );

  const value = useMemo<Ctx>(
    () => ({
      register,
      unregister,
      items,
      has,
      add,
      remove,
      rename,
      move,
      registry: registryRef.current,
    }),
    [register, unregister, items, has, add, remove, rename, move],
  );

  return <FinalCtx.Provider value={value}>{children}</FinalCtx.Provider>;
}

function useFinal() {
  const ctx = useContext(FinalCtx);
  return ctx;
}

/** Tiny pill button shown on each frame for picking it into Final Selection. */
export function PickButton({ frameKey }: { frameKey: string }) {
  const ctx = useFinal();
  if (!ctx) return null;
  const picked = ctx.has(frameKey);
  return (
    <button
      type="button"
      onClick={() => (picked ? ctx.remove(frameKey) : ctx.add(frameKey))}
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] shadow-sm ring-1 transition ${
        picked
          ? "bg-emerald-600 text-white ring-emerald-700 hover:bg-emerald-700"
          : "bg-white text-slate-700 ring-slate-200 hover:bg-amber-50 hover:text-amber-700 hover:ring-amber-300"
      }`}
      title={picked ? "Remove from Final Selection" : "Add to Final Selection"}
    >
      {picked ? <Check className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
      {picked ? "In Final" : "Add to Final"}
    </button>
  );
}

/** Hook used by frame components to register their content into the registry. */
export function useRegisterFrame(
  key: string,
  frame: RegistryEntry["frame"],
  defaultLabel: string,
  node: React.ReactNode,
) {
  const ctx = useFinal();
  const register = ctx?.register;
  const unregister = ctx?.unregister;
  const nodeRef = useRef(node);
  nodeRef.current = node;

  useEffect(() => {
    if (!register || !unregister) return;
    register(key, { node: nodeRef.current, frame, defaultLabel });
    return () => unregister(key);
  }, [register, unregister, key, frame, defaultLabel]);
}

/** Section that renders the user's curated picks with reorder/rename/remove. */
export function FinalSelectionSection({
  PhoneShell,
  DetailShell,
  ChannelShell,
}: {
  PhoneShell: React.FC<{ children: React.ReactNode }>;
  DetailShell: React.FC<{ children: React.ReactNode }>;
  ChannelShell: React.FC<{ children: React.ReactNode }>;
}) {
  const ctx = useFinal();
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [draft, setDraft] = useState("");

  if (!ctx) return null;

  const startEdit = (it: Item) => {
    setEditingKey(it.key);
    setDraft(it.customName);
  };
  const commitEdit = () => {
    if (editingKey) ctx.rename(editingKey, draft.trim() || editingKey);
    setEditingKey(null);
  };

  return (
    <section id="sec-final" className="mt-4 mb-12 scroll-mt-24">
      <div className="mb-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-800 ring-1 ring-amber-200">
          <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
          Final Selection
        </div>
        <h2 className="mt-3 text-2xl font-bold text-slate-900">Your curated picks</h2>
        <p className="mt-1 text-sm text-slate-500">
          Add any variant from the sections below using the <b>+ Add to Final</b> button. Reorder,
          rename, and present them as a single shortlist.
        </p>
      </div>

      {ctx.items.length === 0 ? (
        <div className="mx-auto max-w-xl rounded-2xl border-2 border-dashed border-slate-200 bg-white/50 px-6 py-10 text-center">
          <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <Star className="h-5 w-5" />
          </div>
          <p className="text-sm font-semibold text-slate-700">No picks yet</p>
          <p className="mt-1 text-xs text-slate-500">
            Scroll any section and tap <b>+ Add to Final</b> on the variants you like best.
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {ctx.items.map((it, idx) => {
            const entry = ctx.registry.get(it.key);
            const Shell =
              entry?.frame === "phone"
                ? PhoneShell
                : entry?.frame === "channel"
                  ? ChannelShell
                  : DetailShell;
            return (
              <div key={it.key} className="flex flex-col items-center gap-3">
                <div className="flex w-full items-center justify-between gap-2 rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-900 text-[11px] font-bold text-white">
                    {idx + 1}
                  </span>
                  {editingKey === it.key ? (
                    <input
                      autoFocus
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                      onBlur={commitEdit}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") commitEdit();
                        if (e.key === "Escape") setEditingKey(null);
                      }}
                      className="flex-1 rounded-md border border-slate-300 px-2 py-1 text-xs font-semibold text-slate-800 outline-none focus:border-amber-400"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => startEdit(it)}
                      className="flex flex-1 items-center gap-1.5 truncate text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700 hover:text-amber-700"
                      title="Rename"
                    >
                      <span className="truncate">{it.customName}</span>
                      <Pencil className="h-3 w-3 shrink-0 opacity-50" />
                    </button>
                  )}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => ctx.move(it.key, -1)}
                      disabled={idx === 0}
                      className="rounded-md p-1 text-slate-500 hover:bg-slate-100 disabled:opacity-30"
                      title="Move up"
                    >
                      <ArrowUp className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => ctx.move(it.key, 1)}
                      disabled={idx === ctx.items.length - 1}
                      className="rounded-md p-1 text-slate-500 hover:bg-slate-100 disabled:opacity-30"
                      title="Move down"
                    >
                      <ArrowDown className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => ctx.remove(it.key)}
                      className="rounded-md p-1 text-rose-500 hover:bg-rose-50"
                      title="Remove"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
                {entry ? (
                  <Shell>{entry.node}</Shell>
                ) : (
                  <div className="flex w-[360px] items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white/60 px-6 py-12 text-center text-xs text-slate-500">
                    Source variant not loaded yet.<br />
                    Switch to the V1 view so it can register.
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
