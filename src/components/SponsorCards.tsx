import {
  Search,
  KeyRound,
  Plus,
  Star,
  Globe2,
  FolderOpen,
  Users,
  Flag,
  Timer,
  ChevronRight,
  Home,
  Trophy,
  User,
  Sparkles,
  ShieldCheck,
  Gift,
  Crown,
} from "lucide-react";
import sponsorLogo from "@/assets/sponsor-logo.png";

/* ------------------------------------------------------------------ */
/*  Shared bits matching the user's current Zikr Rooms app aesthetic  */
/* ------------------------------------------------------------------ */

const NAVY = "#1F3A5F"; // matches the screenshot header
const FEATURED_YELLOW = "#FFE9A8";

function PhoneFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
      <div className="w-[360px] overflow-hidden rounded-[28px] bg-white shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)] ring-1 ring-black/5">
        <AppHeader />
        <div className="space-y-4 bg-[#F4F6FA] px-4 pb-24 pt-4">{children}</div>
        <BottomNav />
      </div>
    </div>
  );
}

function AppHeader() {
  return (
    <div style={{ background: NAVY }} className="px-5 pb-0 pt-5 text-white">
      <div className="flex items-center justify-between">
        <div className="w-6" />
        <h1 className="text-[20px] font-bold tracking-tight">Zikr Rooms</h1>
        <div className="flex items-center gap-4">
          <Search className="h-5 w-5 opacity-90" />
          <KeyRound className="h-5 w-5 opacity-90" />
          <Plus className="h-5 w-5 opacity-90" />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-3 text-[13px]">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1.5 font-semibold">
            <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
            Featured
          </div>
          <div className="h-[3px] w-16 rounded-t-full bg-amber-300" />
        </div>
        <div className="flex flex-col items-center gap-2 opacity-80">
          <div className="flex items-center gap-1.5">
            <Globe2 className="h-4 w-4" />
            Public
          </div>
          <div className="h-[3px] w-16" />
        </div>
        <div className="flex flex-col items-center gap-2 opacity-80">
          <div className="flex items-center gap-1.5">
            <FolderOpen className="h-4 w-4" />
            My Rooms
          </div>
          <div className="h-[3px] w-16" />
        </div>
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <div className="flex items-center justify-around border-t border-black/5 bg-white py-3 text-[11px]">
      <div className="flex flex-col items-center gap-1" style={{ color: NAVY }}>
        <Home className="h-5 w-5" />
        <span className="font-semibold">Rooms</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-slate-400">
        <Trophy className="h-5 w-5" />
        <span>Leaderboard</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-slate-400">
        <User className="h-5 w-5" />
        <span>Profile</span>
      </div>
    </div>
  );
}

/* Existing-style room card, kept so context matches the user's app */
function NormalRoomCard() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#EEF1F6] text-[#C2410C]">
          <span className="text-lg">📿</span>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="bn truncate text-[15px] font-bold text-slate-900">
            আস্তাগফিরুল্লাহা ওয়া আতুবু ইলা…
          </h3>
          <span
            className="mt-1 inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold text-amber-900"
            style={{ background: FEATURED_YELLOW }}
          >
            <Star className="h-3 w-3 fill-amber-500 text-amber-500" /> Featured
          </span>
        </div>
        <ChevronRight className="h-5 w-5 text-slate-400" />
      </div>
      <p className="bn mt-3 line-clamp-2 text-[12.5px] leading-relaxed text-slate-600">
        আমি আল্লাহর ক্ষমা প্রার্থনা করছি এবং তাঁর কাছেই ফিরে আসছি। এই ইসতেগফারটি প্রতিদিন ৭০ থেকে একশবার পড়…
      </p>
      <div className="mt-3 flex items-center gap-4 text-[11.5px] text-slate-500">
        <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> 16</span>
        <span className="flex items-center gap-1"><Flag className="h-3.5 w-3.5" /> 100/day</span>
        <span className="flex items-center gap-1"><Timer className="h-3.5 w-3.5" /> 234 days left</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  NEW SPONSORED / PRIZE PATTERNS — designed to live in the same     */
