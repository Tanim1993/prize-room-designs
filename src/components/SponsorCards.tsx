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
  Bell,
  Moon,
  Sun,
  Compass,
  BookOpen,
  Heart,
  Award,
  TrendingUp,
} from "lucide-react";
import sponsorLogo from "@/assets/sponsor-logo.png";
import bannerBaby from "@/assets/banner-baby.png";
import bannerBooks from "@/assets/banner-books.png";
import { useEffect, useState } from "react";

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

/* ------------------------------------------------------------------ */
/*  AUTO-SLIDING BANNER + ROOM INFO COMBOS                            */
/* ------------------------------------------------------------------ */

const BANNERS = [bannerBaby, bannerBooks, sponsorLogo];

function useAutoSlide(length: number, ms = 2500) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % length), ms);
    return () => clearInterval(t);
  }, [length, ms]);
  return [i, setI] as const;
}

function BannerSlider({ rounded = "rounded-xl", aspect = "aspect-[16/9]" }: { rounded?: string; aspect?: string }) {
  const [i] = useAutoSlide(BANNERS.length);
  return (
    <div className={`relative ${aspect} w-full overflow-hidden ${rounded} bg-slate-100`}>
      <div
        className="flex h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {BANNERS.map((src, idx) => (
          <img key={idx} src={src} alt="" className="h-full w-full shrink-0 object-cover" />
        ))}
      </div>
      <div className="absolute left-2 top-2 rounded-full bg-black/45 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
        Sponsored
      </div>
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
        {BANNERS.map((_, idx) => (
          <span
            key={idx}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-4 bg-white" : "w-1.5 bg-white/55"}`}
          />
        ))}
      </div>
    </div>
  );
}

/* B4 — Banner slider sits INSIDE the room card, above room info. */
function B4_BannerInsideRoom() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_6px_18px_-10px_rgba(15,23,42,0.25)]">
      <div className="p-2 pb-0">
        <BannerSlider />
      </div>
      <div className="p-4 pt-3">
        <div className="flex items-start gap-3">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#EEF1F6] text-lg">📿</div>
          <div className="min-w-0 flex-1">
            <h3 className="bn truncate text-[15px] font-bold text-slate-900">সুবহানাল্লাহি ওয়া বিহামদিহী</h3>
            <span className="mt-1 inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold text-amber-900" style={{ background: FEATURED_YELLOW }}>
              <Star className="h-3 w-3 fill-amber-500 text-amber-500" /> Featured · ৳40,000 Prize
            </span>
          </div>
          <ChevronRight className="h-5 w-5 text-slate-400" />
        </div>
        <div className="mt-3"><StatRow /></div>
      </div>
    </div>
  );
}

/* B5 — Room info on top, banner slider below (inside same card). */
function B5_RoomThenBanner() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_6px_18px_-10px_rgba(15,23,42,0.25)]">
      <div className="p-4 pb-3">
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
        <p className="bn mt-2 line-clamp-2 text-[12.5px] leading-relaxed text-slate-600">
          প্রতিদিন ১০০ বার পড়ুন এবং পুরস্কার জিতুন ইনশাআল্লাহ।
        </p>
        <div className="mt-2.5"><StatRow /></div>
      </div>
      <div className="px-2 pb-2">
        <BannerSlider rounded="rounded-xl" aspect="aspect-[16/8]" />
      </div>
    </div>
  );
}

/* B6 — Sponsor header strip + banner slider + room info, all bundled.
   Premium "prize room" card with full sponsor presence. */
