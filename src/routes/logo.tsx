import { createFileRoute } from "@tanstack/react-router";
import v1 from "@/assets/logo-v1.png";
import v2 from "@/assets/logo-v2.png";
import v3 from "@/assets/logo-v3.png";
import v4 from "@/assets/logo-v4.png";
import v5 from "@/assets/logo-v5.png";
import v6 from "@/assets/logo-v6.png";

export const Route = createFileRoute("/logo")({
  component: LogoVariants,
  head: () => ({
    meta: [
      { title: "ZikrFlow — Logo Variants" },
      { name: "description", content: "Simple unique logo concept variants for the ZikrFlow app." },
    ],
  }),
});

const VARIANTS = [
  { src: v1, name: "V1 — Infinity Tasbih", note: "Flow loop + single bead with tassel. Emerald & gold." },
  { src: v2, name: "V2 — Crescent & Bead", note: "Crescent moon cradling a bead over a flow wave. Navy & gold." },
  { src: v3, name: "V3 — Bead Monogram Z", note: "Letter Z formed from a tasbih chain. Emerald gradient." },
  { src: v4, name: "V4 — Bead Ring", note: "9 beads in a loop with one gold accent. Midnight blue." },
  { src: v5, name: "V5 — Arabic Flow", note: "Calligraphic monoline mark with beads & tassel. Gold on cream." },
  { src: v6, name: "V6 — Drop & Flame", note: "Layered drop / flame — purity & devotion. Emerald minimal." },
];

function LogoVariants() {
  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight">ZikrFlow — Logo Variants</h1>
          <p className="mt-2 text-neutral-600">
            Simple, unique app-icon concepts. Pick a direction and I'll refine it (color, shape, typography lockup).
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
              <div className="p-4">
                <h2 className="text-sm font-semibold">{v.name}</h2>
                <p className="mt-1 text-xs text-neutral-600">{v.note}</p>
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