/*  feed as the existing room cards, matching the navy/Featured look  */
/* ------------------------------------------------------------------ */

function StatRow() {
  return (
    <div className="flex items-center gap-4 text-[11.5px] text-slate-500">
      <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> 16</span>
      <span className="flex items-center gap-1"><Flag className="h-3.5 w-3.5" /> 100/day</span>
      <span className="flex items-center gap-1"><Timer className="h-3.5 w-3.5" /> 265 days left</span>
    </div>
  );
}

/* P1 — Subtle "Sponsored" chip + side prize column.
   Keeps the exact card shape of existing rooms; only adds a sponsor
   chip on top and a small prize panel on the right. Lowest-friction. */
function P1_SubtleChip() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
      <div className="mb-2 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
          <ShieldCheck className="h-3 w-3" /> Sponsored · Wizlife
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700">Prize Room</span>
      </div>
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#EEF1F6] text-lg">📿</div>
        <div className="min-w-0 flex-1">
          <h3 className="bn truncate text-[15px] font-bold text-slate-900">সুবহানাল্লাহি ওয়া বিহামদিহী</h3>
          <span className="mt-1 inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold text-amber-900" style={{ background: FEATURED_YELLOW }}>
            <Star className="h-3 w-3 fill-amber-500 text-amber-500" /> Featured
          </span>
        </div>
        <div className="rounded-lg bg-emerald-50 px-2.5 py-1.5 text-right">
          <div className="text-[9px] font-semibold uppercase tracking-wider text-emerald-700">Prize</div>
          <div className="text-[13px] font-extrabold text-emerald-800">৳40,000</div>
        </div>
      </div>
      <p className="bn mt-3 line-clamp-2 text-[12.5px] leading-relaxed text-slate-600">
        এই তাসবীহ পাঠে জান্নাতে খেজুর গাছ রোপিত হয়। প্রতিদিন ১০০ বার পড়ুন এবং পুরস্কার জিতে নিন।
      </p>
      <div className="mt-3 flex items-center justify-between">
        <StatRow />
        <ChevronRight className="h-5 w-5 text-slate-400" />
      </div>
    </div>
  );
}

/* P2 — Navy hero band on top of a normal card.
   A small navy strip with sponsor logo + prize sits flush on top of an
   otherwise standard room card — strong sponsor presence without
   bloating the card height. */
function P2_NavyBand() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_6px_18px_-10px_rgba(15,23,42,0.25)]">
      <div className="flex items-center justify-between px-4 py-2.5 text-white" style={{ background: NAVY }}>
        <div className="flex items-center gap-2">
          <img src={sponsorLogo} alt="" className="h-6 w-6 rounded-full object-cover ring-1 ring-white/30" />
          <div className="leading-tight">
            <div className="text-[9px] uppercase tracking-wider text-white/60">Sponsored by</div>
            <div className="text-[12px] font-bold">Wizlife</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-amber-300/95 px-2.5 py-1 text-[11px] font-extrabold text-amber-950">
          <Gift className="h-3.5 w-3.5" /> ৳40,000 Prize
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#EEF1F6] text-lg">📿</div>
          <div className="min-w-0 flex-1">
            <h3 className="bn truncate text-[15px] font-bold text-slate-900">সুবহানাল্লাহি ওয়া বিহামদিহী</h3>
            <span className="mt-1 inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold text-amber-900" style={{ background: FEATURED_YELLOW }}>
              <Star className="h-3 w-3 fill-amber-500 text-amber-500" /> Featured
            </span>
          </div>
          <ChevronRight className="h-5 w-5 text-slate-400" />
        </div>
        <p className="bn mt-3 line-clamp-2 text-[12.5px] leading-relaxed text-slate-600">
          প্রতিদিন ১০০ বার পড়ুন। শীর্ষ অংশগ্রহণকারীরা মাসিক পুরস্কার জিতবেন ইনশাআল্লাহ।
        </p>
        <div className="mt-3"><StatRow /></div>
      </div>
    </div>
  );
}

