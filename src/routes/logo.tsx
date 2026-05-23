import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, ChevronDown, Download, Plus, Minus } from "lucide-react";
import jsPDF from "jspdf";
import v1 from "@/assets/logo-v1.png";
import v2 from "@/assets/logo-v2.png";
import v3 from "@/assets/logo-v3.png";
import v4 from "@/assets/logo-v4.png";
import v5 from "@/assets/logo-v5.png";
import v6 from "@/assets/logo-v6.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Route = createFileRoute("/logo")({
  component: LogoVariants,
  head: () => ({
    meta: [
      { title: "ZikrFlow — Logo Variants" },
      { name: "description", content: "Logo concept variants with Figma-style export." },
    ],
  }),
});

const VARIANTS = [
  { src: v1, name: "V1 — Infinity Tasbih", note: "Flow loop + single bead with tassel. Emerald & gold." },
  { src: v2, name: "V2 — Crescent & Bead", note: "Crescent moon cradling a bead. Navy & gold." },
  { src: v3, name: "V3 — Bead Monogram Z", note: "Letter Z formed from a tasbih chain. Emerald gradient." },
  { src: v4, name: "V4 — Bead Ring", note: "9 beads in a loop with one gold accent. Midnight blue." },
  { src: v5, name: "V5 — Arabic Flow", note: "Calligraphic monoline mark. Gold on cream." },
  { src: v6, name: "V6 — Drop & Flame", note: "Layered drop / flame. Emerald minimal." },
];

const FORMATS = ["PNG", "JPEG", "SVG", "PDF"] as const;
type Format = (typeof FORMATS)[number];
const SCALES = [0.5, 1, 2, 3, 4] as const;
type Scale = (typeof SCALES)[number];

async function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((res, rej) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = src;
  });
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function exportLogo(src: string, name: string, format: Format, scale: Scale) {
  const safeName = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const img = await loadImage(src);
  const w = Math.round(img.naturalWidth * scale);
  const h = Math.round(img.naturalHeight * scale);

  if (format === "SVG") {
    // Wrap raster image as SVG with base64 data
    const res = await fetch(src);
    const buf = await res.arrayBuffer();
    const b64 = btoa(String.fromCharCode(...new Uint8Array(buf)));
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><image href="data:image/png;base64,${b64}" width="${w}" height="${h}"/></svg>`;
    downloadBlob(new Blob([svg], { type: "image/svg+xml" }), `${safeName}.svg`);
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  if (format === "JPEG") {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, w, h);
  }
  ctx.drawImage(img, 0, 0, w, h);

  if (format === "PDF") {
    const dataUrl = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: w >= h ? "landscape" : "portrait",
      unit: "px",
      format: [w, h],
    });
    pdf.addImage(dataUrl, "PNG", 0, 0, w, h);
    pdf.save(`${safeName}.pdf`);
    return;
  }

  const mime = format === "JPEG" ? "image/jpeg" : "image/png";
  const ext = format === "JPEG" ? "jpg" : "png";
  canvas.toBlob((blob) => {
    if (blob) downloadBlob(blob, `${safeName}.${ext}`);
  }, mime, format === "JPEG" ? 0.95 : undefined);
}

function ExportPanel({ src, name }: { src: string; name: string }) {
  const [scale, setScale] = useState<Scale>(1);
  const [format, setFormat] = useState<Format>("PNG");
  const [busy, setBusy] = useState(false);

  const idx = SCALES.indexOf(scale);
  const dec = () => setScale(SCALES[Math.max(0, idx - 1)]);
  const inc = () => setScale(SCALES[Math.min(SCALES.length - 1, idx + 1)]);

  const handleExport = async () => {
    setBusy(true);
    try {
      await exportLogo(src, name, format, scale);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3">
      <div className="mb-2 flex items-center justify-between text-xs font-semibold text-neutral-700">
        <span>Export</span>
      </div>
      <div className="flex items-center gap-2">
        {/* Scale stepper */}
        <div className="flex items-center rounded-md border border-neutral-200 bg-white">
          <button
            type="button"
            onClick={dec}
            className="flex h-8 w-7 items-center justify-center text-neutral-500 hover:text-neutral-900 disabled:opacity-30"
            disabled={idx === 0}
            aria-label="Decrease scale"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <span className="w-10 text-center text-xs font-medium tabular-nums">{scale}x</span>
          <button
            type="button"
            onClick={inc}
            className="flex h-8 w-7 items-center justify-center text-neutral-500 hover:text-neutral-900 disabled:opacity-30"
            disabled={idx === SCALES.length - 1}
            aria-label="Increase scale"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Format dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="inline-flex h-8 items-center gap-1 rounded-md border border-neutral-200 bg-white px-2.5 text-xs font-medium hover:bg-neutral-50">
            {format}
            <ChevronDown className="h-3.5 w-3.5 text-neutral-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-[120px] bg-neutral-900 text-neutral-100 border-neutral-700">
            {FORMATS.map((f) => (
              <DropdownMenuItem
                key={f}
                onClick={() => setFormat(f)}
                className="flex items-center gap-2 text-xs focus:bg-neutral-800 focus:text-white"
              >
                <Check className={`h-3.5 w-3.5 ${format === f ? "opacity-100" : "opacity-0"}`} />
                {f}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Export button */}
        <button
          type="button"
          onClick={handleExport}
          disabled={busy}
          className="ml-auto inline-flex h-8 items-center gap-1.5 rounded-md bg-neutral-900 px-3 text-xs font-semibold text-white hover:bg-neutral-800 disabled:opacity-50"
        >
          <Download className="h-3.5 w-3.5" />
          {busy ? "…" : "Export"}
        </button>
      </div>
      <p className="mt-2 text-[10px] text-neutral-500">
        Output: {Math.round(1024 * scale)}×{Math.round(1024 * scale)} · {format}
      </p>
    </div>
  );
}

function LogoVariants() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">ZikrFlow — Logo Variants</h1>
          <p className="mt-2 text-neutral-600">
            Pick a direction. Use the Figma-style export panel on each card to download in PNG, JPEG, SVG, or PDF.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VARIANTS.map((v) => (
            <article
              key={v.name}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="flex aspect-square items-center justify-center bg-neutral-100">
                <img
                  src={v.src}
                  alt={v.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="space-y-3 p-4">
                <div>
                  <h2 className="text-sm font-semibold">{v.name}</h2>
                  <p className="mt-1 text-xs text-neutral-600">{v.note}</p>
                </div>
                <ExportPanel src={v.src} name={v.name} />
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-lg font-semibold">Lockup preview</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {VARIANTS.map((v) => (
              <div key={v.name} className="flex flex-col items-center gap-2">
                <img
                  src={v.src}
                  alt={v.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-16 w-16 rounded-xl object-contain shadow-sm"
                />
                <span className="text-sm font-medium">ZikrFlow</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
