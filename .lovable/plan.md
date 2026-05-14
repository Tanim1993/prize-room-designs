## V2 — Flow-wise FE Design (Permanent Rooms + Seasons + Sponsor)

Add a **V1 / V2 toggle** at the very top of `SponsorCards.tsx`. V1 = current long exploration page (untouched). V2 = a clean, **flow-wise** screen layout that walks through the modality end-to-end. FE only, mocked data, no DB, no routes added.

### Toggle

Sticky bar at top of the page:
```text
[ V1 · Exploration ]  [ V2 · Flow-wise ▸ ]
```
`useState<'v1'|'v2'>('v2')` — V2 is the new default so user lands on it. V1 stays available so nothing is lost.

### V2 layout — grouped by user flow

Each flow = one horizontal row of `PhoneFrame`s, left → right = step 1 → step N. Section header above each row explains the flow in one line (EN + BN). Same `PhoneFrame` look as today.

**Flow 1 — Member discovers & joins a permanent room** (4 screens)
1. Home → "Permanent Rooms" rail with "Forever" badge
2. Room detail → hero shows lifetime member count + "Powered by" past sponsors strip
3. Join confirmation → "You're a forever member" with lifetime counter intro
4. Post-join home → joined room pinned, shows current season banner

**Flow 2 — Season is live (competition active)** (4 screens)
1. Room with **Season banner**: sponsor logo, prize, countdown ("ends in 3d 14h")
2. Tasbih counter screen → split counter: *Season count* (resets) vs *Lifetime count* (forever)
3. Season leaderboard → top 10 with prize tier badges + your rank
4. Season ended → winner announcement card + "Sponsor thanks you" + your final rank

**Flow 3 — Between seasons (room stays alive)** (3 screens)
1. Room detail in **dormant state** → "No active season" + "Next season starts in 6 days" teaser
2. Daily zikr still works → lifetime counter keeps incrementing, streak intact
3. "Past sponsors" wall → grid of previous brand logos + season recaps (social proof for next sponsor)

**Flow 4 — Admin creates a season on a permanent room** (4 screens)
1. Admin → list of permanent rooms with "Add season" button
2. Season form → start/end date, prize, sponsor pick, prize tiers
3. Sponsor calendar view → month grid showing booked vs free slots per room
4. Confirmation → "Season scheduled, members will be notified"

**Flow 5 — Sponsor brand journey** (3 screens)
1. Sponsor onboarding → pick aligned room (সুবহানাল্লাহি / দরুদ / ইস্তেগফার…) with audience snapshot per room
2. Booking screen → pick week, set prize, upload creative, see estimated reach
3. Live campaign dashboard → mini version of existing Brand Report (reuse `SponsorReport` component, scaled)

### Visual rules (consistent across flows)

- Reuse `PhoneFrame`, `NAVY`, `FEATURED_YELLOW`, existing `bn` Bengali class, lucide icons, inline SVG charts.
- Numbered step chip (`1`, `2`, `3`…) on top-left corner of each PhoneFrame so the flow direction is obvious.
- Faint connector arrow `→` between phones in a row.
- Section header format: `Flow N · {English title} — {Bengali subtitle}`.
- White cards, `rounded-2xl`, `shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]` — same as current.

### File changes

- `src/components/SponsorCards.tsx` only:
  - Wrap current return body in `{view === 'v1' && (<>…current JSX…</>)}`.
  - Add `{view === 'v2' && (<V2FlowDeck />)}` block.
  - Add sticky toggle bar at top of the outer container.
  - New components inside same file: `V2FlowDeck`, `FlowRow`, `StepFrame` (PhoneFrame + step number + arrow), and the ~18 small screen components (`F1S1`…`F5S3`). Keep each screen short (~40-80 lines) — they are visual mockups, not functional.

No new files, no new routes, no deps, no backend.

### Out of scope

- Any DB schema, Cloud enable, real navigation between screens, real countdown logic, role gating, real sponsor booking, PDF export.