/* P3 — Full premium navy card with gold accents and CTA button.
   Highest-emphasis variant for the very top of Featured. */
function P3_PremiumNavy() {
  return (
    <div className="relative overflow-hidden rounded-2xl p-4 text-white shadow-[0_14px_34px_-14px_rgba(15,58,95,0.55)]"
      style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #16294A 100%)` }}>
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-300/15 blur-2xl" />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={sponsorLogo} alt="" className="h-7 w-7 rounded-full object-cover ring-1 ring-white/25" />
          <div className="leading-tight">
            <div className="text-[9px] uppercase tracking-wider text-white/55">Sponsored</div>
            <div className="text-[12px] font-bold">Wizlife</div>
          </div>
          <ShieldCheck className="ml-1 h-3.5 w-3.5 text-amber-300" />
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-amber-200 ring-1 ring-amber-300/30">
          <Crown className="h-3 w-3" /> Prize Room
        </span>
      </div>

      <h3 className="bn mt-3 text-[17px] font-bold leading-snug">সুবহানাল্লাহি ওয়া বিহামদিহী</h3>
      <p className="bn mt-1 line-clamp-2 text-[12.5px] leading-relaxed text-white/70">
        এই তাসবীহ পাঠে জান্নাতে খেজুর গাছ রোপিত হয়। অংশ নিয়ে পুরস্কার জিতুন।
      </p>

      <div className="mt-3 flex items-end justify-between rounded-xl bg-white/[0.06] px-3 py-2.5 ring-1 ring-white/10">
        <div>
          <div className="text-[9px] uppercase tracking-wider text-white/55">Total Prize</div>
          <div className="text-[20px] font-extrabold leading-none text-amber-300">৳40,000</div>
        </div>
        <button className="rounded-lg bg-amber-300 px-3.5 py-2 text-[12px] font-extrabold text-amber-950 shadow-sm">
          Join Now
        </button>
      </div>

      <div className="mt-3 flex items-center gap-4 text-[11px] text-white/65">
        <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> 16</span>
        <span className="flex items-center gap-1"><Flag className="h-3.5 w-3.5" /> 100/day</span>
        <span className="flex items-center gap-1"><Timer className="h-3.5 w-3.5" /> 265d left</span>
      </div>
    </div>
  );
}

/* P4 — Side ribbon style.
   A vertical gold ribbon on the left calls out the prize, body stays
   identical to a normal card. Compact, scannable in long lists. */
function P4_SideRibbon() {
  return (
    <div className="flex overflow-hidden rounded-2xl bg-white shadow-[0_4px_14px_-8px_rgba(15,23,42,0.2)]">
      <div className="flex w-12 shrink-0 flex-col items-center justify-center gap-1 bg-gradient-to-b from-amber-300 to-amber-400 py-3 text-amber-950">
        <Gift className="h-4 w-4" />
        <div className="text-[9px] font-bold uppercase tracking-wider">Prize</div>
        <div className="text-[12px] font-extrabold leading-none">৳40k</div>
      </div>
      <div className="min-w-0 flex-1 p-4">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            <img src={sponsorLogo} alt="" className="h-3.5 w-3.5 rounded-full object-cover" />
            Sponsored · Wizlife
          </span>
          <ChevronRight className="h-4 w-4 text-slate-400" />
        </div>
        <h3 className="bn truncate text-[15px] font-bold text-slate-900">সুবহানাল্লাহি ওয়া বিহামদিহী</h3>
        <p className="bn mt-1 line-clamp-2 text-[12.5px] leading-relaxed text-slate-600">
          প্রতিদিন ১০০ বার পড়ুন এবং পুরস্কার জিতুন ইনশাআল্লাহ।
        </p>
        <div className="mt-2.5"><StatRow /></div>
      </div>
    </div>
  );
}

/* P5 — Soft cream prize footer.
   Standard card body, with a gentle cream/gold footer band that holds
   prize info + CTA. Feels like the existing app, just dressed up. */