function B6_FullSponsorRoom() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_24px_-12px_rgba(15,23,42,0.3)] ring-1 ring-slate-100">
      <div className="flex items-center justify-between px-3 py-2 text-white" style={{ background: NAVY }}>
        <div className="flex items-center gap-2">
          <img src={sponsorLogo} alt="" className="h-6 w-6 rounded-full object-cover ring-1 ring-white/30" />
          <div className="leading-tight">
            <div className="text-[9px] uppercase tracking-wider text-white/60">Sponsored by</div>
            <div className="text-[12px] font-bold">Wizlife</div>
          </div>
          <ShieldCheck className="ml-1 h-3.5 w-3.5 text-amber-300" />
        </div>
        <span className="rounded-full bg-amber-300 px-2 py-0.5 text-[10px] font-extrabold text-amber-950">
          ৳40,000
        </span>
      </div>
      <div className="p-2 pb-0">
        <BannerSlider aspect="aspect-[16/8]" />
      </div>
      <div className="p-4 pt-3">
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#EEF1F6] text-lg">📿</div>
          <div className="min-w-0 flex-1">
            <h3 className="bn truncate text-[15px] font-bold text-slate-900">সুবহানাল্লাহি ওয়া বিহামদিহী</h3>
            <p className="bn mt-0.5 line-clamp-1 text-[12px] text-slate-500">প্রতিদিন ১০০ বার পড়ুন</p>
          </div>
          <button className="shrink-0 rounded-lg px-3 py-1.5 text-[11.5px] font-bold text-white" style={{ background: NAVY }}>
            Join
          </button>
        </div>
        <div className="mt-3"><StatRow /></div>
      </div>
    </div>
  );
}

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
  { label: "Variant 9", desc: "Banner slider INSIDE room (top)", node: <B4_BannerInsideRoom /> },
  { label: "Variant 10", desc: "Room info, then banner slider", node: <B5_RoomThenBanner /> },
  { label: "Variant 11", desc: "Sponsor header + slider + room", node: <B6_FullSponsorRoom /> },
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

        <header className="mt-20 mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Room Details Page — Sponsor Patterns</h1>
          <p className="mt-1 text-sm text-slate-500">
            Three approaches to surface sponsor branding, ads & sliders inside the room detail screen.
          </p>
        </header>
        <div className="flex flex-wrap justify-center gap-8">
          <DetailFrame label="Variant A · Sponsor banner under header"><RoomDetailA /></DetailFrame>
          <DetailFrame label="Variant B · Sponsor strip + slider before rewards"><RoomDetailB /></DetailFrame>
          <DetailFrame label="Variant C · Sticky sponsor footer + inline ad"><RoomDetailC /></DetailFrame>
        </div>

        <header className="mt-20 mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Home Page — Design Variants</h1>
          <p className="mt-1 text-sm text-slate-500">
            Three home screen directions: gamified dark, calm minimal, and modern card stack.
          </p>
        </header>
        <div className="flex flex-wrap justify-center gap-8">
          <DetailFrame label="Home 1 · Gamified Dark"><HomeV1 /></DetailFrame>
          <DetailFrame label="Home 2 · Calm Minimal Light"><HomeV2 /></DetailFrame>
          <DetailFrame label="Home 3 · Modern Card Stack"><HomeV3 /></DetailFrame>
          <DetailFrame label="Home 4 · Editorial Serif (no ads)"><HomeV4 /></DetailFrame>
          <DetailFrame label="Home 5 · Mosque Hero Gradient"><HomeV5 /></DetailFrame>
          <DetailFrame label="Home 6 · Bento Grid"><HomeV6 /></DetailFrame>
          <DetailFrame label="Home 7 · Focused Streak"><HomeV7 /></DetailFrame>
        </div>

        <header className="mt-20 mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Admin · Create Featured Room</h1>
          <p className="mt-1 text-sm text-slate-500">
            Redesigned admin flow — all required fields organised into clear sections with a live preview.
          </p>
        </header>
        <AdminCreateRoom />
      </div>
    </div>
  );
}

/* ================================================================== */
/*  ROOM DETAILS PAGE VARIANTS                                        */
/* ================================================================== */

function DetailFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
      <div className="w-[360px] overflow-hidden rounded-[28px] bg-[#F4F6FA] shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)] ring-1 ring-black/5">
        {children}
      </div>
    </div>
  );
}

