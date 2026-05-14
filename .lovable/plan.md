## Flow 0 — Channel → Room → Season (V2 hierarchy)

Add a new flow row to the existing "Leaderboard Flow — User Journey" area in `src/components/SponsorCards.tsx`. Pure FE mockups, no DB, no routes. Reuses `PhoneFrame`, `FlowChrome`, `TimeRangeChips`, `SessionTabs`, `NAVY`, lucide icons, Bengali `bn` class — same visual rules as F1–F6.

### Conceptual model the screens teach

```
Channel  =  one Zikr  (permanent, ~10 total)
   │
   ├── Global Public Room   (auto-created, everyone)
   ├── User-created Room    ("Family Circle")
   └── Community Room       ("Bangladesh Youth")
            │
            └── Season  (optional, time-bound, sponsored)
```

### 6 new phone screens (left → right)

**H1 — Home · Channel grid**
Grid of zikr channels: সুবহানাল্লাহি, আলহামদুলিল্লাহ, দরুদ, ইস্তেগফার, লা ইলাহা… Each tile shows lifetime global count + tiny "🔴 12 live rooms" chip. Tap one → H2.

**H2 — Channel detail · Subhanallah**
- Hero: channel name + global lifetime count + "Powered by past sponsors" strip
- Tabs: `Rooms` | `Global leaderboard`
- Rooms list:
  - 🌍 "Worldwide · Public" (auto, default-joined) — member count, "🔴 LIVE season" badge
  - 👨‍👩‍👧 "Family Circle" (private) — 6 members
  - 🇧🇩 "Bangladesh Youth" (community) — 1.2k members, "Season starts in 3d"
- "+ Create room" CTA at bottom

**H3 — Channel global leaderboard**
Shows lifetime ranking across ALL rooms in this channel. `TimeRangeChips` (All-time default). YOU card with combined channel total. Note line: *"Counts from every room you're in across this zikr."*

**H4 — Room detail · Worldwide (no active season)**
- Header: 🌍 Worldwide · Subhanallah
- Dormant-state card: "No active season · Organic mode"
- "Next sponsored season starts in 6d 4h" teaser
- Two stat tiles: *Your room count* / *Your channel count (lifetime)*
- Buttons: `Start zikr` · `Room leaderboard`

**H5 — Room detail · Family Circle (active season)**
- Header: 👨‍👩‍👧 Family Circle · Subhanallah · 6 members
- Season banner: sponsor logo + "100k Sprint · ৳15,000 prize · ends 3d 14h"
- `SessionTabs` (Session | Lifetime) — Session active
- Top 3 of the 6 members + YOU row
- Footnote: *"This room's count also adds to your Subhanallah channel total."*

**H6 — Create room sheet**
Bottom-sheet style inside phone: name input, privacy toggle (Private / Community / Public), zikr channel locked-pill ("Subhanallah · cannot change"), "Auto-create season later?" checkbox, "Create room" CTA. Helper note: *"V1: a room belongs to one zikr. Multi-zikr rooms coming later."*

### Where it goes in the file

Insert a new row **above** the existing "Leaderboard Flow — User Journey" F1–F6 row, with section header:
`Flow 0 · Channel → Room hierarchy — চ্যানেল → রুম কাঠামো`

Use the same `FlowChrome` wrapper and step-number chips (`0.1` … `0.6`) so it visually links to the F1–F6 flow that follows.

### Components added (all inside SponsorCards.tsx)

- `H1ChannelGrid`, `H2ChannelDetail`, `H3ChannelLB`, `H4RoomDormant`, `H5RoomLive`, `H6CreateRoom` — ~50–80 lines each
- Small shared mock arrays: `CHANNELS`, `ROOMS_OF_SUBHANALLAH`
- Reuse existing `TimeRangeChips`, `SessionTabs`, `FlowChrome`, `PhoneFrame`

### Out of scope
- DB, real navigation, real sponsor booking flow, multi-zikr rooms (explicitly noted as V2-later in H6 helper text), admin season-creation screens (already covered in earlier Flow 4 plan).