function P5_PrizeFooter() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            <img src={sponsorLogo} alt="" className="h-3.5 w-3.5 rounded-full object-cover" />
            Sponsored · Wizlife
            <ShieldCheck className="h-3 w-3 text-emerald-600" />
          </span>
          <span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold text-amber-900" style={{ background: FEATURED_YELLOW }}>
            <Star className="h-3 w-3 fill-amber-500 text-amber-500" /> Featured
          </span>
        </div>
        <div className="mt-3 flex items-start gap-3">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#EEF1F6] text-lg">📿</div>
          <div className="min-w-0 flex-1">
            <h3 className="bn truncate text-[15px] font-bold text-slate-900">সুবহানাল্লাহি ওয়া বিহামদিহী</h3>
            <p className="bn mt-1 line-clamp-2 text-[12.5px] leading-relaxed text-slate-600">
              এই তাসবীহ পাঠে জান্নাতে খেজুর গাছ রোপিত হয়।
            </p>
          </div>
        </div>
        <div className="mt-3"><StatRow /></div>
      </div>
      <div className="flex items-center justify-between border-t border-amber-100 bg-gradient-to-r from-amber-50 to-amber-100/60 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-amber-300 text-amber-950">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="leading-tight">
            <div className="text-[9px] font-semibold uppercase tracking-wider text-amber-800">Win up to</div>
            <div className="text-[15px] font-extrabold text-amber-900">৳40,000 Prize</div>
          </div>
        </div>
        <button className="rounded-lg px-3 py-1.5 text-[12px] font-bold text-white" style={{ background: NAVY }}>
          Join
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  COMPANY BANNER PATTERNS — banners shown ABOVE / BETWEEN room      */
/*  cards (think ad slot inside the Rooms feed).                      */
/* ------------------------------------------------------------------ */

/* B1 — Full-width hero banner above the room list.
   A premium navy banner with sponsor logo, prize headline, and CTA
   sitting above the Featured rooms — clearly an "ad slot". */
function B1_HeroBanner() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-4 text-white shadow-[0_14px_34px_-14px_rgba(15,58,95,0.55)]"
      style={{ background: `linear-gradient(120deg, ${NAVY} 0%, #2B4D78 60%, #16294A 100%)` }}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-300/20 blur-2xl" />
      <div className="absolute right-3 top-3 rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/70 ring-1 ring-white/15">
        Ad
      </div>
      <div className="flex items-center gap-3">
        <img src={sponsorLogo} alt="" className="h-10 w-10 rounded-xl object-cover ring-1 ring-white/25" />
        <div className="leading-tight">
          <div className="text-[10px] uppercase tracking-wider text-white/60">Sponsored by</div>
          <div className="text-[14px] font-extrabold">Wizlife</div>
        </div>
      </div>
      <div className="mt-3">
        <div className="text-[11px] uppercase tracking-wider text-amber-200/90">Monthly Zikr Reward</div>
        <h3 className="mt-0.5 text-[19px] font-extrabold leading-tight">
          Win up to <span className="text-amber-300">৳40,000</span>
        </h3>
        <p className="mt-1 text-[12px] leading-relaxed text-white/70">
          Join the Wizlife sponsored rooms below and earn rewards.
        </p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-[10.5px] text-white/65">
          <ShieldCheck className="h-3.5 w-3.5 text-amber-300" /> Verified sponsor
        </div>
        <button className="rounded-lg bg-amber-300 px-3.5 py-1.5 text-[12px] font-extrabold text-amber-950">
          Learn more
        </button>
      </div>
    </div>
  );
}

/* B2 — Slider / carousel company banner with dots.
   Mimics a swipeable ad slot — multiple sponsor cards, pager dots. */