function DetailHeader() {
  return (
    <div style={{ background: NAVY }} className="px-5 pb-5 pt-4 text-white">
      <div className="flex items-center justify-between text-[11px]">
        <ChevronRight className="h-4 w-4 rotate-180" />
        <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px]">Public</span>
      </div>
      <div className="mt-2 text-center">
        <div className="bn text-[26px] font-bold leading-tight">أَسْتَغْفِرُ اللّٰه</div>
        <div className="bn mt-1 text-[11px] text-white/70">আমি আল্লাহর কাছে ক্ষমা চাই</div>
      </div>
    </div>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl bg-white p-4 shadow-[0_2px_8px_-4px_rgba(15,23,42,0.1)] ${className}`}>
      {children}
    </div>
  );
}

function StartButton() {
  return (
    <button className="flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-[14px] font-bold text-white" style={{ background: NAVY }}>
      <span className="grid h-5 w-5 place-items-center rounded-full bg-white/20 text-[10px]">▶</span>
      Start Counting Zikr
    </button>
  );
}

function WeeklyRewards() {
  const rows = [
    { p: "1st", v: "৳50,000", c: "text-amber-600", dot: "bg-amber-400" },
    { p: "2nd", v: "৳30,000", c: "text-slate-500", dot: "bg-slate-400" },
    { p: "3rd", v: "৳10,000", c: "text-orange-700", dot: "bg-orange-500" },
  ];
  return (
    <Section>
      <div className="mb-2 flex items-center gap-2 text-[14px] font-bold text-slate-900">
        <Trophy className="h-4 w-4 text-amber-500" /> Weekly Rewards
      </div>
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div key={r.p} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-[12.5px]">
            <span className="text-slate-700">{r.p}</span>
            <span className={`flex items-center gap-1.5 font-bold ${r.c}`}>
              <span className={`h-2 w-2 rounded-full ${r.dot}`} /> {r.v}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function AboutRoom() {
  return (
    <Section>
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-semibold text-slate-900">About this room</span>
        <ChevronRight className="h-4 w-4 text-slate-400" />
      </div>
      <div className="mt-2 flex items-center gap-4 text-[11.5px] text-slate-500">
        <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> 16 members</span>
        <span className="flex items-center gap-1"><Timer className="h-3.5 w-3.5" /> 20 days ago</span>
      </div>
      <p className="bn mt-2 text-[12.5px] text-slate-600">আমি আল্লাহর কাছে ক্ষমা চাই</p>
    </Section>
  );
}

function YourProgress() {
  return (
    <Section>
      <div className="text-[12px] text-slate-500">Your Progress</div>
      <div className="mt-1 text-[22px] font-extrabold text-slate-900">
        0 <span className="text-[12px] font-medium text-slate-400">of 100</span>
      </div>
      <div className="mt-2 h-1 rounded-full bg-slate-100"><div className="h-full w-0 rounded-full bg-emerald-500" /></div>
      <div className="mt-1 text-[10.5px] text-slate-400">0.0% Complete</div>
    </Section>
  );
}

/* ---------- Variant A: Sponsor banner directly under header ---------- */
function RoomDetailA() {
  return (
    <>
      <DetailHeader />
      <div className="space-y-3 px-3 pb-6 pt-3">
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
          <div className="flex items-center justify-between px-3 py-2 text-white" style={{ background: NAVY }}>
            <div className="flex items-center gap-2">
              <img src={sponsorLogo} alt="" className="h-6 w-6 rounded-full ring-1 ring-white/30" />
              <div className="leading-tight">
                <div className="text-[9px] uppercase tracking-wider text-white/60">Sponsored by</div>
                <div className="text-[12px] font-bold">Wizlife</div>
              </div>
            </div>
            <span className="rounded-full bg-amber-300 px-2 py-0.5 text-[10px] font-extrabold text-amber-950">
              ৳90k Pool
            </span>
          </div>
          <BannerSlider aspect="aspect-[16/8]" rounded="rounded-none" />
        </div>
        <AboutRoom />
        <StartButton />
        <YourProgress />
        <WeeklyRewards />
      </div>
    </>
  );
}

/* ---------- Variant B: Sponsor strip + slider before rewards ---------- */
function RoomDetailB() {
  return (
    <>
      <DetailHeader />
      <div className="space-y-3 px-3 pb-6 pt-3">
        <AboutRoom />
        <StartButton />
        <YourProgress />
        <div className="overflow-hidden rounded-2xl bg-white p-3 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={sponsorLogo} alt="" className="h-7 w-7 rounded-lg ring-1 ring-amber-200" />
              <div className="leading-tight">
                <div className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">Rewards powered by</div>
                <div className="flex items-center gap-1 text-[12.5px] font-bold text-slate-900">
                  Wizlife <ShieldCheck className="h-3 w-3 text-emerald-600" />
                </div>
              </div>
            </div>
            <button className="rounded-md bg-slate-900 px-2.5 py-1 text-[10.5px] font-bold text-white">
              Visit
            </button>
          </div>
          <BannerSlider aspect="aspect-[16/8]" />
        </div>
        <WeeklyRewards />
      </div>
    </>
  );
}

/* ---------- Variant C: Inline native ad + sticky sponsor footer ---------- */
function RoomDetailC() {
  return (
    <>
      <DetailHeader />
      <div className="relative space-y-3 px-3 pb-3 pt-3">
        <AboutRoom />
        <StartButton />
        <YourProgress />
        <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)] ring-1 ring-amber-100">
          <img src={bannerBaby} alt="" className="h-14 w-14 shrink-0 rounded-xl object-cover" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] font-semibold uppercase tracking-wider text-amber-700">Sponsored Ad</span>
              <ShieldCheck className="h-3 w-3 text-emerald-600" />
            </div>
            <div className="bn truncate text-[13px] font-bold text-slate-900">১১ হাজার+ বেবি কেয়ার প্রোডাক্ট</div>
            <div className="truncate text-[11px] text-slate-500">Rokomari · Tap to shop</div>
          </div>
          <ChevronRight className="h-4 w-4 text-slate-400" />
        </div>
        <WeeklyRewards />
        <div className="flex items-center gap-2 rounded-2xl border border-amber-100 bg-white px-4 py-3">
          <img src={sponsorLogo} alt="" className="h-8 w-8 rounded-lg ring-1 ring-amber-200" />
          <div className="min-w-0 flex-1 leading-tight">
            <div className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">Sponsored by</div>
            <div className="truncate text-[12px] font-bold text-slate-900">
              Wizlife · Win up to ৳50,000 weekly
            </div>
          </div>
          <button className="shrink-0 rounded-lg px-3 py-1.5 text-[11.5px] font-bold text-white" style={{ background: NAVY }}>
            Learn
          </button>
        </div>
      </div>
    </>
  );
}

/* ================================================================== */
/*  HOME PAGE VARIANTS                                                */
/* ================================================================== */

const PRAYERS = [
  { name: "Fajr", time: "4:15 AM" },
  { name: "Dhuhr", time: "11:57 AM", active: true },
  { name: "Asr", time: "4:33 PM" },
  { name: "Maghrib", time: "6:23 PM" },
  { name: "Isha", time: "7:39 PM" },
];

function HomeBottomNav({ tone = "light" }: { tone?: "light" | "dark" }) {
  const cls = tone === "dark"
    ? "border-white/10 bg-[#0F1F3A] text-white/60"
    : "border-black/5 bg-white text-slate-400";
  const active = tone === "dark" ? "text-amber-300" : "text-[" + NAVY + "]";
  return (
    <div className={`flex items-center justify-around border-t py-3 text-[11px] ${cls}`}>
      <div className={`flex flex-col items-center gap-1 ${tone === "dark" ? "text-amber-300" : ""}`} style={tone !== "dark" ? { color: NAVY } : undefined}>
        <Home className="h-5 w-5" /><span className="font-semibold">Home</span>
      </div>
      <div className="flex flex-col items-center gap-1"><Compass className="h-5 w-5" /><span>Rooms</span></div>
      <div className="flex flex-col items-center gap-1"><Trophy className="h-5 w-5" /><span>Leaderboard</span></div>
      <div className="flex flex-col items-center gap-1"><User className="h-5 w-5" /><span>Profile</span></div>
    </div>
  );
}

/* ---------------- Home V1 — Gamified Dark ---------------- */
function HomeV1() {
  return (
    <div className="bg-[#0B1B36] text-white">
      <div className="space-y-4 px-4 pb-6 pt-5">
        {/* Profile/level card */}
        <div className="rounded-2xl bg-gradient-to-br from-[#16305A] to-[#0E2244] p-3 ring-1 ring-white/10">
          <div className="flex items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-amber-300 text-[#0B1B36] font-extrabold ring-2 ring-amber-400/60">
              KT
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[14px] font-bold">Khaled TAMIN</div>
              <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/70">
                🇧🇩 Level 19
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-amber-300 to-amber-500" />
              </div>
              <div className="mt-1 text-[10px] text-white/55">312 / 400 XP</div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="flex items-center justify-center gap-1.5 rounded-lg bg-white/5 px-2 py-1.5 text-[11px] font-semibold ring-1 ring-white/10">
              <Trophy className="h-3.5 w-3.5 text-amber-300" /> 318.2M
            </div>
            <div className="flex items-center justify-center gap-1.5 rounded-lg bg-white/5 px-2 py-1.5 text-[11px] font-semibold ring-1 ring-white/10">
              <Award className="h-3.5 w-3.5 text-amber-300" /> Leaderboard
            </div>
          </div>
        </div>

        {/* Prayer times */}
        <div className="rounded-2xl bg-[#13264A] p-3 ring-1 ring-white/10">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[13px] font-bold">
              <Moon className="h-4 w-4 text-amber-300" /> Prayer Times
            </div>
            <button className="text-[10px] text-white/55">Hide</button>
          </div>
          <div className="space-y-1.5">
            {PRAYERS.map((p) => (
              <div key={p.name} className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 text-[12px] ${p.active ? "bg-amber-300/15 ring-1 ring-amber-300/30" : ""}`}>
                <span className={p.active ? "font-bold text-amber-200" : "text-white/80"}>• {p.name}</span>
                <span className={`font-semibold ${p.active ? "text-amber-200" : "text-white/60"}`}>
                  {p.active && <Sun className="mr-1 inline h-3 w-3" />}{p.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { i: <BookOpen className="h-4 w-4" />, l: "My Rooms" },
            { i: <Search className="h-4 w-4" />, l: "Explore" },
            { i: <Star className="h-4 w-4" />, l: "Featured" },
          ].map((x) => (
            <button key={x.l} className="flex flex-col items-center gap-1.5 rounded-xl bg-[#13264A] py-3 text-[11px] font-semibold ring-1 ring-white/10">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-amber-300/15 text-amber-300">{x.i}</span>
              {x.l}
            </button>
          ))}
        </div>

        {/* Create / Join */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-2xl bg-gradient-to-br from-[#16305A] to-[#0E2244] p-3 ring-1 ring-white/10">
            <div className="flex items-center gap-1.5 text-[12px] font-bold"><Plus className="h-3.5 w-3.5" /> Create Room</div>
            <div className="mt-0.5 text-[10px] text-white/60">Start a Zikr session</div>
            <button className="mt-2 w-full rounded-lg bg-amber-300 py-1.5 text-[11px] font-extrabold text-[#0B1B36]">Create</button>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-[#16305A] to-[#0E2244] p-3 ring-1 ring-white/10">
            <div className="flex items-center gap-1.5 text-[12px] font-bold"><Users className="h-3.5 w-3.5" /> Join Room</div>
            <div className="mt-0.5 text-[10px] text-white/60">Public & private</div>
            <button className="mt-2 w-full rounded-lg bg-white/10 py-1.5 text-[11px] font-bold ring-1 ring-white/15">Join</button>
          </div>
        </div>

        {/* Featured rooms */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[13px] font-bold">
              <Star className="h-4 w-4 fill-amber-300 text-amber-300" /> Featured Rooms
            </div>
            <span className="text-[11px] text-amber-300">View All ›</span>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white text-slate-900 shadow-lg">
            <BannerSlider aspect="aspect-[16/8]" rounded="rounded-none" />
            <div className="p-3">
              <div className="bn truncate text-[13px] font-bold">নবরানিকেকনপ্রাপ্পণ ওয়া প্রভৃতি বা…</div>
              <div className="mt-1 flex items-center gap-2 text-[10.5px] text-slate-500">
                <span>Sponsored by</span>
                <img src={sponsorLogo} alt="" className="h-3.5 w-3.5 rounded-full" />
                <span className="font-semibold text-slate-700">WafiLife</span>
              </div>
              <div className="mt-2 flex items-center justify-between rounded-lg bg-amber-100 px-2.5 py-1.5">
                <span className="flex items-center gap-1 text-[11px] font-extrabold text-amber-900">
                  <Trophy className="h-3.5 w-3.5" /> Prize: 100,000 BDT
                </span>
                <span className="text-[10px] text-amber-800">16 users · 100/day</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeBottomNav tone="dark" />
    </div>
  );
}

/* ---------------- Home V2 — Calm Minimal Light ---------------- */
function HomeV2() {
  return (
    <div className="bg-[#FAFAF7]">
      {/* Soft hero */}
      <div className="px-5 pb-6 pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-emerald-700 font-bold">KT</div>
            <div className="leading-tight">
              <div className="text-[10px] uppercase tracking-wider text-slate-500">As-salamu alaykum</div>
              <div className="text-[13px] font-bold text-slate-900">Khaled</div>
            </div>
          </div>
          <Bell className="h-4.5 w-4.5 text-slate-500" />
        </div>
        <div className="mt-5 text-center">
          <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-700/80">Next Prayer · Dhuhr</div>
          <div className="mt-1 text-[34px] font-extralight tracking-tight text-slate-900">11:57 <span className="text-[16px] font-light text-slate-500">AM</span></div>
          <div className="mt-1 text-[11px] text-slate-500">in 2h 14m · Dhaka</div>
        </div>
        <div className="mt-4 grid grid-cols-5 gap-1 rounded-2xl bg-white p-2 ring-1 ring-slate-100">
          {PRAYERS.map((p) => (
            <div key={p.name} className={`flex flex-col items-center gap-0.5 rounded-xl py-2 text-[10px] ${p.active ? "bg-emerald-50 text-emerald-800" : "text-slate-500"}`}>
              <span className="font-semibold">{p.name}</span>
              <span className="text-[9.5px] opacity-80">{p.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3 px-4 pb-6">
        {/* Today's zikr highlight */}
        <div className="rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-900 p-4 text-white">
          <div className="text-[10px] uppercase tracking-wider text-emerald-200/80">Today's Zikr</div>
          <div className="bn mt-1.5 text-[20px] font-bold leading-tight">سُبْحَانَ اللّٰه</div>
          <div className="bn mt-0.5 text-[11px] text-emerald-100/80">100 বার পড়ুন</div>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-1 text-[11px] text-emerald-100/80">
              <Heart className="h-3.5 w-3.5 fill-emerald-300 text-emerald-300" /> 32 / 100
            </div>
            <button className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-emerald-800">Continue</button>
          </div>
        </div>

        {/* Quick tiles */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { l: "My Rooms", i: <BookOpen className="h-4 w-4" /> },
            { l: "Explore", i: <Compass className="h-4 w-4" /> },
            { l: "Featured", i: <Star className="h-4 w-4" /> },
          ].map((x) => (
            <button key={x.l} className="flex flex-col items-center gap-1.5 rounded-2xl bg-white py-3 text-[11px] font-semibold text-slate-700 ring-1 ring-slate-100">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-50 text-emerald-700">{x.i}</span>
              {x.l}
            </button>
          ))}
        </div>

        {/* Featured */}
        <div className="flex items-center justify-between pt-2">
          <div className="text-[13px] font-bold text-slate-900">Featured Rooms</div>
          <span className="text-[11px] text-emerald-700">View all</span>
        </div>
        <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100">
          <BannerSlider aspect="aspect-[16/8]" rounded="rounded-none" />
          <div className="p-3">
            <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
              <ShieldCheck className="h-3 w-3 text-emerald-600" /> Sponsored · WafiLife
            </div>
            <div className="bn mt-1 truncate text-[13.5px] font-bold text-slate-900">গভীর ১০,০০০ বার গণনা</div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[11px] font-bold text-emerald-700">৳1,00,000 Prize</span>
              <span className="text-[10px] text-slate-500">2 users · 1000 total</span>
            </div>
          </div>
        </div>
      </div>
      <HomeBottomNav tone="light" />
    </div>
  );
}

/* ---------------- Home V3 — Modern Card Stack ---------------- */
function HomeV3() {
  return (
    <div className="bg-[#F4F6FA]">
      <div style={{ background: NAVY }} className="rounded-b-[28px] px-5 pb-8 pt-5 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-amber-300 text-[#0B1B36] text-[12px] font-extrabold">KT</div>
            <div className="leading-tight">
              <div className="text-[11px] text-white/65">Welcome back</div>
              <div className="text-[13px] font-bold">Khaled TAMIN</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Search className="h-4.5 w-4.5" />
            <Bell className="h-4.5 w-4.5" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/[0.07] p-3 ring-1 ring-white/10">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/60">Total Zikr</div>
            <div className="mt-0.5 text-[20px] font-extrabold text-amber-300">318.2M</div>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/60">Level</div>
            <div className="mt-0.5 flex items-center gap-1 text-[16px] font-extrabold">
              19 <TrendingUp className="h-3.5 w-3.5 text-emerald-300" />
            </div>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div>
            <div className="text-[10px] uppercase tracking-wider text-white/60">Rank</div>
            <div className="mt-0.5 text-[16px] font-extrabold">#142</div>
          </div>
        </div>
      </div>

      <div className="-mt-4 space-y-3 px-4 pb-6">
        {/* Sponsor banner up top */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-100">
          <BannerSlider aspect="aspect-[16/7]" rounded="rounded-none" />
        </div>

        {/* Prayer + Qibla compact */}
        <div className="grid grid-cols-5 gap-2">
          <div className="col-span-3 rounded-2xl bg-white p-3 ring-1 ring-slate-100">
            <div className="flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1"><Moon className="h-3.5 w-3.5 text-amber-500" /> Dhuhr</span>
              <span>Dhaka</span>
            </div>
            <div className="mt-1 text-[20px] font-extrabold text-slate-900">11:57 AM</div>
            <div className="text-[10.5px] text-emerald-700">in 2h 14m</div>
          </div>
          <div className="col-span-2 flex flex-col items-center justify-center rounded-2xl p-3 text-white" style={{ background: NAVY }}>
            <Compass className="h-6 w-6 text-amber-300" />
            <div className="mt-1 text-[11px] font-bold">Qibla</div>
            <div className="text-[10px] text-white/60">295° NW</div>
          </div>
        </div>

        {/* Action grid */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { l: "Rooms", i: <BookOpen className="h-4 w-4" />, c: "text-indigo-600 bg-indigo-50" },
            { l: "Tasbih", i: <Sparkles className="h-4 w-4" />, c: "text-amber-600 bg-amber-50" },
            { l: "Quran", i: <BookOpen className="h-4 w-4" />, c: "text-emerald-600 bg-emerald-50" },
            { l: "Duas", i: <Heart className="h-4 w-4" />, c: "text-rose-600 bg-rose-50" },
          ].map((x) => (
            <button key={x.l} className="flex flex-col items-center gap-1.5 rounded-2xl bg-white py-3 text-[10.5px] font-semibold text-slate-700 ring-1 ring-slate-100">
              <span className={`grid h-8 w-8 place-items-center rounded-xl ${x.c}`}>{x.i}</span>
              {x.l}
            </button>
          ))}
        </div>

        {/* Featured stack */}
        <div className="flex items-center justify-between pt-1">
          <div className="text-[13px] font-bold text-slate-900">Featured Rooms</div>
          <span className="text-[11px] font-semibold" style={{ color: NAVY }}>View All ›</span>
        </div>
        <div className="space-y-2">
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-slate-100">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber-100 text-lg">📿</div>
              <div className="min-w-0 flex-1">
                <div className="bn truncate text-[13px] font-bold text-slate-900">
                  {i === 1 ? "নবরানিকেকনপ্রাপ্পণ ওয়া…" : "গভীর ১০,০০০ বার গণনা"}
                </div>
                <div className="mt-0.5 flex items-center gap-1.5 text-[10px] text-slate-500">
                  <img src={sponsorLogo} alt="" className="h-3 w-3 rounded-full" />
                  Sponsored · WafiLife
                </div>
                <div className="mt-1 inline-flex items-center gap-1 rounded-md bg-amber-100 px-1.5 py-0.5 text-[10px] font-extrabold text-amber-900">
                  <Trophy className="h-3 w-3" /> 1,00,000 BDT
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </div>
          ))}
        </div>
      </div>
      <HomeBottomNav tone="light" />
    </div>
  );
}

/* ---------------- Home V4 — Editorial Serif (no ads) ---------------- */
function HomeV4() {
  return (
    <div className="bg-[#FBF8F2] font-serif text-slate-900">
      <div className="px-5 pb-6 pt-6">
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Mon · 11 May</div>
          <Bell className="h-4 w-4 text-slate-500" />
        </div>
        <div className="mt-6">
          <div className="text-[11px] uppercase tracking-[0.25em] text-emerald-800">Today</div>
          <h1 className="mt-1 text-[28px] font-bold leading-tight tracking-tight">
            Begin with <em className="text-emerald-800">Bismillah</em>
          </h1>
          <p className="mt-2 text-[12px] leading-relaxed text-slate-600 font-sans">
            A quiet morning, a still heart. Continue where you left off.
          </p>
        </div>
      </div>

      <div className="space-y-3 px-4 pb-6 font-sans">
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span>Dhuhr · in 2h 14m</span>
            <span>Dhaka</span>
          </div>
          <div className="mt-1 text-[26px] font-bold tracking-tight">11:57 <span className="text-[14px] font-normal text-slate-500">AM</span></div>
          <div className="mt-3 grid grid-cols-5 gap-1 text-center text-[10px]">
            {PRAYERS.map((p) => (
              <div key={p.name} className={`rounded-lg py-1.5 ${p.active ? "bg-emerald-50 text-emerald-800 font-semibold" : "text-slate-500"}`}>
                <div>{p.name}</div>
                <div className="text-[9px] opacity-70">{p.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="text-[10px] uppercase tracking-wider text-slate-500">Continue zikr</div>
          <div className="bn mt-1 text-[18px] font-bold">سُبْحَانَ اللّٰه</div>
          <div className="mt-2 h-1 rounded-full bg-slate-100"><div className="h-1 w-[32%] rounded-full bg-emerald-700" /></div>
          <div className="mt-1 flex items-center justify-between text-[11px] text-slate-500">
            <span>32 / 100</span>
            <button className="font-semibold text-emerald-800">Continue →</button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {[
            { l: "Rooms", s: "12 active" },
            { l: "Quran", s: "Surah 18" },
            { l: "Duas", s: "Daily" },
            { l: "Tasbih", s: "Counter" },
          ].map((x) => (
            <div key={x.l} className="rounded-2xl border border-slate-200 bg-white p-3">
              <div className="text-[13px] font-bold">{x.l}</div>
              <div className="text-[10.5px] text-slate-500">{x.s}</div>
            </div>
          ))}
        </div>
      </div>
      <HomeBottomNav tone="light" />
    </div>
  );
}

/* ---------------- Home V5 — Mosque Hero Gradient ---------------- */
function HomeV5() {
  return (
    <div className="bg-[#F4F6FA]">
      <div className="relative overflow-hidden rounded-b-[32px] px-5 pb-10 pt-5 text-white"
           style={{ background: "linear-gradient(180deg, #1B3A6B 0%, #2D5A9E 60%, #6B9FD8 100%)" }}>
        <div className="pointer-events-none absolute -right-10 top-6 text-[80px] opacity-20">🕌</div>
        <div className="pointer-events-none absolute right-6 top-3 text-amber-200/80">✦</div>
        <div className="pointer-events-none absolute right-20 top-10 text-amber-200/60">✦</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-white/15 ring-1 ring-white/25">KT</div>
            <div className="text-[12px] font-semibold">As-salamu alaykum</div>
          </div>
          <Bell className="h-4 w-4" />
        </div>
        <div className="mt-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.25em] text-amber-200/90">Maghrib in</div>
          <div className="mt-1 text-[40px] font-extrabold tracking-tight">06<span className="opacity-50">:</span>14<span className="text-[16px] opacity-60">:22</span></div>
          <div className="text-[11px] text-white/70">Sunset 6:23 PM · Dhaka</div>
        </div>
        <div className="mt-5 flex items-center justify-around rounded-2xl bg-white/10 px-3 py-2.5 text-[10.5px] backdrop-blur ring-1 ring-white/15">
          {PRAYERS.map((p) => (
            <div key={p.name} className={`flex flex-col items-center ${p.active ? "text-amber-200" : "text-white/75"}`}>
              <span className="font-semibold">{p.name}</span>
              <span className="text-[9px] opacity-80">{p.time.replace(" AM", "").replace(" PM", "")}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="-mt-5 space-y-3 px-4 pb-6">
        <div className="grid grid-cols-3 gap-2">
          {[
            { l: "Quran", e: "📖" },
            { l: "Qibla", e: "🧭" },
            { l: "Tasbih", e: "📿" },
            { l: "Duas", e: "🤲" },
            { l: "Rooms", e: "👥" },
            { l: "Khatm", e: "✨" },
          ].map((x) => (
            <button key={x.l} className="flex flex-col items-center gap-1 rounded-2xl bg-white py-3 text-[11px] font-semibold text-slate-700 shadow-sm">
              <span className="text-[20px]">{x.e}</span>
              {x.l}
            </button>
          ))}
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="text-[12px] font-bold text-slate-900">Verse of the Day</div>
            <span className="text-[10px] text-slate-500">2:286</span>
          </div>
          <p className="mt-2 text-[12.5px] leading-relaxed text-slate-700">
            "Allah does not burden a soul beyond that it can bear."
          </p>
        </div>
      </div>
      <HomeBottomNav tone="light" />
    </div>
  );
}

/* ---------------- Home V6 — Bento Grid ---------------- */
function HomeV6() {
  return (
    <div className="bg-[#0F172A] text-white">
      <div className="px-4 pb-5 pt-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] text-white/55">Good morning</div>
            <div className="text-[16px] font-bold">Khaled</div>
          </div>
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-white/60" />
            <div className="grid h-8 w-8 place-items-center rounded-full bg-amber-300 text-[#0F172A] text-[11px] font-extrabold">KT</div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-6 gap-2">
          {/* Big prayer */}
          <div className="col-span-4 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-900 p-3">
            <div className="text-[10px] uppercase tracking-wider text-indigo-200">Next · Dhuhr</div>
            <div className="mt-1 text-[22px] font-extrabold">11:57 AM</div>
            <div className="text-[10.5px] text-indigo-200/80">in 2h 14m</div>
          </div>
          {/* Streak */}
          <div className="col-span-2 rounded-2xl bg-amber-300 p-3 text-amber-950">
            <div className="text-[10px] font-semibold uppercase">Streak</div>
            <div className="mt-1 text-[22px] font-extrabold leading-none">14<span className="text-[12px]">d</span></div>
            <div className="text-[10px] opacity-80">🔥 best 21</div>
          </div>
          {/* Tasbih */}
          <div className="col-span-3 rounded-2xl bg-white/[0.06] p-3 ring-1 ring-white/10">
            <div className="text-[10px] uppercase tracking-wider text-white/55">Today's Tasbih</div>
            <div className="bn mt-1 text-[16px] font-bold">سُبْحَانَ اللّٰه</div>
            <div className="mt-2 flex items-center justify-between text-[10.5px]">
              <span className="text-white/65">32 / 100</span>
              <span className="text-emerald-300">→</span>
            </div>
          </div>
          {/* Quran */}
          <div className="col-span-3 rounded-2xl bg-emerald-700 p-3">
            <div className="text-[10px] uppercase tracking-wider text-emerald-200">Quran</div>
            <div className="mt-1 text-[14px] font-bold">Surah Al-Kahf</div>
            <div className="text-[10.5px] text-emerald-100/80">Page 12 of 22</div>
          </div>
          {/* Qibla */}
          <div className="col-span-2 rounded-2xl bg-white/[0.06] p-3 ring-1 ring-white/10">
            <Compass className="h-5 w-5 text-amber-300" />
            <div className="mt-1 text-[12px] font-bold">Qibla</div>
            <div className="text-[10px] text-white/55">295° NW</div>
          </div>
          {/* Rooms */}
          <div className="col-span-2 rounded-2xl bg-white/[0.06] p-3 ring-1 ring-white/10">
            <Users className="h-5 w-5 text-emerald-300" />
            <div className="mt-1 text-[12px] font-bold">Rooms</div>
            <div className="text-[10px] text-white/55">12 active</div>
          </div>
          {/* Duas */}
          <div className="col-span-2 rounded-2xl bg-white/[0.06] p-3 ring-1 ring-white/10">
            <Heart className="h-5 w-5 text-rose-300" />
            <div className="mt-1 text-[12px] font-bold">Duas</div>
            <div className="text-[10px] text-white/55">Daily</div>
          </div>
        </div>

        <div className="mt-3 rounded-2xl bg-white/[0.06] p-3 ring-1 ring-white/10">
          <div className="text-[10px] uppercase tracking-wider text-white/55">Verse of the day</div>
          <p className="mt-1 text-[12.5px] leading-relaxed text-white/85">
            "Indeed, with hardship comes ease." — 94:6
          </p>
        </div>
      </div>
      <HomeBottomNav tone="dark" />
    </div>
  );
}

/* ---------------- Home V7 — Focused Streak ---------------- */
function HomeV7() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const done = [true, true, true, true, true, false, false];
  return (
    <div className="bg-white">
      <div className="px-5 pb-6 pt-6">
        <div className="flex items-center justify-between">
          <div className="text-[12px] font-bold text-slate-900">Hi, Khaled</div>
          <Bell className="h-4 w-4 text-slate-500" />
        </div>
        <div className="mt-8 text-center">
          <div className="relative mx-auto h-44 w-44">
            <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
              <circle cx="50" cy="50" r="44" stroke="#F1F5F9" strokeWidth="8" fill="none" />
              <circle cx="50" cy="50" r="44" stroke="url(#g7)" strokeWidth="8" fill="none"
                      strokeLinecap="round" strokeDasharray="276" strokeDashoffset="76" />
              <defs>
                <linearGradient id="g7" x1="0" x2="1">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Today</div>
              <div className="text-[34px] font-extrabold text-slate-900 leading-none">72%</div>
              <div className="mt-1 text-[10.5px] text-emerald-700 font-semibold">+ 12 from yesterday</div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-50 p-3">
          <div>
            <div className="text-[11px] text-slate-500">Current streak</div>
            <div className="text-[18px] font-extrabold text-slate-900">🔥 14 days</div>
          </div>
          <div className="flex gap-1.5">
            {days.map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className={`grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold ${done[i] ? "bg-emerald-600 text-white" : "bg-white text-slate-400 ring-1 ring-slate-200"}`}>
                  {done[i] ? "✓" : ""}
                </div>
                <span className="text-[9px] text-slate-500">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2.5 px-4 pb-6">
        <div className="text-[12px] font-bold text-slate-900">Today's goals</div>
        {[
          { l: "Morning Adhkar", p: 100, c: "bg-emerald-500" },
          { l: "Surah Al-Kahf", p: 60, c: "bg-indigo-500" },
          { l: "100× Subhan'Allah", p: 32, c: "bg-amber-500" },
        ].map((g) => (
          <div key={g.l} className="rounded-2xl bg-slate-50 p-3">
            <div className="flex items-center justify-between text-[12px] font-semibold text-slate-800">
              <span>{g.l}</span>
              <span className="text-[11px] text-slate-500">{g.p}%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white">
              <div className={`h-full rounded-full ${g.c}`} style={{ width: `${g.p}%` }} />
            </div>
          </div>
        ))}
      </div>
      <HomeBottomNav tone="light" />
    </div>
  );
}
