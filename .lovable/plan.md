## What you're confused about — clarified first

Yes, your intuition is right. The sponsor banner on Home is just a **doorway**. Tapping it should not jump straight into a single room — it should open a **Sponsor Channel page** (like a YouTube channel) where one sponsor (e.g. Wizlife) hosts:

- a **cover banner** + **logo/avatar**
- **bio / about** (who they are, verified badge, website, social)
- **stats** (followers, total prize given, active rooms)
- a **Follow / Subscribe** button
- **tabs**: Active Rooms · Upcoming · Past Winners · About
- a **list/grid of all rooms** sponsored by them (some live, some scheduled, some ended)

This makes the sponsor a long-term brand presence in the app, not a one-shot ad.

## New section to add: "Sponsor Channel"

Add a new section in `src/components/SponsorCards.tsx` titled **"Sponsor Channel / Profile"** with **3 variants**, each rendered inside a `DetailFrame` (mobile phone mock, same pattern as Home/Leaderboard sections).

### Variant 1 — YouTube-style Channel
- Wide cover banner (16:9) at top
- Circular sponsor logo overlapping banner bottom-left
- Name + verified tick + handle (`@wizlife`)
- "1.2M followers · 24 rooms · ৳12L prize given"
- Primary **Subscribe** (filled) + **Share** (outline) buttons
- Short bio with "...more" expand
- Sticky tabs: **Active · Upcoming · Past · About**
- Active tab content: vertical list of room cards (thumbnail, title, prize, joined count, "Live" pulse dot or countdown)

### Variant 2 — Premium Brand Page (navy/gold, matches your app)
- Navy header with sponsor logo center + "PRESENTED BY" kicker
- Gradient hero card showing **flagship room** ("Ramadan Zikr Challenge · ৳40,000")
- Stat strip: Active Rooms · Total Prize · Winners Crowned
- Horizontal **Rooms carousel** (snap cards)
- **Past Winners wall** (avatar grid with month labels)
- Floating "Follow Sponsor" CTA

### Variant 3 — Magazine / Editorial Profile
- Full-bleed banner with overlay gradient + sponsor name in serif display type
- Two-column meta strip: left = bio paragraph, right = quick facts (founded, location, website link)
- Section: **"Now Running"** — 1 large featured room card
- Section: **"More Rooms by Wizlife"** — 2-column grid of compact room tiles with status pills (Live / Starts in 3d / Ended)
- Section: **"Hall of Champions"** — winners with prize won
- Footer: social icons (FB, IG, YT, Web)

## Fields each sponsor profile should support
(Drives the data model the admin variant should later expose)

- Cover banner image, logo/avatar, display name, handle, verified flag
- Short bio, long description, founded year, location, website, socials
- Follower count (derived), total prize awarded (derived), rooms count (derived)
- Room list with: status (live/upcoming/ended), title, prize, joined, starts/ends at
- Past winners list (user, room, prize, date)

## Implementation notes
- All new code appended to `src/components/SponsorCards.tsx`
- Add a new section block in the default export between the Home section and Admin/Leaderboard sections, titled **"Sponsor Channel / Profile (variants)"**
- Reuse existing helpers: `PhoneFrame` style via `DetailFrame`, `BANNERS`, `sponsorLogo`, `BannerSlider`, navy/yellow tokens
- Reuse `LB_PLAYERS` for winner avatars; create a small local `SPONSOR_ROOMS` array (4–5 rooms with mixed status) inside the file
- No backend, no routing, no business logic — pure presentational variants, same approach as previous variant sections
- No new dependencies

## Out of scope (will not do in this turn)
- Wiring the Home banner tap → channel page
- Admin "Create Sponsor Profile" form (can follow in a later step if you like the variants)
- Real follower/subscribe logic