function B2_SliderBanner() {
  return (
    <div className="rounded-2xl bg-white p-3 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
      <div className="mb-2 flex items-center justify-between px-1">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
          Sponsored
        </span>
        <span className="text-[10px] text-slate-400">1 / 3</span>
      </div>
      <div className="flex gap-2 overflow-hidden">
        {/* Active slide */}
        <div
          className="relative w-[88%] shrink-0 overflow-hidden rounded-xl p-3 text-white"
          style={{ background: `linear-gradient(120deg, ${NAVY}, #2B4D78)` }}
        >
          <div className="flex items-center gap-2">
            <img src={sponsorLogo} alt="" className="h-8 w-8 rounded-lg object-cover ring-1 ring-white/25" />
            <div className="leading-tight">
              <div className="text-[9px] uppercase tracking-wider text-white/60">Wizlife presents</div>
              <div className="text-[13px] font-bold">Ramadan Zikr Challenge</div>
            </div>
          </div>
          <div className="mt-2 flex items-end justify-between">
            <div>
              <div className="text-[9px] uppercase tracking-wider text-white/55">Total Prize</div>
              <div className="text-[16px] font-extrabold text-amber-300">৳40,000</div>
            </div>
            <button className="rounded-md bg-amber-300 px-2.5 py-1 text-[11px] font-extrabold text-amber-950">
              Join
            </button>
          </div>
        </div>
        {/* Peek of next */}
        <div className="w-[12%] shrink-0 rounded-xl bg-emerald-100" />
      </div>
      <div className="mt-2.5 flex items-center justify-center gap-1.5">
        <span className="h-1.5 w-4 rounded-full bg-slate-800" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
      </div>
    </div>
  );
}

/* B3 — Compact inline banner placed between rooms.
   Looks like a horizontal sponsor strip slotted between cards in feed. */
function B3_InlineStrip() {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)] ring-1 ring-amber-100">
      <img src={sponsorLogo} alt="" className="h-11 w-11 shrink-0 rounded-xl object-cover ring-1 ring-amber-200" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">Sponsored</span>
          <ShieldCheck className="h-3 w-3 text-emerald-600" />
        </div>
        <div className="truncate text-[13px] font-bold text-slate-900">
          Wizlife · Win <span className="text-emerald-700">৳40,000</span> this month
        </div>
        <div className="truncate text-[11px] text-slate-500">Tap to explore prize rooms</div>
      </div>
      <button
        className="shrink-0 rounded-lg px-3 py-1.5 text-[11.5px] font-bold text-white"
        style={{ background: NAVY }}
      >
        Visit
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page — show phone mockups side-by-side for comparison             */
/* ------------------------------------------------------------------ */

type Variant = {
  label: string;
  desc: string;
  node?: React.ReactNode;
  // banner variants render the banner ABOVE the room list instead of as a card
  bannerTop?: React.ReactNode;
  bannerMid?: React.ReactNode;
};

const VARIANTS: Variant[] = [
  { label: "Variant 1", desc: "Subtle sponsor chip + side prize", node: <P1_SubtleChip /> },
  { label: "Variant 2", desc: "Navy sponsor band on top", node: <P2_NavyBand /> },
  { label: "Variant 3", desc: "Premium navy hero w/ CTA", node: <P3_PremiumNavy /> },
  { label: "Variant 4", desc: "Gold side ribbon", node: <P4_SideRibbon /> },
  { label: "Variant 5", desc: "Cream prize footer + CTA", node: <P5_PrizeFooter /> },
  { label: "Variant 6", desc: "Company hero banner (top)", bannerTop: <B1_HeroBanner /> },
  { label: "Variant 7", desc: "Sponsor slider banner", bannerTop: <B2_SliderBanner /> },
  { label: "Variant 8", desc: "Inline sponsor strip (between rooms)", bannerMid: <B3_InlineStrip /> },
];

export default function SponsorCards() {
  return (
    <div className="min-h-screen bg-[#EEF2F7] px-6 py-10">
      <div className="mx-auto max-w-[1800px]">
        <header className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Sponsored / Prize Room — In-App Patterns</h1>
          <p className="mt-1 text-sm text-slate-500">
            Five sponsor + prize card patterns shown inside your real Zikr Rooms feed for direct comparison.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-8">
          {VARIANTS.map((v) => (
            <PhoneFrame key={v.label} label={`${v.label} · ${v.desc}`}>
              {v.bannerTop}
              {v.node}
              <NormalRoomCard />
              {v.bannerMid}
              <NormalRoomCard />
            </PhoneFrame>
          ))}
        </div>
      </div>
    </div>
  );
}
