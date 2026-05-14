# Sponsor Brand Analytics Report — Design Variant

A new exploration variant in `SponsorCards.tsx`, shown inside the same `PhoneFrame` as the existing concepts. This is the report screen the **app owner shows a sponsor brand** for the room their brand is aligned with (e.g. Wizlife → "সুবহানাল্লাহি" room).

Goal: in one scrollable mobile screen, the brand sees *who* engaged, *where they came from*, *what they did*, and *whether the room is growing*.

## Where it lives

- New section at the bottom of `SponsorCards.tsx` titled **"Sponsor Analytics — Brand Report"**.
- Rendered inside a `PhoneFrame` labeled `R1 — Sponsor Report`.
- Replaces the normal room-feed body with a report layout (header + KPI grid + sections). Bottom nav stays so the app shell stays consistent.
- Uses existing tokens: `NAVY`, `FEATURED_YELLOW`, lucide icons, no new deps. Tiny inline SVG for charts (no recharts) to keep it lightweight and on-brand.

## Layout (top → bottom)

```text
┌──────────────────────────────────────────┐
│ Report header                            │
│  Wizlife logo · "Brand Report"           │
│  Room: সুবহানাল্লাহি · Last 30 days ▾   │
├──────────────────────────────────────────┤
│ KPI grid (2×2)                           │
│  Total reach 24,380   ▲ 18%              │
│  Active members 1,820 ▲ 9%               │
│  Click-through 3,140  ▲ 22%              │
│  Sponsor visits 612   ▲ 5%               │
├──────────────────────────────────────────┤
│ Growth — area sparkline (30d)            │
│  + new joins / churned split below       │
├──────────────────────────────────────────┤
│ Audience: Age                            │
│  Stacked horizontal bars 13-17 … 55+     │
├──────────────────────────────────────────┤
│ Audience: Gender                         │
│  Donut + legend (M / F / Other)          │
├──────────────────────────────────────────┤
│ Top locations                            │
│  Country rows w/ flag, %, bar            │
│  Dhaka, Chattogram, Sylhet, KL, Riyadh   │
├──────────────────────────────────────────┤
│ Engagement funnel                        │
│  Impressions → Visits → Joined → Active  │
├──────────────────────────────────────────┤
│ Members: New vs Returning                │
│  Two stat cards + 7-day mini bars        │
├──────────────────────────────────────────┤
│ Footer: "Download PDF" · "Share report"  │
└──────────────────────────────────────────┘
```

## Sections in detail

1. **Report header** — navy band like the existing P3 hero. Sponsor logo, "Brand Report" eyebrow, room name in Bengali, date-range chip (`Last 30 days`).
2. **KPI grid** — 2×2 white cards. Each: label, big number, ▲/▼ delta vs previous period (emerald / rose). Metrics: Total reach, Active members, Click-through, Sponsor profile visits.
3. **Growth** — full-width card. Inline SVG area sparkline (30 points). Below: two pills `+412 new joins`, `−38 left`, plus net growth %.
4. **Age demographics** — horizontal stacked bars per bucket (13-17, 18-24, 25-34, 35-44, 45-54, 55+). Each bar shows % and count on hover-equivalent (static label on right).
5. **Gender** — SVG donut (Male / Female / Other) with legend and counts.
6. **Top locations** — list rows: flag emoji + city/country + % share + thin bar. Mix of BD cities + diaspora (KL, Riyadh, London).
7. **Engagement funnel** — 4 descending bars: Impressions → Room visits → Joined → Active 7d. Show absolute number + conversion % between steps.
8. **New vs Returning members** — two side-by-side stat cards with 7-day mini bar charts. Highlights retention story for the sponsor.
9. **Footer actions** — secondary "Download PDF" and primary navy "Share report" button. Non-functional (design exploration only).

## Visual rules

- Match existing aesthetic: white cards, `rounded-2xl`, soft shadow `shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]`, navy header band, amber/gold for sponsor accents, emerald for positive deltas, rose-500 for negative.
- All numbers are **mocked** inline constants — clearly fake but plausible (24,380 / 1,820 / etc.).
- All charts are **inline SVG** (sparkline, donut, bars) — no chart library. Keeps bundle small and matches the hand-crafted feel of the other variants.
- Bengali text reuses the `bn` class already in the file for room name.

## Files touched

- `src/components/SponsorCards.tsx` — add the new section + helper components (`SponsorReport`, `KpiCard`, `Sparkline`, `Donut`, `BarRow`, `FunnelStep`). Append to the existing default-exported page so it shows up at the bottom of the current preview at `/`.

No new routes, no new assets, no dependency changes, no backend.

## Out of scope

- Real data wiring, auth, role gating ("only app owner sees this").
- PDF export / share functionality.
- Multi-room selector, comparisons across rooms, time-range picker logic.
- Desktop/tablet layout — mobile phone-frame only, matching the rest of this exploration file.
