## Flow 7 · Connect with Facebook — UI design variants

Add a new flow row to `src/components/SponsorCards.tsx` (same pattern as F1–F6). **Pure FE mockups** — no real FB SDK, no DB, no routes. Reuses `PhoneFrame`, `FlowChrome`, step chips, `NAVY`, Bengali `bn` class.

Three parallel variant tracks (one per connection model you asked about), so you can compare them side-by-side and pick which direction to ship.

---

### Variant A · Invite + Discover (recommended default)

`7A.1` → `7A.6` — six phone screens

- **A.1 Connect prompt** — Empty state with big FB button. Privacy line: "We only read your friend list — never post."
- **A.2 Friends on Zikr** — List of FB friends already in the app: avatar + name + tiny streak chip. Row actions: `Add` · `Invite to room`.
- **A.3 Invite non-app friends** — Grid of FB friends NOT on Zikr yet. Multi-select + "Send invites" via FB share sheet / WhatsApp / copy link.
- **A.4 Friends Leaderboard tab** — New tab next to Global/Room LB. Podium of YOUR friends only, time chips (Today/Week/Lifetime), YOU row pinned.
- **A.5 Room with friends inside** — Existing room card pattern + "3 of your FB friends are here" avatar-stack chip near top.
- **A.6 Post-invite success** — "5 invites sent · 2 friends joined this week" celebration card with re-share CTA.

---

### Variant B · Invite Only (lightest)

`7B.1` → `7B.4` — four phone screens

- **B.1 Share sheet entry** — Tap FB icon → bottom sheet with: FB share, WhatsApp, Messenger, Copy link, QR code.
- **B.2 Shareable invite card** — Beautiful preview of what gets shared (room name, prize, your avatar, "join me on Zikr"). Live OG-image style.
- **B.3 QR / link landing mock** — What the receiver sees: app install CTA + "Joined via [your name]" attribution.
- **B.4 Your invites dashboard** — List of invite links sent, click counts, who signed up. Simple, no friend graph needed.

No login, no permissions, no discovery — pure viral loop.

---

### Variant C · Full Social Competition (heaviest)

`7C.1` → `7C.6` — six phone screens

- **C.1 Connect prompt** — Same FB connect, but copy emphasizes "compete with friends".
- **C.2 Friends on Zikr + auto-follow** — All FB-app friends shown, auto-followed by default. Toggle unfollow per row.
- **C.3 Friends Leaderboard (full)** — Same as A.4 but richer: head-to-head stats, "you're ahead of 4 friends today", weekly winner badge.
- **C.4 1v1 Challenge setup** — Versus card: your avatar vs friend, pick zikr type, target count (100/500/1000), duration (1h/1d/3d), optional badge stake.
- **C.5 Live challenge tracker** — Two progress bars racing, live counts, time left, quick-reaction emojis ("🔥 Mashallah!").
- **C.6 Challenge result + share** — Winner badge, full stats breakdown, `Rematch` · `Share to FB` · `Challenge another friend` CTAs.

---

### Cross-variant design rules

- FB blue (#1877F2) used **only** as a single accent dot/icon — navy/gold stays dominant so it still feels like Zikr Rooms.
- Every frame wired with `useRegisterFrame`, `CopyButtons`, `ExportButton`, and `data-export-frame` so "Export all" picks them up automatically.
- Each variant gets its own `FlowChrome` section header: `Flow 7A · Connect FB — Invite + Discover`, `Flow 7B · Invite Only`, `Flow 7C · Full Social Competition`.
- New section inserted **above** existing Flow rows in `SponsorCards.tsx`.

---

### Out of scope

- Real Facebook Login / OAuth wiring, DB schema, push notifications, anti-cheat, backend aggregation. Pure design pass to pick a direction.

Ready to build all three variant tracks (16 phone screens total) into `SponsorCards.tsx`?
