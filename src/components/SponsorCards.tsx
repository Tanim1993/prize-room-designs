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
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  Infinity as InfinityIcon,
  Zap,
  MapPin,
  Upload,
  Eye,
  BarChart3,
  Lock,
} from "lucide-react";
import sponsorLogo from "@/assets/sponsor-logo.png";
import bannerBaby from "@/assets/banner-baby.png";
import bannerBooks from "@/assets/banner-books.png";
import React, { useEffect, useState } from "react";
import {
  FinalSelectionProvider,
  FinalSelectionSection,
  PickButton,
  CopyButtons,
  ExportButton,
  useRegisterFrame,
} from "./FinalSelection";

/* ------------------------------------------------------------------ */
/*  Shared bits matching the user's current Zikr Rooms app aesthetic  */
/* ------------------------------------------------------------------ */

const NAVY = "#1F3A5F"; // matches the screenshot header
const FEATURED_YELLOW = "#FFE9A8";

function PhoneFrame({ children, label }: { children: React.ReactNode; label: string }) {
  const captureRef = React.useRef<HTMLDivElement>(null);
  const inner = (
    <div className="w-[360px] overflow-hidden rounded-[28px] bg-white shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)] ring-1 ring-black/5">
      <AppHeader />
      <div className="space-y-4 bg-[#F4F6FA] px-4 pb-24 pt-4">{children}</div>
      <BottomNav />
    </div>
  );
  useRegisterFrame(`phone:${label}`, "phone", label, inner);
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex w-full items-center justify-between gap-2">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </div>
        <div className="flex items-center gap-1.5">
          <CopyButtons targetRef={captureRef} />
          <ExportButton targetRef={captureRef} label={label} />
          <PickButton frameKey={`phone:${label}`} />
        </div>
      </div>
      <div ref={captureRef}>{inner}</div>
    </div>
  );
}

function PhoneShell({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
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

/* ------------------------------------------------------------------ */
/*  ADDITIONAL ROOM VARIANTS (12-19)                                   */
/*  Brand attribution combinations: no brand, Powered by, Sponsored    */
/*  by, Prize only, plus banner-size variants.                         */
/* ------------------------------------------------------------------ */

/* V12 — Room with NO brand (clean baseline, no sponsor anywhere). */
function V12_NoBrand() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#EEF1F6] text-lg">📿</div>
        <div className="min-w-0 flex-1">
          <h3 className="bn truncate text-[15px] font-bold text-slate-900">সুবহানাল্লাহি ওয়া বিহামদিহী</h3>
          <p className="bn mt-0.5 line-clamp-1 text-[12px] text-slate-500">প্রতিদিন ১০০ বার পড়ুন</p>
        </div>
        <ChevronRight className="h-5 w-5 text-slate-400" />
      </div>
      <div className="mt-3"><StatRow /></div>
    </div>
  );
}

/* V13 — Room with "Powered by" only (subtle attribution, no prize). */
function V13_PoweredBy() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#EEF1F6] text-lg">📿</div>
        <div className="min-w-0 flex-1">
          <h3 className="bn truncate text-[15px] font-bold text-slate-900">সুবহানাল্লাহি ওয়া বিহামদিহী</h3>
          <p className="bn mt-0.5 line-clamp-1 text-[12px] text-slate-500">প্রতিদিন ১০০ বার পড়ুন</p>
        </div>
        <ChevronRight className="h-5 w-5 text-slate-400" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <StatRow />
        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-slate-500">
          Powered by
          <img src={sponsorLogo} alt="" className="h-3.5 w-3.5 rounded-full object-cover" />
          <span className="font-semibold text-slate-700">Wizlife</span>
        </span>
      </div>
    </div>
  );
}

/* V14 — Room with "Powered by" + "Sponsored by" (dual attribution). */
function V14_PoweredAndSponsored() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
      <div className="mb-2 flex items-center justify-between text-[10px]">
        <span className="inline-flex items-center gap-1 font-medium text-slate-500">
          Powered by
          <img src={sponsorLogo} alt="" className="h-3.5 w-3.5 rounded-full object-cover" />
          <span className="font-semibold text-slate-700">Wizlife</span>
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 font-semibold uppercase tracking-wider text-slate-600">
          <ShieldCheck className="h-3 w-3" /> Sponsored · Ifad
        </span>
      </div>
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#EEF1F6] text-lg">📿</div>
        <div className="min-w-0 flex-1">
          <h3 className="bn truncate text-[15px] font-bold text-slate-900">সুবহানাল্লাহি ওয়া বিহামদিহী</h3>
          <p className="bn mt-0.5 line-clamp-1 text-[12px] text-slate-500">প্রতিদিন ১০০ বার পড়ুন</p>
        </div>
        <ChevronRight className="h-5 w-5 text-slate-400" />
      </div>
      <div className="mt-3"><StatRow /></div>
    </div>
  );
}

/* V15 — Room with "Sponsored by" + Prize. */
function V15_SponsoredAndPrize() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
      <div className="mb-2 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-600">
          <ShieldCheck className="h-3 w-3" /> Sponsored · Wizlife
        </span>
        <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-extrabold text-emerald-800">
          <Gift className="h-3 w-3" /> ৳40,000
        </span>
      </div>
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
      <div className="mt-3"><StatRow /></div>
    </div>
  );
}

/* V16 — Room with Prize only (no brand attribution). House prize. */
function V16_PrizeOnly() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700">House Prize Room</span>
        <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-extrabold text-emerald-800">
          <Gift className="h-3 w-3" /> ৳40,000
        </span>
      </div>
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
      <div className="mt-3"><StatRow /></div>
    </div>
  );
}

/* V17 — Room with Brand + small wide banner (400×70 ratio ≈ 40:7). */
function V17_BrandSmallBanner() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_6px_18px_-10px_rgba(15,23,42,0.25)]">
      <div className="flex items-center justify-between px-3 py-1.5 text-white" style={{ background: NAVY }}>
        <div className="flex items-center gap-2">
          <img src={sponsorLogo} alt="" className="h-5 w-5 rounded-full object-cover ring-1 ring-white/30" />
          <div className="text-[11px] font-bold">Wizlife</div>
        </div>
        <span className="text-[9px] uppercase tracking-wider text-white/55">Sponsored</span>
      </div>
      <div className="px-2 pt-2">
        <div className="relative w-full overflow-hidden rounded-md bg-slate-100" style={{ aspectRatio: "400 / 70" }}>
          <img src={bannerBaby} alt="" className="h-full w-full object-cover" />
          <div className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded bg-black/45 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-white">
            400×70
          </div>
        </div>
      </div>
      <div className="p-4 pt-3">
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#EEF1F6] text-lg">📿</div>
          <div className="min-w-0 flex-1">
            <h3 className="bn truncate text-[15px] font-bold text-slate-900">সুবহানাল্লাহি ওয়া বিহামদিহী</h3>
            <p className="bn mt-0.5 line-clamp-1 text-[12px] text-slate-500">প্রতিদিন ১০০ বার পড়ুন</p>
          </div>
          <ChevronRight className="h-5 w-5 text-slate-400" />
        </div>
        <div className="mt-3"><StatRow /></div>
      </div>
    </div>
  );
}

/* V18 — Room with Brand + regular banner (16:9 standard). */
function V18_BrandRegularBanner() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_6px_18px_-10px_rgba(15,23,42,0.25)]">
      <div className="flex items-center justify-between px-3 py-2 text-white" style={{ background: NAVY }}>
        <div className="flex items-center gap-2">
          <img src={sponsorLogo} alt="" className="h-6 w-6 rounded-full object-cover ring-1 ring-white/30" />
          <div className="leading-tight">
            <div className="text-[9px] uppercase tracking-wider text-white/60">Sponsored by</div>
            <div className="text-[12px] font-bold">Wizlife</div>
          </div>
        </div>
        <ShieldCheck className="h-3.5 w-3.5 text-amber-300" />
      </div>
      <div className="p-2 pb-0">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100">
          <img src={bannerBooks} alt="" className="h-full w-full object-cover" />
          <div className="absolute right-2 top-2 rounded bg-black/45 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white">
            16:9
          </div>
        </div>
      </div>
      <div className="p-4 pt-3">
        <div className="flex items-start gap-3">
          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#EEF1F6] text-lg">📿</div>
          <div className="min-w-0 flex-1">
            <h3 className="bn truncate text-[15px] font-bold text-slate-900">সুবহানাল্লাহি ওয়া বিহামদিহী</h3>
            <p className="bn mt-0.5 line-clamp-1 text-[12px] text-slate-500">প্রতিদিন ১০০ বার পড়ুন</p>
          </div>
          <ChevronRight className="h-5 w-5 text-slate-400" />
        </div>
        <div className="mt-3"><StatRow /></div>
      </div>
    </div>
  );
}

/* V19 — Room with banner only (no brand attribution). Generic ad slot. */
function V19_BannerOnly() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_6px_18px_-10px_rgba(15,23,42,0.25)]">
      <div className="p-2 pb-0">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100">
          <img src={bannerBaby} alt="" className="h-full w-full object-cover" />
          <div className="absolute left-2 top-2 rounded-full bg-black/45 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white">
            Ad
          </div>
        </div>
      </div>
      <div className="p-4 pt-3">
        <div className="flex items-start gap-3">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#EEF1F6] text-lg">📿</div>
          <div className="min-w-0 flex-1">
            <h3 className="bn truncate text-[15px] font-bold text-slate-900">সুবহানাল্লাহি ওয়া বিহামদিহী</h3>
            <p className="bn mt-0.5 line-clamp-1 text-[12px] text-slate-500">প্রতিদিন ১০০ বার পড়ুন</p>
          </div>
          <ChevronRight className="h-5 w-5 text-slate-400" />
        </div>
        <div className="mt-3"><StatRow /></div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  CHANNEL DETAIL — what you see AFTER entering a channel.           */
/*  A channel-identity HEADER establishes visibility, then a list of  */
/*  rooms (Family / Worldwide / My Team) lives under it.              */
/* ------------------------------------------------------------------ */

function ChannelRoomMini({
  title,
  meta,
  badge,
  badgeTone = "slate",
  live,
}: {
  title: string;
  meta: string;
  badge?: string;
  badgeTone?: "slate" | "gold" | "rose" | "emerald";
  live?: boolean;
}) {
  const tones: Record<string, string> = {
    slate: "bg-slate-100 text-slate-700",
    gold: "bg-amber-100 text-amber-800",
    rose: "bg-rose-100 text-rose-700",
    emerald: "bg-emerald-100 text-emerald-700",
  };
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#EEF1F6] text-lg">📿</div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <h3 className="truncate text-[13.5px] font-bold text-slate-900">{title}</h3>
          {badge && (
            <span className={`rounded-md px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide ${tones[badgeTone]}`}>
              {badge}
            </span>
          )}
        </div>
        <p className="mt-0.5 truncate text-[11px] text-slate-500">{meta}</p>
      </div>
      {live && (
        <span className="inline-flex items-center gap-1 rounded-full bg-rose-100 px-1.5 py-0.5 text-[9px] font-bold text-rose-700">
          <span className="h-1 w-1 rounded-full bg-rose-500" /> live
        </span>
      )}
      <ChevronRight className="h-4 w-4 text-slate-400" />
    </div>
  );
}

/* V20 — Navy hero channel header + rooms. Maximum channel identity. */
function V20_ChannelHeroNavy() {
  return (
    <>
      <div className="overflow-hidden rounded-2xl text-white shadow-[0_10px_30px_-12px_rgba(31,58,95,0.5)]" style={{ background: NAVY }}>
        <div className="px-4 pt-4 pb-3">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/60">
            <ChevronRight className="h-3 w-3 rotate-180" /> Channels · Permanent
          </div>
          <div className="mt-2 flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: "rgba(255,255,255,0.08)", boxShadow: "inset 0 0 0 1px #E5B54755" }}>
              <Sparkles className="h-5 w-5" style={{ color: "#E5B547" }} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="bn text-[17px] font-extrabold leading-tight">সুবহানাল্লাহি ওয়া বিহামদিহী</div>
              <div className="text-[10.5px] tracking-wide text-white/65">Subhanallahi wa bihamdihi · permanent</div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-lg bg-white/10 py-1.5">
              <div className="text-[13px] font-extrabold tabular-nums" style={{ color: "#F4D27A" }}>12.4M</div>
              <div className="text-[9px] uppercase tracking-wider text-white/55">lifetime</div>
            </div>
            <div className="rounded-lg bg-white/10 py-1.5">
              <div className="text-[13px] font-extrabold tabular-nums">248</div>
              <div className="text-[9px] uppercase tracking-wider text-white/55">rooms</div>
            </div>
            <div className="rounded-lg bg-white/10 py-1.5">
              <div className="inline-flex items-center gap-1 text-[12px] font-extrabold text-rose-300">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />12
              </div>
              <div className="text-[9px] uppercase tracking-wider text-white/55">live now</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 bg-white/5 px-4 py-2">
          <div className="inline-flex items-center gap-1.5 text-[10px] text-white/75">
            <Crown className="h-3 w-3" style={{ color: "#E5B547" }} /> Powered by <b className="text-white">Halal Foods</b>
          </div>
          <button className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-slate-900">
            <Plus className="h-3 w-3" /> New room
          </button>
        </div>
      </div>

      <div className="mt-1 flex items-center justify-between px-1 text-[11px]">
        <span className="font-semibold text-slate-700">Rooms in this channel</span>
        <span className="text-slate-400">248 · by activity</span>
      </div>

      <ChannelRoomMini title="Rahman Family" meta="6 / 8 members · 100/day" badge="Family" badgeTone="emerald" live />
      <ChannelRoomMini title="Worldwide" meta="12.4k members · open" badge="Public" />
      <ChannelRoomMini title="My Office Team" meta="14 / 20 · 50/day" badge="Private" />
    </>
  );
}

/* V21 — Sticky compact chip + sponsor strip. Low chrome, fast scan. */
function V21_ChannelStickyChip() {
  return (
    <>
      <div className="sticky top-0 z-10 -mx-4 -mt-4 mb-1 border-b border-slate-200 bg-white/95 px-4 py-2 backdrop-blur">
        <div className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4 rotate-180 text-slate-500" />
          <div className="grid h-7 w-7 place-items-center rounded-lg text-white" style={{ background: NAVY }}>
            <Sparkles className="h-3.5 w-3.5" style={{ color: "#E5B547" }} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="bn truncate text-[13px] font-bold text-slate-900">সুবহানাল্লাহি ওয়া বিহামদিহী</div>
            <div className="flex items-center gap-2 text-[10px] text-slate-500">
              <span>12.4M lifetime</span><span>·</span>
              <span className="inline-flex items-center gap-1 text-rose-600"><span className="h-1 w-1 rounded-full bg-rose-500" />12 live</span>
            </div>
          </div>
          <button className="rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-bold text-white">+ Room</button>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-amber-200 bg-amber-50 px-3 py-2">
        <div className="flex items-center gap-2 text-[11px] text-amber-900">
          <Crown className="h-3.5 w-3.5" /> <span>Sponsored by <b>Halal Foods</b></span>
        </div>
        <div className="text-[10px] font-bold text-amber-800">Prize · ৳25,000</div>
      </div>

      <ChannelRoomMini title="Rahman Family" meta="6 / 8 · 100/day" badge="Family" badgeTone="emerald" live />
      <ChannelRoomMini title="Worldwide" meta="12.4k members" badge="Public" />
      <ChannelRoomMini title="Office Team" meta="14 / 20 · 50/day" badge="Private" />
    </>
  );
}

/* V22 — Seasonal channel header (Zilhajj) with progress + amal chips. */
function V22_ChannelSeasonal() {
  return (
    <>
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1F3A5F] via-[#264a78] to-[#1F3A5F] p-4 text-white shadow-[0_10px_30px_-12px_rgba(31,58,95,0.5)]">
        <div className="flex items-center justify-between text-[9.5px] uppercase tracking-[0.18em] text-white/65">
          <span className="inline-flex items-center gap-1"><Moon className="h-3 w-3" style={{ color: "#E5B547" }} /> Zilhajj Special</span>
          <span>Day 3 of 10</span>
        </div>
        <div className="mt-2 bn text-[17px] font-extrabold leading-tight">জিলহজ্জের ১০ দিন</div>
        <div className="text-[10.5px] text-white/65">First 10 blessed days · curated amals</div>

        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
          <div className="h-full rounded-full" style={{ width: "30%", background: "#E5B547" }} />
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Takbir", "Tahlil", "Hamd", "Qurbani Dua"].map((a) => (
            <span key={a} className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold ring-1 ring-white/15">
              <CheckCircle2 className="h-2.5 w-2.5" style={{ color: "#E5B547" }} /> {a}
            </span>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
          <div className="flex items-center gap-3 text-[10px] text-white/65">
            <span><b className="text-white">186</b> rooms</span>
            <span className="inline-flex items-center gap-1 text-rose-300"><span className="h-1 w-1 rounded-full bg-rose-400" /><b>21</b> live</span>
          </div>
          <button className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-bold text-slate-900">
            <Plus className="h-3 w-3" /> Join a room
          </button>
        </div>
      </div>

      <div className="mt-1 px-1 text-[11px] font-semibold text-slate-700">Active rooms today</div>
      <ChannelRoomMini title="Hujjaj 2026" meta="Live · 432 members" badge="Hot" badgeTone="rose" live />
      <ChannelRoomMini title="Family Takbir" meta="6 / 8 · 100/day" badge="Family" badgeTone="emerald" />
      <ChannelRoomMini title="Worldwide · Zilhajj" meta="8.2k members · open" badge="Public" />
    </>
  );
}

/* V23 — Channel + sponsor co-branded header with 400×90 banner. */
function V23_ChannelCoBranded() {
  return (
    <>
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-12px_rgba(15,23,42,0.2)] ring-1 ring-slate-200">
        <div className="flex items-center gap-2 px-4 pt-3">
          <ChevronRight className="h-4 w-4 rotate-180 text-slate-400" />
          <span className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-slate-500">Channel</span>
        </div>
        <div className="flex items-center gap-3 px-4 pb-3 pt-1">
          <div className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ background: NAVY }}>
            <Sparkles className="h-5 w-5" style={{ color: "#E5B547" }} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="bn truncate text-[15px] font-extrabold text-slate-900">সুবহানাল্লাহি ওয়া বিহামদিহী</div>
            <div className="flex items-center gap-2 text-[10.5px] text-slate-500">
              <span>12.4M</span><span>·</span><span>248 rooms</span><span>·</span>
              <span className="inline-flex items-center gap-1 text-rose-600"><span className="h-1 w-1 rounded-full bg-rose-500" />12 live</span>
            </div>
          </div>
        </div>

        <div className="mx-3 mb-3 flex h-[72px] items-center gap-3 overflow-hidden rounded-xl px-3" style={{ background: "linear-gradient(90deg, #FFF7E0 0%, #FFE9A8 100%)", boxShadow: "inset 0 0 0 1px #E5B54755" }}>
          <img src={sponsorLogo} alt="" className="h-10 w-10 rounded-lg object-cover" />
          <div className="min-w-0 flex-1">
            <div className="text-[9.5px] font-bold uppercase tracking-wide text-amber-800">Sponsored season</div>
            <div className="truncate text-[12.5px] font-extrabold text-slate-900">Halal Foods · Win ৳25,000 + hamper</div>
          </div>
          <button className="inline-flex shrink-0 items-center gap-1 rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-bold text-white">
            See <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>

      <div className="mt-1 flex items-center justify-between px-1 text-[11px]">
        <span className="font-semibold text-slate-700">Rooms in this channel</span>
        <span className="text-slate-400">Top by activity</span>
      </div>

      <ChannelRoomMini title="Rahman Family" meta="6 / 8 · 100/day" badge="Family" badgeTone="emerald" live />
      <ChannelRoomMini title="Worldwide" meta="12.4k members" badge="Public" />
      <ChannelRoomMini title="My Office Team" meta="14 / 20 · 50/day" badge="Private" />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  V24–V27 — Lightweight channel-name branding inside room header.   */
/*  No full channel concept yet; just surfaces the channel (zikr)     */
/*  this room belongs to, as a tag/pill/breadcrumb/ribbon.            */
/* ------------------------------------------------------------------ */

/* V24 — Tiny outline chip next to room name. Lowest-friction. */
function V24_ChannelChip() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#EEF1F6] text-[#C2410C]">
          <span className="text-lg">📿</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-1.5">
            <span
              className="bn inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10.5px] font-semibold"
              style={{ borderColor: `${NAVY}33`, color: NAVY }}
            >
              <Sparkles className="h-3 w-3" /> সুবহানাল্লাহ
            </span>
          </div>
          <h3 className="truncate text-[15px] font-bold text-slate-900">Rahman Family</h3>
          <p className="mt-0.5 text-[11.5px] text-slate-500">6 / 8 members · 100/day</p>
        </div>
        <ChevronRight className="h-5 w-5 text-slate-400" />
      </div>
      <div className="mt-3"><StatRow /></div>
    </div>
  );
}

/* V25 — Breadcrumb above title: Channel › Room. */
function V25_ChannelBreadcrumb() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
      <div className="bn mb-1.5 flex items-center gap-1 text-[10.5px] font-semibold uppercase tracking-wide text-slate-500">
        <span style={{ color: NAVY }}>Channel</span>
        <ChevronRight className="h-3 w-3" />
        <span className="bn normal-case tracking-normal text-slate-700">সুবহানাল্লাহি ওয়া বিহামদিহী</span>
      </div>
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#EEF1F6] text-[#C2410C]">
          <span className="text-lg">📿</span>
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[15px] font-bold text-slate-900">Worldwide · Public</h3>
          <p className="mt-0.5 text-[11.5px] text-slate-500">12.4k members · open</p>
        </div>
        <ChevronRight className="h-5 w-5 text-slate-400" />
      </div>
      <div className="mt-3"><StatRow /></div>
    </div>
  );
}

/* V26 — Top navy ribbon strip with channel identity. */
function V26_ChannelRibbon() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
      <div
        className="flex items-center justify-between px-3 py-1.5 text-white"
        style={{ background: NAVY }}
      >
        <div className="flex items-center gap-1.5 text-[10.5px] font-semibold">
          <Sparkles className="h-3 w-3" style={{ color: "#E5B547" }} />
          <span className="opacity-70">Channel</span>
          <span className="bn">· আলহামদুলিল্লাহ</span>
        </div>
        <span className="inline-flex items-center gap-1 text-[10px] opacity-80">
          <span className="h-1 w-1 rounded-full bg-rose-400" /> 12 live
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#EEF1F6] text-[#C2410C]">
            <span className="text-lg">📿</span>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-[15px] font-bold text-slate-900">Bangladesh Youth</h3>
            <p className="mt-0.5 text-[11.5px] text-slate-500">1.2k members · community</p>
          </div>
          <ChevronRight className="h-5 w-5 text-slate-400" />
        </div>
        <div className="mt-3"><StatRow /></div>
      </div>
    </div>
  );
}

/* V27 — Side accent bar + channel pill inline with meta. */
function V27_ChannelSideAccent() {
  return (
    <div className="flex overflow-hidden rounded-2xl bg-white shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
      <div className="w-1.5 shrink-0" style={{ background: NAVY }} />
      <div className="min-w-0 flex-1 p-4">
        <div className="flex items-start gap-3">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#EEF1F6] text-[#C2410C]">
            <span className="text-lg">📿</span>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-[15px] font-bold text-slate-900">My Office Team</h3>
            <div className="mt-1 flex flex-wrap items-center gap-1.5">
              <span
                className="bn inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10.5px] font-semibold"
                style={{ background: `${NAVY}11`, color: NAVY }}
              >
                <Sparkles className="h-2.5 w-2.5" /> দরুদ শরীফ
              </span>
              <span className="text-[10.5px] text-slate-500">· Private · 14 / 20</span>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-slate-400" />
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
  // when true, the variant renders its own room list — skip auto NormalRoomCards
  fullCustom?: boolean;
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
  { label: "Variant 12", desc: "Room with no brand (clean baseline)", node: <V12_NoBrand /> },
  { label: "Variant 13", desc: "Room with Powered by", node: <V13_PoweredBy /> },
  { label: "Variant 14", desc: "Room with Powered by + Sponsored by", node: <V14_PoweredAndSponsored /> },
  { label: "Variant 15", desc: "Room with Sponsored by + Prize", node: <V15_SponsoredAndPrize /> },
  { label: "Variant 16", desc: "Room with Prize only (house prize)", node: <V16_PrizeOnly /> },
  { label: "Variant 17", desc: "Room with Brand + banner 400×70", node: <V17_BrandSmallBanner /> },
  { label: "Variant 18", desc: "Room with Brand + regular banner (16:9)", node: <V18_BrandRegularBanner /> },
  { label: "Variant 19", desc: "Room with banner only (no brand)", node: <V19_BannerOnly /> },
  { label: "Variant 20", desc: "Inside channel · Navy hero header + rooms", node: <V20_ChannelHeroNavy />, fullCustom: true },
  { label: "Variant 21", desc: "Inside channel · Sticky chip + sponsor strip", node: <V21_ChannelStickyChip />, fullCustom: true },
  { label: "Variant 22", desc: "Inside channel · Seasonal (Zilhajj) header", node: <V22_ChannelSeasonal />, fullCustom: true },
  { label: "Variant 23", desc: "Inside channel · Co-branded + 400×90 banner", node: <V23_ChannelCoBranded />, fullCustom: true },
  { label: "Variant 24", desc: "Channel name as outline chip in header", node: <V24_ChannelChip /> },
  { label: "Variant 25", desc: "Channel › Room breadcrumb above title", node: <V25_ChannelBreadcrumb /> },
  { label: "Variant 26", desc: "Top navy ribbon with channel identity", node: <V26_ChannelRibbon /> },
  { label: "Variant 27", desc: "Side accent bar + inline channel pill", node: <V27_ChannelSideAccent /> },
];

/* ================================================================== */
/*  SPONSOR ANALYTICS — BRAND REPORT                                  */
/*  Shown by the app owner to a sponsor brand for an aligned room.    */
/* ================================================================== */

function Delta({ value }: { value: number }) {
  const positive = value >= 0;
  return (
    <span
      className={`inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-[10px] font-bold ${
        positive ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"
      }`}
    >
      {positive ? "▲" : "▼"} {Math.abs(value)}%
    </span>
  );
}

function KpiCard({
  label,
  value,
  delta,
  icon: Icon,
}: {
  label: string;
  value: string;
  delta: number;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-2xl bg-white p-3 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
      <div className="flex items-center justify-between">
        <div
          className="grid h-7 w-7 place-items-center rounded-lg text-white"
          style={{ background: NAVY }}
        >
          <Icon className="h-3.5 w-3.5" />
        </div>
        <Delta value={delta} />
      </div>
      <div className="mt-2 text-[19px] font-extrabold leading-none text-slate-900">{value}</div>
      <div className="mt-1 text-[10.5px] font-medium uppercase tracking-wider text-slate-500">
        {label}
      </div>
    </div>
  );
}

function Sparkline({ points, height = 56 }: { points: number[]; height?: number }) {
  const w = 280;
  const h = height;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const span = max - min || 1;
  const step = w / (points.length - 1);
  const coords = points.map((p, i) => [i * step, h - ((p - min) / span) * (h - 6) - 3] as const);
  const line = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} L${w},${h} L0,${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-14 w-full">
      <defs>
        <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={NAVY} stopOpacity="0.35" />
          <stop offset="100%" stopColor={NAVY} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#spark)" />
      <path d={line} fill="none" stroke={NAVY} strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function AgeBar({ label, pct, count }: { label: string; pct: number; count: string }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-[11px]">
        <span className="font-semibold text-slate-700">{label}</span>
        <span className="text-slate-500">
          {count} <span className="text-slate-400">· {pct}%</span>
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${NAVY}, #4F76A8)` }}
        />
      </div>
    </div>
  );
}

function Donut({
  segments,
}: {
  segments: { label: string; value: number; color: string }[];
}) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  const r = 36;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 100 100" className="h-24 w-24 -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#EEF2F7" strokeWidth="14" />
        {segments.map((s) => {
          const len = (s.value / total) * c;
          const dash = `${len} ${c - len}`;
          const el = (
            <circle
              key={s.label}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke={s.color}
              strokeWidth="14"
              strokeDasharray={dash}
              strokeDashoffset={-offset}
            />
          );
          offset += len;
          return el;
        })}
      </svg>
      <div className="flex-1 space-y-1.5">
        {segments.map((s) => (
          <div key={s.label} className="flex items-center justify-between text-[11.5px]">
            <span className="flex items-center gap-1.5 text-slate-700">
              <span className="h-2.5 w-2.5 rounded-sm" style={{ background: s.color }} />
              {s.label}
            </span>
            <span className="font-semibold text-slate-600">
              {Math.round((s.value / total) * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LocationRow({ flag, name, pct }: { flag: string; name: string; pct: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-base leading-none">{flag}</span>
      <span className="w-24 shrink-0 text-[12px] font-semibold text-slate-700">{name}</span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full" style={{ width: `${pct * 2.5}%`, background: NAVY }} />
      </div>
      <span className="w-9 text-right text-[11px] font-bold text-slate-600">{pct}%</span>
    </div>
  );
}

function FunnelStep({
  label,
  value,
  pct,
  conv,
}: {
  label: string;
  value: string;
  pct: number;
  conv?: string;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-[11.5px]">
        <span className="font-semibold text-slate-700">{label}</span>
        <span className="text-slate-500">
          <span className="font-extrabold text-slate-900">{value}</span>
          {conv && <span className="ml-1.5 text-emerald-600">{conv}</span>}
        </span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-md bg-slate-100">
        <div
          className="h-full rounded-md"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${NAVY}, #2B4D78)`,
          }}
        />
      </div>
    </div>
  );
}

function MiniBars({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  return (
    <div className="flex h-10 items-end gap-1">
      {data.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm"
          style={{ height: `${(v / max) * 100}%`, background: color }}
        />
      ))}
    </div>
  );
}

function SponsorReport() {
  const growth = [
    18, 22, 19, 25, 28, 24, 31, 35, 33, 38, 42, 40, 45, 48, 52, 49, 55, 58, 62, 60, 64, 70, 68, 74, 78, 82, 80, 86, 90, 95,
  ];
  return (
    <div className="bg-[#F4F6FA] pb-6">
      {/* Header */}
      <div
        className="relative overflow-hidden px-5 pb-5 pt-4 text-white"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #16294A 100%)` }}
      >
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-300/15 blur-2xl" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4 rotate-180 opacity-80" />
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/60">
              Brand Report
            </span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-amber-200 ring-1 ring-amber-300/30">
            <ShieldCheck className="h-3 w-3" /> Verified
          </span>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <img
            src={sponsorLogo}
            alt=""
            className="h-11 w-11 rounded-xl object-cover ring-2 ring-amber-300/40"
          />
          <div className="min-w-0 flex-1">
            <div className="text-[15px] font-extrabold leading-tight">Wizlife</div>
            <div className="bn truncate text-[12px] text-white/70">
              Room: সুবহানাল্লাহি ওয়া বিহামদিহী
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <button className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold ring-1 ring-white/15">
            <Timer className="h-3 w-3" /> Last 30 days
            <ChevronRight className="h-3 w-3 rotate-90" />
          </button>
          <span className="text-[10.5px] text-white/55">vs prev. period</span>
        </div>
      </div>

      <div className="space-y-3 px-4 pt-4">
        {/* KPI grid */}
        <div className="grid grid-cols-2 gap-2.5">
          <KpiCard label="Total reach" value="24,380" delta={18} icon={Globe2} />
          <KpiCard label="Active members" value="1,820" delta={9} icon={Users} />
          <KpiCard label="Click-through" value="3,140" delta={22} icon={TrendingUp} />
          <KpiCard label="Sponsor visits" value="612" delta={-3} icon={Heart} />
        </div>

        {/* Growth */}
        <div className="rounded-2xl bg-white p-3.5 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Growth
              </div>
              <div className="mt-0.5 text-[18px] font-extrabold text-slate-900">
                +374 members
              </div>
            </div>
            <Delta value={26} />
          </div>
          <div className="mt-1">
            <Sparkline points={growth} />
          </div>
          <div className="mt-2 flex items-center gap-2 text-[11px]">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-700">
              <Plus className="h-3 w-3" /> 412 joined
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2 py-0.5 font-semibold text-rose-700">
              − 38 left
            </span>
            <span className="ml-auto text-[10.5px] text-slate-400">30 days</span>
          </div>
        </div>

        {/* Age */}
        <div className="rounded-2xl bg-white p-3.5 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Audience · Age
            </div>
            <span className="text-[10.5px] text-slate-400">1,820 members</span>
          </div>
          <div className="space-y-2.5">
            <AgeBar label="13–17" pct={6} count="109" />
            <AgeBar label="18–24" pct={28} count="510" />
            <AgeBar label="25–34" pct={36} count="655" />
            <AgeBar label="35–44" pct={18} count="328" />
            <AgeBar label="45–54" pct={8} count="146" />
            <AgeBar label="55+" pct={4} count="72" />
          </div>
        </div>

        {/* Gender */}
        <div className="rounded-2xl bg-white p-3.5 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Audience · Gender
            </div>
            <span className="text-[10.5px] text-slate-400">All time</span>
          </div>
          <Donut
            segments={[
              { label: "Male", value: 62, color: NAVY },
              { label: "Female", value: 34, color: "#E5A93C" },
              { label: "Other", value: 4, color: "#94A3B8" },
            ]}
          />
        </div>

        {/* Locations */}
        <div className="rounded-2xl bg-white p-3.5 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Top Locations
            </div>
            <span className="text-[10.5px] text-slate-400">By active</span>
          </div>
          <div className="space-y-2.5">
            <LocationRow flag="🇧🇩" name="Dhaka" pct={38} />
            <LocationRow flag="🇧🇩" name="Chattogram" pct={18} />
            <LocationRow flag="🇧🇩" name="Sylhet" pct={11} />
            <LocationRow flag="🇲🇾" name="Kuala Lumpur" pct={9} />
            <LocationRow flag="🇸🇦" name="Riyadh" pct={7} />
            <LocationRow flag="🇬🇧" name="London" pct={5} />
          </div>
        </div>

        {/* Funnel */}
        <div className="rounded-2xl bg-white p-3.5 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
              Engagement Funnel
            </div>
            <span className="text-[10.5px] text-slate-400">30 days</span>
          </div>
          <div className="space-y-2.5">
            <FunnelStep label="Impressions" value="24,380" pct={100} />
            <FunnelStep label="Room visits" value="6,210" pct={62} conv="25.5%" />
            <FunnelStep label="Joined room" value="2,108" pct={32} conv="33.9%" />
            <FunnelStep label="Active 7-day" value="1,420" pct={20} conv="67.4%" />
          </div>
        </div>

        {/* New vs Returning */}
        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-2xl bg-white p-3 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
            <div className="flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-wider text-slate-500">
              <Sparkles className="h-3 w-3 text-emerald-500" /> New
            </div>
            <div className="mt-1 text-[18px] font-extrabold text-slate-900">412</div>
            <div className="mt-2">
              <MiniBars data={[12, 18, 22, 17, 28, 32, 26]} color="#10B981" />
            </div>
            <div className="mt-1 text-[10px] text-slate-400">Last 7 days</div>
          </div>
          <div className="rounded-2xl bg-white p-3 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)]">
            <div className="flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-wider text-slate-500">
              <Award className="h-3 w-3 text-amber-500" /> Returning
            </div>
            <div className="mt-1 text-[18px] font-extrabold text-slate-900">1,408</div>
            <div className="mt-2">
              <MiniBars data={[120, 132, 128, 145, 138, 152, 160]} color={NAVY} />
            </div>
            <div className="mt-1 text-[10px] text-slate-400">Last 7 days</div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center gap-2 pt-1">
          <button className="flex-1 rounded-xl bg-white px-3 py-2.5 text-[12px] font-bold text-slate-700 shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)] ring-1 ring-slate-200">
            Download PDF
          </button>
          <button
            className="flex-1 rounded-xl px-3 py-2.5 text-[12px] font-extrabold text-white shadow-[0_8px_22px_-10px_rgba(15,58,95,0.6)]"
            style={{ background: NAVY }}
          >
            Share report
          </button>
        </div>
      </div>
    </div>
  );
}

export default function SponsorCards() {
  const [view, setView] = useState<"v1" | "v2" | "v3">("v2");
  return (
    <FinalSelectionProvider>
    <div className="min-h-screen bg-[#EEF2F7]">
      <div className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1800px] items-center justify-between gap-4 px-6 py-3">
          <div className="text-sm font-semibold text-slate-900">Zikr Rooms — Sponsor Design</div>
          <div className="inline-flex rounded-full bg-slate-100 p-1 text-[12px] font-semibold">
            <button
              onClick={() => setView("v1")}
              className={`rounded-full px-4 py-1.5 transition ${view === "v1" ? "bg-white text-slate-900 shadow" : "text-slate-500"}`}
            >
              V1 · Exploration
            </button>
            <button
              onClick={() => setView("v2")}
              className={`rounded-full px-4 py-1.5 transition ${view === "v2" ? "bg-slate-900 text-white shadow" : "text-slate-500"}`}
            >
              V2 · Flow-wise ▸
            </button>
            <button
              onClick={() => setView("v3")}
              className={`rounded-full px-4 py-1.5 transition ${view === "v3" ? "bg-amber-500 text-white shadow" : "text-slate-500"}`}
            >
              ★ V3 · Final
            </button>
          </div>
        </div>
      </div>
      <div className="px-6 py-10">
      <div className="mx-auto max-w-[1800px]">
        {view === "v2" && <V2FlowDeck />}
        {view === "v3" && (
          <FinalSelectionSection PhoneShell={PhoneShell} DetailShell={DetailShell} ChannelShell={ChannelShell} />
        )}
        {/* V1 is always mounted (hidden when inactive) so the Final registry stays populated */}
        <div className={view === "v1" ? "" : "hidden"}>
        <SectionNav />
        <header id="sec-sponsored" className="mb-8 scroll-mt-24 text-center">
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
              {!v.fullCustom && <NormalRoomCard />}
              {v.bannerMid}
              {!v.fullCustom && <NormalRoomCard />}
            </PhoneFrame>
          ))}
        </div>

        <header id="sec-room-detail" className="mt-20 mb-8 scroll-mt-24 text-center">
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

        <header id="sec-home" className="mt-20 mb-8 scroll-mt-24 text-center">
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

        <header id="sec-admin" className="mt-20 mb-8 scroll-mt-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Admin · Create Featured Room</h1>
          <p className="mt-1 text-sm text-slate-500">
            Redesigned admin flow — all required fields organised into clear sections with a live preview.
          </p>
        </header>
        <AdminCreateRoom />

        <header id="sec-admin-channel" className="mt-20 mb-8 scroll-mt-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Admin · Create Channel <span className="bn text-slate-500">— চ্যানেল তৈরি</span></h1>
          <p className="mt-1 text-sm text-slate-500">
            Permanent zikr channels. Optional prize, sponsor branding, and a 400×90 banner shown across the channel.
          </p>
        </header>
        <AdminCreateChannel />

        <header id="sec-create-room-v2" className="mt-20 mb-8 scroll-mt-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Create Room · V2 <span className="bn text-slate-500">— রুম তৈরি (চ্যানেলের অধীনে)</span></h1>
          <p className="mt-1 text-sm text-slate-500">
            A room lives <b>inside a channel</b>. User picks a channel (not a zikr) — the channel already defines the zikr.
          </p>
        </header>
        <div className="flex flex-wrap justify-center gap-8">
          <DetailFrame label="V2 · Create room under a channel"><H6CreateRoomV2 /></DetailFrame>
        </div>

        <header id="sec-lb-variants" className="mt-20 mb-8 scroll-mt-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Room Leaderboard — Design Variants</h1>
          <p className="mt-1 text-sm text-slate-500">
            Four directions for ranking + weekly winners hall of fame.
          </p>
        </header>
        <div className="flex flex-wrap justify-center gap-8">
          <DetailFrame label="LB 1 · Podium + Weekly Tabs"><LeaderboardV1 /></DetailFrame>
          <DetailFrame label="LB 2 · Hall of Fame Carousel"><LeaderboardV2 /></DetailFrame>
          <DetailFrame label="LB 3 · Dark Stadium + Streaks"><LeaderboardV3 /></DetailFrame>
          <DetailFrame label="LB 4 · Timeline of Champions"><LeaderboardV4 /></DetailFrame>
          <DetailFrame label="LB 5 · Lifetime + Competition Toggle"><LeaderboardV5 /></DetailFrame>
        </div>

        <header id="sec-lb-organic" className="mt-20 mb-8 scroll-mt-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Room Leaderboard — Organic vs Running Session</h1>
          <p className="mt-1 text-sm text-slate-500">
            Two contexts: <b>Organic</b> (no sponsor — lifetime zikr, streaks, community pride) and <b>Running Session</b> (active sponsored season — countdown, prize tiers, live rank).
          </p>
        </header>
        <div className="flex flex-wrap justify-center gap-8">
          <DetailFrame label="Organic A · Lifetime Counter"><LBOrganicA /></DetailFrame>
          <DetailFrame label="Organic B · Streak Community"><LBOrganicB /></DetailFrame>
          <DetailFrame label="Running A · Live Prize Race"><LBRunningA /></DetailFrame>
          <DetailFrame label="Running B · Tiered Podium + Countdown"><LBRunningB /></DetailFrame>
        </div>

        <header id="sec-channel-cards" className="mt-20 mb-8 scroll-mt-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Channel Card — Variants <span className="bn text-slate-500">— চ্যানেল কার্ড</span></h1>
          <p className="mt-1 text-sm text-slate-500">
            Wide horizontal cards for the <b>Featured / Public / My Rooms</b> tabs. Navy · white · gold palette. ~400px wide, varying heights.
          </p>
        </header>
        <div className="mx-auto flex max-w-[460px] flex-col gap-5">
          <ChannelVariantFrame label="V1 · Classic navy + gold rail"><ChannelCardV1 /></ChannelVariantFrame>
          <ChannelVariantFrame label="V2 · Light glass · navy text"><ChannelCardV2 /></ChannelVariantFrame>
          <ChannelVariantFrame label="V3 · Split · icon panel + stats"><ChannelCardV3 /></ChannelVariantFrame>
          <ChannelVariantFrame label="V4 · Wide stat · sparkline"><ChannelCardV4 /></ChannelVariantFrame>
          <ChannelVariantFrame label="V5 · Outlined minimal"><ChannelCardV5 /></ChannelVariantFrame>
          <ChannelVariantFrame label="V6 · Sponsored / Featured"><ChannelCardV6 /></ChannelVariantFrame>

          <div className="mt-6 mb-1 text-center">
            <div className="bn text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Seasonal &amp; Amal-fitted Channels — মৌসুমী / আমল-ভিত্তিক
            </div>
            <p className="mt-1 text-[11px] text-slate-400">
              Time-bound channels with curated amals: Zilhajj, Ramadan, weekly &amp; nightly.
            </p>
          </div>
          <ChannelVariantFrame label="V7 · Zilhajj Special · 10 days + Takbir"><ChannelCardV7 /></ChannelVariantFrame>
          <ChannelVariantFrame label="V8 · Ramadan Special · Tarawih + Qiyam"><ChannelCardV8 /></ChannelVariantFrame>
          <ChannelVariantFrame label="V9 · Jumu'ah Special · Durood weekly"><ChannelCardV9 /></ChannelVariantFrame>
          <ChannelVariantFrame label="V10 · Tahajjud · Last third nightly"><ChannelCardV10 /></ChannelVariantFrame>
        </div>

        <header id="sec-flow0" className="mt-20 mb-8 scroll-mt-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Flow 0 · Channel → Room hierarchy <span className="bn text-slate-500">— চ্যানেল → রুম কাঠামো</span></h1>
          <p className="mt-1 text-sm text-slate-500">
            How a zikr <b>Channel</b> contains many <b>Rooms</b>, and how a <b>Season</b> lives inside a room. Each room rolls up into the channel's lifetime total.
          </p>
        </header>
        <div className="flex flex-wrap justify-center gap-8">
          <DetailFrame label="0.1 · Home · Channel grid"><H1ChannelGrid /></DetailFrame>
          <DetailFrame label="0.2 · Channel detail · Rooms"><H2ChannelDetail /></DetailFrame>
          <DetailFrame label="0.3 · Channel global leaderboard"><H3ChannelLB /></DetailFrame>
          <DetailFrame label="0.4 · Room · Worldwide (dormant)"><H4RoomDormant /></DetailFrame>
          <DetailFrame label="0.5 · Room · Family (active season)"><H5RoomLive /></DetailFrame>
          <DetailFrame label="0.6 · Create room sheet"><H6CreateRoom /></DetailFrame>
        </div>

        <header id="sec-lb-flow" className="mt-20 mb-8 scroll-mt-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Leaderboard Flow — User Journey</h1>
          <p className="mt-1 text-sm text-slate-500">
            What happens when a member taps the <b>Leaderboard</b> button — across organic, running session, and post-session states. Step-by-step.
          </p>
        </header>
        <div className="flex flex-wrap justify-center gap-8">
          <DetailFrame label="① Tap · Leaderboard CTA"><LBFlow1 /></DetailFrame>
          <DetailFrame label="② Organic · Combined lifetime"><LBFlow2 /></DetailFrame>
          <DetailFrame label="③ Session live · Session tab (default)"><LBFlow3 /></DetailFrame>
          <DetailFrame label="④ Session live · Switch to Lifetime"><LBFlow4 /></DetailFrame>
          <DetailFrame label="⑤ History · Past seasons list"><LBFlow5 /></DetailFrame>
          <DetailFrame label="⑥ History · Single season recap"><LBFlow6 /></DetailFrame>
        </div>

        <header id="sec-sponsor-channel" className="mt-20 mb-8 scroll-mt-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Sponsor Channel / Profile — Variants</h1>
          <p className="mt-1 text-sm text-slate-500">
            Tapping a sponsor banner opens a channel page (YouTube-style) with bio, stats, and all rooms by that sponsor.
          </p>
        </header>
        <div className="flex flex-wrap justify-center gap-8">
          <DetailFrame label="Sponsor 1 · YouTube-style Channel"><SponsorChannelV1 /></DetailFrame>
          <DetailFrame label="Sponsor 2 · Premium Brand Page"><SponsorChannelV2 /></DetailFrame>
          <DetailFrame label="Sponsor 3 · Magazine / Editorial"><SponsorChannelV3 /></DetailFrame>
        </div>

        <header id="sec-analytics" className="mt-20 mb-8 scroll-mt-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Sponsor Analytics — Brand Report</h1>
          <p className="mt-1 text-sm text-slate-500">
            Report the app owner shows to a sponsor brand for their aligned room — demographics, engagement, growth.
          </p>
        </header>
        <div className="flex flex-wrap justify-center gap-8">
          <DetailFrame label="R1 · Sponsor Brand Report"><SponsorReport /></DetailFrame>
        </div>
        </div>
      </div>
      </div>
    </div>
    </FinalSelectionProvider>
  );
}


/* ================================================================== */
/*  ROOM DETAILS PAGE VARIANTS                                        */
/* ================================================================== */

function DetailFrame({ children, label }: { children: React.ReactNode; label: string }) {
  const captureRef = React.useRef<HTMLDivElement>(null);
  const inner = (
    <div className="w-[360px] overflow-hidden rounded-[28px] bg-[#F4F6FA] shadow-[0_24px_60px_-20px_rgba(15,23,42,0.35)] ring-1 ring-black/5">
      {children}
    </div>
  );
  useRegisterFrame(`detail:${label}`, "detail", label, inner);
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex w-full items-center justify-between gap-2">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </div>
        <div className="flex items-center gap-1.5">
          <CopyButtons targetRef={captureRef} />
          <ExportButton targetRef={captureRef} label={label} />
          <PickButton frameKey={`detail:${label}`} />
        </div>
      </div>
      <div ref={captureRef}>{inner}</div>
    </div>
  );
}

function DetailShell({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
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

/* ================================================================== */
/*  ADMIN — CREATE FEATURED / SPONSORED ROOM                          */
/* ================================================================== */

function Field({ label, hint, required, children }: { label: string; hint?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1 flex items-center justify-between text-[12px] font-semibold text-slate-700">
        <span>{label}{required && <span className="ml-0.5 text-rose-500">*</span>}</span>
        {hint && <span className="text-[10.5px] font-normal text-slate-400">{hint}</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls = "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/15";

function FormCard({ title, icon, desc, children }: { title: string; icon: React.ReactNode; desc?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-3 border-b border-slate-100 pb-3">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-50 text-emerald-700">{icon}</span>
        <div>
          <h3 className="text-[14px] font-bold text-slate-900">{title}</h3>
          {desc && <p className="text-[11.5px] text-slate-500">{desc}</p>}
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function AdminCreateRoom() {
  const steps = [
    { n: 1, l: "Basic Info", done: true },
    { n: 2, l: "Branding & Sponsor", done: true },
    { n: 3, l: "Rewards & Prizes", active: true },
    { n: 4, l: "Eligibility & Rules" },
    { n: 5, l: "Schedule & Publish" },
  ];

  return (
    <div className="mx-auto w-full max-w-[1200px] rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
      {/* Top bar */}
      <div className="mb-6 flex items-center justify-between rounded-2xl bg-white p-4 ring-1 ring-slate-200">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700">Admin · New Featured Room</div>
          <h2 className="text-[20px] font-bold text-slate-900">Create a Sponsored Zikr Room</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-[12px] font-semibold text-slate-700 hover:bg-slate-50">Save Draft</button>
          <button className="rounded-lg bg-emerald-600 px-4 py-1.5 text-[12px] font-semibold text-white hover:bg-emerald-700">Preview</button>
          <button className="rounded-lg bg-slate-900 px-4 py-1.5 text-[12px] font-semibold text-white">Publish</button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Stepper */}
        <aside className="col-span-3">
          <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
            <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-500">Setup Progress</div>
            <ol className="space-y-1">
              {steps.map((s) => (
                <li key={s.n}
                    className={`flex items-center gap-3 rounded-lg px-2.5 py-2 text-[12.5px] ${s.active ? "bg-emerald-50 text-emerald-800 font-semibold" : "text-slate-600"}`}>
                  <span className={`grid h-6 w-6 place-items-center rounded-full text-[11px] font-bold ${s.done ? "bg-emerald-600 text-white" : s.active ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                    {s.done ? "✓" : s.n}
                  </span>
                  {s.l}
                </li>
              ))}
            </ol>
            <div className="mt-4 rounded-lg bg-emerald-50 p-3 text-[11px] text-emerald-800">
              💡 You can save as draft anytime. Room goes live only after publish.
            </div>
          </div>
        </aside>

        {/* Form */}
        <div className="col-span-6 space-y-5">
          <FormCard title="Basic Info" icon={<BookOpen className="h-4 w-4" />} desc="Core details users will see in the room list.">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Room Name" required hint="Max 60 chars">
                <input className={inputCls} placeholder="Daily Zikr Challenge" />
              </Field>
              <Field label="Room Slug" hint="Auto-generated">
                <input className={inputCls} placeholder="daily-zikr-challenge" />
              </Field>
            </div>
            <Field label="Zikr Type" required>
              <select className={inputCls}>
                <option>Subhanallah</option>
                <option>Alhamdulillah</option>
                <option>Allahu Akbar</option>
                <option>Astaghfirullah</option>
                <option>Custom</option>
              </select>
            </Field>
            <Field label="Arabic Text" required>
              <input className={`${inputCls} bn text-right`} placeholder="سُبْحَانَ اللّٰه" dir="rtl" />
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Bangla Translation"><input className={inputCls} placeholder="আমি আল্লাহর প্রশংসা করি" /></Field>
              <Field label="English Translation"><input className={inputCls} placeholder="Glory be to Allah" /></Field>
            </div>
            <Field label="Description" hint="Max 300 chars">
              <textarea rows={3} className={inputCls} placeholder="Short description shown on room detail screen..." />
            </Field>
            <div className="grid grid-cols-3 gap-3">
              <Field label="Count Type" required>
                <select className={inputCls}><option>Fixed Target</option><option>Open / Unlimited</option><option>Time-bound</option></select>
              </Field>
              <Field label="Daily Goal" required><input type="number" className={inputCls} placeholder="100" /></Field>
              <Field label="Total Target"><input type="number" className={inputCls} placeholder="10,000" /></Field>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Field label="Duration (days)" required><input type="number" className={inputCls} placeholder="30" /></Field>
              <Field label="Visibility" required>
                <select className={inputCls}><option>Public</option><option>Private (invite)</option><option>Featured</option></select>
              </Field>
              <Field label="Room Scope">
                <select className={inputCls}><option>Global</option><option>Country</option><option>City</option></select>
              </Field>
            </div>
            <Field label="Target Country / Region">
              <select className={inputCls}><option>Bangladesh</option><option>Indonesia</option><option>Saudi Arabia</option><option>Worldwide</option></select>
            </Field>
          </FormCard>

          <FormCard title="Branding & Sponsor" icon={<ShieldCheck className="h-4 w-4" />} desc="Sponsor identity and branding shown on the room.">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Presented By" required><input className={inputCls} placeholder="As Sunnah" /></Field>
              <Field label="Sponsored By" required><input className={inputCls} placeholder="WafiLife" /></Field>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Sponsor Logo" required hint="PNG/SVG · max 2 MB">
                <div className="flex h-[42px] items-center gap-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3 text-[12px] text-slate-500">
                  <span className="grid h-7 w-7 place-items-center rounded bg-white ring-1 ring-slate-200">⬆</span>
                  Click to upload or drag & drop
                </div>
              </Field>
              <Field label="Cover / Banner Image" hint="16:9 recommended">
                <div className="flex h-[42px] items-center gap-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3 text-[12px] text-slate-500">
                  <span className="grid h-7 w-7 place-items-center rounded bg-white ring-1 ring-slate-200">🖼</span>
                  Upload banner
                </div>
              </Field>
            </div>
            <Field label="Banner Slider Images" hint="Up to 5 images for in-room slider">
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="grid h-16 w-24 place-items-center rounded-lg bg-slate-100 text-[11px] text-slate-400 ring-1 ring-slate-200">Slide {i}</div>
                ))}
                <button className="grid h-16 w-24 place-items-center rounded-lg border-2 border-dashed border-slate-300 text-slate-400">+ Add</button>
              </div>
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Sponsor Website"><input className={inputCls} placeholder="https://wafilife.com" /></Field>
              <Field label="CTA Button Text"><input className={inputCls} placeholder="Visit Sponsor" /></Field>
            </div>
            <Field label="Brand Color"><div className="flex items-center gap-2"><input type="color" defaultValue="#1F3A5F" className="h-10 w-14 cursor-pointer rounded-lg border border-slate-200" /><input className={inputCls} defaultValue="#1F3A5F" /></div></Field>
            <Field label="Sponsor Note (optional)" hint="Shown as a small caption">
              <textarea rows={2} className={inputCls} placeholder="A message from the sponsor..." />
            </Field>
            <label className="flex items-center gap-2 text-[12px] text-slate-700"><input type="checkbox" defaultChecked className="h-4 w-4 accent-emerald-600" /> Show "Verified sponsor" badge</label>
          </FormCard>

          <FormCard title="Rewards & Prizes" icon={<Trophy className="h-4 w-4" />} desc="Configure the prize pool and per-rank breakdown.">
            <div className="grid grid-cols-3 gap-3">
              <Field label="Total Prize Money" required>
                <div className="flex"><input type="number" className={`${inputCls} rounded-r-none`} placeholder="100000" /><select className="rounded-r-lg border border-l-0 border-slate-200 bg-slate-50 px-2 text-[12px]"><option>BDT</option><option>USD</option></select></div>
              </Field>
              <Field label="Prize Type" required>
                <select className={inputCls}><option>Cash</option><option>Voucher</option><option>Product</option><option>Mixed</option></select>
              </Field>
              <Field label="Number of Winners" required><input type="number" className={inputCls} placeholder="10" /></Field>
            </div>
            <Field label="Distribution Method">
              <div className="grid grid-cols-3 gap-2 text-[12px]">
                {["Top N rank", "Lottery", "Threshold"].map((x, i) => (
                  <label key={x} className={`flex items-center gap-2 rounded-lg border px-3 py-2 cursor-pointer ${i === 0 ? "border-emerald-600 bg-emerald-50 text-emerald-800" : "border-slate-200 text-slate-600"}`}>
                    <input type="radio" name="dist" defaultChecked={i === 0} className="accent-emerald-600" />
                    {x}
                  </label>
                ))}
              </div>
            </Field>
            <Field label="Prize Breakdown" hint="Per-rank reward">
              <div className="space-y-2">
                {[{ r: "1st", v: "50,000" }, { r: "2nd", v: "30,000" }, { r: "3rd", v: "10,000" }].map((p) => (
                  <div key={p.r} className="grid grid-cols-12 gap-2">
                    <input className={`${inputCls} col-span-2 text-center`} defaultValue={p.r} />
                    <input className={`${inputCls} col-span-7`} defaultValue={`৳${p.v}`} />
                    <select className={`${inputCls} col-span-2`}><option>Cash</option><option>Voucher</option></select>
                    <button className="col-span-1 rounded-lg text-slate-400 hover:text-rose-500">✕</button>
                  </div>
                ))}
                <button className="text-[12px] font-semibold text-emerald-700">+ Add Prize Rule</button>
              </div>
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Prize Distribution Date" required><input type="date" className={inputCls} /></Field>
              <Field label="Payout Method"><select className={inputCls}><option>bKash</option><option>Nagad</option><option>Bank Transfer</option><option>Manual</option></select></Field>
            </div>
            <label className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2.5 text-[12px] text-slate-700">
              <span>Prize Derbitary <span className="text-slate-400">(allow sponsor to override)</span></span>
              <span className="relative inline-flex h-5 w-9 cursor-pointer items-center rounded-full bg-emerald-600"><span className="inline-block h-4 w-4 translate-x-4 rounded-full bg-white" /></span>
            </label>
          </FormCard>

          <FormCard title="Eligibility & Rules" icon={<ShieldCheck className="h-4 w-4" />} desc="Who can join and rules they must follow.">
            <Field label="Who Can Join" required>
              <div className="space-y-1.5 text-[12.5px] text-slate-700">
                {["Must complete profile", "Must verify email", "Must verify phone", "Must upload profile photo", "Minimum account age (7 days)"].map((x, i) => (
                  <label key={x} className="flex items-center gap-2"><input type="checkbox" defaultChecked={i < 3} className="h-4 w-4 accent-emerald-600" /> {x}</label>
                ))}
              </div>
            </Field>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Minimum Age"><input type="number" className={inputCls} placeholder="13" /></Field>
              <Field label="Max Participants"><input type="number" className={inputCls} placeholder="No limit" /></Field>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Country Restriction"><select className={inputCls}><option>Anyone</option><option>Bangladesh only</option><option>Whitelist countries</option></select></Field>
              <Field label="Anti-Cheat Level"><select className={inputCls}><option>Standard</option><option>Strict (motion + tap)</option><option>Manual review</option></select></Field>
            </div>
            <Field label="Terms & Conditions URL"><input className={inputCls} placeholder="https://..." /></Field>
          </FormCard>

          <FormCard title="Schedule & Publish" icon={<Timer className="h-4 w-4" />} desc="When the room opens and how it's promoted.">
            <div className="grid grid-cols-2 gap-3">
              <Field label="Start Date & Time" required><input type="datetime-local" className={inputCls} /></Field>
              <Field label="End Date & Time" required><input type="datetime-local" className={inputCls} /></Field>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Time Zone"><select className={inputCls}><option>Asia/Dhaka (GMT+6)</option><option>UTC</option></select></Field>
              <Field label="Featured Priority" hint="Higher = top of feed"><input type="number" className={inputCls} placeholder="10" /></Field>
            </div>
            <div className="space-y-1.5 text-[12.5px] text-slate-700">
              {["Pin to Featured tab", "Send push notification at launch", "Show on home banner slider", "Allow social sharing"].map((x, i) => (
                <label key={x} className="flex items-center gap-2"><input type="checkbox" defaultChecked={i < 3} className="h-4 w-4 accent-emerald-600" /> {x}</label>
              ))}
            </div>
          </FormCard>

          <div className="sticky bottom-4 flex items-center justify-between rounded-2xl bg-white p-3 ring-1 ring-slate-200 shadow-lg">
            <button className="text-[12.5px] font-semibold text-slate-500 hover:text-slate-700">← Back</button>
            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-[12px] font-semibold text-slate-700">Save Draft</button>
              <button className="rounded-lg bg-emerald-600 px-4 py-1.5 text-[12px] font-semibold text-white">Next: Eligibility →</button>
            </div>
          </div>
        </div>

        {/* Live preview */}
        <aside className="col-span-3">
          <div className="sticky top-4 rounded-2xl bg-white p-3 ring-1 ring-slate-200">
            <div className="mb-2 flex items-center justify-between px-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Live Preview</div>
              <span className="text-[10px] text-emerald-700">As users see it</span>
            </div>
            <div className="overflow-hidden rounded-2xl bg-[#F4F6FA] p-2 ring-1 ring-slate-100">
              <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="flex items-center justify-between px-3 py-2 text-white" style={{ background: NAVY }}>
                  <div className="flex items-center gap-2">
                    <img src={sponsorLogo} alt="" className="h-5 w-5 rounded-full ring-1 ring-white/30" />
                    <div className="leading-tight">
                      <div className="text-[8px] uppercase tracking-wider text-white/60">Sponsored by</div>
                      <div className="text-[11px] font-bold">WafiLife</div>
                    </div>
                  </div>
                  <span className="rounded-full bg-amber-300 px-1.5 py-0.5 text-[9px] font-extrabold text-amber-950">৳1,00,000</span>
                </div>
                <div className="p-3">
                  <div className="bn truncate text-[12.5px] font-bold text-slate-900">Daily Zikr Challenge</div>
                  <div className="bn mt-0.5 text-[10px] text-slate-500">سُبْحَانَ اللّٰه · 100/day</div>
                  <div className="mt-2 flex items-center gap-3 text-[10px] text-slate-500">
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> 16</span>
                    <span className="flex items-center gap-1"><Flag className="h-3 w-3" /> 100/d</span>
                    <span className="flex items-center gap-1"><Timer className="h-3 w-3" /> 30d</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 space-y-2 text-[11px]">
              <div className="rounded-lg bg-slate-50 p-2.5">
                <div className="text-[10px] uppercase tracking-wider text-slate-500">Validation</div>
                <div className="mt-1 space-y-0.5 text-slate-700">
                  <div className="flex items-center gap-1.5 text-emerald-700">✓ Basic info complete</div>
                  <div className="flex items-center gap-1.5 text-emerald-700">✓ Sponsor branded</div>
                  <div className="flex items-center gap-1.5 text-amber-700">⚠ Eligibility pending</div>
                  <div className="flex items-center gap-1.5 text-slate-400">○ Schedule</div>
                </div>
              </div>
              <div className="rounded-lg bg-emerald-50 p-2.5 text-emerald-800">
                <div className="font-semibold">Estimated reach</div>
                <div className="mt-0.5 text-[10.5px]">~12,400 active users in Bangladesh</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  ROOM LEADERBOARD VARIANTS                                         */
/* ================================================================== */

const LB_PLAYERS = [
  { name: "Abdullah R.", count: 12480, avatar: "AR", country: "🇧🇩", streak: 18 },
  { name: "Fatima Z.",   count: 11920, avatar: "FZ", country: "🇸🇦", streak: 22 },
  { name: "Yusuf K.",    count: 10870, avatar: "YK", country: "🇹🇷", streak: 14 },
  { name: "Aisha M.",    count: 9640,  avatar: "AM", country: "🇲🇾", streak: 9  },
  { name: "Bilal H.",    count: 9120,  avatar: "BH", country: "🇵🇰", streak: 11 },
  { name: "Maryam S.",   count: 8550,  avatar: "MS", country: "🇮🇩", streak: 7  },
  { name: "Omar T.",     count: 8210,  avatar: "OT", country: "🇪🇬", streak: 5  },
  { name: "Layla A.",    count: 7890,  avatar: "LA", country: "🇦🇪", streak: 12 },
];

const WEEKLY_WINNERS = [
  { week: "Week 18 · Apr 28 – May 4", name: "Abdullah R.",  count: 48210, prize: "৳5,000",  avatar: "AR" },
  { week: "Week 17 · Apr 21 – Apr 27", name: "Fatima Z.",    count: 46980, prize: "৳5,000",  avatar: "FZ" },
  { week: "Week 16 · Apr 14 – Apr 20", name: "Yusuf K.",     count: 44120, prize: "৳5,000",  avatar: "YK" },
  { week: "Week 15 · Apr 7 – Apr 13",  name: "Maryam S.",    name2: "Maryam", count: 41560, prize: "৳5,000", avatar: "MS" },
];

/* ---------- Variant 1: Podium + Weekly Tabs ---------- */
function LeaderboardV1() {
  const [tab, setTab] = useState<"this" | "last" | "all">("this");
  const top3 = LB_PLAYERS.slice(0, 3);
  const rest = LB_PLAYERS.slice(3);
  return (
    <div className="bg-white">
      <div style={{ background: NAVY }} className="px-5 pb-6 pt-4 text-white">
        <div className="flex items-center justify-between text-[11px]">
          <ChevronRight className="h-4 w-4 rotate-180" />
          <span className="font-semibold">Leaderboard</span>
          <Trophy className="h-4 w-4" />
        </div>
        <div className="mt-2 text-center">
          <div className="text-[13px] opacity-80">Astaghfirullah Room</div>
          <div className="text-[18px] font-bold">Weekly Champions</div>
          <div className="mt-1 text-[10.5px] opacity-70">Resets in 2d 14h · Prize ৳5,000</div>
        </div>
        <div className="mt-4 grid grid-cols-3 items-end gap-2">
          {[1,0,2].map((i) => {
            const p = top3[i];
            const isFirst = i === 0;
            return (
              <div key={p.name} className="flex flex-col items-center">
                <div className={`relative flex items-center justify-center rounded-full bg-white text-slate-900 font-bold ring-2 ${isFirst ? "h-14 w-14 text-base ring-amber-300" : "h-11 w-11 text-sm ring-white/40"}`}>
                  {p.avatar}
                  {isFirst && <Crown className="absolute -top-3 h-4 w-4 text-amber-300" fill="currentColor" />}
                </div>
                <div className="mt-1 truncate text-[11px] font-semibold">{p.name.split(" ")[0]}</div>
                <div className="text-[10px] opacity-70">{p.count.toLocaleString()}</div>
                <div className={`mt-1 w-full rounded-t-md ${isFirst ? "h-12 bg-amber-300" : "h-7 bg-white/25"} flex items-center justify-center text-[11px] font-bold ${isFirst ? "text-slate-900" : ""}`}>
                  {i + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-4 pb-6 pt-4">
        <div className="flex rounded-full bg-slate-100 p-1 text-[11px] font-semibold">
          {[["this","This Week"],["last","Last Week"],["all","All Time"]].map(([k,l]) => (
            <button key={k} onClick={() => setTab(k as any)} className={`flex-1 rounded-full px-3 py-1.5 ${tab===k?"bg-white text-slate-900 shadow":"text-slate-500"}`}>{l}</button>
          ))}
        </div>
        <div className="mt-3 space-y-1.5">
          {rest.map((p, i) => (
            <div key={p.name} className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2">
              <div className="w-5 text-center text-[12px] font-bold text-slate-400">{i + 4}</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-[11px] font-bold text-slate-700">{p.avatar}</div>
              <div className="flex-1 truncate text-[12px] font-semibold text-slate-800">{p.name} <span className="ml-1">{p.country}</span></div>
              <div className="text-[11px] font-bold text-slate-700">{p.count.toLocaleString()}</div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-3 rounded-xl bg-emerald-50 px-3 py-2 ring-1 ring-emerald-200">
          <div className="w-5 text-center text-[12px] font-bold text-emerald-700">42</div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">YOU</div>
          <div className="flex-1 text-[12px] font-semibold text-emerald-900">Your rank · 4,210</div>
          <TrendingUp className="h-3.5 w-3.5 text-emerald-700" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Variant 2: Hall of Fame Carousel ---------- */
function LeaderboardV2() {
  return (
    <div className="bg-[#FAFAF7]">
      <div className="px-5 pb-3 pt-4">
        <div className="flex items-center justify-between text-[12px] font-semibold text-slate-700">
          <ChevronRight className="h-4 w-4 rotate-180" />
          <span>Leaderboard</span>
          <Bell className="h-4 w-4" />
        </div>
      </div>

      {/* Hall of fame */}
      <div className="px-4">
        <div className="flex items-center justify-between">
          <div className="text-[13px] font-bold text-slate-900">🏆 Hall of Fame</div>
          <span className="text-[10.5px] text-slate-500">Weekly Winners</span>
        </div>
        <div className="mt-2 -mx-4 overflow-x-auto px-4 pb-2">
          <div className="flex gap-3">
            {WEEKLY_WINNERS.map((w) => (
              <div key={w.week} className="w-[180px] shrink-0 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 p-3 ring-1 ring-amber-200">
                <div className="text-[9.5px] font-semibold uppercase tracking-wider text-amber-800">{w.week.split(" · ")[0]}</div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-[12px] font-bold text-white ring-2 ring-white">{w.avatar}</div>
                  <div>
                    <div className="text-[12px] font-bold text-slate-900">{w.name}</div>
                    <div className="text-[10px] text-slate-600">{w.count.toLocaleString()} zikr</div>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between rounded-lg bg-white/60 px-2 py-1">
                  <span className="text-[10px] text-slate-600">Prize</span>
                  <span className="text-[11px] font-bold text-amber-700">{w.prize}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live ranking */}
      <div className="mt-2 px-4 pb-6">
        <div className="flex items-center justify-between">
          <div className="text-[13px] font-bold text-slate-900">Live Ranking</div>
          <div className="flex items-center gap-1 text-[10px] text-emerald-600">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            this week
          </div>
        </div>
        <div className="mt-2 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100">
          {LB_PLAYERS.slice(0, 6).map((p, i) => {
            const max = LB_PLAYERS[0].count;
            const pct = (p.count / max) * 100;
            return (
              <div key={p.name} className="relative flex items-center gap-3 border-b border-slate-50 px-3 py-2.5 last:border-0">
                <div className={`w-6 text-center text-[12px] font-bold ${i<3?"text-amber-500":"text-slate-400"}`}>{i+1}</div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-700">{p.avatar}</div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[12px] font-semibold text-slate-800">{p.name}</div>
                  <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500" style={{ width: `${pct}%` }} />
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11.5px] font-bold text-slate-900">{p.count.toLocaleString()}</div>
                  <div className="text-[9px] text-slate-400">🔥 {p.streak}d</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ---------- Variant 3: Dark Stadium + Streaks ---------- */
function LeaderboardV3() {
  return (
    <div className="bg-[#0B1B36] text-white">
      <div className="px-5 pb-4 pt-4">
        <div className="flex items-center justify-between text-[12px]">
          <ChevronRight className="h-4 w-4 rotate-180" />
          <span className="font-semibold">Stadium</span>
          <Award className="h-4 w-4 text-amber-300" />
        </div>
      </div>

      {/* Champion spotlight */}
      <div className="mx-4 rounded-2xl bg-gradient-to-br from-amber-400/20 to-transparent p-4 ring-1 ring-amber-300/30">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-400 text-[16px] font-bold text-slate-900">AR</div>
            <Crown className="absolute -top-2 -right-2 h-5 w-5 text-amber-300" fill="currentColor" />
          </div>
          <div className="flex-1">
            <div className="text-[10px] uppercase tracking-wider text-amber-300">Reigning Champion</div>
            <div className="text-[15px] font-bold">Abdullah R. 🇧🇩</div>
            <div className="mt-0.5 text-[10.5px] text-white/70">3 weeks in a row · 18 day streak</div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-white/5 py-1.5">
            <div className="text-[9px] text-white/60">Total</div>
            <div className="text-[11px] font-bold">142K</div>
          </div>
          <div className="rounded-lg bg-white/5 py-1.5">
            <div className="text-[9px] text-white/60">Best Day</div>
            <div className="text-[11px] font-bold">8,420</div>
          </div>
          <div className="rounded-lg bg-white/5 py-1.5">
            <div className="text-[9px] text-white/60">Won</div>
            <div className="text-[11px] font-bold text-amber-300">৳15K</div>
          </div>
        </div>
      </div>

      {/* Weekly winners strip */}
      <div className="mt-4 px-4">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60">Past Weeks</div>
        <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
          {WEEKLY_WINNERS.map((w, i) => (
            <div key={w.week} className="w-[120px] shrink-0 rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
              <div className="text-[9px] text-white/50">W{18 - i}</div>
              <div className="mt-1 flex items-center gap-1.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-slate-900">{w.avatar}</div>
                <div>
                  <div className="text-[10.5px] font-semibold leading-tight">{w.name.split(" ")[0]}</div>
                  <div className="text-[9px] text-amber-300">{w.prize}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ranking */}
      <div className="mt-4 px-4 pb-6">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-semibold uppercase tracking-wider text-white/60">This Week</span>
          <span className="text-white/50">2d 14h left</span>
        </div>
        <div className="mt-2 space-y-1.5">
          {LB_PLAYERS.slice(0, 6).map((p, i) => (
            <div key={p.name} className={`flex items-center gap-3 rounded-xl px-3 py-2 ${i<3?"bg-amber-400/10 ring-1 ring-amber-300/20":"bg-white/5"}`}>
              <div className={`flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-bold ${i===0?"bg-amber-400 text-slate-900":i===1?"bg-slate-300 text-slate-900":i===2?"bg-amber-700 text-white":"bg-white/10 text-white/70"}`}>{i+1}</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[10.5px] font-bold">{p.avatar}</div>
              <div className="flex-1 truncate text-[12px] font-semibold">{p.name}</div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-orange-300">🔥{p.streak}</span>
                <span className="text-[11.5px] font-bold">{(p.count/1000).toFixed(1)}K</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Variant 4: Timeline of Champions ---------- */
function LeaderboardV4() {
  const [view, setView] = useState<"now" | "history">("now");
  return (
    <div className="bg-white">
      <div className="px-5 pb-3 pt-4">
        <div className="flex items-center justify-between">
          <ChevronRight className="h-4 w-4 rotate-180 text-slate-700" />
          <div className="text-[13px] font-bold text-slate-900">Leaderboard</div>
          <Trophy className="h-4 w-4 text-amber-500" />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-1 rounded-xl bg-slate-100 p-1 text-[11px] font-semibold">
          <button onClick={() => setView("now")} className={`rounded-lg py-1.5 ${view==="now"?"bg-white text-slate-900 shadow":"text-slate-500"}`}>Current Week</button>
          <button onClick={() => setView("history")} className={`rounded-lg py-1.5 ${view==="history"?"bg-white text-slate-900 shadow":"text-slate-500"}`}>Champions History</button>
        </div>
      </div>

      {view === "now" ? (
        <div className="px-4 pb-6">
          {/* Prize pot */}
          <div className="mt-2 flex items-center justify-between rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-3 text-white">
            <div>
              <div className="text-[10px] uppercase tracking-wider opacity-80">Prize Pool</div>
              <div className="text-[18px] font-bold">৳12,000</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] opacity-80">Ends in</div>
              <div className="text-[14px] font-bold">2d 14h</div>
            </div>
          </div>

          {/* Top 3 horizontal cards */}
          <div className="mt-3 space-y-1.5">
            {LB_PLAYERS.slice(0,3).map((p,i) => (
              <div key={p.name} className={`flex items-center gap-3 rounded-2xl p-3 ${i===0?"bg-amber-50 ring-1 ring-amber-200":i===1?"bg-slate-50 ring-1 ring-slate-200":"bg-orange-50 ring-1 ring-orange-200"}`}>
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-bold ${i===0?"bg-amber-400 text-white":i===1?"bg-slate-400 text-white":"bg-orange-400 text-white"}`}>{i+1}</div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[12px] font-bold text-slate-700 ring-2 ring-white">{p.avatar}</div>
                <div className="flex-1">
                  <div className="text-[13px] font-bold text-slate-900">{p.name}</div>
                  <div className="text-[10px] text-slate-600">{p.country} · 🔥 {p.streak} day streak</div>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-bold text-slate-900">{p.count.toLocaleString()}</div>
                  <div className="text-[10px] font-semibold text-emerald-600">৳{i===0?"5,000":i===1?"3,000":"2,000"}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Rest */}
          <div className="mt-2 space-y-1">
            {LB_PLAYERS.slice(3).map((p, i) => (
              <div key={p.name} className="flex items-center gap-3 px-2 py-1.5">
                <div className="w-5 text-center text-[11px] font-semibold text-slate-400">{i+4}</div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-700">{p.avatar}</div>
                <div className="flex-1 truncate text-[11.5px] font-medium text-slate-700">{p.name}</div>
                <div className="text-[11px] font-semibold text-slate-600">{p.count.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="px-4 pb-6">
          <div className="mt-2 text-[11px] text-slate-500">A timeline of every weekly champion since the room opened.</div>
          <div className="relative mt-3 pl-5">
            <div className="absolute left-1.5 top-2 bottom-2 w-px bg-slate-200" />
            {WEEKLY_WINNERS.map((w, i) => (
              <div key={w.week} className="relative pb-4 last:pb-0">
                <div className={`absolute -left-[14px] top-1 h-3 w-3 rounded-full ring-2 ring-white ${i===0?"bg-amber-400":"bg-slate-300"}`} />
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">{w.week}</div>
                <div className="mt-1 flex items-center gap-2 rounded-xl bg-slate-50 p-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-[11px] font-bold text-white">{w.avatar}</div>
                  <div className="flex-1">
                    <div className="text-[12px] font-bold text-slate-900">{w.name} {i===0 && <Crown className="inline h-3 w-3 text-amber-500" />}</div>
                    <div className="text-[10px] text-slate-500">{w.count.toLocaleString()} zikr · won {w.prize}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Variant 5: Lifetime + Competition Toggle ---------- */
function LeaderboardV5() {
  const [mode, setMode] = useState<"lifetime" | "competition">("lifetime");
  const top3 = LB_PLAYERS.slice(0, 3);
  const rest = LB_PLAYERS.slice(3);
  return (
    <div className={mode === "lifetime" ? "bg-white" : "bg-[#0B1B36] text-white"}>
      {/* Header + mode toggle */}
      <div className={mode === "lifetime" ? "px-4 pt-4" : "px-4 pt-4 text-white"} style={mode === "competition" ? { background: "#0B1B36" } : undefined}>
        <div className={`flex items-center justify-between text-[12px] ${mode==="lifetime"?"text-slate-700":""}`}>
          <ChevronRight className="h-4 w-4 rotate-180" />
          <span className="font-semibold">Astaghfirullah Room</span>
          <Trophy className={`h-4 w-4 ${mode==="lifetime"?"text-amber-500":"text-amber-300"}`} />
        </div>
        <div className={`mt-3 grid grid-cols-2 gap-1 rounded-xl p-1 text-[11px] font-semibold ${mode==="lifetime"?"bg-slate-100":"bg-white/10"}`}>
          <button onClick={() => setMode("lifetime")} className={`rounded-lg py-1.5 transition ${mode==="lifetime"?"bg-white text-slate-900 shadow":"text-white/70"}`}>Lifetime</button>
          <button onClick={() => setMode("competition")} className={`rounded-lg py-1.5 transition ${mode==="competition"?"bg-amber-400 text-slate-900 shadow":"text-slate-500"}`}>Competition</button>
        </div>
      </div>

      {mode === "lifetime" ? (
        <>
          {/* Podium (no Weekly Champions / reset / prize) */}
          <div style={{ background: NAVY }} className="mt-3 px-5 pb-6 pt-4 text-white">
            <div className="grid grid-cols-3 items-end gap-2">
              {[1,0,2].map((i) => {
                const p = top3[i];
                const isFirst = i === 0;
                return (
                  <div key={p.name} className="flex flex-col items-center">
                    <div className={`relative flex items-center justify-center rounded-full bg-white text-slate-900 font-bold ring-2 ${isFirst ? "h-14 w-14 text-base ring-amber-300" : "h-11 w-11 text-sm ring-white/40"}`}>
                      {p.avatar}
                      {isFirst && <Crown className="absolute -top-3 h-4 w-4 text-amber-300" fill="currentColor" />}
                    </div>
                    <div className="mt-1 truncate text-[11px] font-semibold">{p.name.split(" ")[0]}</div>
                    <div className="text-[10px] opacity-70">{p.count.toLocaleString()}</div>
                    <div className={`mt-1 w-full rounded-t-md ${isFirst ? "h-12 bg-amber-300" : "h-7 bg-white/25"} flex items-center justify-center text-[11px] font-bold ${isFirst ? "text-slate-900" : ""}`}>
                      {i + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="px-4 pb-6 pt-4">
            <div className="space-y-1.5">
              {rest.map((p, i) => (
                <div key={p.name} className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2">
                  <div className="w-5 text-center text-[12px] font-bold text-slate-400">{i + 4}</div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-[11px] font-bold text-slate-700">{p.avatar}</div>
                  <div className="flex-1 truncate text-[12px] font-semibold text-slate-800">{p.name} <span className="ml-1">{p.country}</span></div>
                  <div className="text-[11px] font-bold text-slate-700">{p.count.toLocaleString()}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-3 rounded-xl bg-emerald-50 px-3 py-2 ring-1 ring-emerald-200">
              <div className="w-5 text-center text-[12px] font-bold text-emerald-700">42</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">YOU</div>
              <div className="flex-1 text-[12px] font-semibold text-emerald-900">Your rank · 4,210</div>
              <TrendingUp className="h-3.5 w-3.5 text-emerald-700" />
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Past weeks strip (no Reigning Champion spotlight) */}
          <div className="mt-4 px-4">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-white/60">Past Weeks</div>
            <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
              {WEEKLY_WINNERS.map((w, i) => (
                <div key={w.week} className="w-[120px] shrink-0 rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
                  <div className="text-[9px] text-white/50">W{18 - i}</div>
                  <div className="mt-1 flex items-center gap-1.5">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-slate-900">{w.avatar}</div>
                    <div>
                      <div className="text-[10.5px] font-semibold leading-tight">{w.name.split(" ")[0]}</div>
                      <div className="text-[9px] text-amber-300">{w.prize}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Live ranking with streaks */}
          <div className="mt-4 px-4 pb-6">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-semibold uppercase tracking-wider text-white/60">This Week</span>
              <span className="text-white/50">2d 14h left</span>
            </div>
            <div className="mt-2 space-y-1.5">
              {LB_PLAYERS.slice(0, 6).map((p, i) => (
                <div key={p.name} className={`flex items-center gap-3 rounded-xl px-3 py-2 ${i<3?"bg-amber-400/10 ring-1 ring-amber-300/20":"bg-white/5"}`}>
                  <div className={`flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-bold ${i===0?"bg-amber-400 text-slate-900":i===1?"bg-slate-300 text-slate-900":i===2?"bg-amber-700 text-white":"bg-white/10 text-white/70"}`}>{i+1}</div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[10.5px] font-bold">{p.avatar}</div>
                  <div className="flex-1 truncate text-[12px] font-semibold">{p.name}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-orange-300">🔥{p.streak}</span>
                    <span className="text-[11.5px] font-bold">{(p.count/1000).toFixed(1)}K</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ================================================================== */
/*  LEADERBOARD — Organic vs Running Session                          */
/* ================================================================== */

/* ---------- Organic A · Lifetime Counter (no sponsor) ---------- */
const LB_RANGES = ["All-time", "Today", "Yesterday", "This week", "Last week", "This month", "Last month"];

function TimeRangeChips({ active = "All-time", tone = "light" }: { active?: string; tone?: "light" | "dark" | "amber" }) {
  const styles = tone === "dark"
    ? { wrap: "bg-white/5 ring-white/10", on: "bg-amber-300 text-amber-950", off: "text-white/70 hover:bg-white/10" }
    : tone === "amber"
    ? { wrap: "bg-white ring-amber-200", on: "bg-amber-500 text-white", off: "text-slate-600 hover:bg-amber-50" }
    : { wrap: "bg-white ring-slate-200", on: "bg-emerald-600 text-white", off: "text-slate-600 hover:bg-emerald-50" };
  return (
    <div className={`flex gap-1 overflow-x-auto rounded-full p-1 ring-1 ${styles.wrap} [&::-webkit-scrollbar]:hidden`} style={{ scrollbarWidth: "none" }}>
      {LB_RANGES.map((r) => (
        <button key={r} className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[10.5px] font-semibold transition ${r === active ? styles.on : styles.off}`}>
          {r}
        </button>
      ))}
    </div>
  );
}

function LBOrganicA() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 px-5 pb-6 pt-4 text-white">
        <div className="flex items-center justify-between text-[11px]">
          <ChevronRight className="h-4 w-4 rotate-180" />
          <span className="font-semibold">Leaderboard</span>
          <InfinityIcon className="h-4 w-4" />
        </div>
        <div className="mt-2 text-center">
          <div className="text-[12px] opacity-80">Subhanallah · Forever Room</div>
          <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold ring-1 ring-white/20">
            <InfinityIcon className="h-3 w-3" /> Lifetime · No sponsor · Organic
          </div>
          <div className="mt-3 text-[28px] font-extrabold tracking-tight">All-Time Champions</div>
          <div className="mt-0.5 text-[10.5px] opacity-70">Ranked by lifetime zikr count</div>
        </div>
      </div>

      <div className="-mt-5 px-4">
        <div className="mb-2"><TimeRangeChips active="All-time" /></div>
        <div className="rounded-2xl bg-white p-3 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.25)] ring-1 ring-slate-100">
          <div className="grid grid-cols-3 gap-2 text-center">
            {LB_PLAYERS.slice(0, 3).map((p, i) => (
              <div key={p.name} className={`rounded-xl p-2 ${i===0?"bg-emerald-50 ring-1 ring-emerald-200":"bg-slate-50"}`}>
                <div className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full text-[11px] font-bold text-white ${i===0?"bg-emerald-600":"bg-slate-400"}`}>{p.avatar}</div>
                <div className="mt-1 text-[11px] font-bold text-slate-900">#{i+1}</div>
                <div className="truncate text-[10px] text-slate-600">{p.name.split(" ")[0]}</div>
                <div className="text-[10.5px] font-bold text-emerald-700">{(p.count*4).toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 pb-6 pt-4">
        <div className="flex items-center justify-between">
          <div className="text-[12px] font-bold text-slate-900">Top members</div>
          <span className="text-[10px] text-slate-500">{LB_PLAYERS.length * 240} total</span>
        </div>
        <div className="mt-2 space-y-1.5">
          {LB_PLAYERS.slice(3, 7).map((p, i) => (
            <div key={p.name} className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2">
              <div className="w-5 text-center text-[12px] font-bold text-slate-400">{i+4}</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-[11px] font-bold text-emerald-800">{p.avatar}</div>
              <div className="flex-1 truncate text-[12px] font-semibold text-slate-800">{p.name} <span className="ml-1">{p.country}</span></div>
              <div className="text-right">
                <div className="text-[11.5px] font-bold text-slate-900">{(p.count*4).toLocaleString()}</div>
                <div className="text-[9px] text-slate-400">lifetime</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-3 rounded-xl bg-emerald-600 px-3 py-2 text-white">
          <div className="w-5 text-center text-[12px] font-bold">128</div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[11px] font-bold text-emerald-700">YOU</div>
          <div className="flex-1 text-[12px] font-semibold">You · 16,840 lifetime</div>
          <Heart className="h-3.5 w-3.5" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}

/* ---------- Organic B · Streak Community ---------- */
function LBOrganicB() {
  return (
    <div className="bg-[#F7FAF7]">
      <div className="px-5 pt-4">
        <div className="flex items-center justify-between text-[12px] font-semibold text-slate-700">
          <ChevronRight className="h-4 w-4 rotate-180" />
          <span>Community</span>
          <Bell className="h-4 w-4" />
        </div>
        <div className="mt-3 rounded-2xl bg-white p-3 ring-1 ring-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Astaghfirullah Room</div>
              <div className="text-[14px] font-bold text-slate-900">Streak Champions</div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
              <InfinityIcon className="h-3 w-3" /> Organic
            </span>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="rounded-lg bg-slate-50 p-2"><div className="text-[14px] font-bold text-slate-900">2,418</div><div className="text-slate-500">members</div></div>
            <div className="rounded-lg bg-slate-50 p-2"><div className="text-[14px] font-bold text-emerald-700">412</div><div className="text-slate-500">on streak</div></div>
            <div className="rounded-lg bg-slate-50 p-2"><div className="text-[14px] font-bold text-amber-600">3.2M</div><div className="text-slate-500">total zikr</div></div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4">
        <div className="mb-2"><TimeRangeChips active="This month" /></div>
        <div className="text-[12px] font-bold text-slate-900">🔥 Longest active streaks</div>
        <div className="mt-2 space-y-1.5">
          {[...LB_PLAYERS].sort((a,b)=>b.streak-a.streak).slice(0,5).map((p, i) => (
            <div key={p.name} className="flex items-center gap-3 rounded-xl bg-white px-3 py-2 ring-1 ring-slate-100">
              <div className={`w-5 text-center text-[12px] font-bold ${i===0?"text-amber-500":"text-slate-400"}`}>{i+1}</div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-[11px] font-bold text-orange-700">{p.avatar}</div>
              <div className="flex-1 truncate">
                <div className="text-[12px] font-semibold text-slate-800">{p.name} {p.country}</div>
                <div className="text-[10px] text-slate-500">{p.count.toLocaleString()} this month</div>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-orange-50 px-2 py-0.5 text-[11px] font-bold text-orange-600 ring-1 ring-orange-200">
                🔥 {p.streak}d
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-6 pt-3">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 p-3 ring-1 ring-emerald-100">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">YOU</div>
            <div className="flex-1">
              <div className="text-[12px] font-bold text-slate-900">Your streak · 6 days 🔥</div>
              <div className="text-[10px] text-slate-600">Keep going · 4 more days for "10-day" badge</div>
            </div>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white">
            <div className="h-full rounded-full bg-gradient-to-r from-orange-400 to-amber-500" style={{ width: "60%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Running A · Live Prize Race ---------- */
function LBRunningA() {
  return (
    <div className="bg-white">
      <div style={{ background: NAVY }} className="relative px-5 pb-5 pt-4 text-white">
        <div className="flex items-center justify-between text-[11px]">
          <ChevronRight className="h-4 w-4 rotate-180" />
          <span className="font-semibold">Live Race</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-red-500 px-1.5 py-0.5 text-[9px] font-bold">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> LIVE
          </span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[10px] font-bold text-slate-900">WL</div>
          <div className="min-w-0 flex-1">
            <div className="text-[10px] opacity-70">Sponsored by Wizlife</div>
            <div className="truncate text-[14px] font-bold">Subhanallah 100k Sprint</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] opacity-70">Ends in</div>
            <div className="text-[13px] font-bold tabular-nums">2d 14:32</div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-[10px]">
          <div className="rounded-lg bg-white/10 p-2"><div className="text-[13px] font-bold">৳5,000</div><div className="opacity-70">1st prize</div></div>
          <div className="rounded-lg bg-white/10 p-2"><div className="text-[13px] font-bold">৳2,000</div><div className="opacity-70">2nd</div></div>
          <div className="rounded-lg bg-white/10 p-2"><div className="text-[13px] font-bold">৳1,000</div><div className="opacity-70">3rd</div></div>
        </div>
      </div>

      <div className="px-4 pt-3">
        <div className="mb-2"><TimeRangeChips active="Today" tone="amber" /></div>
        <div className="flex items-center justify-between">
          <div className="text-[12px] font-bold text-slate-900">Live ranking</div>
          <span className="text-[10px] text-slate-500">Updates every 10s</span>
        </div>
        <div className="mt-2 space-y-1.5">
          {LB_PLAYERS.slice(0, 5).map((p, i) => {
            const max = LB_PLAYERS[0].count;
            const pct = (p.count / max) * 100;
            const tier = i === 0 ? "bg-amber-400 text-amber-950" : i === 1 ? "bg-slate-300 text-slate-800" : i === 2 ? "bg-orange-400 text-orange-950" : "bg-slate-100 text-slate-500";
            return (
              <div key={p.name} className="rounded-xl bg-white p-2.5 ring-1 ring-slate-100">
                <div className="flex items-center gap-2">
                  <div className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${tier}`}>{i+1}</div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-700">{p.avatar}</div>
                  <div className="min-w-0 flex-1 truncate text-[12px] font-semibold text-slate-800">{p.name}</div>
                  <div className="text-right">
                    <div className="text-[12px] font-bold text-slate-900">{p.count.toLocaleString()}</div>
                    {i < 3 && <div className="text-[9px] font-bold text-emerald-600">+{[5,2,1][i]}k prize</div>}
                  </div>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                  <div className={`h-full rounded-full ${i===0?"bg-gradient-to-r from-amber-400 to-amber-500":i===1?"bg-slate-400":i===2?"bg-orange-400":"bg-slate-300"}`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-4 pb-5 pt-3">
        <div className="rounded-xl bg-amber-50 p-3 ring-1 ring-amber-200">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-[11px] font-bold text-white">YOU</div>
            <div className="flex-1">
              <div className="text-[12px] font-bold text-amber-900">Rank #14 · 4,210</div>
              <div className="text-[10px] text-amber-800">820 zikr to enter prize zone (top 3)</div>
            </div>
            <TrendingUp className="h-4 w-4 text-amber-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Running B · Tiered Podium + Countdown ---------- */
function LBRunningB() {
  const top3 = LB_PLAYERS.slice(0, 3);
  return (
    <div className="bg-[#0B1B36] text-white">
      <div className="px-5 pb-3 pt-4">
        <div className="flex items-center justify-between text-[11px]">
          <ChevronRight className="h-4 w-4 rotate-180" />
          <span className="font-semibold">Season Standings</span>
          <Trophy className="h-4 w-4 text-amber-300" />
        </div>
        <div className="mt-3 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-red-500 px-1.5 py-0.5 text-[9px] font-bold">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> LIVE
            </span>
            <span className="text-[10px] opacity-70">Season 4 · Sponsored by Wizlife</span>
          </div>
          <div className="mt-2 flex items-end justify-between">
            <div>
              <div className="text-[18px] font-extrabold tracking-tight">Astaghfirullah Sprint</div>
              <div className="text-[10px] opacity-70">Total prize pool ৳15,000</div>
            </div>
            <div className="text-right">
              <div className="text-[9px] uppercase opacity-60">Ends</div>
              <div className="text-[15px] font-bold tabular-nums text-amber-300">2d 14h</div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pt-3">
        <div className="grid grid-cols-3 items-end gap-2">
          {[1,0,2].map((i) => {
            const p = top3[i];
            const isFirst = i === 0;
            const prizes = ["৳5,000","৳2,000","৳1,000"];
            return (
              <div key={p.name} className="flex flex-col items-center">
                <div className={`relative flex items-center justify-center rounded-full bg-white text-slate-900 font-bold ring-2 ${isFirst ? "h-14 w-14 text-base ring-amber-300" : "h-11 w-11 text-sm ring-white/30"}`}>
                  {p.avatar}
                  {isFirst && <Crown className="absolute -top-3 h-4 w-4 text-amber-300" fill="currentColor" />}
                </div>
                <div className="mt-1 truncate text-[11px] font-semibold">{p.name.split(" ")[0]}</div>
                <div className="text-[10px] opacity-70">{p.count.toLocaleString()}</div>
                <div className={`mt-1 w-full rounded-t-md ${isFirst ? "h-14 bg-gradient-to-t from-amber-500 to-amber-300" : i===1 ? "h-9 bg-slate-300/80" : "h-7 bg-orange-400/80"} flex flex-col items-center justify-center`}>
                  <span className={`text-[11px] font-bold ${isFirst?"text-amber-950":"text-slate-900"}`}>{i+1}</span>
                  <span className={`text-[9px] font-semibold ${isFirst?"text-amber-950":"text-slate-800"}`}>{prizes[i]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-4 pt-4">
        <div className="mb-2"><TimeRangeChips active="This week" tone="dark" /></div>
        <div className="text-[11px] font-semibold opacity-80">Prize zone · Top 10</div>
        <div className="mt-2 space-y-1">
          {LB_PLAYERS.slice(3, 7).map((p, i) => (
            <div key={p.name} className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-1.5 ring-1 ring-white/5">
              <div className="w-5 text-center text-[11px] font-bold opacity-60">{i+4}</div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold">{p.avatar}</div>
              <div className="flex-1 truncate text-[12px]">{p.name}</div>
              <div className="text-[11px] font-bold tabular-nums">{p.count.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-5 pt-3">
        <div className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 p-3 text-amber-950">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-950 text-[11px] font-bold text-amber-300">YOU</div>
            <div className="flex-1">
              <div className="text-[12px] font-bold">Rank #14 · 4,210</div>
              <div className="text-[10px]">Push 820 more to enter prize zone</div>
            </div>
            <Zap className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  FLOW 0 — Channel → Room → Season hierarchy                        */
/* ================================================================== */

const CHANNELS = [
  { bn: "সুবহানাল্লাহি", en: "Subhanallah", count: "12.4M", live: 12, color: "from-emerald-500 to-teal-600" },
  { bn: "আলহামদুলিল্লাহ", en: "Alhamdulillah", count: "9.8M", live: 7, color: "from-sky-500 to-indigo-600" },
  { bn: "দরুদ", en: "Durood", count: "18.2M", live: 21, color: "from-amber-500 to-orange-600" },
  { bn: "ইস্তেগফার", en: "Istighfar", count: "6.1M", live: 4, color: "from-rose-500 to-pink-600" },
  { bn: "লা ইলাহা ইল্লাল্লাহ", en: "La ilaha", count: "14.7M", live: 9, color: "from-violet-500 to-purple-600" },
  { bn: "আল্লাহু আকবার", en: "Allahu Akbar", count: "7.3M", live: 5, color: "from-cyan-500 to-blue-600" },
];

const ROOMS_OF_SUBHANALLAH = [
  { icon: "🌍", name: "Worldwide · Public", sub: "auto · default", members: "2.4M", live: true, season: "100k Sprint · 3d left" },
  { icon: "👨‍👩‍👧", name: "Family Circle", sub: "private", members: "6", live: false, season: null as string | null },
  { icon: "🇧🇩", name: "Bangladesh Youth", sub: "community", members: "1,248", live: false, season: "Season starts in 3d" },
  { icon: "🕌", name: "Masjid Al-Noor", sub: "community", members: "312", live: false, season: null as string | null },
];

function H1ChannelGrid() {
  return (
    <div className="flex h-full flex-col bg-[#F4F7FB]">
      <div className="flex items-center justify-between px-4 pt-3">
        <div>
          <div className="text-[16px] font-extrabold text-slate-900">Zikr</div>
          <div className="text-[10px] text-slate-500">Pick a channel · pick a room</div>
        </div>
        <Search className="h-4 w-4 text-slate-400" />
      </div>
      <div className="px-4 pt-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Channels · permanent</div>
      <div className="grid flex-1 grid-cols-2 gap-2 px-3 pt-2 pb-3">
        {CHANNELS.map((c) => (
          <button key={c.en} className={`relative flex flex-col justify-between rounded-2xl bg-gradient-to-br ${c.color} p-2.5 text-left text-white shadow-sm`}>
            <div>
              <div className="bn text-[12.5px] font-extrabold leading-tight">{c.bn}</div>
              <div className="text-[9px] opacity-85">{c.en}</div>
            </div>
            <div className="mt-2">
              <div className="text-[13px] font-bold tabular-nums">{c.count}</div>
              <div className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-white/20 px-1.5 py-0.5 text-[8.5px] font-semibold ring-1 ring-white/25">
                <span className="h-1 w-1 rounded-full bg-rose-300" /> {c.live} live
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function H2ChannelDetail() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="bg-gradient-to-br from-emerald-600 to-teal-700 px-4 pb-4 pt-3 text-white">
        <FlowChrome title="Subhanallah" sub="Channel · permanent" tone="dark" />
        <div className="mt-2 text-center">
          <div className="bn text-[18px] font-extrabold">সুবহানাল্লাহি</div>
          <div className="mt-0.5 text-[20px] font-extrabold tabular-nums">12,418,206</div>
          <div className="text-[10px] opacity-80">global lifetime · 12 rooms live</div>
        </div>
        <div className="mt-2 flex items-center justify-center gap-1 text-[9px] opacity-90">
          <Sparkles className="h-3 w-3" /> Past sponsors · Wizlife · Halal Foods · Anchor +4
        </div>
      </div>
      <div className="flex border-b border-slate-100 px-3 text-[11px] font-semibold">
        <div className="border-b-2 border-emerald-600 px-2 py-2 text-emerald-700">Rooms</div>
        <div className="px-2 py-2 text-slate-400">Global leaderboard</div>
      </div>
      <div className="flex-1 space-y-1.5 px-3 pt-2 pb-3">
        {ROOMS_OF_SUBHANALLAH.map((r) => (
          <div key={r.name} className="flex items-center gap-2 rounded-xl bg-slate-50 p-2.5 ring-1 ring-slate-100">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[16px] ring-1 ring-slate-200">{r.icon}</div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <div className="truncate text-[12px] font-bold text-slate-800">{r.name}</div>
                {r.live && (
                  <span className="inline-flex items-center gap-0.5 rounded-full bg-rose-100 px-1.5 py-0.5 text-[8.5px] font-bold text-rose-700">
                    <span className="h-1 w-1 rounded-full bg-rose-500" />LIVE
                  </span>
                )}
              </div>
              <div className="text-[9.5px] text-slate-500">{r.sub} · {r.members} members</div>
              {r.season && <div className="mt-0.5 text-[9.5px] font-semibold text-amber-700">🏆 {r.season}</div>}
            </div>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          </div>
        ))}
        <button className="flex w-full items-center justify-center gap-1 rounded-xl border border-dashed border-emerald-300 bg-emerald-50/50 py-2 text-[11px] font-bold text-emerald-700">
          <Plus className="h-3.5 w-3.5" /> Create a new room
        </button>
      </div>
    </div>
  );
}

function H3ChannelLB() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="bg-gradient-to-br from-emerald-700 to-teal-800 px-4 pb-4 pt-3 text-white">
        <FlowChrome title="Global leaderboard" sub="Subhanallah channel" tone="dark" />
        <div className="mt-2 text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold ring-1 ring-white/20">
            <Globe2 className="h-3 w-3" /> Across every room in this zikr
          </span>
          <div className="mt-1.5 text-[18px] font-extrabold">All-Time · Channel</div>
        </div>
      </div>
      <div className="px-3 pt-2"><TimeRangeChips active="All-time" /></div>
      <div className="flex-1 space-y-1.5 px-3 pt-1 pb-3">
        {LB_PLAYERS.slice(0, 5).map((p, i) => (
          <div key={p.name} className={`flex items-center gap-2 rounded-xl px-3 py-2 ${i === 0 ? "bg-emerald-50 ring-1 ring-emerald-200" : "bg-slate-50"}`}>
            <div className={`w-5 text-center text-[12px] font-bold ${i === 0 ? "text-emerald-700" : "text-slate-400"}`}>{i + 1}</div>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-800">{p.avatar}</div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[12px] font-semibold text-slate-800">{p.name}</div>
              <div className="text-[9px] text-slate-500">across {2 + (i % 3)} rooms</div>
            </div>
            <div className="text-right">
              <div className="text-[11.5px] font-bold text-slate-900 tabular-nums">{(p.count * 6).toLocaleString()}</div>
              <div className="text-[9px] text-slate-400">channel total</div>
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-white">
          <div className="w-5 text-center text-[12px] font-bold">#42</div>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/25 text-[10px] font-bold">YOU</div>
          <div className="flex-1 text-[12px] font-semibold">Your channel total</div>
          <div className="text-[12px] font-bold tabular-nums">38,640</div>
        </div>
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-2 text-center text-[9.5px] text-slate-500">
          Counts add up from every room you've joined in this zikr.
        </div>
      </div>
    </div>
  );
}

function H4RoomDormant() {
  return (
    <div className="flex h-full flex-col bg-[#F4F7FB]">
      <FlowChrome title="🌍 Worldwide" sub="Subhanallah · public room" />
      <div className="px-4 pt-2">
        <div className="rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 p-3.5 text-white">
          <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider opacity-80">
            <InfinityIcon className="h-3 w-3" /> Organic mode · no active season
          </div>
          <div className="mt-1 text-[22px] font-extrabold tabular-nums">2,418,902</div>
          <div className="text-[10px] opacity-80">room lifetime · 2.4M members</div>
        </div>
        <div className="mt-2 rounded-xl border border-dashed border-amber-300 bg-amber-50 p-2.5">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-amber-600" />
            <div className="text-[11px] font-bold text-amber-900">Next sponsored season</div>
          </div>
          <div className="mt-0.5 text-[10px] text-amber-800">starts in <b>6d 4h</b> · Wizlife · ৳20k prize pool</div>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2 text-[11px]">
          <div className="rounded-xl bg-white p-2.5 ring-1 ring-slate-100">
            <div className="text-[9px] uppercase tracking-wider text-slate-400">Your room</div>
            <div className="text-[15px] font-extrabold text-slate-900 tabular-nums">6,120</div>
          </div>
          <div className="rounded-xl bg-white p-2.5 ring-1 ring-slate-100">
            <div className="text-[9px] uppercase tracking-wider text-slate-400">Channel total</div>
            <div className="text-[15px] font-extrabold text-emerald-700 tabular-nums">38,640</div>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2 text-[11px]">
          <button className="rounded-xl bg-emerald-600 p-2.5 text-left font-bold text-white shadow-sm">
            <BookOpen className="mb-1 h-4 w-4" />
            Start zikr
          </button>
          <button className="rounded-xl bg-white p-2.5 text-left ring-1 ring-slate-200">
            <Trophy className="mb-1 h-4 w-4 text-amber-600" />
            <div className="font-bold text-slate-800">Room leaderboard</div>
          </button>
        </div>
      </div>
    </div>
  );
}

function H5RoomLive() {
  const fam = [
    { name: "Abu (you)", avatar: "AB", count: 1840, you: true },
    { name: "Mom", avatar: "MM", count: 2120, you: false },
    { name: "Yusuf", avatar: "YS", count: 1610, you: false },
    { name: "Fatima", avatar: "FT", count: 980, you: false },
  ].sort((a, b) => b.count - a.count);
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="px-4 pb-3 pt-3" style={{ background: NAVY, color: "white" }}>
        <FlowChrome title="👨‍👩‍👧 Family Circle" sub="Subhanallah · 6 members" tone="dark" />
        <div className="mt-2 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 p-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[14px]">🛍️</div>
            <div className="flex-1">
              <div className="text-[10px] font-semibold uppercase tracking-wider opacity-90">Wizlife · Sponsored</div>
              <div className="text-[12px] font-extrabold">100k Sprint · ৳15,000 prize</div>
            </div>
            <div className="text-right">
              <div className="text-[9px] opacity-90">ends in</div>
              <div className="text-[12px] font-bold tabular-nums">3d 14h</div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 pt-2"><SessionTabs active="session" /></div>
      <div className="flex-1 space-y-1.5 px-3 pt-2 pb-3">
        {fam.map((p, i) => (
          <div key={p.name} className={`flex items-center gap-2 rounded-xl px-3 py-2 ${p.you ? "bg-emerald-50 ring-1 ring-emerald-300" : "bg-slate-50"}`}>
            <div className={`w-5 text-center text-[12px] font-bold ${i === 0 ? "text-amber-600" : "text-slate-400"}`}>{i + 1}</div>
            <div className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold ${p.you ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-700"}`}>{p.avatar}</div>
            <div className="flex-1 truncate text-[12px] font-semibold text-slate-800">{p.name}</div>
            <div className="text-[12px] font-bold text-slate-900 tabular-nums">{p.count.toLocaleString()}</div>
          </div>
        ))}
        <div className="rounded-xl border border-dashed border-emerald-200 bg-emerald-50/40 p-2 text-center text-[9.5px] text-emerald-800">
          ✓ Counts here also add to your <b>Subhanallah channel</b> total.
        </div>
      </div>
    </div>
  );
}

function H6CreateRoom() {
  return (
    <div className="relative flex h-full flex-col">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/40 to-slate-900/70" />
      <div className="relative mt-auto rounded-t-3xl bg-white p-4 shadow-2xl">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-slate-200" />
        <div className="mb-1 text-center text-[14px] font-extrabold text-slate-900">Create a room</div>
        <div className="mb-3 text-center text-[10px] text-slate-500">Invite family, friends, or a community</div>
        <div className="space-y-2.5">
          <div>
            <div className="mb-1 text-[9.5px] font-semibold uppercase tracking-wider text-slate-500">Room name</div>
            <div className="rounded-xl bg-slate-50 px-3 py-2 text-[12px] text-slate-800 ring-1 ring-slate-200">Family Circle</div>
          </div>
          <div>
            <div className="mb-1 text-[9.5px] font-semibold uppercase tracking-wider text-slate-500">Zikr channel</div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-bold text-emerald-800 ring-1 ring-emerald-200">
              <Lock className="h-3 w-3" /> Subhanallah · cannot change
            </div>
            <div className="mt-1 text-[9px] text-slate-400">A room belongs to one zikr · multi-zikr coming later</div>
          </div>
          <div>
            <div className="mb-1 text-[9.5px] font-semibold uppercase tracking-wider text-slate-500">Privacy</div>
            <div className="grid grid-cols-3 gap-1.5 text-[10.5px] font-semibold">
              <div className="rounded-lg bg-emerald-600 py-1.5 text-center text-white">Private</div>
              <div className="rounded-lg bg-slate-100 py-1.5 text-center text-slate-600">Community</div>
              <div className="rounded-lg bg-slate-100 py-1.5 text-center text-slate-600">Public</div>
            </div>
          </div>
          <label className="flex items-center gap-2 rounded-xl bg-amber-50 p-2 text-[10.5px] text-amber-900 ring-1 ring-amber-200">
            <div className="h-3.5 w-3.5 rounded border-2 border-amber-500 bg-amber-500" />
            <span>Schedule a sponsored season later <span className="opacity-70">(optional)</span></span>
          </label>
          <button className="mt-1 w-full rounded-xl bg-slate-900 py-2.5 text-[12px] font-bold text-white">
            Create room
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  LEADERBOARD FLOW — User Journey                                   */
/* ================================================================== */

function FlowChrome({ title, sub, tone = "light" }: { title: string; sub?: string; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className={`flex items-center justify-between px-4 pt-3 text-[11px] ${dark ? "text-white" : "text-slate-700"}`}>
      <ChevronRight className="h-4 w-4 rotate-180" />
      <div className="text-center">
        <div className="font-semibold">{title}</div>
        {sub && <div className={`text-[9.5px] ${dark ? "opacity-70" : "text-slate-400"}`}>{sub}</div>}
      </div>
      <Bell className="h-4 w-4" />
    </div>
  );
}

/* ① Room screen — highlight the Leaderboard CTA */
function LBFlow1() {
  return (
    <div className="flex h-full flex-col bg-[#F4F7FB]">
      <FlowChrome title="Subhanallah Room" sub="Forever · 2,418 members" />
      <div className="px-4 pt-3">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 p-4 text-white">
          <div className="text-[10px] uppercase tracking-wider opacity-80">Your count</div>
          <div className="mt-1 text-[26px] font-extrabold tabular-nums">16,840</div>
          <div className="text-[10px] opacity-80">Lifetime · 6-day streak 🔥</div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
          <button className="rounded-xl bg-white p-3 text-left ring-1 ring-slate-200">
            <BookOpen className="mb-1 h-4 w-4 text-emerald-600" />
            <div className="font-bold text-slate-800">Start zikr</div>
            <div className="text-[10px] text-slate-500">Tap counter</div>
          </button>
          <button className="relative rounded-xl bg-amber-50 p-3 text-left ring-2 ring-amber-400 shadow-[0_0_0_4px_rgba(251,191,36,0.18)]">
            <Trophy className="mb-1 h-4 w-4 text-amber-600" />
            <div className="font-bold text-amber-900">Leaderboard</div>
            <div className="text-[10px] text-amber-800">See your rank</div>
            <span className="absolute -right-1 -top-1 rounded-full bg-amber-500 px-1.5 py-0.5 text-[8.5px] font-bold text-white">TAP</span>
          </button>
        </div>
        <div className="mt-3 rounded-xl bg-white p-2.5 ring-1 ring-slate-100">
          <div className="flex items-center gap-2">
            <Users className="h-3.5 w-3.5 text-slate-400" />
            <div className="text-[10.5px] text-slate-600">412 members on streak today</div>
          </div>
        </div>
        <div className="mt-3 rounded-xl border border-dashed border-slate-300 bg-white/60 p-2 text-center text-[10px] text-slate-500">
          No active session · Organic mode
        </div>
      </div>
    </div>
  );
}

/* ② Organic state — single combined lifetime board */
function LBFlow2() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="bg-gradient-to-br from-emerald-700 to-teal-800 px-4 pb-5 pt-3 text-white">
        <FlowChrome title="Leaderboard" sub="Subhanallah Room" />
        <div className="mt-2 text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold ring-1 ring-white/20">
            <InfinityIcon className="h-3 w-3" /> No active session — Lifetime view
          </span>
          <div className="mt-2 text-[20px] font-extrabold">All-Time Champions</div>
          <div className="text-[10px] opacity-80">Session + Organic counts combined</div>
        </div>
      </div>
      <div className="-mt-3 px-3">
        <div className="rounded-xl bg-white p-2 ring-1 ring-slate-100 shadow-sm">
          <TimeRangeChips active="All-time" />
        </div>
      </div>
      <div className="mt-3 flex-1 px-3 pb-4">
        <div className="space-y-1.5">
          {LB_PLAYERS.slice(0, 5).map((p, i) => (
            <div key={p.name} className={`flex items-center gap-2 rounded-xl px-3 py-2 ${i===0?"bg-emerald-50 ring-1 ring-emerald-200":"bg-slate-50"}`}>
              <div className={`w-5 text-center text-[12px] font-bold ${i===0?"text-emerald-700":"text-slate-400"}`}>{i+1}</div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-800">{p.avatar}</div>
              <div className="flex-1 truncate text-[12px] font-semibold text-slate-800">{p.name}</div>
              <div className="text-right">
                <div className="text-[11.5px] font-bold text-slate-900">{(p.count*4).toLocaleString()}</div>
                <div className="text-[9px] text-slate-400">lifetime</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-white">
          <div className="w-5 text-center text-[12px] font-bold">128</div>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[10px] font-bold text-emerald-700">YOU</div>
          <div className="flex-1 text-[11.5px] font-semibold">You · 16,840 lifetime</div>
          <Heart className="h-3.5 w-3.5" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}

/* Tabs used in F3 / F4 */
function SessionTabs({ active }: { active: "session" | "lifetime" }) {
  return (
    <div className="mx-3 -mt-3 flex rounded-xl bg-white p-1 shadow-md ring-1 ring-slate-100">
      <button className={`flex-1 rounded-lg py-1.5 text-[11px] font-bold transition ${active==="session" ? "bg-amber-500 text-white" : "text-slate-500"}`}>
        🏁 Session
      </button>
      <button className={`flex-1 rounded-lg py-1.5 text-[11px] font-bold transition ${active==="lifetime" ? "bg-emerald-600 text-white" : "text-slate-500"}`}>
        ∞ Lifetime
      </button>
    </div>
  );
}

/* ③ Session running — Session tab (default when entering during a season) */
function LBFlow3() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div style={{ background: NAVY }} className="px-4 pb-5 pt-3 text-white">
        <FlowChrome title="Leaderboard" sub="Sponsored by Wizlife" tone="dark" />
        <div className="mt-2 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-red-500 px-1.5 py-0.5 text-[9px] font-bold">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> LIVE
          </span>
          <span className="text-[10px] opacity-80">Season 4 · ends in</span>
          <span className="ml-auto text-[12px] font-bold tabular-nums text-amber-300">2d 14:32</span>
        </div>
        <div className="mt-2 text-[14px] font-bold">100k Sprint · ৳15,000 prize pool</div>
      </div>
      <SessionTabs active="session" />
      <div className="px-3 pt-2">
        <TimeRangeChips active="Today" tone="amber" />
      </div>
      <div className="flex-1 px-3 pt-3 pb-4">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Session ranking · resets at end</div>
        <div className="mt-1.5 space-y-1.5">
          {LB_PLAYERS.slice(0, 4).map((p, i) => (
            <div key={p.name} className="rounded-xl bg-white p-2 ring-1 ring-slate-100">
              <div className="flex items-center gap-2">
                <div className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${i===0?"bg-amber-400 text-amber-950":i===1?"bg-slate-300 text-slate-800":i===2?"bg-orange-400 text-orange-950":"bg-slate-100 text-slate-500"}`}>{i+1}</div>
                <div className="flex-1 truncate text-[12px] font-semibold text-slate-800">{p.name}</div>
                <div className="text-[12px] font-bold text-slate-900 tabular-nums">{p.count.toLocaleString()}</div>
                {i<3 && <div className="text-[9px] font-bold text-emerald-600">৳{[5,2,1][i]}k</div>}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl bg-amber-50 p-2.5 ring-1 ring-amber-200">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white">YOU</div>
            <div className="flex-1">
              <div className="text-[11.5px] font-bold text-amber-900">Rank #14 · 4,210 this season</div>
              <div className="text-[9.5px] text-amber-800">820 to enter prize zone</div>
            </div>
            <TrendingUp className="h-4 w-4 text-amber-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ④ Session running — switched to Lifetime tab */
function LBFlow4() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="bg-gradient-to-br from-emerald-700 to-teal-800 px-4 pb-5 pt-3 text-white">
        <FlowChrome title="Leaderboard" sub="Subhanallah Room" tone="dark" />
        <div className="mt-2 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold ring-1 ring-white/20">
            <InfinityIcon className="h-3 w-3" /> Lifetime view
          </span>
          <span className="text-[9.5px] opacity-80">Session still running · 2d 14h</span>
        </div>
        <div className="mt-2 text-[14px] font-bold">All-Time Champions</div>
        <div className="text-[10px] opacity-80">Includes current session + all past sessions + organic</div>
      </div>
      <SessionTabs active="lifetime" />
      <div className="px-3 pt-2">
        <TimeRangeChips active="All-time" />
      </div>
      <div className="flex-1 px-3 pt-3 pb-4">
        <div className="space-y-1.5">
          {LB_PLAYERS.slice(0, 4).map((p, i) => (
            <div key={p.name} className={`flex items-center gap-2 rounded-xl px-3 py-2 ${i===0?"bg-emerald-50 ring-1 ring-emerald-200":"bg-slate-50"}`}>
              <div className={`w-5 text-center text-[12px] font-bold ${i===0?"text-emerald-700":"text-slate-400"}`}>{i+1}</div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-800">{p.avatar}</div>
              <div className="flex-1 truncate text-[12px] font-semibold text-slate-800">{p.name}</div>
              <div className="text-right">
                <div className="text-[11.5px] font-bold text-slate-900 tabular-nums">{(p.count*4).toLocaleString()}</div>
                <div className="text-[9px] text-slate-400">lifetime</div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-3 flex w-full items-center justify-center gap-1 rounded-xl border border-dashed border-slate-300 bg-white py-2 text-[11px] font-semibold text-slate-600">
          <Clock className="h-3.5 w-3.5" /> View past seasons →
        </button>
      </div>
    </div>
  );
}

/* ⑤ History — list of past seasons (lazy / paginated) */
function LBFlow5() {
  const seasons = [
    { n: 3, sponsor: "Wizlife", winner: "Aisha R.", you: "#9", ended: "Apr 2026", prize: "৳12k" },
    { n: 2, sponsor: "Halal Foods", winner: "Omar S.", you: "#22", ended: "Mar 2026", prize: "৳10k" },
    { n: 1, sponsor: "Wizlife", winner: "Khadija M.", you: "#41", ended: "Feb 2026", prize: "৳8k" },
  ];
  return (
    <div className="flex h-full flex-col bg-[#F7FAF7]">
      <FlowChrome title="Past seasons" sub="Subhanallah Room" />
      <div className="px-4 pt-3">
        <div className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-amber-500" />
            <div className="text-[12px] font-bold text-slate-900">Season history</div>
            <span className="ml-auto text-[10px] text-slate-500">3 of 12</span>
          </div>
          <div className="mt-1 text-[10px] text-slate-500">
            Only summaries are kept — tap to load a season's full leaderboard.
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-2 px-4 pt-3 pb-4">
        {seasons.map((s) => (
          <button key={s.n} className="w-full rounded-xl bg-white p-3 text-left ring-1 ring-slate-100 transition hover:ring-emerald-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Season {s.n} · {s.ended}</div>
                <div className="text-[12.5px] font-bold text-slate-900">Sponsored by {s.sponsor}</div>
              </div>
              <ChevronRight className="h-4 w-4 text-slate-400" />
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1.5 text-center text-[10px]">
              <div className="rounded-lg bg-amber-50 py-1.5 text-amber-800 ring-1 ring-amber-100">
                <div className="text-[11px] font-bold">🏆 {s.winner}</div>
                <div className="text-[9px]">winner</div>
              </div>
              <div className="rounded-lg bg-emerald-50 py-1.5 text-emerald-800 ring-1 ring-emerald-100">
                <div className="text-[11px] font-bold">{s.you}</div>
                <div className="text-[9px]">your rank</div>
              </div>
              <div className="rounded-lg bg-slate-50 py-1.5 text-slate-700 ring-1 ring-slate-100">
                <div className="text-[11px] font-bold">{s.prize}</div>
                <div className="text-[9px]">prize pool</div>
              </div>
            </div>
          </button>
        ))}
        <button className="flex w-full items-center justify-center gap-1 rounded-xl border border-dashed border-slate-300 bg-white py-2 text-[11px] font-semibold text-slate-500">
          Load older seasons
        </button>
      </div>
    </div>
  );
}

/* ⑥ Single past season recap */
function LBFlow6() {
  return (
    <div className="flex h-full flex-col bg-white">
      <div className="bg-gradient-to-br from-amber-500 to-orange-600 px-4 pb-5 pt-3 text-white">
        <FlowChrome title="Season 3 recap" sub="Apr 2026 · Wizlife" tone="dark" />
        <div className="mt-2 text-center">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[9.5px] font-semibold ring-1 ring-white/30">
            <CheckCircle2 className="h-3 w-3" /> Ended · final standings
          </span>
          <div className="mt-2 flex items-center justify-center gap-2">
            <Crown className="h-5 w-5 text-amber-100" fill="currentColor" />
            <div className="text-[18px] font-extrabold">Aisha R.</div>
          </div>
          <div className="text-[10px] opacity-80">Champion · 24,180 zikr · won ৳5,000</div>
        </div>
      </div>
      <div className="flex-1 px-3 pt-3 pb-4">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Top 3 · final</div>
        <div className="mt-1.5 space-y-1.5">
          {LB_PLAYERS.slice(0, 3).map((p, i) => (
            <div key={p.name} className="flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2">
              <div className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold ${i===0?"bg-amber-400 text-amber-950":i===1?"bg-slate-300 text-slate-800":"bg-orange-400 text-orange-950"}`}>{i+1}</div>
              <div className="flex-1 truncate text-[12px] font-semibold text-slate-800">{p.name}</div>
              <div className="text-[11.5px] font-bold text-slate-900 tabular-nums">{p.count.toLocaleString()}</div>
              <div className="text-[9px] font-bold text-emerald-600">৳{[5,2,1][i]}k</div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl bg-emerald-50 p-2.5 ring-1 ring-emerald-200">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">YOU</div>
            <div className="flex-1">
              <div className="text-[11.5px] font-bold text-emerald-900">You finished #9 · 6,420 zikr</div>
              <div className="text-[9.5px] text-emerald-800">Just outside prize zone — top 3 next time 💪</div>
            </div>
          </div>
        </div>
        <div className="mt-3 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-2 text-center text-[9.5px] text-slate-500">
          Only top 50 + your row stored per season · keeps history fast to load
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  SPONSOR CHANNEL / PROFILE VARIANTS                                */
/* ================================================================== */

const SPONSOR_ROOMS = [
  { title: "Ramadan Zikr Challenge", prize: "৳40,000", joined: "12.4k", status: "live",     when: "Live now",        emoji: "🌙" },
  { title: "Subhanallah 100k Sprint", prize: "৳15,000", joined: "8.1k",  status: "live",     when: "2 days left",     emoji: "📿" },
  { title: "Durood Marathon",         prize: "৳10,000", joined: "—",     status: "upcoming", when: "Starts in 3 days",emoji: "🤲" },
  { title: "Tahajjud Streak",         prize: "৳25,000", joined: "—",     status: "upcoming", when: "Starts Jun 1",    emoji: "✨" },
  { title: "Eid Special · Astaghfar", prize: "৳30,000", joined: "21.7k", status: "ended",    when: "Ended · Apr 12",  emoji: "🕋" },
];

const SPONSOR_INFO = {
  name: "Wizlife",
  handle: "@wizlife",
  followers: "1.2M",
  rooms: 24,
  prizeGiven: "৳12,40,000",
  bioShort: "Bangladesh's Islamic lifestyle brand. We sponsor monthly Zikr rooms and reward the most consistent worshippers.",
  founded: "2019",
  location: "Dhaka, Bangladesh",
  website: "wizlife.com.bd",
};

function VerifiedTick({ size = 14 }: { size?: number }) {
  return (
    <span style={{ width: size, height: size }} className="inline-grid place-items-center rounded-full bg-blue-500 text-white">
      <svg viewBox="0 0 24 24" fill="none" className="h-2.5 w-2.5"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  );
}

function StatusPill({ status }: { status: string }) {
  if (status === "live")
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-600">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" /> LIVE
      </span>
    );
  if (status === "upcoming")
    return <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700">UPCOMING</span>;
  return <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">ENDED</span>;
}

/* ---------- Variant 1: YouTube-style channel ---------- */
function SponsorChannelV1() {
  const [tab, setTab] = useState<"active" | "upcoming" | "past" | "about">("active");
  const filtered = SPONSOR_ROOMS.filter((r) =>
    tab === "active" ? r.status === "live" : tab === "upcoming" ? r.status === "upcoming" : tab === "past" ? r.status === "ended" : true
  );
  return (
    <div className="bg-white">
      {/* Top nav */}
      <div className="flex items-center justify-between bg-white px-4 py-3 text-slate-800">
        <ChevronRight className="h-5 w-5 rotate-180" />
        <span className="text-[13px] font-semibold">Sponsor</span>
        <Bell className="h-5 w-5" />
      </div>

      {/* Cover */}
      <div className="relative h-32 w-full overflow-hidden bg-slate-200">
        <img src={bannerBaby} alt="" className="h-full w-full object-cover" />
      </div>

      {/* Identity */}
      <div className="px-4 pb-3 pt-3">
        <div className="-mt-10 flex items-end gap-3">
          <img src={sponsorLogo} className="h-16 w-16 rounded-full border-4 border-white object-cover shadow-md" alt="" />
          <div className="pb-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[16px] font-bold text-slate-900">{SPONSOR_INFO.name}</span>
              <VerifiedTick />
            </div>
            <div className="text-[11px] text-slate-500">{SPONSOR_INFO.handle} · {SPONSOR_INFO.followers} followers</div>
          </div>
        </div>

        <div className="mt-2 text-[11px] text-slate-500">
          {SPONSOR_INFO.rooms} rooms · {SPONSOR_INFO.prizeGiven} given as prizes
        </div>

        <p className="mt-2 line-clamp-2 text-[12px] leading-snug text-slate-700">
          {SPONSOR_INFO.bioShort} <span className="font-semibold text-slate-900">...more</span>
        </p>

        <div className="mt-3 flex gap-2">
          <button className="flex-1 rounded-full bg-slate-900 py-2 text-[12px] font-semibold text-white">Subscribe</button>
          <button className="rounded-full border border-slate-200 px-4 py-2 text-[12px] font-semibold text-slate-700">Share</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="sticky top-0 z-10 flex border-b border-slate-100 bg-white px-4 text-[12px] font-medium">
        {(["active", "upcoming", "past", "about"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`relative mr-4 py-2.5 capitalize ${tab === t ? "text-slate-900" : "text-slate-400"}`}
          >
            {t}
            {tab === t && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-slate-900" />}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-2.5 bg-[#F4F6FA] px-3 py-3 pb-6">
        {tab === "about" ? (
          <div className="space-y-2 rounded-xl bg-white p-3 text-[12px] text-slate-700">
            <p>{SPONSOR_INFO.bioShort}</p>
            <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
              <div><div className="text-slate-400">Founded</div><div className="font-semibold text-slate-800">{SPONSOR_INFO.founded}</div></div>
              <div><div className="text-slate-400">Location</div><div className="font-semibold text-slate-800">{SPONSOR_INFO.location}</div></div>
              <div className="col-span-2"><div className="text-slate-400">Website</div><div className="font-semibold text-blue-600">{SPONSOR_INFO.website}</div></div>
            </div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="rounded-xl bg-white py-8 text-center text-[12px] text-slate-400">Nothing here yet.</div>
        ) : (
          filtered.map((r, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl bg-white p-2.5 shadow-[0_2px_8px_-4px_rgba(15,23,42,0.15)]">
              <div className="grid h-14 w-20 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 text-2xl">{r.emoji}</div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <StatusPill status={r.status} />
                  <span className="text-[10px] text-slate-400">{r.when}</span>
                </div>
                <div className="mt-0.5 truncate text-[13px] font-semibold text-slate-900">{r.title}</div>
                <div className="text-[11px] text-slate-500">Prize {r.prize}{r.joined !== "—" && ` · ${r.joined} joined`}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* ---------- Variant 2: Premium navy/gold brand page ---------- */
function SponsorChannelV2() {
  return (
    <div className="bg-[#F4F6FA]">
      {/* Header */}
      <div style={{ background: NAVY }} className="relative px-5 pb-24 pt-4 text-white">
        <div className="flex items-center justify-between text-[11px]">
          <ChevronRight className="h-4 w-4 rotate-180" />
          <span className="font-semibold uppercase tracking-[0.18em] opacity-80">Presented By</span>
          <Sparkles className="h-4 w-4" />
        </div>
        <div className="mt-4 flex flex-col items-center">
          <img src={sponsorLogo} className="h-16 w-16 rounded-full ring-4 ring-white/15" alt="" />
          <div className="mt-2 flex items-center gap-1.5">
            <span className="text-[18px] font-bold">{SPONSOR_INFO.name}</span>
            <VerifiedTick />
          </div>
          <div className="text-[11px] text-white/70">{SPONSOR_INFO.handle}</div>
        </div>
      </div>

      {/* Flagship room card overlap */}
      <div className="px-4">
        <div
          className="-mt-14 overflow-hidden rounded-2xl p-4 text-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.4)]"
          style={{ background: "linear-gradient(135deg,#1F3A5F 0%,#3B5A8A 100%)" }}
        >
          <div className="text-[10px] font-semibold uppercase tracking-wider text-amber-300">Flagship Room</div>
          <div className="mt-1 text-[16px] font-bold leading-tight">Ramadan Zikr Challenge</div>
          <div className="mt-2 flex items-end justify-between">
            <div>
              <div className="text-[10px] uppercase text-white/60">Total Prize</div>
              <div className="text-[20px] font-extrabold text-amber-300">৳40,000</div>
            </div>
            <button className="rounded-full bg-amber-300 px-4 py-1.5 text-[12px] font-bold text-slate-900">Join</button>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="mx-4 mt-3 grid grid-cols-3 overflow-hidden rounded-xl bg-white text-center text-[11px]">
        {[
          { v: SPONSOR_INFO.rooms, l: "Active Rooms" },
          { v: SPONSOR_INFO.prizeGiven, l: "Prize Given" },
          { v: "186", l: "Winners" },
        ].map((s, i) => (
          <div key={i} className={`py-3 ${i < 2 ? "border-r border-slate-100" : ""}`}>
            <div className="text-[14px] font-bold text-slate-900">{s.v}</div>
            <div className="text-slate-400">{s.l}</div>
          </div>
        ))}
      </div>

      {/* Rooms carousel */}
      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between px-4">
          <h3 className="text-[13px] font-bold text-slate-900">All Rooms</h3>
          <span className="text-[11px] font-semibold text-slate-500">See all</span>
        </div>
        <div className="flex gap-3 overflow-x-auto px-4 pb-2 [&::-webkit-scrollbar]:hidden">
          {SPONSOR_ROOMS.map((r, i) => (
            <div key={i} className="w-[180px] shrink-0 overflow-hidden rounded-xl bg-white shadow-[0_4px_14px_-8px_rgba(15,23,42,0.2)]">
              <div className="grid h-20 place-items-center bg-gradient-to-br from-slate-100 to-slate-200 text-3xl">{r.emoji}</div>
              <div className="p-2.5">
                <StatusPill status={r.status} />
                <div className="mt-1 truncate text-[12px] font-semibold text-slate-900">{r.title}</div>
                <div className="text-[10px] text-slate-500">Prize {r.prize}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past winners */}
      <div className="mt-4 px-4 pb-6">
        <h3 className="mb-2 text-[13px] font-bold text-slate-900">Past Winners</h3>
        <div className="grid grid-cols-4 gap-2 rounded-xl bg-white p-3">
          {LB_PLAYERS.slice(0, 8).map((p, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-700">{p.avatar}</div>
              <div className="text-[9px] font-semibold text-slate-700">{p.name.split(" ")[0]}</div>
              <div className="text-[9px] text-amber-600">৳5k</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating CTA */}
      <div className="sticky bottom-0 border-t border-slate-100 bg-white/95 p-3 backdrop-blur">
        <button className="w-full rounded-full bg-amber-400 py-2.5 text-[13px] font-bold text-slate-900">
          + Follow Sponsor
        </button>
      </div>
    </div>
  );
}

/* ---------- Variant 3: Magazine / Editorial ---------- */
function SponsorChannelV3() {
  const live = SPONSOR_ROOMS.find((r) => r.status === "live")!;
  const others = SPONSOR_ROOMS.filter((r) => r !== live);
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative h-44 w-full overflow-hidden">
        <img src={bannerBooks} className="h-full w-full object-cover" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <button className="absolute left-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-black/40 text-white backdrop-blur">
          <ChevronRight className="h-4 w-4 rotate-180" />
        </button>
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <div className="text-[10px] uppercase tracking-[0.2em] text-amber-200">Sponsor Profile</div>
          <div className="flex items-end gap-2">
            <h2 className="font-serif text-[28px] font-bold leading-tight">{SPONSOR_INFO.name}</h2>
            <VerifiedTick />
          </div>
        </div>
      </div>

      {/* Two-column meta */}
      <div className="grid grid-cols-5 gap-3 px-4 py-4">
        <p className="col-span-3 text-[12px] leading-relaxed text-slate-700">{SPONSOR_INFO.bioShort}</p>
        <div className="col-span-2 space-y-1.5 border-l border-slate-100 pl-3 text-[10px]">
          <div><div className="text-slate-400">FOUNDED</div><div className="font-bold text-slate-800">{SPONSOR_INFO.founded}</div></div>
          <div><div className="text-slate-400">BASE</div><div className="font-bold text-slate-800">{SPONSOR_INFO.location}</div></div>
          <div><div className="text-slate-400">WEB</div><div className="font-bold text-blue-600">{SPONSOR_INFO.website}</div></div>
        </div>
      </div>

      <button className="mx-4 mb-4 w-[calc(100%-2rem)] rounded-md border border-slate-900 py-2 text-[12px] font-semibold text-slate-900">
        Subscribe · {SPONSOR_INFO.followers}
      </button>

      {/* Now Running */}
      <div className="px-4">
        <div className="mb-2 flex items-baseline gap-2">
          <h3 className="font-serif text-[16px] font-bold text-slate-900">Now Running</h3>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        <div className="overflow-hidden rounded-lg border border-slate-200">
          <div className="grid h-28 place-items-center bg-gradient-to-br from-amber-50 to-rose-50 text-5xl">{live.emoji}</div>
          <div className="p-3">
            <StatusPill status={live.status} />
            <div className="mt-1 font-serif text-[16px] font-bold text-slate-900">{live.title}</div>
            <div className="mt-0.5 text-[11px] text-slate-500">Prize {live.prize} · {live.joined} joined · {live.when}</div>
            <button className="mt-2 w-full rounded-md bg-slate-900 py-1.5 text-[12px] font-semibold text-white">Enter Room</button>
          </div>
        </div>
      </div>

      {/* More rooms */}
      <div className="px-4 pt-4">
        <div className="mb-2 flex items-baseline gap-2">
          <h3 className="font-serif text-[16px] font-bold text-slate-900">More by {SPONSOR_INFO.name}</h3>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {others.map((r, i) => (
            <div key={i} className="overflow-hidden rounded-lg border border-slate-200">
              <div className="grid h-16 place-items-center bg-slate-50 text-2xl">{r.emoji}</div>
              <div className="p-2">
                <StatusPill status={r.status} />
                <div className="mt-1 line-clamp-1 text-[11px] font-semibold text-slate-900">{r.title}</div>
                <div className="text-[10px] text-slate-500">{r.prize}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hall of champions */}
      <div className="px-4 pt-4">
        <div className="mb-2 flex items-baseline gap-2">
          <h3 className="font-serif text-[16px] font-bold text-slate-900">Hall of Champions</h3>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        <div className="space-y-1.5">
          {LB_PLAYERS.slice(0, 4).map((p, i) => (
            <div key={i} className="flex items-center gap-3 border-b border-slate-100 py-1.5 last:border-0">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-700">{p.avatar}</div>
              <div className="min-w-0 flex-1">
                <div className="text-[12px] font-semibold text-slate-900">{p.name}</div>
                <div className="text-[10px] text-slate-400">Week {18 - i} · {p.count.toLocaleString()} zikr</div>
              </div>
              <div className="text-[11px] font-bold text-amber-600">৳5,000</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer socials */}
      <div className="mt-5 flex items-center justify-center gap-5 border-t border-slate-100 py-4 text-slate-400">
        {[Globe2, Heart, Award, BookOpen].map((Ic, i) => (
          <Ic key={i} className="h-4 w-4" />
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  V2 — FLOW-WISE FE DESIGN                                          */
/*  Permanent rooms + Seasons + Sponsor flows, end-to-end mockups     */
/* ================================================================== */

const FLOW_ACCENTS: Record<number, { bg: string; text: string; ring: string; label: string }> = {
  0: { bg: "bg-slate-100",   text: "text-slate-700",    ring: "ring-slate-200",    label: "Core App Screens · V2 redesign" },
  1: { bg: "bg-indigo-50",   text: "text-indigo-700",   ring: "ring-indigo-200",   label: "Member · Discover & Join" },
  2: { bg: "bg-amber-50",    text: "text-amber-700",    ring: "ring-amber-200",    label: "Member · Live Season" },
  3: { bg: "bg-emerald-50",  text: "text-emerald-700",  ring: "ring-emerald-200",  label: "Member · Between Seasons" },
  4: { bg: "bg-sky-50",      text: "text-sky-700",      ring: "ring-sky-200",      label: "Admin · Schedule Season" },
  5: { bg: "bg-rose-50",     text: "text-rose-700",     ring: "ring-rose-200",     label: "Sponsor · Brand Journey" },
};

function StepFrame({
  flow, step, title, bnTitle, children,
}: { flow: number; step: number; title: string; bnTitle?: string; children: React.ReactNode }) {
  const a = FLOW_ACCENTS[flow];
  const captureRef = React.useRef<HTMLDivElement>(null);
  const label = `Flow ${flow} · Step ${step} · ${title}`;
  const inner = (
    <div className="w-[300px] overflow-hidden rounded-[26px] bg-white shadow-[0_18px_44px_-18px_rgba(15,23,42,0.30)] ring-1 ring-black/5">
      <div style={{ background: NAVY }} className="flex items-center justify-between px-4 py-3 text-white">
        <ChevronRight className="h-4 w-4 rotate-180 opacity-70" />
        <span className="text-[12px] font-semibold tracking-tight">{title}</span>
        <div className="h-4 w-4" />
      </div>
      <div className="min-h-[520px] space-y-3 bg-[#F4F6FA] px-3 pb-4 pt-3">{children}</div>
    </div>
  );
  useRegisterFrame(`v2:${label}`, "phone", label, inner);
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex w-[300px] items-center justify-between gap-2">
        <div className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ring-1 ${a.bg} ${a.text} ${a.ring}`}>
          <span className="grid h-4 w-4 place-items-center rounded-full bg-white/70 text-[9px]">{step}</span>
          Step {step}
        </div>
        <div className="flex items-center gap-1">
          <CopyButtons targetRef={captureRef} />
          <ExportButton targetRef={captureRef} label={label} />
          <PickButton frameKey={`v2:${label}`} />
        </div>
      </div>
      <div ref={captureRef}>{inner}</div>
      {bnTitle && (
        <div className="bn max-w-[300px] text-center text-[11px] text-slate-500">{bnTitle}</div>
      )}
    </div>
  );
}

function FlowRow({
  flow, title, bn, children,
}: { flow: number; title: string; bn: string; children: React.ReactNode }) {
  const a = FLOW_ACCENTS[flow];
  return (
    <section className="mb-16">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ring-1 ${a.bg} ${a.text} ${a.ring}`}>
            Flow {flow} · {a.label}
          </div>
          <h2 className="mt-2 text-xl font-bold text-slate-900">{title}</h2>
          <p className="bn mt-1 text-[13px] text-slate-500">{bn}</p>
        </div>
        <div className="text-[11px] uppercase tracking-wider text-slate-400">Read left → right</div>
      </div>
      <div className="flex flex-wrap items-start gap-x-4 gap-y-8">
        {React.Children.toArray(children).flatMap((child, i, arr) =>
          i < arr.length - 1
            ? [child, <ArrowRight key={`a${i}`} className="mt-32 hidden h-6 w-6 shrink-0 text-slate-300 lg:block" />]
            : [child]
        )}
      </div>
    </section>
  );
}

/* ---------- atoms reused across V2 screens ---------- */

function MiniRoomCard({ name, members, badge, sponsor, prize }: {
  name: string; members: string; badge?: "forever" | "season" | "dormant"; sponsor?: string; prize?: string;
}) {
  return (
    <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
      <div className="flex items-start gap-2">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#EEF1F6] text-base">📿</div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h4 className="bn truncate text-[13px] font-bold text-slate-900">{name}</h4>
            {badge === "forever" && (
              <span className="inline-flex items-center gap-0.5 rounded bg-indigo-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-indigo-700">
                <InfinityIcon className="h-2.5 w-2.5" />Forever
              </span>
            )}
            {badge === "season" && (
              <span className="inline-flex items-center gap-0.5 rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-amber-700">
                <Zap className="h-2.5 w-2.5" />Live
              </span>
            )}
            {badge === "dormant" && (
              <span className="inline-flex items-center gap-0.5 rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-slate-500">
                <Clock className="h-2.5 w-2.5" />Idle
              </span>
            )}
          </div>
          {sponsor && (
            <div className="mt-0.5 text-[10px] font-semibold text-slate-500">Powered by <span className="text-slate-700">{sponsor}</span></div>
          )}
          {prize && (
            <div className="mt-0.5 inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700">
              <Gift className="h-3 w-3" /> {prize}
            </div>
          )}
          <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-500">
            <span className="flex items-center gap-0.5"><Users className="h-2.5 w-2.5" />{members}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="px-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">{children}</div>;
}

function Pill({ children, tone = "slate" }: { children: React.ReactNode; tone?: "slate" | "amber" | "emerald" | "indigo" | "rose" }) {
  const map: Record<string, string> = {
    slate: "bg-slate-100 text-slate-700",
    amber: "bg-amber-100 text-amber-800",
    emerald: "bg-emerald-100 text-emerald-800",
    indigo: "bg-indigo-100 text-indigo-800",
    rose: "bg-rose-100 text-rose-800",
  };
  return <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${map[tone]}`}>{children}</span>;
}

/* =========================================================== */
/*  FLOW 1 — Member discovers & joins a permanent room          */
/* =========================================================== */

function F1S1() {
  return (
    <StepFrame flow={1} step={1} title="Home · Permanent Rooms" bnTitle="হোম থেকে স্থায়ী রুম খুঁজে পাওয়া">
      <SectionLabel>Permanent Rooms · Forever</SectionLabel>
      <MiniRoomCard name="সুবহানাল্লাহি ওয়া বিহামদিহী" members="5,820" badge="forever" sponsor="Wizlife" />
      <MiniRoomCard name="দরুদে ইব্রাহীম" members="3,140" badge="forever" sponsor="Ifad" />
      <MiniRoomCard name="ইস্তেগফার" members="2,406" badge="forever" />
      <SectionLabel>Public Rooms</SectionLabel>
      <MiniRoomCard name="রমজান প্রস্তুতি" members="42" />
    </StepFrame>
  );
}

function F1S2() {
  return (
    <StepFrame flow={1} step={2} title="Room detail" bnTitle="রুম ডিটেইল — আজীবন সদস্য + পুরনো স্পন্সর">
      <div className="rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-800 p-4 text-white">
        <div className="flex items-center justify-between">
          <Pill tone="indigo">Forever Room</Pill>
          <InfinityIcon className="h-4 w-4 opacity-80" />
        </div>
        <h3 className="bn mt-2 text-[15px] font-bold">সুবহানাল্লাহি ওয়া বিহামদিহী</h3>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <div><div className="text-base font-bold">5,820</div><div className="text-[9px] opacity-80">Lifetime members</div></div>
          <div><div className="text-base font-bold">8.2M</div><div className="text-[9px] opacity-80">Total tasbih</div></div>
          <div><div className="text-base font-bold">128w</div><div className="text-[9px] opacity-80">Active</div></div>
        </div>
      </div>
      <div className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
        <SectionLabel>Powered by · past & present</SectionLabel>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {["Wizlife","Ifad","ACI","Pran","Bashundhara"].map(s => (
            <span key={s} className="rounded bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-700">{s}</span>
          ))}
        </div>
      </div>
      <button className="w-full rounded-xl py-3 text-[13px] font-bold text-white" style={{ background: NAVY }}>
        Join forever
      </button>
    </StepFrame>
  );
}

function F1S3() {
  return (
    <StepFrame flow={1} step={3} title="Joined" bnTitle="যোগদান নিশ্চিত — আপনি আজীবন সদস্য">
      <div className="mt-2 grid place-items-center rounded-2xl bg-white p-5 text-center ring-1 ring-slate-100">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-indigo-100 text-indigo-700">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-3 text-[15px] font-bold text-slate-900">You're a forever member</h3>
        <p className="bn mt-1 text-[11px] text-slate-500">এই রুম কখনো বন্ধ হবে না — সিজন আসবে যাবে, আপনি থাকবেন।</p>
      </div>
      <div className="rounded-xl bg-indigo-50 p-3 ring-1 ring-indigo-100">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase text-indigo-700">Lifetime counter started</span>
          <InfinityIcon className="h-4 w-4 text-indigo-700" />
        </div>
        <div className="mt-1 text-3xl font-black text-indigo-900">0</div>
        <div className="text-[10px] text-indigo-700">Every tasbih adds forever</div>
      </div>
      <div className="rounded-xl bg-white p-3 text-[11px] text-slate-600 ring-1 ring-slate-100">
        🔔 We'll notify you when a new sponsor season starts.
      </div>
    </StepFrame>
  );
}

function F1S4() {
  return (
    <StepFrame flow={1} step={4} title="Home · after joining" bnTitle="যোগ দেওয়ার পর — পিন করা রুম + সিজন">
      <SectionLabel>Pinned for you</SectionLabel>
      <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-amber-100 text-base">📿</div>
          <div className="min-w-0 flex-1">
            <h4 className="bn text-[13px] font-bold text-slate-900">সুবহানাল্লাহি…</h4>
            <div className="mt-0.5 flex items-center gap-1"><Pill tone="amber"><Zap className="h-2.5 w-2.5" />Season Live</Pill></div>
          </div>
        </div>
        <div className="mt-2 rounded-lg bg-amber-50 p-2 text-[10px]">
          <div className="font-bold text-amber-800">Wizlife Ramadan Season</div>
          <div className="text-amber-700">Prize: 50,000৳ · ends in 6d 12h</div>
        </div>
      </div>
      <SectionLabel>Other forever rooms</SectionLabel>
      <MiniRoomCard name="দরুদে ইব্রাহীম" members="3,140" badge="forever" sponsor="Ifad" />
      <MiniRoomCard name="ইস্তেগফার" members="2,406" badge="forever" />
    </StepFrame>
  );
}

/* =========================================================== */
/*  FLOW 2 — Season is live                                     */
/* =========================================================== */

function F2S1() {
  return (
    <StepFrame flow={2} step={1} title="Season banner" bnTitle="সিজন চলছে — পুরস্কার + কাউন্টডাউন">
      <div className="overflow-hidden rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 p-4 text-white">
        <div className="flex items-center justify-between">
          <Pill tone="amber"><Zap className="h-2.5 w-2.5" />Live Season</Pill>
          <span className="text-[10px] font-bold opacity-90">SEASON 04</span>
        </div>
        <h3 className="mt-2 text-[15px] font-bold">Wizlife Ramadan Challenge</h3>
        <div className="bn mt-0.5 text-[11px] opacity-90">সুবহানাল্লাহি ওয়া বিহামদিহী</div>
        <div className="mt-3 flex items-center gap-2">
          <Gift className="h-4 w-4" />
          <span className="text-[12px] font-bold">Prize pool 50,000৳</span>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-1 text-center">
          {[["6","DAYS"],["12","HRS"],["48","MIN"],["09","SEC"]].map(([n,l]) => (
            <div key={l} className="rounded bg-white/20 py-1.5">
              <div className="text-sm font-black">{n}</div>
              <div className="text-[8px] opacity-80">{l}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
        <div className="text-[11px] font-semibold text-slate-700">Top 3 today</div>
        <div className="mt-2 space-y-1.5 text-[11px]">
          {[["1","Rahim","2,140"],["2","Aisha","1,980"],["3","Karim","1,720"]].map(([r,n,c]) => (
            <div key={r} className="flex justify-between"><span>#{r} {n}</span><span className="font-bold">{c}</span></div>
          ))}
        </div>
      </div>
      <button className="w-full rounded-xl bg-amber-500 py-3 text-[13px] font-bold text-white">Start Tasbih</button>
    </StepFrame>
  );
}

function F2S2() {
  return (
    <StepFrame flow={2} step={2} title="Tasbih counter" bnTitle="কাউন্টার — সিজন কাউন্ট + আজীবন কাউন্ট">
      <div className="grid place-items-center rounded-2xl bg-gradient-to-b from-amber-50 to-white p-4 ring-1 ring-amber-100">
        <div className="text-[10px] font-bold uppercase tracking-wider text-amber-700">Season count</div>
        <div className="my-1 text-5xl font-black text-amber-600">847</div>
        <div className="text-[10px] text-amber-700">Resets when season ends</div>
        <div className="my-3 h-px w-full bg-amber-100" />
        <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-700">Lifetime count</div>
        <div className="text-2xl font-black text-indigo-900">12,408 <InfinityIcon className="inline h-4 w-4" /></div>
        <div className="text-[10px] text-indigo-700">Stays forever</div>
      </div>
      <button className="w-full rounded-2xl py-6 text-2xl font-black text-white" style={{ background: NAVY }}>
        TAP +1
      </button>
      <div className="flex items-center justify-between rounded-xl bg-white p-2 text-[10px] ring-1 ring-slate-100">
        <span className="text-slate-500">Your rank this season</span>
        <span className="font-bold text-amber-700">#42 of 1,820</span>
      </div>
    </StepFrame>
  );
}

function F2S3() {
  return (
    <StepFrame flow={2} step={3} title="Season leaderboard" bnTitle="সিজন লিডারবোর্ড — পুরস্কার টায়ার সহ">
      <div className="rounded-xl bg-amber-50 p-2 text-center text-[10px] font-bold text-amber-800 ring-1 ring-amber-100">
        Wizlife Ramadan · Top 10 win prizes
      </div>
      <div className="space-y-1.5">
        {[
          ["1","Rahim","42,140","🏆 25,000৳","amber"],
          ["2","Aisha","38,980","🥈 12,000৳","slate"],
          ["3","Karim","34,720","🥉 8,000৳","amber"],
          ["4","Nadia","29,540","🎁 1,000৳","slate"],
          ["5","Imran","27,210","🎁 1,000৳","slate"],
        ].map(([r,n,c,p]) => (
          <div key={r} className="flex items-center gap-2 rounded-lg bg-white p-2 ring-1 ring-slate-100">
            <div className="grid h-7 w-7 place-items-center rounded-full bg-slate-100 text-[11px] font-bold">#{r}</div>
            <div className="flex-1 text-[12px] font-semibold text-slate-800">{n}</div>
            <div className="text-right">
              <div className="text-[11px] font-bold text-slate-900">{c}</div>
              <div className="text-[9px] text-amber-700">{p}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-indigo-50 p-2.5 text-[11px] ring-1 ring-indigo-100">
        <div className="font-bold text-indigo-900">You · #42</div>
        <div className="text-indigo-700">8,420 · 218 to top 10</div>
      </div>
    </StepFrame>
  );
}

function F2S4() {
  return (
    <StepFrame flow={2} step={4} title="Season ended" bnTitle="সিজন শেষ — বিজয়ী ও স্পন্সরের ধন্যবাদ">
      <div className="overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-4 text-center text-white">
        <Crown className="mx-auto h-8 w-8" />
        <div className="mt-1 text-[10px] font-bold uppercase tracking-wider opacity-80">Season 04 winner</div>
        <div className="mt-1 text-lg font-black">Rahim Ahmed</div>
        <div className="text-[11px] opacity-90">42,140 tasbih · 25,000৳</div>
      </div>
      <div className="rounded-xl bg-white p-3 text-center ring-1 ring-slate-100">
        <div className="text-[10px] font-bold uppercase text-slate-500">Sponsor message</div>
        <p className="bn mt-1 text-[11px] text-slate-700">"আলহামদুলিল্লাহ — আপনাদের সবাইকে অশেষ ধন্যবাদ।"</p>
        <div className="mt-1 text-[10px] font-semibold text-slate-500">— Wizlife</div>
      </div>
      <div className="rounded-xl bg-amber-50 p-3 ring-1 ring-amber-100">
        <div className="text-[10px] font-bold uppercase text-amber-700">Your final rank</div>
        <div className="mt-0.5 text-2xl font-black text-amber-900">#42 <span className="text-xs font-semibold">of 1,820</span></div>
        <div className="text-[11px] text-amber-700">Lifetime: 12,408 · stays with you</div>
      </div>
      <div className="text-center text-[10px] text-slate-500">Next season starts in 6 days · 🔔 we'll notify you</div>
    </StepFrame>
  );
}

/* =========================================================== */
/*  FLOW 3 — Between seasons (room stays alive)                 */
/* =========================================================== */

function F3S1() {
  return (
    <StepFrame flow={3} step={1} title="Dormant state" bnTitle="সিজনের মাঝে — রুম জীবন্ত, পরের সিজন আসছে">
      <div className="rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 p-4 text-white">
        <Pill tone="slate"><Clock className="h-2.5 w-2.5" />No active season</Pill>
        <h3 className="bn mt-2 text-[14px] font-bold">সুবহানাল্লাহি ওয়া বিহামদিহী</h3>
        <div className="mt-3 rounded-lg bg-white/10 p-2.5">
          <div className="text-[10px] uppercase opacity-80">Next season</div>
          <div className="mt-0.5 text-[13px] font-bold">Eid Special — by Ifad</div>
          <div className="mt-1 flex items-center gap-1 text-[11px] opacity-90"><Calendar className="h-3 w-3" /> Starts in 6 days</div>
          <div className="mt-1 text-[11px] opacity-90"><Gift className="inline h-3 w-3" /> Prize 35,000৳</div>
        </div>
      </div>
      <div className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
        <div className="text-[11px] font-semibold text-slate-700">Daily zikr keeps going</div>
        <div className="mt-2 flex items-center justify-between">
          <div>
            <div className="text-2xl font-black text-emerald-700">12,408</div>
            <div className="text-[10px] text-emerald-700">Your lifetime</div>
          </div>
          <button className="rounded-lg bg-emerald-600 px-3 py-2 text-[12px] font-bold text-white">Continue</button>
        </div>
      </div>
      <button className="w-full rounded-xl bg-amber-500 py-2.5 text-[12px] font-bold text-white">🔔 Remind me when season starts</button>
    </StepFrame>
  );
}

function F3S2() {
  return (
    <StepFrame flow={3} step={2} title="Daily zikr · streak" bnTitle="প্রতিদিনের জিকর — স্ট্রিক চলমান">
      <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-white p-4 ring-1 ring-emerald-100">
        <div className="flex items-center justify-between">
          <Pill tone="emerald">🔥 18-day streak</Pill>
          <Heart className="h-4 w-4 text-rose-400" />
        </div>
        <div className="mt-3 grid place-items-center">
          <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Lifetime</div>
          <div className="text-4xl font-black text-emerald-900">12,408</div>
          <div className="mt-0.5 inline-flex items-center gap-1 text-[10px] text-emerald-700">
            <InfinityIcon className="h-3 w-3" /> +27 today
          </div>
        </div>
      </div>
      <button className="w-full rounded-2xl py-5 text-xl font-black text-white" style={{ background: NAVY }}>TAP +1</button>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className={`h-6 rounded ${i < 5 ? "bg-emerald-400" : "bg-slate-200"}`} />
        ))}
      </div>
      <div className="text-center text-[10px] text-slate-500">Last 7 days</div>
    </StepFrame>
  );
}

function F3S3() {
  return (
    <StepFrame flow={3} step={3} title="Past sponsors" bnTitle="পুরনো স্পন্সর — সামাজিক প্রমাণ">
      <SectionLabel>Hall of past sponsors</SectionLabel>
      <div className="grid grid-cols-3 gap-2">
        {["Wizlife","Ifad","ACI","Pran","Square","Bashundhara"].map(s => (
          <div key={s} className="grid place-items-center rounded-lg bg-white p-2 text-center text-[10px] font-bold text-slate-700 ring-1 ring-slate-100">
            <div className="grid h-8 w-8 place-items-center rounded bg-slate-100">🏷️</div>
            <div className="mt-1">{s}</div>
          </div>
        ))}
      </div>
      <SectionLabel>Season recaps</SectionLabel>
      {[
        ["S03 · Wizlife","Winner: Rahim · 42K"],
        ["S02 · Ifad","Winner: Sumi · 38K"],
        ["S01 · ACI","Winner: Junaid · 31K"],
      ].map(([t,d]) => (
        <div key={t} className="flex items-center justify-between rounded-lg bg-white p-2 ring-1 ring-slate-100">
          <div>
            <div className="text-[12px] font-bold text-slate-900">{t}</div>
            <div className="text-[10px] text-slate-500">{d}</div>
          </div>
          <ChevronRight className="h-4 w-4 text-slate-400" />
        </div>
      ))}
    </StepFrame>
  );
}

/* =========================================================== */
/*  FLOW 4 — Admin schedules a season                           */
/* =========================================================== */

function F4S1() {
  return (
    <StepFrame flow={4} step={1} title="Admin · Permanent rooms" bnTitle="অ্যাডমিন — স্থায়ী রুমে সিজন যোগ">
      <SectionLabel>Permanent rooms (sponsor-eligible)</SectionLabel>
      {[
        ["সুবহানাল্লাহি", "5,820", true],
        ["দরুদে ইব্রাহীম", "3,140", false],
        ["ইস্তেগফার", "2,406", false],
        ["আলহামদুলিল্লাহ", "1,920", false],
      ].map(([n,m,active]) => (
        <div key={n as string} className="flex items-center gap-2 rounded-xl bg-white p-2.5 ring-1 ring-slate-100">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-sky-100 text-base">📿</div>
          <div className="min-w-0 flex-1">
            <div className="bn truncate text-[12px] font-bold text-slate-900">{n}</div>
            <div className="text-[10px] text-slate-500">{m} members · {active ? "Season live" : "No season"}</div>
          </div>
          {active ? (
            <Pill tone="amber">Live</Pill>
          ) : (
            <button className="rounded-lg bg-sky-600 px-2.5 py-1 text-[10px] font-bold text-white">+ Season</button>
          )}
        </div>
      ))}
    </StepFrame>
  );
}

function F4S2() {
  return (
    <StepFrame flow={4} step={2} title="New season form" bnTitle="নতুন সিজন তৈরি — তারিখ, পুরস্কার, স্পন্সর">
      <div className="space-y-2">
        <div className="rounded-lg bg-white p-2.5 ring-1 ring-slate-100">
          <div className="text-[9px] font-bold uppercase text-slate-500">Room</div>
          <div className="bn text-[12px] font-bold">দরুদে ইব্রাহীম</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-white p-2 ring-1 ring-slate-100">
            <div className="text-[9px] font-bold uppercase text-slate-500">Start</div>
            <div className="text-[12px] font-bold">May 20</div>
          </div>
          <div className="rounded-lg bg-white p-2 ring-1 ring-slate-100">
            <div className="text-[9px] font-bold uppercase text-slate-500">End</div>
            <div className="text-[12px] font-bold">May 27</div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-2.5 ring-1 ring-slate-100">
          <div className="text-[9px] font-bold uppercase text-slate-500">Sponsor</div>
          <div className="mt-1 flex items-center gap-2">
            <div className="grid h-7 w-7 place-items-center rounded bg-amber-100">🏷️</div>
            <div className="text-[12px] font-bold">Ifad Group</div>
          </div>
        </div>
        <div className="rounded-lg bg-white p-2.5 ring-1 ring-slate-100">
          <div className="text-[9px] font-bold uppercase text-slate-500">Prize tiers</div>
          <div className="mt-1 space-y-1 text-[11px]">
            <div className="flex justify-between"><span>🥇 1st</span><span className="font-bold">25,000৳</span></div>
            <div className="flex justify-between"><span>🥈 2nd</span><span className="font-bold">10,000৳</span></div>
            <div className="flex justify-between"><span>🥉 3rd</span><span className="font-bold">5,000৳</span></div>
          </div>
        </div>
      </div>
      <button className="w-full rounded-xl bg-sky-600 py-3 text-[13px] font-bold text-white">Schedule season</button>
    </StepFrame>
  );
}

function F4S3() {
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  const booked = new Set([5, 6, 7, 8, 12, 13, 14, 20, 21, 22, 23, 24, 25, 26]);
  return (
    <StepFrame flow={4} step={3} title="Sponsor calendar" bnTitle="স্পন্সর ক্যালেন্ডার — কোন সপ্তাহ ফাঁকা">
      <div className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
        <div className="flex items-center justify-between">
          <div className="text-[12px] font-bold">May 2026</div>
          <div className="flex gap-1 text-[10px]">
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-amber-400" />Booked</span>
            <span className="flex items-center gap-1"><span className="h-2 w-2 rounded bg-emerald-400" />Free</span>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-7 gap-1 text-center">
          {["S","M","T","W","T","F","S"].map((d,i) => <div key={i} className="text-[9px] font-bold text-slate-400">{d}</div>)}
          {days.map(d => (
            <div key={d} className={`grid h-7 place-items-center rounded text-[10px] font-semibold ${booked.has(d) ? "bg-amber-200 text-amber-900" : "bg-emerald-100 text-emerald-900"}`}>
              {d}
            </div>
          ))}
        </div>
      </div>
      <SectionLabel>Booked weeks</SectionLabel>
      {[["May 5–11","Wizlife","সুবহানাল্লাহি"],["May 20–26","Ifad","দরুদে ইব্রাহীম"]].map(([w,s,r]) => (
        <div key={w} className="rounded-lg bg-white p-2 ring-1 ring-slate-100">
          <div className="text-[11px] font-bold">{w} · {s}</div>
          <div className="bn text-[10px] text-slate-500">{r}</div>
        </div>
      ))}
    </StepFrame>
  );
}

function F4S4() {
  return (
    <StepFrame flow={4} step={4} title="Confirmed" bnTitle="নিশ্চিত — সদস্যদের নোটিফাই করা হবে">
      <div className="grid place-items-center rounded-2xl bg-gradient-to-br from-sky-500 to-sky-700 p-5 text-center text-white">
        <CheckCircle2 className="h-10 w-10" />
        <div className="mt-2 text-[15px] font-black">Season scheduled</div>
        <div className="text-[11px] opacity-90">Ifad · May 20 → 27</div>
      </div>
      <div className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
        <div className="text-[10px] font-bold uppercase text-slate-500">Will notify</div>
        <div className="mt-1 flex items-center gap-2">
          <Users className="h-4 w-4 text-sky-600" />
          <span className="text-[13px] font-bold">3,140 forever members</span>
        </div>
        <div className="mt-1 text-[10px] text-slate-500">Push + in-app banner 24h before start</div>
      </div>
      <div className="rounded-xl bg-sky-50 p-3 ring-1 ring-sky-100 text-[11px] text-sky-800">
        Estimated reach this season: <b>~8,400</b> impressions · <b>1,900</b> active participants
      </div>
      <button className="w-full rounded-xl py-2.5 text-[12px] font-bold text-white" style={{ background: NAVY }}>Back to admin</button>
    </StepFrame>
  );
}

/* =========================================================== */
/*  FLOW 5 — Sponsor brand journey                              */
/* =========================================================== */

function F5S1() {
  return (
    <StepFrame flow={5} step={1} title="Sponsor onboarding" bnTitle="স্পন্সর — মানানসই রুম নির্বাচন">
      <div className="rounded-xl bg-rose-50 p-3 ring-1 ring-rose-100">
        <div className="text-[10px] font-bold uppercase text-rose-700">Welcome, Wizlife</div>
        <div className="text-[12px] text-rose-900">Pick a permanent room aligned with your brand.</div>
      </div>
      {[
        ["সুবহানাল্লাহি","5,820","65% age 25-44 · BD + KL","Best fit"],
        ["দরুদে ইব্রাহীম","3,140","58% age 30-54 · BD","Good fit"],
        ["ইস্তেগফার","2,406","48% age 18-34 · BD","Niche"],
      ].map(([n,m,d,fit]) => (
        <div key={n as string} className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
          <div className="flex items-center justify-between">
            <div className="bn text-[13px] font-bold text-slate-900">{n}</div>
            <Pill tone="rose">{fit}</Pill>
          </div>
          <div className="mt-1 text-[10px] text-slate-500"><Users className="inline h-3 w-3" /> {m} forever members</div>
          <div className="text-[10px] text-slate-500"><MapPin className="inline h-3 w-3" /> {d}</div>
          <button className="mt-2 w-full rounded-lg bg-rose-600 py-1.5 text-[11px] font-bold text-white">Select</button>
        </div>
      ))}
    </StepFrame>
  );
}

function F5S2() {
  return (
    <StepFrame flow={5} step={2} title="Book a season" bnTitle="বুকিং — সপ্তাহ, পুরস্কার, ক্রিয়েটিভ">
      <div className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
        <div className="text-[10px] font-bold uppercase text-slate-500">Selected room</div>
        <div className="bn text-[12px] font-bold">সুবহানাল্লাহি ওয়া বিহামদিহী</div>
      </div>
      <div className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
        <div className="text-[10px] font-bold uppercase text-slate-500">Choose week</div>
        <div className="mt-2 grid grid-cols-2 gap-2 text-[11px]">
          {[["May 5–11","Free","emerald"],["May 12–18","Free","emerald"],["May 20–26","Booked","slate"],["May 27–Jun 2","Free","emerald"]].map(([w,s,t]) => (
            <button key={w} className={`rounded-lg border-2 p-2 text-left ${t === "emerald" ? "border-emerald-400 bg-emerald-50" : "border-slate-200 bg-slate-50 opacity-60"}`}>
              <div className="font-bold">{w}</div>
              <div className="text-[10px]">{s}</div>
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
        <div className="text-[10px] font-bold uppercase text-slate-500">Prize pool</div>
        <div className="mt-1 flex items-center gap-2">
          <Gift className="h-4 w-4 text-amber-600" />
          <span className="text-[14px] font-black text-slate-900">50,000৳</span>
        </div>
        <div className="mt-2 flex items-center gap-2 rounded-lg border border-dashed border-slate-300 p-2 text-[11px] text-slate-500">
          <Upload className="h-3.5 w-3.5" /> Upload banner creative
        </div>
      </div>
      <div className="rounded-xl bg-rose-50 p-3 ring-1 ring-rose-100 text-[11px] text-rose-800">
        Estimated reach <b>~24,380</b> · est. clicks <b>~3,140</b>
      </div>
      <button className="w-full rounded-xl bg-rose-600 py-3 text-[13px] font-bold text-white">Confirm & Pay</button>
    </StepFrame>
  );
}

function F5S3() {
  return (
    <StepFrame flow={5} step={3} title="Live campaign dashboard" bnTitle="লাইভ ক্যাম্পেইন — মূল রিপোর্ট">
      <div className="rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 p-3 text-white">
        <div className="flex items-center justify-between">
          <Pill tone="rose">Live · Day 3 of 7</Pill>
          <BarChart3 className="h-4 w-4 opacity-90" />
        </div>
        <div className="mt-1 text-[12px] font-bold">Wizlife Ramadan</div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[["Reach","24,380","+18%"],["Active","1,820","+9%"],["Clicks","3,140","+22%"],["Visits","612","+5%"]].map(([l,v,d]) => (
          <div key={l} className="rounded-xl bg-white p-2.5 ring-1 ring-slate-100">
            <div className="text-[9px] font-bold uppercase text-slate-500">{l}</div>
            <div className="text-base font-black text-slate-900">{v}</div>
            <div className="text-[10px] font-bold text-emerald-600">▲ {d}</div>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-white p-3 ring-1 ring-slate-100">
        <div className="text-[10px] font-bold uppercase text-slate-500">Growth · last 7 days</div>
        <svg viewBox="0 0 200 50" className="mt-1 h-12 w-full">
          <defs>
            <linearGradient id="v2g" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#f43f5e" stopOpacity="0.5" />
              <stop offset="1" stopColor="#f43f5e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,40 L30,32 L60,28 L90,22 L120,18 L150,12 L180,8 L200,5 L200,50 L0,50 Z" fill="url(#v2g)" />
          <path d="M0,40 L30,32 L60,28 L90,22 L120,18 L150,12 L180,8 L200,5" fill="none" stroke="#f43f5e" strokeWidth="1.5" />
        </svg>
      </div>
      <button className="w-full rounded-xl py-2.5 text-[12px] font-bold text-white" style={{ background: NAVY }}>
        <Eye className="mr-1 inline h-3.5 w-3.5" /> View full report
      </button>
    </StepFrame>
  );
}

/* =========================================================== */
/*  FLOW 0 — Core app screens, V2 redesign                      */
/*  (Home · Room Detail · Admin Create — matches reference)     */
/* =========================================================== */

function ChannelTabs({ active = "Featured" }: { active?: "Featured" | "Public" | "My Rooms" }) {
  const tabs: Array<{ k: "Featured" | "Public" | "My Rooms"; icon: React.ReactNode }> = [
    { k: "Featured", icon: <Star className="h-3.5 w-3.5" /> },
    { k: "Public",   icon: <Globe2 className="h-3.5 w-3.5" /> },
    { k: "My Rooms", icon: <FolderOpen className="h-3.5 w-3.5" /> },
  ];
  return (
    <div className="-mx-3 -mt-3 mb-2 flex items-center gap-4 border-b border-white/10 px-3 pb-2 pt-1" style={{ background: NAVY }}>
      {tabs.map(t => (
        <div key={t.k} className={`flex items-center gap-1 pb-1.5 text-[12px] font-semibold ${active === t.k ? "border-b-2 border-amber-300 text-white" : "text-white/60"}`}>
          {t.icon}{t.k}
        </div>
      ))}
    </div>
  );
}

function FeaturedRoomCard({ name, prize, sponsor, members, perDay, daysLeft }: {
  name: string; prize: string; sponsor: string; members: string; perDay: string; daysLeft: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_14px_-8px_rgba(15,23,42,0.18)] ring-1 ring-slate-100">
      <div style={{ background: NAVY }} className="flex items-center justify-between px-3 py-2 text-white">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-white/15 text-[10px] font-bold">W</div>
          <div>
            <div className="text-[8px] font-bold uppercase tracking-wider opacity-80">Sponsored by</div>
            <div className="text-[12px] font-bold leading-tight">{sponsor}</div>
          </div>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-amber-300 px-2 py-1 text-[11px] font-bold text-slate-900">
          <Gift className="h-3 w-3" />{prize}
        </div>
      </div>
      <div className="flex items-start gap-2 p-3">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-rose-50 text-base">📿</div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <h4 className="bn truncate text-[13px] font-bold text-slate-900">{name}</h4>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
          </div>
          <div className="mt-0.5 inline-flex items-center gap-1 rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-amber-800">
            <Star className="h-2.5 w-2.5" />Featured
          </div>
          <p className="bn mt-1 text-[10.5px] leading-snug text-slate-500">প্রতিদিন ১০০ বার পড়ুন। শীর্ষ অংশগ্রহণকারীরা মাসিক পুরস্কার জিতবেন ইনশাআল্লাহ।</p>
          <div className="mt-1.5 flex items-center gap-3 text-[10px] text-slate-500">
            <span className="inline-flex items-center gap-0.5"><Users className="h-3 w-3" />{members}</span>
            <span className="inline-flex items-center gap-0.5"><Flag className="h-3 w-3" />{perDay}</span>
            <span className="inline-flex items-center gap-0.5"><Clock className="h-3 w-3" />{daysLeft}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function F0Home() {
  return (
    <StepFrame flow={0} step={1} title="Zikr Rooms · Home" bnTitle="হোম — চ্যানেল ট্যাব + ফিচার্ড রুম">
      <ChannelTabs active="Featured" />
      <FeaturedRoomCard name="সুবহানাল্লাহি ওয়া বিহামদিহী" prize="৳40,000 Prize" sponsor="Wizlife" members="16" perDay="100/day" daysLeft="265 days left" />
      <FeaturedRoomCard name="আস্তাগফিরুল্লাহা ওয়া আতুবু…" prize="৳25,000 Prize" sponsor="Ifad" members="16" perDay="100/day" daysLeft="234 days left" />
      <FeaturedRoomCard name="দরুদে ইব্রাহীম" prize="৳15,000 Prize" sponsor="ACI" members="12" perDay="70/day" daysLeft="180 days left" />
    </StepFrame>
  );
}

function F0RoomDetail() {
  return (
    <StepFrame flow={0} step={2} title="Room Details" bnTitle="রুম ডিটেইল — Forever room + Live season">
      <div className="rounded-2xl bg-gradient-to-br from-indigo-700 to-indigo-900 p-3 text-white">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
            <InfinityIcon className="h-2.5 w-2.5" />Forever Room
          </span>
          <span className="text-[9px] opacity-80">Since 2023</span>
        </div>
        <h3 className="bn mt-1.5 text-[14px] font-bold">সুবহানাল্লাহি ওয়া বিহামদিহী</h3>
        <div className="mt-2 grid grid-cols-3 gap-1 text-center">
          <div><div className="text-base font-black">5,820</div><div className="text-[9px] opacity-80">Lifetime</div></div>
          <div><div className="text-base font-black">8.2M</div><div className="text-[9px] opacity-80">Total zikr</div></div>
          <div><div className="text-base font-black">128w</div><div className="text-[9px] opacity-80">Active</div></div>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-amber-200">
        <div className="flex items-center justify-between px-3 py-2 text-white" style={{ background: NAVY }}>
          <div className="flex items-center gap-1.5">
            <div className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-[10px] font-bold">W</div>
            <div className="text-[10px] font-bold uppercase tracking-wider">Sponsored by Wizlife</div>
          </div>
          <span className="rounded-full bg-amber-300 px-2 py-0.5 text-[10px] font-bold text-slate-900">৳40,000</span>
        </div>
        <div className="px-3 py-2">
          <div className="flex items-center justify-between text-[10px] font-bold uppercase text-amber-700">
            <span><Zap className="inline h-3 w-3" /> Live Season 04</span>
            <span>ends 6d 12h</span>
          </div>
          <div className="mt-1 flex justify-between text-[10px]">
            <span className="text-slate-500">Your season rank</span>
            <span className="font-bold text-amber-800">#42 of 1,820</span>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white p-2.5 ring-1 ring-slate-100">
        <SectionLabel>Powered by · past sponsors</SectionLabel>
        <div className="mt-1.5 flex flex-wrap gap-1">
          {["Wizlife","Ifad","ACI","Pran","Square"].map(s => (
            <span key={s} className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold text-slate-700">{s}</span>
          ))}
        </div>
      </div>
      <button className="w-full rounded-xl py-2.5 text-[12px] font-bold text-white" style={{ background: NAVY }}>
        Join forever · Start tasbih
      </button>
    </StepFrame>
  );
}

function F0AdminCreate() {
  return (
    <StepFrame flow={0} step={3} title="Admin · Create Featured Room" bnTitle="অ্যাডমিন — Forever room + Season যোগ">
      <div className="grid grid-cols-2 gap-1 rounded-xl bg-slate-100 p-1 text-[10px] font-bold">
        <div className="rounded-lg bg-white py-1.5 text-center text-slate-900 shadow-sm">① Forever Room</div>
        <div className="rounded-lg py-1.5 text-center text-slate-500">② Sponsor Season</div>
      </div>
      <div className="rounded-xl bg-white p-2.5 ring-1 ring-slate-100">
        <div className="text-[9px] font-bold uppercase text-slate-500">Room name (Bangla)</div>
        <div className="bn mt-0.5 rounded-md bg-slate-50 px-2 py-1.5 text-[12px] font-bold text-slate-900">সুবহানাল্লাহি ওয়া বিহামদিহী</div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-white p-2 ring-1 ring-slate-100">
          <div className="text-[9px] font-bold uppercase text-slate-500">Daily target</div>
          <div className="text-[12px] font-bold">100 / day</div>
        </div>
        <div className="rounded-xl bg-white p-2 ring-1 ring-slate-100">
          <div className="text-[9px] font-bold uppercase text-slate-500">Lifetime</div>
          <div className="inline-flex items-center gap-1 text-[12px] font-bold text-indigo-700"><InfinityIcon className="h-3 w-3" />Forever</div>
        </div>
      </div>
      <div className="rounded-xl bg-amber-50 p-2.5 ring-1 ring-amber-100">
        <div className="text-[9px] font-bold uppercase text-amber-700">Attach season (optional)</div>
        <div className="mt-1 flex items-center justify-between text-[11px]">
          <span className="font-bold text-amber-900">Wizlife · May 5–11</span>
          <span className="rounded bg-amber-300 px-1.5 py-0.5 text-[10px] font-bold text-slate-900">৳40,000</span>
        </div>
        <div className="mt-1 text-[10px] text-amber-700">Banner shows on home + room until season ends</div>
      </div>
      <div className="rounded-xl bg-white p-2.5 ring-1 ring-slate-100 text-[10px] text-slate-600">
        Members stay forever — only the sponsor banner & prize change between seasons.
      </div>
      <button className="w-full rounded-xl py-2.5 text-[12px] font-bold text-white" style={{ background: NAVY }}>
        Publish Forever Room
      </button>
    </StepFrame>
  );
}

/* =========================================================== */
/*  Room Details — Sponsor Pattern Variants (V2 in-app)         */
/* =========================================================== */

function RDShell({ step, title, bn, children }: { step: number; title: string; bn: string; children: React.ReactNode }) {
  return (
    <StepFrame flow={0} step={step} title={title} bnTitle={bn}>
      {/* Room hero — shared */}
      <div className="rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 p-3 text-white">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
            <InfinityIcon className="h-2.5 w-2.5" />Forever Room
          </span>
          <span className="text-[9px] opacity-80">Since 2023</span>
        </div>
        <h3 className="bn mt-1.5 text-[14px] font-bold">সুবহানাল্লাহি ওয়া বিহামদিহী</h3>
        <div className="mt-2 grid grid-cols-3 gap-1 text-center">
          <div><div className="text-base font-black">5,820</div><div className="text-[9px] opacity-80">Lifetime</div></div>
          <div><div className="text-base font-black">8.2M</div><div className="text-[9px] opacity-80">Total zikr</div></div>
          <div><div className="text-base font-black">128w</div><div className="text-[9px] opacity-80">Active</div></div>
        </div>
      </div>

      {/* Tasbih details — Arabic + transliteration + meaning + fazilat */}
      <div className="rounded-xl bg-white p-2.5 ring-1 ring-slate-100">
        <SectionLabel>Tasbih details</SectionLabel>
        <div className="mt-1.5 rounded-lg bg-emerald-50/60 p-2 text-right ring-1 ring-emerald-100">
          <div className="text-[16px] font-bold leading-snug text-emerald-900" style={{ fontFamily: "'Noto Naskh Arabic', serif" }}>
            سُبْحَانَ اللَّهِ وَبِحَمْدِهِ
          </div>
        </div>
        <div className="mt-1.5 grid gap-0.5 text-[10px]">
          <div><span className="text-slate-400">Translit · </span><span className="font-semibold text-slate-700">Subhan-Allahi wa bi-hamdihi</span></div>
          <div className="bn"><span className="text-slate-400">অর্থ · </span><span className="font-semibold text-slate-700">আল্লাহর প্রশংসাসহ পবিত্রতা</span></div>
          <div className="bn"><span className="text-slate-400">ফজিলত · </span><span className="text-slate-600">দিনে ১০০ বার পড়লে গুনাহ মাফ (Bukhari 6405)</span></div>
        </div>
      </div>

      {/* Basic details — daily target + time period + scope */}
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-white p-2 ring-1 ring-slate-100">
          <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Daily target</div>
          <div className="mt-0.5 text-[12px] font-bold text-slate-900">100 / day</div>
        </div>
        <div className="rounded-xl bg-white p-2 ring-1 ring-slate-100">
          <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Time period</div>
          <div className="mt-0.5 inline-flex items-center gap-1 text-[12px] font-bold text-indigo-700"><InfinityIcon className="h-3 w-3" />Forever</div>
        </div>
        <div className="rounded-xl bg-white p-2 ring-1 ring-slate-100">
          <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Scope</div>
          <div className="mt-0.5 flex items-center gap-1 text-[11px] font-semibold text-slate-700"><Globe2 className="h-3 w-3 text-slate-400" />Bangladesh</div>
        </div>
        <div className="rounded-xl bg-white p-2 ring-1 ring-slate-100">
          <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Started</div>
          <div className="mt-0.5 flex items-center gap-1 text-[11px] font-semibold text-slate-700"><Clock className="h-3 w-3 text-slate-400" />Mar 2023</div>
        </div>
      </div>

      {children}
      <div className="rounded-xl bg-white p-2.5 ring-1 ring-slate-100">
        <div className="flex items-center justify-between text-[10px]">
          <span className="font-bold text-slate-700">Today · 312 / 100</span>
          <span className="font-bold text-emerald-600">+212 ✓</span>
        </div>
        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-full bg-emerald-500" /></div>
      </div>
      <button className="w-full rounded-xl py-2.5 text-[12px] font-bold text-white" style={{ background: NAVY }}>
        Start tasbih
      </button>
    </StepFrame>
  );
}

/* RD1 — No brand at all (clean, organic forever room) */
function RD1_NoBrand() {
  return (
    <RDShell step={1} title="RD · No brand" bn="ভ্যারিয়েন্ট ১ — কোনো ব্র্যান্ড নেই (organic)">
      <div className="rounded-xl bg-white p-2.5 text-center text-[10px] text-slate-500 ring-1 ring-slate-100">
        Community-run · no sponsor this season
      </div>
    </RDShell>
  );
}

/* RD2 — Powered by only (subtle attribution, no prize) */
function RD2_PoweredBy() {
  return (
    <RDShell step={2} title="RD · Powered by" bn="ভ্যারিয়েন্ট ২ — শুধু Powered by">
      <div className="flex items-center justify-between rounded-xl bg-white px-3 py-2 ring-1 ring-slate-100">
        <span className="text-[10px] uppercase tracking-wider text-slate-400">Powered by</span>
        <div className="flex items-center gap-1.5">
          <div className="grid h-5 w-5 place-items-center rounded bg-sky-100 text-[9px] font-bold text-sky-700">W</div>
          <span className="text-[11px] font-bold text-slate-800">Wizlife</span>
        </div>
      </div>
    </RDShell>
  );
}

/* RD3 — Powered by + Sponsored by (dual attribution, no prize) */
function RD3_PoweredSponsored() {
  return (
    <RDShell step={3} title="RD · Powered + Sponsored" bn="ভ্যারিয়েন্ট ৩ — Powered by + Sponsored by">
      <div className="overflow-hidden rounded-xl bg-white ring-1 ring-slate-100">
        <div className="flex items-center justify-between px-3 py-2 text-white" style={{ background: NAVY }}>
          <span className="text-[9px] font-bold uppercase tracking-wider opacity-80">Sponsored by</span>
          <div className="flex items-center gap-1.5">
            <div className="grid h-5 w-5 place-items-center rounded bg-white/15 text-[9px] font-bold">W</div>
            <span className="text-[11px] font-bold">Wizlife</span>
          </div>
        </div>
        <div className="flex items-center justify-between px-3 py-1.5">
          <span className="text-[9px] uppercase tracking-wider text-slate-400">Powered by</span>
          <span className="text-[10px] font-bold text-slate-700">Ifad Foundation</span>
        </div>
      </div>
    </RDShell>
  );
}

/* RD4 — Sponsored by + Prize (the classic season pattern) */
function RD4_SponsoredPrize() {
  return (
    <RDShell step={4} title="RD · Sponsored + Prize" bn="ভ্যারিয়েন্ট ৪ — Sponsored by + পুরস্কার">
      <div className="overflow-hidden rounded-xl bg-white ring-1 ring-amber-200">
        <div className="flex items-center justify-between px-3 py-2 text-white" style={{ background: NAVY }}>
          <div className="flex items-center gap-1.5">
            <div className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-[10px] font-bold">W</div>
            <span className="text-[10px] font-bold uppercase tracking-wider">Sponsored by Wizlife</span>
          </div>
          <span className="rounded-full bg-amber-300 px-2 py-0.5 text-[10px] font-bold text-slate-900">৳40,000</span>
        </div>
        <div className="px-3 py-2 text-[10px] text-amber-800">
          <div className="flex justify-between"><span className="font-bold uppercase">Live Season 04</span><span>ends 6d 12h</span></div>
          <div className="mt-1 flex justify-between"><span className="text-slate-500">Your rank</span><span className="font-bold">#42 of 1,820</span></div>
        </div>
      </div>
    </RDShell>
  );
}

/* RD5 — Prize only (house prize, no brand) */
function RD5_PrizeOnly() {
  return (
    <RDShell step={5} title="RD · Prize only" bn="ভ্যারিয়েন্ট ৫ — শুধু পুরস্কার (house)">
      <div className="rounded-xl bg-gradient-to-r from-amber-100 to-amber-50 p-3 ring-1 ring-amber-200">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase text-amber-800"><Gift className="h-3 w-3" />House Prize Pool</span>
          <span className="rounded-full bg-amber-400 px-2 py-0.5 text-[11px] font-black text-slate-900">৳25,000</span>
        </div>
        <div className="mt-1 text-[10px] text-amber-700">Top 100 contributors win · ends in 9d</div>
      </div>
    </RDShell>
  );
}

/* RD6 — Brand + wide banner (400×70 ratio) */
function RD6_WideBanner() {
  return (
    <RDShell step={6} title="RD · Brand + Wide banner" bn="ভ্যারিয়েন্ট ৬ — Brand + 400×70 ব্যানার">
      <div className="flex items-center justify-between rounded-xl bg-white px-3 py-1.5 ring-1 ring-slate-100">
        <span className="text-[10px] uppercase tracking-wider text-slate-400">Sponsored by</span>
        <div className="flex items-center gap-1.5">
          <div className="grid h-5 w-5 place-items-center rounded bg-sky-100 text-[9px] font-bold text-sky-700">W</div>
          <span className="text-[11px] font-bold text-slate-800">Wizlife</span>
        </div>
      </div>
      {/* 400×70 → ~5.7:1 wide skinny strip */}
      <div className="overflow-hidden rounded-lg ring-1 ring-slate-200" style={{ aspectRatio: "400/70" }}>
        <div className="flex h-full w-full items-center justify-between bg-gradient-to-r from-sky-500 to-indigo-600 px-3 text-white">
          <div className="flex items-center gap-2">
            <div className="grid h-7 w-7 place-items-center rounded bg-white/20 text-[10px] font-black">W</div>
            <div className="leading-tight">
              <div className="text-[10px] font-bold">Wizlife Ramadan</div>
              <div className="text-[8px] opacity-80">Tap to learn more</div>
            </div>
          </div>
          <ChevronRight className="h-3 w-3 opacity-80" />
        </div>
      </div>
      <div className="text-center text-[9px] uppercase tracking-wider text-slate-400">Banner · 400 × 70</div>
    </RDShell>
  );
}

/* RD7 — Brand + regular banner (16:9 standard) */
function RD7_RegularBanner() {
  return (
    <RDShell step={7} title="RD · Brand + Regular banner" bn="ভ্যারিয়েন্ট ৭ — Brand + 16:9 ব্যানার">
      <div className="flex items-center justify-between rounded-xl bg-white px-3 py-1.5 ring-1 ring-slate-100">
        <span className="text-[10px] uppercase tracking-wider text-slate-400">Sponsored by</span>
        <div className="flex items-center gap-1.5">
          <div className="grid h-5 w-5 place-items-center rounded bg-emerald-100 text-[9px] font-bold text-emerald-700">I</div>
          <span className="text-[11px] font-bold text-slate-800">Ifad</span>
        </div>
      </div>
      <div className="overflow-hidden rounded-xl ring-1 ring-slate-200" style={{ aspectRatio: "16/9" }}>
        <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 p-3 text-white">
          <div className="flex items-center justify-between">
            <div className="grid h-7 w-7 place-items-center rounded bg-white/20 text-[11px] font-black">I</div>
            <span className="rounded bg-white/20 px-1.5 py-0.5 text-[8px] font-bold uppercase">Ad</span>
          </div>
          <div>
            <div className="text-[12px] font-bold">Pure Ghee · Pure Reward</div>
            <div className="text-[9px] opacity-90">Free delivery in Dhaka this Ramadan</div>
          </div>
        </div>
      </div>
      <div className="text-center text-[9px] uppercase tracking-wider text-slate-400">Banner · 16 : 9</div>
    </RDShell>
  );
}

/* RD8 — Banner only (no brand attribution, generic ad slot) */
function RD8_BannerOnly() {
  return (
    <RDShell step={8} title="RD · Banner only" bn="ভ্যারিয়েন্ট ৮ — শুধু ব্যানার (no brand)">
      <div className="overflow-hidden rounded-xl ring-1 ring-slate-200" style={{ aspectRatio: "16/9" }}>
        <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-rose-500 to-amber-500 p-3 text-white">
          <span className="self-start rounded bg-white/20 px-1.5 py-0.5 text-[8px] font-bold uppercase">Sponsored</span>
          <div>
            <div className="text-[12px] font-bold">Save 20% this week</div>
            <div className="text-[9px] opacity-90">Limited time offer</div>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white p-2 text-center text-[9px] text-slate-400 ring-1 ring-slate-100">
        No sponsor name shown — banner-only ad slot
      </div>
    </RDShell>
  );
}

/* =========================================================== */
/*  Admin Portal · Create Featured Room — Desktop V2            */
/* =========================================================== */

function AdminStep({ n, label, state }: { n: number; label: string; state: "done" | "active" | "todo" }) {
  const dot =
    state === "done"   ? "bg-emerald-500 text-white" :
    state === "active" ? "bg-emerald-100 text-emerald-700 ring-2 ring-emerald-500" :
                         "bg-slate-100 text-slate-400";
  const row =
    state === "active" ? "bg-emerald-50 ring-1 ring-emerald-200" : "";
  return (
    <div className={`flex items-center gap-3 rounded-lg px-2.5 py-2 ${row}`}>
      <div className={`grid h-7 w-7 place-items-center rounded-full text-[12px] font-bold ${dot}`}>
        {state === "done" ? <CheckCircle2 className="h-4 w-4" /> : n}
      </div>
      <span className={`text-[13px] font-semibold ${state === "todo" ? "text-slate-400" : "text-slate-800"}`}>{label}</span>
    </div>
  );
}

function AdminFieldLabel({ label, hint, required }: { label: string; hint?: string; required?: boolean }) {
  return (
    <div className="mb-1 flex items-baseline justify-between">
      <label className="text-[12px] font-bold text-slate-700">
        {label}{required && <span className="ml-0.5 text-rose-500">*</span>}
      </label>
      {hint && <span className="text-[10px] text-slate-400">{hint}</span>}
    </div>
  );
}

const adminInput = "w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-[13px] text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/15";

function AdminFormSection({ icon, title, desc, children }: { icon: React.ReactNode; title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white p-5 ring-1 ring-slate-100 shadow-[0_4px_14px_-10px_rgba(15,23,42,0.15)]">
      <div className="mb-4 flex items-start gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-50 text-emerald-700">{icon}</div>
        <div>
          <h3 className="text-[15px] font-bold text-slate-900">{title}</h3>
          <p className="text-[11.5px] text-slate-500">{desc}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

function AdminPortalV2() {
  // Sessions sit on a sequence (not a calendar) — multiple brands per month is fine.
  const sessions = [
    { id: 1, kind: "sponsor", brand: "Wizlife",   start: "May 5",  end: "May 25", days: 21, prize: "৳40,000", status: "Live",      tone: "amber" },
    { id: 2, kind: "sponsor", brand: "Pran",      start: "May 26", end: "Jun 5",  days: 11, prize: "৳18,000", status: "Scheduled", tone: "sky" },
    { id: 3, kind: "organic", brand: "",          start: "Jun 6",  end: "Jun 14", days: 9,  prize: "—",       status: "Scheduled", tone: "slate" },
    { id: 4, kind: "sponsor", brand: "Ifad",      start: "Jun 15", end: "Jul 5",  days: 21, prize: "৳60,000", status: "Scheduled", tone: "rose" },
    { id: 5, kind: "sponsor", brand: "ACI Pure",  start: "Jul 6",  end: "Aug 4",  days: 30, prize: "৳50,000", status: "Draft",     tone: "emerald" },
  ] as const;

  const toneMap: Record<string, { bar: string; chip: string; text: string; ring: string }> = {
    amber:   { bar: "bg-amber-400",   chip: "bg-amber-100",   text: "text-amber-800",   ring: "ring-amber-200" },
    rose:    { bar: "bg-rose-400",    chip: "bg-rose-100",    text: "text-rose-800",    ring: "ring-rose-200" },
    emerald: { bar: "bg-emerald-400", chip: "bg-emerald-100", text: "text-emerald-800", ring: "ring-emerald-200" },
    sky:     { bar: "bg-sky-400",     chip: "bg-sky-100",     text: "text-sky-800",     ring: "ring-sky-200" },
    slate:   { bar: "bg-slate-300",   chip: "bg-slate-100",   text: "text-slate-700",   ring: "ring-slate-200" },
  };

  return (
    <section className="mb-16">
      <div className="mb-5 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-700 ring-1 ring-slate-200">
          Admin Portal · Desktop · V2
        </div>
        <h2 className="mt-3 text-2xl font-bold text-slate-900">Admin · Create Featured Room</h2>
        <p className="mt-1 text-[13px] text-slate-500">
          Room defines the zikr & rules. Sponsors plug in as <b>sessions</b> over time — each session brings its own brand & prize.
        </p>
      </div>

      <div className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
        {/* Top toolbar */}
        <div className="mb-5 flex items-center justify-between rounded-2xl bg-white px-5 py-4 ring-1 ring-slate-100">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Admin · New Featured Room</div>
            <h3 className="mt-0.5 text-xl font-bold text-slate-900">Create a Sponsored Zikr Room</h3>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-full border border-slate-200 bg-white px-4 py-2 text-[12px] font-semibold text-slate-700 hover:bg-slate-50">Save Draft</button>
            <button className="rounded-full bg-emerald-600 px-4 py-2 text-[12px] font-bold text-white hover:bg-emerald-700">Preview</button>
            <button className="rounded-full px-4 py-2 text-[12px] font-bold text-white" style={{ background: NAVY }}>Publish</button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* LEFT — Setup progress */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100 shadow-[0_4px_14px_-10px_rgba(15,23,42,0.15)]">
              <div className="mb-3 px-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Setup Progress</div>
              <div className="space-y-1">
                <AdminStep n={1} label="Room Basics" state="done" />
                <AdminStep n={2} label="Zikr & Goal" state="done" />
                <AdminStep n={3} label="Eligibility & Rules" state="done" />
                <AdminStep n={4} label="Sponsor Sessions" state="active" />
                <AdminStep n={5} label="Review & Publish" state="todo" />
              </div>
              <div className="mt-4 rounded-lg bg-indigo-50 p-3 text-[11px] text-indigo-800 ring-1 ring-indigo-100">
                <div className="font-bold">📌 Note</div>
                Room is <b>brand-agnostic</b>. Brand identity (logo / prize / banner) lives inside each <b>Session</b>.
              </div>
            </div>
          </aside>

          {/* CENTER — Form */}
          <main className="col-span-12 space-y-5 lg:col-span-6">
            {/* 1 — Room Basics */}
            <AdminFormSection icon={<BookOpen className="h-4 w-4" />} title="Room Basics" desc="Identity users see in the room list.">
              <div className="grid grid-cols-2 gap-3">
                <div><AdminFieldLabel label="Room Name" required hint="Max 60 chars" /><input className={adminInput} defaultValue="Daily Zikr Challenge" /></div>
                <div><AdminFieldLabel label="Room Slug" hint="Auto-generated" /><input className={adminInput} defaultValue="daily-zikr-challenge" /></div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div>
                  <AdminFieldLabel label="Visibility" required />
                  <select className={adminInput}><option>Featured (top of feed)</option><option>Public</option><option>Private (invite)</option></select>
                </div>
                <div>
                  <AdminFieldLabel label="Featured Priority" hint="Higher = top" />
                  <input type="number" className={adminInput} defaultValue="10" />
                </div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                <div><AdminFieldLabel label="Room Scope" /><select className={adminInput}><option>Global</option><option>Country</option><option>City</option></select></div>
                <div><AdminFieldLabel label="Country / Region" /><select className={adminInput}><option>Bangladesh</option><option>Indonesia</option><option>Worldwide</option></select></div>
                <div><AdminFieldLabel label="Time Zone" /><select className={adminInput}><option>Asia/Dhaka</option><option>UTC</option></select></div>
              </div>
              <div className="mt-3">
                <AdminFieldLabel label="Description" hint="Max 300 chars" />
                <textarea rows={2} className={adminInput} defaultValue="Daily 100 zikr challenge — top participants win prizes inshaAllah." />
              </div>
            </AdminFormSection>

            {/* 2 — Zikr & Goal */}
            <AdminFormSection icon={<Sparkles className="h-4 w-4" />} title="Zikr & Goal" desc="What members will recite and the daily target.">
              <div className="grid grid-cols-2 gap-3">
                <div><AdminFieldLabel label="Zikr Type" required /><select className={adminInput}><option>Subhanallah</option><option>Alhamdulillah</option><option>Allahu Akbar</option><option>Astaghfirullah</option><option>Durood</option></select></div>
                <div><AdminFieldLabel label="Count Type" required /><select className={adminInput}><option>Fixed daily target</option><option>Open / unlimited</option><option>Time-bound burst</option></select></div>
              </div>
              <div className="mt-3">
                <AdminFieldLabel label="Arabic Text" required />
                <input dir="rtl" className={`${adminInput} text-right text-[15px]`} defaultValue="سُبْحَانَ اللهِ" />
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div><AdminFieldLabel label="Bangla Translation" /><input className={`${adminInput} bn`} defaultValue="আমি আল্লাহর প্রশংসা করি" /></div>
                <div><AdminFieldLabel label="English Translation" /><input className={adminInput} defaultValue="Glory be to Allah" /></div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                <div><AdminFieldLabel label="Daily Goal" required /><input type="number" className={adminInput} defaultValue="100" /></div>
                <div><AdminFieldLabel label="Total Lifetime Target" hint="Optional" /><input type="number" className={adminInput} defaultValue="10000" /></div>
                <div>
                  <AdminFieldLabel label="Room Lifespan" />
                  <div className="inline-flex w-full items-center gap-1 rounded-lg bg-indigo-50 px-2.5 py-2 text-[12px] font-bold text-indigo-700 ring-1 ring-indigo-100">
                    <InfinityIcon className="h-3.5 w-3.5" /> Forever
                  </div>
                </div>
              </div>
            </AdminFormSection>

            {/* 3 — Eligibility & Rules */}
            <AdminFormSection icon={<ShieldCheck className="h-4 w-4" />} title="Eligibility & Rules" desc="Who can join and how fairness is enforced.">
              <AdminFieldLabel label="Who can join" required />
              <div className="mt-1 grid grid-cols-2 gap-y-1.5 text-[12px] text-slate-700">
                {["Must complete profile","Must verify email","Must verify phone","Profile photo required","Min account age (7 days)","No previous violations"].map((x, i) => (
                  <label key={x} className="flex items-center gap-2"><input type="checkbox" defaultChecked={i < 3} className="h-4 w-4 accent-emerald-600" /> {x}</label>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3">
                <div><AdminFieldLabel label="Min Age" /><input type="number" className={adminInput} defaultValue="13" /></div>
                <div><AdminFieldLabel label="Max Participants" hint="Blank = no limit" /><input className={adminInput} placeholder="No limit" /></div>
                <div><AdminFieldLabel label="Anti-cheat" /><select className={adminInput}><option>Standard</option><option>Strict (motion + tap)</option><option>Manual review</option></select></div>
              </div>
              <div className="mt-3">
                <AdminFieldLabel label="Terms & Conditions URL" />
                <input className={adminInput} placeholder="https://..." />
              </div>
            </AdminFormSection>

            {/* 4 — Sponsor Sessions (the main rebuild) */}
            <AdminFormSection icon={<Calendar className="h-4 w-4" />} title="Sponsor Sessions" desc="Each session = one sponsor (or organic) running for a date range. Brand, prize and banner all live inside the session.">
              {/* Sequence ribbon — proportional to days, NOT calendar months */}
              <div className="rounded-xl bg-white p-3 ring-1 ring-slate-200">
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Session sequence · 92 days planned</div>
                  <div className="flex items-center gap-3 text-[10px] text-slate-500">
                    <span className="inline-flex items-center gap-1"><span className="h-2 w-3 rounded-sm bg-amber-400" />Sponsor</span>
                    <span className="inline-flex items-center gap-1"><span className="h-2 w-3 rounded-sm bg-slate-300" />Organic</span>
                  </div>
                </div>
                <div className="flex h-7 w-full overflow-hidden rounded-md ring-1 ring-slate-200">
                  {sessions.map(s => {
                    const totalDays = sessions.reduce((acc, x) => acc + x.days, 0);
                    const w = (s.days / totalDays) * 100;
                    return (
                      <div key={s.id} className={`flex items-center justify-center text-[10px] font-bold text-white ${toneMap[s.tone].bar}`} style={{ width: `${w}%` }} title={`${s.brand || "Organic"} · ${s.days}d`}>
                        {w > 8 && (s.brand || "Organic")}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-1.5 flex w-full text-[9.5px] text-slate-400">
                  {sessions.map(s => {
                    const totalDays = sessions.reduce((acc, x) => acc + x.days, 0);
                    return <div key={s.id} className="text-center" style={{ width: `${(s.days / totalDays) * 100}%` }}>{s.days}d</div>;
                  })}
                </div>
              </div>

              {/* Sessions list — disciplined card grid */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">All sessions ({sessions.length})</div>
                  <div className="flex items-center gap-2">
                    <select className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] text-slate-600"><option>All status</option><option>Live</option><option>Scheduled</option><option>Draft</option></select>
                    <button className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1.5 text-[11px] font-bold text-white hover:bg-emerald-700"><Plus className="h-3 w-3" />Add session</button>
                  </div>
                </div>

                {sessions.map((s, i) => {
                  const t = toneMap[s.tone];
                  const statusColor =
                    s.status === "Live"      ? "bg-emerald-500 text-white" :
                    s.status === "Scheduled" ? "bg-sky-100 text-sky-800" :
                                               "bg-slate-100 text-slate-600";
                  return (
                    <div key={s.id} className="group relative grid grid-cols-12 items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-slate-200 hover:ring-emerald-300">
                      {/* Left rail color */}
                      <div className={`absolute left-0 top-3 bottom-3 w-1 rounded-r ${t.bar}`} />
                      {/* Position */}
                      <div className="col-span-1 pl-2 text-[11px] font-bold text-slate-400">#{i + 1}</div>
                      {/* Brand */}
                      <div className="col-span-3 flex items-center gap-2">
                        <div className={`grid h-8 w-8 place-items-center rounded-lg ${t.chip} ${t.text} text-[11px] font-bold`}>
                          {s.kind === "organic" ? <Clock className="h-4 w-4" /> : (s.brand?.[0] ?? "?")}
                        </div>
                        <div className="min-w-0">
                          <div className="truncate text-[12.5px] font-bold text-slate-900">{s.kind === "organic" ? "Organic period" : s.brand}</div>
                          <div className="text-[10px] uppercase tracking-wider text-slate-400">{s.kind === "organic" ? "no sponsor" : "Sponsor"}</div>
                        </div>
                      </div>
                      {/* Dates */}
                      <div className="col-span-3">
                        <div className="text-[12px] font-semibold text-slate-800">{s.start} → {s.end}</div>
                        <div className="text-[10px] text-slate-500">{s.days} days</div>
                      </div>
                      {/* Prize */}
                      <div className="col-span-2 text-[12px] font-bold text-slate-900">
                        {s.kind === "organic" ? <span className="text-slate-400">No prize</span> : <><Gift className="mr-0.5 inline h-3 w-3 text-amber-600" />{s.prize}</>}
                      </div>
                      {/* Status */}
                      <div className="col-span-2">
                        <span className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold ${statusColor}`}>{s.status}</span>
                      </div>
                      {/* Actions */}
                      <div className="col-span-1 flex justify-end gap-1 opacity-0 transition group-hover:opacity-100">
                        <button className="rounded p-1 text-slate-400 hover:bg-slate-100"><Eye className="h-3.5 w-3.5" /></button>
                        <button className="rounded p-1 text-slate-400 hover:bg-slate-100">✎</button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* === Add Session — expanded inline form === */}
              <div className="mt-5 rounded-2xl border-2 border-emerald-400 bg-white p-4 shadow-[0_10px_30px_-12px_rgba(16,185,129,0.4)]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-100 text-emerald-700"><Plus className="h-4 w-4" /></div>
                    <div>
                      <div className="text-[13px] font-bold text-slate-900">Add new session</div>
                      <div className="text-[11px] text-slate-500">Picks slot in the sequence above. Multiple brands per month is allowed.</div>
                    </div>
                  </div>
                  <button className="rounded p-1 text-slate-400 hover:bg-slate-100">✕</button>
                </div>

                {/* Type */}
                <div className="mb-4 grid grid-cols-2 gap-2">
                  <label className="cursor-pointer rounded-xl border-2 border-emerald-500 bg-emerald-50 p-3">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="stype2" defaultChecked />
                      <Sparkles className="h-4 w-4 text-amber-600" />
                      <span className="text-[12px] font-bold text-slate-900">Sponsor session</span>
                    </div>
                    <div className="mt-1 pl-6 text-[10.5px] text-slate-500">A brand pays — banner + prize show in the room.</div>
                  </label>
                  <label className="cursor-pointer rounded-xl border-2 border-slate-200 bg-slate-50 p-3 hover:border-slate-300">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="stype2" />
                      <Clock className="h-4 w-4 text-slate-500" />
                      <span className="text-[12px] font-bold text-slate-900">Organic session</span>
                    </div>
                    <div className="mt-1 pl-6 text-[10.5px] text-slate-500">No brand — clean room, lifetime counter only.</div>
                  </label>
                </div>

                {/* Brand */}
                <div className="mb-3">
                  <AdminFieldLabel label="Sponsor brand" required hint="Pick existing or add new" />
                  <div className="grid grid-cols-4 gap-2">
                    {[["Wizlife","W"],["Ifad","I"],["ACI Pure","A"],["Pran","P"]].map(([n,a], i) => (
                      <button key={n} className={`rounded-lg border-2 ${i === 0 ? "border-emerald-500 bg-emerald-50" : "border-slate-200 bg-white"} p-2 text-left`}>
                        <div className="grid h-7 w-7 place-items-center rounded-md bg-slate-100 text-[11px] font-bold text-slate-700">{a}</div>
                        <div className="mt-1 text-[11px] font-semibold text-slate-800">{n}</div>
                      </button>
                    ))}
                  </div>
                  <button className="mt-2 text-[11px] font-bold text-emerald-700">+ Add new brand</button>
                </div>

                {/* Brand assets per session */}
                <div className="mb-3 grid grid-cols-3 gap-3">
                  <div>
                    <AdminFieldLabel label="Sponsor logo" required />
                    <div className="grid h-[78px] place-items-center rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 text-[11px] text-slate-500">
                      <div className="text-center"><Upload className="mx-auto h-4 w-4" />Upload PNG</div>
                    </div>
                  </div>
                  <div>
                    <AdminFieldLabel label="Banner (16:9)" />
                    <div className="grid h-[78px] place-items-center rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 text-[11px] text-slate-500">
                      <div className="text-center"><Upload className="mx-auto h-4 w-4" />Upload</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div><AdminFieldLabel label="CTA URL" /><input className={adminInput} placeholder="https://wizlife.com" /></div>
                    <div><AdminFieldLabel label="CTA Text" /><input className={adminInput} placeholder="Visit Sponsor" /></div>
                  </div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-3 gap-3">
                  <div><AdminFieldLabel label="Start" required /><input type="date" className={adminInput} defaultValue="2026-06-15" /></div>
                  <div><AdminFieldLabel label="End" required /><input type="date" className={adminInput} defaultValue="2026-07-05" /></div>
                  <div><AdminFieldLabel label="Duration" /><div className="rounded-lg bg-slate-50 px-3 py-2 text-[13px] font-bold text-slate-700 ring-1 ring-slate-200">21 days</div></div>
                </div>
                <div className="mt-2 flex items-center gap-2 rounded-lg bg-emerald-50 p-2 text-[11px] text-emerald-800 ring-1 ring-emerald-200">
                  <CheckCircle2 className="h-3.5 w-3.5" /> No overlap with existing sessions
                </div>

                {/* Prize for THIS session */}
                <div className="mt-4 rounded-xl bg-amber-50 p-3 ring-1 ring-amber-200">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2"><Gift className="h-4 w-4 text-amber-700" /><span className="text-[12px] font-bold text-amber-900">Prize for this session</span></div>
                    <span className="text-[10px] text-amber-700">Each session has its own prize</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div><AdminFieldLabel label="Prize Pool" required /><input className={adminInput} defaultValue="৳60,000" /></div>
                    <div><AdminFieldLabel label="Prize Type" /><select className={adminInput}><option>Cash</option><option>Voucher</option><option>Product</option><option>Mixed</option></select></div>
                    <div><AdminFieldLabel label="Distribution" /><select className={adminInput}><option>Top N rank</option><option>Lottery</option><option>Threshold</option></select></div>
                  </div>
                  <div className="mt-3 text-[10px] font-bold uppercase text-amber-800">Prize tiers</div>
                  <div className="mt-1.5 space-y-1.5">
                    {[["1st","৳30,000"],["2nd","৳15,000"],["3rd","৳8,000"],["4th–10th","৳7,000 split"]].map(([l,v]) => (
                      <div key={l} className="grid grid-cols-12 items-center gap-2 rounded bg-white px-2 py-1.5 ring-1 ring-amber-100">
                        <input className="col-span-2 rounded border border-slate-200 px-2 py-1 text-center text-[12px] font-bold" defaultValue={l} />
                        <input className="col-span-7 rounded border border-slate-200 px-2 py-1 text-[12px]" defaultValue={v} />
                        <select className="col-span-2 rounded border border-slate-200 px-1 py-1 text-[11px]"><option>Cash</option><option>Voucher</option></select>
                        <button className="col-span-1 text-slate-400 hover:text-rose-500">✕</button>
                      </div>
                    ))}
                  </div>
                  <button className="mt-2 text-[11px] font-bold text-amber-700">+ Add tier</button>
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div><AdminFieldLabel label="Payout date" /><input type="date" className={adminInput} /></div>
                    <div><AdminFieldLabel label="Payout method" /><select className={adminInput}><option>bKash</option><option>Nagad</option><option>Bank transfer</option><option>Manual</option></select></div>
                  </div>
                </div>

                {/* Promo */}
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div>
                    <AdminFieldLabel label="Sponsor message" hint="Max 80 chars" />
                    <textarea rows={2} className={adminInput} defaultValue="Ifad Group থেকে ঈদ উপলক্ষে বিশেষ পুরস্কার।" />
                  </div>
                  <div>
                    <AdminFieldLabel label="Launch promo" />
                    <div className="space-y-1 text-[11.5px] text-slate-700">
                      <label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="h-4 w-4 accent-emerald-600" />Push notification at start</label>
                      <label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="h-4 w-4 accent-emerald-600" />Pin to home banner</label>
                      <label className="flex items-center gap-2"><input type="checkbox" className="h-4 w-4 accent-emerald-600" />Allow social sharing</label>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                  <div className="text-[11px] text-slate-500">
                    Estimated reach: <span className="font-bold text-slate-700">~12,400</span> · est. participants <span className="font-bold text-slate-700">~3,100</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="rounded-full border border-slate-200 px-4 py-2 text-[12px] font-semibold text-slate-700 hover:bg-slate-50">Cancel</button>
                    <button className="rounded-full px-4 py-2 text-[12px] font-bold text-white" style={{ background: NAVY }}>Save as Draft</button>
                    <button className="rounded-full bg-emerald-600 px-4 py-2 text-[12px] font-bold text-white hover:bg-emerald-700">Schedule session</button>
                  </div>
                </div>
              </div>

              {/* When no sponsor is active */}
              <div className="mt-4 rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-600">Default when no sponsor is active</div>
                <div className="mt-1.5 grid grid-cols-3 gap-2 text-[11px]">
                  <label className="flex cursor-pointer items-start gap-1.5 rounded-lg bg-white p-2 ring-1 ring-emerald-300">
                    <input type="radio" name="default-mode" defaultChecked className="mt-0.5" />
                    <div><div className="font-bold text-slate-800">Run organic</div><div className="text-[10px] text-slate-500">No prize, lifetime counter only</div></div>
                  </label>
                  <label className="flex cursor-pointer items-start gap-1.5 rounded-lg bg-white p-2 ring-1 ring-slate-200">
                    <input type="radio" name="default-mode" className="mt-0.5" />
                    <div><div className="font-bold text-slate-800">House prize</div><div className="text-[10px] text-slate-500">App pays a small prize</div></div>
                  </label>
                  <label className="flex cursor-pointer items-start gap-1.5 rounded-lg bg-white p-2 ring-1 ring-slate-200">
                    <input type="radio" name="default-mode" className="mt-0.5" />
                    <div><div className="font-bold text-slate-800">Hide banner</div><div className="text-[10px] text-slate-500">Show clean room only</div></div>
                  </label>
                </div>
              </div>
            </AdminFormSection>

            {/* 5 — Review & Publish */}
            <AdminFormSection icon={<CheckCircle2 className="h-4 w-4" />} title="Review & Publish" desc="Final checks before the room goes live.">
              <div className="grid grid-cols-2 gap-3 text-[12px]">
                <div className="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">
                  <div className="text-[10px] font-bold uppercase text-slate-500">Room</div>
                  <div className="mt-1 font-bold text-slate-900">Daily Zikr Challenge · Forever</div>
                  <div className="text-[11px] text-slate-500">Subhanallah · 100/day · Bangladesh</div>
                </div>
                <div className="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">
                  <div className="text-[10px] font-bold uppercase text-slate-500">Sessions</div>
                  <div className="mt-1 font-bold text-slate-900">5 scheduled · 92 days planned</div>
                  <div className="text-[11px] text-slate-500">4 sponsor · 1 organic · ৳1,68,000 total prize</div>
                </div>
              </div>
              <div className="mt-3 space-y-1.5 text-[12px]">
                <label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="h-4 w-4 accent-emerald-600" />Notify all forever members on launch</label>
                <label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="h-4 w-4 accent-emerald-600" />Show on home Featured tab</label>
                <label className="flex items-center gap-2"><input type="checkbox" className="h-4 w-4 accent-emerald-600" />Allow social sharing of room link</label>
              </div>
            </AdminFormSection>
          </main>

          {/* RIGHT — Live Preview */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="sticky top-4 space-y-4">
              <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100 shadow-[0_4px_14px_-10px_rgba(15,23,42,0.15)]">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Live Preview</div>
                  <span className="text-[10px] text-slate-400">Currently: Wizlife</span>
                </div>
                <div className="overflow-hidden rounded-xl bg-white ring-1 ring-slate-100">
                  <div style={{ background: NAVY }} className="flex items-center justify-between px-3 py-2 text-white">
                    <div className="flex items-center gap-1.5">
                      <div className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-[10px] font-bold">W</div>
                      <div>
                        <div className="text-[8px] font-bold uppercase tracking-wider opacity-80">Sponsored by</div>
                        <div className="text-[11px] font-bold leading-tight">Wizlife</div>
                      </div>
                    </div>
                    <span className="rounded-full bg-amber-300 px-2 py-0.5 text-[10px] font-bold text-slate-900">৳40,000</span>
                  </div>
                  <div className="p-3">
                    <h4 className="text-[13px] font-bold text-slate-900">Daily Zikr Challenge</h4>
                    <div className="bn mt-0.5 text-[11px] text-slate-500">100 · سُبْحَانَ اللهِ /day</div>
                    <div className="mt-2 flex items-center gap-3 text-[10px] text-slate-500">
                      <span className="inline-flex items-center gap-0.5"><Users className="h-3 w-3" />16</span>
                      <span className="inline-flex items-center gap-0.5"><Flag className="h-3 w-3" />100/d</span>
                      <span className="inline-flex items-center gap-0.5"><Clock className="h-3 w-3" />21d</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-100">
                <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">Validation</div>
                <ul className="space-y-1 text-[12px]">
                  <li className="text-emerald-700">✓ Room basics complete</li>
                  <li className="text-emerald-700">✓ Zikr & goal set</li>
                  <li className="text-emerald-700">✓ Eligibility configured</li>
                  <li className="text-emerald-700">✓ 5 sessions scheduled</li>
                  <li className="text-amber-700">⚠ 1 session in Draft</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-emerald-50 p-3 ring-1 ring-emerald-100 text-[11px] text-emerald-800">
                <div className="font-bold">Estimated reach</div>
                <div>~12,400 active users · across 5 sessions</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------- the deck ---------- */

function V2FlowDeck() {
  return (
    <div>
      <header className="mb-10 text-center">
        <h1 className="text-2xl font-bold text-slate-900">Sponsor Modality — Flow-wise Design</h1>
        <p className="mt-1 text-sm text-slate-500">
          Permanent rooms + temporary sponsor seasons. Core screens first, then end-to-end flows.
        </p>
      </header>

      <AdminPortalV2 />

      <FlowRow flow={0} title="Core app screens (V2 redesign of V1 pages)"
        bn="V1 এর Home, Room Details, Admin Create — V2 modality + reference style এ নতুন করে।">
        <F0Home /><F0RoomDetail /><F0AdminCreate />
      </FlowRow>

      <FlowRow flow={0} title="Room Details · Sponsor Pattern Variants"
        bn="রুম ডিটেইল পেজের ৮টি ভ্যারিয়েন্ট — V1 এর Sponsor Patterns এর সাথে মিল রেখে।">
        <RD1_NoBrand /><RD2_PoweredBy /><RD3_PoweredSponsored /><RD4_SponsoredPrize />
        <RD5_PrizeOnly /><RD6_WideBanner /><RD7_RegularBanner /><RD8_BannerOnly />
      </FlowRow>

      <FlowRow flow={1} title="Member discovers & joins a permanent room"
        bn="সদস্য একটি স্থায়ী রুম খুঁজে পান, যোগ দেন এবং আজীবন সদস্য হয়ে যান।">
        <F1S1 /><F1S2 /><F1S3 /><F1S4 />
      </FlowRow>

      <FlowRow flow={2} title="A sponsor season is live"
        bn="সিজন চলছে — ব্যানার, কাউন্টার, লিডারবোর্ড এবং বিজয়ী ঘোষণা।">
        <F2S1 /><F2S2 /><F2S3 /><F2S4 />
      </FlowRow>

      <FlowRow flow={3} title="Between seasons — the room stays alive"
        bn="দুই সিজনের মাঝেও রুম জীবন্ত থাকে, দৈনন্দিন জিকর চলে।">
        <F3S1 /><F3S2 /><F3S3 />
      </FlowRow>

      <FlowRow flow={4} title="Admin schedules a new season"
        bn="অ্যাডমিন একটি স্থায়ী রুমে নতুন সিজন তৈরি করেন।">
        <F4S1 /><F4S2 /><F4S3 /><F4S4 />
      </FlowRow>

      <FlowRow flow={5} title="Sponsor brand journey"
        bn="ব্র্যান্ড উপযুক্ত রুম বেছে নেয়, সপ্তাহ বুক করে, লাইভ রিপোর্ট দেখে।">
        <F5S1 /><F5S2 /><F5S3 />
      </FlowRow>
    </div>
  );
}

/* ================================================================== */
/*  Channel Card Variants — wide horizontal (~400×90+)                */
/* ================================================================== */

const GOLD = "#E5B547";
const GOLD_SOFT = "#F4D27A";

function ChannelVariantFrame({ children, label }: { children: React.ReactNode; label: string }) {
  const captureRef = React.useRef<HTMLDivElement>(null);
  const inner = <div className="w-full">{children}</div>;
  useRegisterFrame(`channel:${label}`, "channel", label, inner);
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex w-full items-center justify-between gap-2">
        <div className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {label}
        </div>
        <div className="flex items-center gap-1.5">
          <CopyButtons targetRef={captureRef} />
          <ExportButton targetRef={captureRef} label={label} />
          <PickButton frameKey={`channel:${label}`} />
        </div>
      </div>
      <div ref={captureRef} className="w-full">{inner}</div>
    </div>
  );
}

function ChannelShell({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-[460px]">{children}</div>;
}

/* V1 — Classic navy + gold rail (~400×90) */
function ChannelCardV1() {
  return (
    <div className="flex h-[90px] w-full items-stretch overflow-hidden rounded-2xl text-white shadow-[0_10px_30px_-12px_rgba(31,58,95,0.5)]"
      style={{ background: NAVY }}>
      <div className="w-1.5 shrink-0" style={{ background: GOLD }} />
      <div className="flex flex-1 items-center gap-3 px-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[20px]"
          style={{ background: "rgba(255,255,255,0.08)", boxShadow: `inset 0 0 0 1px ${GOLD}55` }}>
          <Sparkles className="h-5 w-5" style={{ color: GOLD }} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="bn truncate text-[16px] font-extrabold leading-tight">সুবহানাল্লাহি</div>
          <div className="text-[10.5px] tracking-wide text-white/65">Subhanallah · permanent channel</div>
        </div>
        <div className="text-right">
          <div className="text-[15px] font-extrabold tabular-nums" style={{ color: GOLD_SOFT }}>12.4M</div>
          <div className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold">
            <span className="h-1 w-1 rounded-full bg-rose-400" /> 12 live
          </div>
        </div>
      </div>
    </div>
  );
}

/* V2 — Light glass card with navy text + gold orb (~400×88) */
function ChannelCardV2() {
  return (
    <div className="flex h-[88px] w-full items-center gap-3 rounded-2xl bg-white px-3.5 shadow-[0_10px_24px_-14px_rgba(31,58,95,0.35)] ring-1 ring-slate-100">
      <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
        style={{ background: `radial-gradient(circle at 30% 30%, ${GOLD_SOFT}, ${GOLD})` }}>
        <Crown className="h-6 w-6 text-white drop-shadow" />
        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full ring-2 ring-white" style={{ background: NAVY }} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <div className="bn truncate text-[15px] font-extrabold" style={{ color: NAVY }}>আলহামদুলিল্লাহ</div>
          <span className="rounded-full px-1.5 py-0.5 text-[8.5px] font-bold uppercase tracking-wider" style={{ background: `${GOLD}22`, color: NAVY }}>Channel</span>
        </div>
        <div className="text-[10.5px] text-slate-500">Alhamdulillah · 7 rooms live · 184k members</div>
        <div className="mt-1 flex items-center gap-2 text-[10px] font-semibold" style={{ color: NAVY }}>
          <TrendingUp className="h-3 w-3" style={{ color: GOLD }} />
          9.8M lifetime · +12% this week
        </div>
      </div>
      <ChevronRight className="h-4 w-4 text-slate-400" />
    </div>
  );
}

/* V3 — Split: navy icon panel + white stat panel (~400×96) */
function ChannelCardV3() {
  return (
    <div className="flex h-[96px] w-full overflow-hidden rounded-2xl shadow-[0_12px_30px_-16px_rgba(31,58,95,0.45)] ring-1 ring-slate-100">
      <div className="flex w-[110px] shrink-0 flex-col items-center justify-center gap-1 text-white"
        style={{ background: `linear-gradient(135deg, ${NAVY}, #16294A)` }}>
        <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: GOLD }}>
          <BookOpen className="h-4 w-4" style={{ color: NAVY }} />
        </div>
        <div className="bn text-[11.5px] font-bold leading-tight">দরুদ</div>
        <div className="text-[8.5px] uppercase tracking-wider text-white/60">Durood</div>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1.5 bg-white px-4">
        <div className="flex items-baseline gap-2">
          <div className="text-[20px] font-extrabold tabular-nums" style={{ color: NAVY }}>18.2M</div>
          <div className="text-[10px] text-slate-400">global lifetime</div>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 font-semibold" style={{ background: `${NAVY}10`, color: NAVY }}>
            <Users className="h-2.5 w-2.5" /> 412k
          </span>
          <span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 font-semibold text-rose-700" style={{ background: "#fee2e2" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" /> 21 live
          </span>
          <span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 font-semibold" style={{ background: `${GOLD}22`, color: "#7a5a10" }}>
            <Trophy className="h-2.5 w-2.5" /> Season
          </span>
        </div>
      </div>
    </div>
  );
}

/* V4 — Wide stat with sparkline (~400×104) */
function ChannelCardV4() {
  const pts = [22, 30, 26, 38, 34, 46, 42, 58, 54, 70, 66, 84];
  const w = 110, h = 36;
  const max = Math.max(...pts);
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (pts.length - 1)) * w} ${h - (p / max) * h}`).join(" ");
  return (
    <div className="relative h-[104px] w-full overflow-hidden rounded-2xl px-4 py-3 text-white shadow-[0_14px_32px_-14px_rgba(31,58,95,0.55)]"
      style={{ background: `linear-gradient(115deg, ${NAVY} 0%, #2B4D78 60%, #16294A 100%)` }}>
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20" style={{ background: GOLD }} />
      <div className="relative flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="bn text-[16px] font-extrabold">ইস্তেগফার</div>
            <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[8.5px] font-bold uppercase tracking-wider" style={{ color: GOLD_SOFT }}>Channel</span>
          </div>
          <div className="text-[10.5px] text-white/70">Istighfar · trending this week</div>
        </div>
        <div className="text-right">
          <div className="text-[20px] font-extrabold tabular-nums" style={{ color: GOLD_SOFT }}>6.1M</div>
          <div className="text-[9px] text-white/60">lifetime</div>
        </div>
      </div>
      <div className="relative mt-2 flex items-end justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[9.5px] font-semibold">
            <span className="h-1 w-1 rounded-full bg-rose-400" /> 4 live rooms
          </span>
          <span className="inline-flex items-center gap-1 text-[9.5px]" style={{ color: GOLD_SOFT }}>
            <TrendingUp className="h-2.5 w-2.5" /> +18% · 7d
          </span>
        </div>
        <svg width={w} height={h} className="opacity-90">
          <defs>
            <linearGradient id="spark4" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={GOLD} stopOpacity="0.5" />
              <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${path} L ${w} ${h} L 0 ${h} Z`} fill="url(#spark4)" />
          <path d={path} fill="none" stroke={GOLD} strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

/* V5 — Outlined minimal (~400×80) */
function ChannelCardV5() {
  return (
    <div className="flex h-[80px] w-full items-center gap-3 rounded-2xl bg-white px-4"
      style={{ boxShadow: `inset 0 0 0 1.5px ${NAVY}` }}>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: `${NAVY}08` }}>
        <span className="bn text-[14px] font-extrabold" style={{ color: NAVY }}>লা</span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="bn truncate text-[14.5px] font-extrabold" style={{ color: NAVY }}>লা ইলাহা ইল্লাল্লাহ</div>
        <div className="flex items-center gap-2 text-[10px] text-slate-500">
          <span>La ilaha illallah</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span className="inline-flex items-center gap-0.5 font-semibold" style={{ color: NAVY }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: GOLD }} /> 9 live
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-[14px] font-extrabold tabular-nums" style={{ color: NAVY }}>14.7M</div>
        <button className="mt-0.5 rounded-full px-2.5 py-0.5 text-[9.5px] font-bold" style={{ background: GOLD, color: NAVY }}>Open</button>
      </div>
    </div>
  );
}

/* V6 — Sponsored / Featured (~400×128) with ribbon + CTA */
function ChannelCardV6() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl text-white shadow-[0_18px_40px_-16px_rgba(31,58,95,0.6)]"
      style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #16294A 100%)` }}>
      <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
        style={{ background: GOLD, color: NAVY }}>
        <Sparkles className="h-2.5 w-2.5" /> Featured
      </div>
      <div className="absolute -left-10 -bottom-12 h-36 w-36 rounded-full opacity-15" style={{ background: GOLD }} />
      <div className="relative flex items-center gap-3 px-4 pt-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
          style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_SOFT})` }}>
          <Heart className="h-5 w-5" style={{ color: NAVY }} fill={NAVY} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="bn text-[15.5px] font-extrabold leading-tight">আল্লাহু আকবার</div>
          <div className="text-[10px] text-white/65">Allahu Akbar · sponsored season inside</div>
        </div>
      </div>
      <div className="relative mx-4 mt-2.5 flex items-center justify-between rounded-xl px-3 py-2"
        style={{ background: "rgba(255,255,255,0.06)", boxShadow: `inset 0 0 0 1px ${GOLD}33` }}>
        <div>
          <div className="text-[9.5px] uppercase tracking-wider text-white/55">Active prize</div>
          <div className="text-[13px] font-extrabold" style={{ color: GOLD_SOFT }}>৳15,000 · ends in 3d 14h</div>
        </div>
        <div className="text-right">
          <div className="text-[9.5px] text-white/55">Lifetime</div>
          <div className="text-[13px] font-extrabold tabular-nums">7.3M</div>
        </div>
      </div>
      <div className="relative flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-1.5 text-[10px] text-white/70">
          <Users className="h-3 w-3" /> 5 rooms live · 92k joined
        </div>
        <button className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold"
          style={{ background: GOLD, color: NAVY }}>
          Join channel <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Seasonal / Amal-fitted Channel Cards (V7–V10)                     */
/* ================================================================== */

/* V7 — Zilhajj Special · 10 days + Takbir + curated amals (~400×128) */
function ChannelCardV7() {
  const amals = ["Takbir", "Tahlil", "Hamd", "Qurbani Dua"];
  return (
    <div className="relative w-full overflow-hidden rounded-2xl text-white shadow-[0_18px_40px_-16px_rgba(31,58,95,0.6)]"
      style={{ background: `linear-gradient(135deg, #0E1F3D 0%, ${NAVY} 55%, #2E1A0B 100%)` }}>
      {/* crescent + sun motif */}
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20" style={{ background: GOLD }} />
      <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
        style={{ background: GOLD, color: NAVY }}>
        <Moon className="h-2.5 w-2.5" /> Seasonal
      </div>
      <div className="relative flex items-center gap-3 px-4 pt-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
          style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_SOFT})` }}>
          <span className="text-[18px] font-black" style={{ color: NAVY }}>১০</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="bn text-[15.5px] font-extrabold leading-tight">জিলহজ্জ স্পেশাল</div>
          <div className="text-[10px] text-white/65">Dhul Hijjah · first 10 blessed days</div>
        </div>
      </div>
      <div className="relative mx-4 mt-2.5 flex flex-wrap gap-1.5">
        {amals.map((a) => (
          <span key={a} className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9.5px] font-semibold"
            style={{ background: "rgba(255,255,255,0.08)", color: GOLD_SOFT, boxShadow: `inset 0 0 0 1px ${GOLD}33` }}>
            <Sparkles className="h-2.5 w-2.5" /> {a}
          </span>
        ))}
      </div>
      <div className="relative flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-1.5 text-[10px] text-white/70">
          <Clock className="h-3 w-3" /> Day 3 of 10 · 7d 4h left
        </div>
        <button className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold"
          style={{ background: GOLD, color: NAVY }}>
          Join season <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

/* V8 — Ramadan Special · Tarawih + Qiyam + Quran (~400×128) */
function ChannelCardV8() {
  const amals = ["Tarawih", "Qiyam", "Quran khatm", "Iftar dua"];
  return (
    <div className="relative w-full overflow-hidden rounded-2xl text-white shadow-[0_18px_40px_-16px_rgba(31,58,95,0.6)]"
      style={{ background: `linear-gradient(135deg, #1A0F3D 0%, #2B1B5A 55%, ${NAVY} 100%)` }}>
      {/* stars */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-6 top-3 h-1 w-1 rounded-full bg-white" />
        <div className="absolute left-16 top-6 h-0.5 w-0.5 rounded-full bg-white" />
        <div className="absolute right-24 top-4 h-1 w-1 rounded-full bg-white" />
        <div className="absolute right-10 top-10 h-0.5 w-0.5 rounded-full bg-white" />
      </div>
      <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
        style={{ background: GOLD, color: NAVY }}>
        <Moon className="h-2.5 w-2.5" /> Ramadan
      </div>
      <div className="relative flex items-center gap-3 px-4 pt-4">
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
          style={{ background: "rgba(255,255,255,0.08)", boxShadow: `inset 0 0 0 1px ${GOLD}55` }}>
          <Moon className="h-6 w-6" style={{ color: GOLD_SOFT }} fill={GOLD} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="bn text-[15.5px] font-extrabold leading-tight">রমাদান স্পেশাল</div>
          <div className="text-[10px] text-white/65">Ramadan · 30 nights of barakah</div>
        </div>
      </div>
      <div className="relative mx-4 mt-2.5 flex flex-wrap gap-1.5">
        {amals.map((a) => (
          <span key={a} className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9.5px] font-semibold"
            style={{ background: "rgba(255,255,255,0.08)", color: GOLD_SOFT, boxShadow: `inset 0 0 0 1px ${GOLD}33` }}>
            <BookOpen className="h-2.5 w-2.5" /> {a}
          </span>
        ))}
      </div>
      <div className="relative mx-4 mt-2 h-1 overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
        <div className="h-full rounded-full" style={{ width: "47%", background: `linear-gradient(90deg, ${GOLD_SOFT}, ${GOLD})` }} />
      </div>
      <div className="relative flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-1.5 text-[10px] text-white/70">
          <Calendar className="h-3 w-3" /> Night 14 of 30 · Laylatul Qadr soon
        </div>
        <span className="text-[11px] font-extrabold tabular-nums" style={{ color: GOLD_SOFT }}>2.1M</span>
      </div>
    </div>
  );
}

/* V9 — Jumu'ah Special · Durood weekly recurring (~400×96) */
function ChannelCardV9() {
  return (
    <div className="flex h-[96px] w-full overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_-16px_rgba(31,58,95,0.45)] ring-1 ring-slate-100">
      <div className="flex w-[96px] shrink-0 flex-col items-center justify-center gap-0.5"
        style={{ background: `linear-gradient(160deg, ${GOLD_SOFT}, ${GOLD})` }}>
        <div className="text-[9.5px] font-bold uppercase tracking-wider" style={{ color: NAVY }}>Friday</div>
        <div className="text-[26px] font-black leading-none" style={{ color: NAVY }}>৮০</div>
        <div className="text-[8.5px] font-semibold" style={{ color: NAVY }}>min durood</div>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-1 px-3.5">
        <div className="flex items-center gap-1.5">
          <div className="bn truncate text-[14.5px] font-extrabold" style={{ color: NAVY }}>জুমু'আ স্পেশাল</div>
          <span className="rounded-full px-1.5 py-0.5 text-[8.5px] font-bold uppercase tracking-wider"
            style={{ background: `${GOLD}22`, color: NAVY }}>Weekly</span>
        </div>
        <div className="text-[10px] text-slate-500">Durood Sharif · every Friday, all day</div>
        <div className="mt-0.5 flex items-center gap-2 text-[10px]">
          <span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 font-semibold" style={{ background: `${NAVY}10`, color: NAVY }}>
            <Heart className="h-2.5 w-2.5" fill={NAVY} /> 248k joined
          </span>
          <span className="inline-flex items-center gap-1 font-semibold" style={{ color: "#7a5a10" }}>
            <Clock className="h-2.5 w-2.5" /> next in 2d
          </span>
        </div>
      </div>
    </div>
  );
}

/* V10 — Tahajjud · Last third of night nightly (~400×96) */
function ChannelCardV10() {
  return (
    <div className="relative flex h-[96px] w-full items-stretch overflow-hidden rounded-2xl text-white shadow-[0_12px_30px_-14px_rgba(10,15,40,0.7)]"
      style={{ background: `linear-gradient(115deg, #050B22 0%, #0F1A3D 50%, #1A2658 100%)` }}>
      <div className="absolute right-4 top-3 opacity-60">
        <Star className="h-2 w-2 text-white" fill="white" />
      </div>
      <div className="absolute right-10 top-6 opacity-40">
        <Star className="h-1.5 w-1.5 text-white" fill="white" />
      </div>
      <div className="w-1.5 shrink-0" style={{ background: GOLD }} />
      <div className="flex flex-1 items-center gap-3 px-4">
        <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
          style={{ background: "rgba(255,255,255,0.06)", boxShadow: `inset 0 0 0 1px ${GOLD}55` }}>
          <Moon className="h-5 w-5" style={{ color: GOLD_SOFT }} />
          <span className="absolute -bottom-0.5 -right-0.5 rounded-full px-1 text-[7px] font-bold"
            style={{ background: GOLD, color: NAVY }}>3/3</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <div className="bn truncate text-[14.5px] font-extrabold">তাহাজ্জুদ</div>
            <span className="rounded-full px-1.5 py-0.5 text-[8.5px] font-bold uppercase tracking-wider"
              style={{ background: "rgba(255,255,255,0.1)", color: GOLD_SOFT }}>Nightly</span>
          </div>
          <div className="text-[10px] text-white/60">Last third · Istighfar + Dua qabool hour</div>
          <div className="mt-0.5 flex items-center gap-2 text-[9.5px]">
            <span className="inline-flex items-center gap-1 font-semibold" style={{ color: GOLD_SOFT }}>
              <Clock className="h-2.5 w-2.5" /> 3:14 AM tonight
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-1.5 py-0.5 font-semibold">
              <span className="h-1 w-1 rounded-full bg-rose-400" /> 18 live
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
/* ================================================================== */

const SECTION_LINKS: { id: string; label: string }[] = [
  
  { id: "sec-sponsored", label: "Sponsored Patterns" },
  { id: "sec-room-detail", label: "Room Details" },
  { id: "sec-home", label: "Home Page" },
  { id: "sec-admin", label: "Admin · Create Room" },
  { id: "sec-admin-channel", label: "Admin · Create Channel" },
  { id: "sec-create-room-v2", label: "Create Room · V2" },
  { id: "sec-lb-variants", label: "Leaderboard Variants" },
  { id: "sec-lb-organic", label: "Organic vs Running" },
  { id: "sec-channel-cards", label: "Channel Cards" },
  { id: "sec-flow0", label: "Flow 0 · Hierarchy" },
  { id: "sec-lb-flow", label: "Leaderboard Flow" },
  { id: "sec-sponsor-channel", label: "Sponsor Channel" },
  { id: "sec-analytics", label: "Sponsor Analytics" },
];

function SectionNav() {
  const [active, setActive] = useState<string>(SECTION_LINKS[0].id);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    SECTION_LINKS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed left-3 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="flex items-start gap-2">
        <div className={`overflow-hidden rounded-2xl bg-white/95 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.25)] ring-1 ring-slate-200 backdrop-blur transition-all ${open ? "w-[210px] opacity-100" : "w-0 opacity-0"}`}>
          <div className="border-b border-slate-100 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
            Jump to
          </div>
          <ul className="max-h-[70vh] overflow-y-auto py-1.5">
            {SECTION_LINKS.map((s, i) => {
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`flex items-center gap-2 px-3 py-1.5 text-[11.5px] font-semibold transition ${
                      isActive ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span className={`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
                      {i + 1}
                    </span>
                    {s.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg ring-1 ring-black/10 hover:bg-slate-800"
          aria-label={open ? "Hide menu" : "Show menu"}
        >
          {open ? <ChevronRight className="h-4 w-4 rotate-180" /> : <ChevronRight className="h-4 w-4" />}
        </button>
      </div>
    </nav>
  );
}

/* ================================================================== */
/*  AdminCreateChannel — desktop admin form                           */
/* ================================================================== */

function AdminCreateChannel() {
  const palette = [
    "from-emerald-500 to-teal-600",
    "from-sky-500 to-indigo-600",
    "from-amber-500 to-orange-600",
    "from-rose-500 to-pink-600",
    "from-violet-500 to-purple-600",
    "from-cyan-500 to-blue-600",
  ];
  const [activeColor, setActiveColor] = useState(palette[2]);

  const layouts = [
    { id: "v1", name: "V1 · Classic navy + gold rail" },
    { id: "v2", name: "V2 · Light glass" },
    { id: "v3", name: "V3 · Split · icon + stats" },
    { id: "v4", name: "V4 · Wide stat · sparkline" },
    { id: "v5", name: "V5 · Outlined minimal" },
    { id: "v6", name: "V6 · Sponsored / Featured" },
    { id: "v7", name: "V7 · Seasonal (Zilhajj)" },
    { id: "v8", name: "V8 · Seasonal (Ramadan)" },
    { id: "v9", name: "V9 · Weekly (Jumu'ah)" },
    { id: "v10", name: "V10 · Nightly (Tahajjud)" },
  ];
  const [layout, setLayout] = useState("v7");

  const iconOptions = [
    { id: "moon", Icon: Moon, label: "Moon" },
    { id: "star", Icon: Star, label: "Star" },
    { id: "sparkles", Icon: Sparkles, label: "Sparkles" },
    { id: "book", Icon: BookOpen, label: "Quran" },
    { id: "heart", Icon: Heart, label: "Heart" },
    { id: "crown", Icon: Crown, label: "Crown" },
    { id: "trophy", Icon: Trophy, label: "Trophy" },
    { id: "sun", Icon: Sun, label: "Sun" },
  ];
  const [iconId, setIconId] = useState("moon");
  const ActiveIcon = iconOptions.find((i) => i.id === iconId)?.Icon ?? Moon;

  const amalIcons = [
    { id: "sparkles", Icon: Sparkles },
    { id: "book", Icon: BookOpen },
    { id: "heart", Icon: Heart },
    { id: "moon", Icon: Moon },
    { id: "star", Icon: Star },
  ];
  const [amals, setAmals] = useState([
    { name: "Takbir", icon: "sparkles" },
    { name: "Tahlil", icon: "sparkles" },
    { name: "Hamd", icon: "sparkles" },
    { name: "Qurbani Dua", icon: "book" },
  ]);
  const [newAmal, setNewAmal] = useState("");

  const [tag, setTag] = useState("Seasonal");
  const tagPresets = ["Seasonal", "Ramadan", "Weekly", "Nightly", "Featured", "New"];

  const [recurrence, setRecurrence] = useState("seasonal");
  const recurrenceOpts = [
    { id: "one-time", label: "One-time" },
    { id: "daily", label: "Daily" },
    { id: "weekly", label: "Weekly" },
    { id: "monthly", label: "Monthly" },
    { id: "seasonal", label: "Seasonal (window)" },
    { id: "nightly", label: "Nightly window" },
  ];

  const [progress, setProgress] = useState({ current: 3, total: 10, unit: "Day" });
  const [countdown, setCountdown] = useState("7d 4h left");
  const [ctaLabel, setCtaLabel] = useState("Join season");
  const [stats, setStats] = useState({ live: 18, lifetime: "2.1M", joined: "248k" });

  const motifs = [
    { id: "none", label: "None" },
    { id: "crescent", label: "Crescent + sun" },
    { id: "stars", label: "Starfield" },
    { id: "rail", label: "Gold rail" },
  ];
  const [motif, setMotif] = useState("crescent");

  const ActiveAmalIcon = (id: string) =>
    amalIcons.find((a) => a.id === id)?.Icon ?? Sparkles;

  return (
    <div className="mx-auto w-full max-w-[1200px] rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200">
      {/* Top bar */}
      <div className="mb-6 flex items-center justify-between rounded-2xl bg-white p-4 ring-1 ring-slate-200">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Admin Console</div>
          <div className="text-lg font-bold text-slate-900">Create New Channel</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50">Save draft</button>
          <button className="rounded-lg px-3 py-1.5 text-xs font-semibold text-white" style={{ background: NAVY }}>
            Publish channel
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_440px]">
        {/* LEFT — Form */}
        <div className="space-y-5">
          {/* Section 1 — Identity */}
          <section className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold text-white" style={{ background: NAVY }}>1</div>
              <div className="text-sm font-bold text-slate-900">Channel identity</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Channel name (Bangla)</label>
                <input className="bn w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" defaultValue="জিলহজ্জ স্পেশাল" />
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Channel name (English)</label>
                <input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" defaultValue="Dhul Hijjah Special" />
              </div>
              <div className="col-span-2">
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Zikr text (Arabic)</label>
                <input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-right text-sm" defaultValue="اللَّهُ أَكْبَرُ كَبِيرًا" dir="rtl" />
              </div>
              <div className="col-span-2">
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Subtitle / short description</label>
                <textarea rows={2} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" defaultValue="Dhul Hijjah · first 10 blessed days" />
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Channel color</label>
                <div className="flex flex-wrap gap-2">
                  {palette.map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => setActiveColor(p)}
                      className={`relative h-9 w-12 rounded-lg bg-gradient-to-br ${p}`}
                      style={p === activeColor ? { boxShadow: `0 0 0 2px ${NAVY}` } : undefined}
                    >
                      {p === activeColor && <CheckCircle2 className="absolute right-1 top-1 h-3.5 w-3.5 text-white" />}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Header icon</label>
                <div className="flex flex-wrap gap-1.5">
                  {iconOptions.map(({ id, Icon, label }) => (
                    <button
                      type="button"
                      key={id}
                      onClick={() => setIconId(id)}
                      title={label}
                      className={`flex h-9 w-9 items-center justify-center rounded-lg ring-1 ${id === iconId ? "ring-2" : "ring-slate-200 hover:bg-slate-50"}`}
                      style={id === iconId ? { background: `${GOLD_SOFT}40`, color: NAVY, boxShadow: `0 0 0 2px ${NAVY}` } : { color: "#64748b" }}
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 — Card layout + tag/badge + motif */}
          <section className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold text-white" style={{ background: NAVY }}>2</div>
              <div className="text-sm font-bold text-slate-900">Card layout & visuals</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Card layout variant</label>
                <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" value={layout} onChange={(e) => setLayout(e.target.value)}>
                  {layouts.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Tag / badge label</label>
                <input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" value={tag} onChange={(e) => setTag(e.target.value)} />
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {tagPresets.map((t) => (
                    <button type="button" key={t} onClick={() => setTag(t)}
                      className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ring-1 ${tag === t ? "" : "ring-slate-200 text-slate-500 hover:bg-slate-50"}`}
                      style={tag === t ? { background: GOLD, color: NAVY, borderColor: GOLD } : undefined}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Background motif</label>
                <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" value={motif} onChange={(e) => setMotif(e.target.value)}>
                  {motifs.map((m) => <option key={m.id} value={m.id}>{m.label}</option>)}
                </select>
              </div>
              <div className="col-span-2">
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">CTA button label</label>
                <input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" value={ctaLabel} onChange={(e) => setCtaLabel(e.target.value)} placeholder="Join season" />
              </div>
            </div>
          </section>

          {/* Section 3 — Amals (lines with icons) */}
          <section className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold text-white" style={{ background: NAVY }}>3</div>
              <div className="text-sm font-bold text-slate-900">Amals (tag chips)</div>
              <span className="ml-auto text-[10px] text-slate-400">Shown as pill chips on the card</span>
            </div>
            <div className="space-y-2">
              {amals.map((a, i) => {
                const IconC = ActiveAmalIcon(a.icon);
                return (
                  <div key={i} className="flex items-center gap-2 rounded-lg border border-slate-200 px-2 py-1.5">
                    <select className="rounded-md border border-slate-200 bg-white px-1.5 py-1 text-xs" value={a.icon}
                      onChange={(e) => setAmals(amals.map((x, idx) => idx === i ? { ...x, icon: e.target.value } : x))}>
                      {amalIcons.map((ic) => <option key={ic.id} value={ic.id}>{ic.id}</option>)}
                    </select>
                    <IconC className="h-3.5 w-3.5 text-slate-500" />
                    <input className="flex-1 rounded-md border border-slate-200 px-2 py-1 text-sm" value={a.name}
                      onChange={(e) => setAmals(amals.map((x, idx) => idx === i ? { ...x, name: e.target.value } : x))} />
                    <button type="button" onClick={() => setAmals(amals.filter((_, idx) => idx !== i))}
                      className="rounded-md px-2 py-1 text-xs font-semibold text-rose-600 hover:bg-rose-50">Remove</button>
                  </div>
                );
              })}
              <div className="flex items-center gap-2">
                <input className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Add new amal (e.g. Tarawih)"
                  value={newAmal} onChange={(e) => setNewAmal(e.target.value)} />
                <button type="button"
                  onClick={() => { if (newAmal.trim()) { setAmals([...amals, { name: newAmal.trim(), icon: "sparkles" }]); setNewAmal(""); } }}
                  className="rounded-lg px-3 py-2 text-xs font-bold text-white" style={{ background: NAVY }}>+ Add</button>
              </div>
            </div>
          </section>

          {/* Section 4 — Schedule & recurrence */}
          <section className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold text-white" style={{ background: NAVY }}>4</div>
              <div className="text-sm font-bold text-slate-900">Schedule, progress & countdown</div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-3">
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Recurrence</label>
                <div className="flex flex-wrap gap-1.5">
                  {recurrenceOpts.map((r) => (
                    <button type="button" key={r.id} onClick={() => setRecurrence(r.id)}
                      className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold ring-1 ${recurrence === r.id ? "text-white" : "ring-slate-200 text-slate-600 hover:bg-slate-50"}`}
                      style={recurrence === r.id ? { background: NAVY, borderColor: NAVY } : undefined}>
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Start date</label>
                <input type="date" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" defaultValue="2026-05-29" />
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">End date</label>
                <input type="date" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" defaultValue="2026-06-07" />
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Time window</label>
                <input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" defaultValue="3:00 AM — Fajr" />
              </div>

              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Progress unit</label>
                <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm" value={progress.unit} onChange={(e) => setProgress({ ...progress, unit: e.target.value })}>
                  <option>Day</option><option>Night</option><option>Week</option><option>Round</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Current</label>
                <input type="number" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" value={progress.current}
                  onChange={(e) => setProgress({ ...progress, current: Number(e.target.value) })} />
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Total</label>
                <input type="number" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" value={progress.total}
                  onChange={(e) => setProgress({ ...progress, total: Number(e.target.value) })} />
              </div>

              <div className="col-span-3">
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Countdown text</label>
                <input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" value={countdown} onChange={(e) => setCountdown(e.target.value)} placeholder="7d 4h left" />
              </div>
            </div>
          </section>

          {/* Section 5 — Stats */}
          <section className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold text-white" style={{ background: NAVY }}>5</div>
              <div className="text-sm font-bold text-slate-900">Stats shown on card</div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Live now</label>
                <input type="number" className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" value={stats.live}
                  onChange={(e) => setStats({ ...stats, live: Number(e.target.value) })} />
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Lifetime</label>
                <input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" value={stats.lifetime}
                  onChange={(e) => setStats({ ...stats, lifetime: e.target.value })} />
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Joined</label>
                <input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" value={stats.joined}
                  onChange={(e) => setStats({ ...stats, joined: e.target.value })} />
              </div>
            </div>
          </section>

          {/* Section 6 — Sponsor & Banner */}
          <section className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold text-white" style={{ background: NAVY }}>6</div>
              <div className="text-sm font-bold text-slate-900">Sponsor & banner</div>
              <span className="ml-auto rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">Optional</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Sponsor name</label>
                <input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" defaultValue="Bismillah Foundation" />
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Sponsor website</label>
                <input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" defaultValue="bismillah.org" />
              </div>
              <div className="col-span-2">
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Channel banner <span className="ml-1 font-normal normal-case text-slate-400">— exactly 400 × 90 px</span>
                </label>
                <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-4">
                  <div className="flex h-[90px] w-[400px] items-center justify-center rounded-lg bg-white text-center ring-1 ring-slate-200">
                    <div>
                      <Upload className="mx-auto h-5 w-5 text-slate-400" />
                      <div className="mt-1 text-[11px] font-semibold text-slate-700">Drop banner · 400×90</div>
                      <div className="text-[10px] text-slate-400">PNG, JPG · max 200 KB</div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Sponsor logo</label>
                <div className="flex items-center gap-2 rounded-lg border border-slate-200 p-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-100"><Upload className="h-4 w-4 text-slate-400" /></div>
                  <div className="text-[11px] text-slate-500">Square · 96×96+</div>
                </div>
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Banner CTA URL</label>
                <input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="https://…" />
              </div>
            </div>
          </section>

          {/* Section 7 — Prize */}
          <section className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full text-[12px] font-bold text-white" style={{ background: NAVY }}>7</div>
              <div className="text-sm font-bold text-slate-900">Prize pool</div>
              <span className="ml-auto rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-800">Optional</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Prize amount</label>
                <div className="flex items-center rounded-lg border border-slate-200">
                  <span className="px-2 text-sm text-slate-500">৳</span>
                  <input className="w-full rounded-r-lg px-2 py-2 text-sm outline-none" defaultValue="15,000" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Prize type</label>
                <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">
                  <option>Cash bKash</option>
                  <option>Gift hamper</option>
                  <option>Donation in name</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Winners</label>
                <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">
                  <option>Top 3</option>
                  <option>Top 10</option>
                  <option>Top 1</option>
                </select>
              </div>
              <div className="col-span-3">
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">Prize note (shown on cards)</label>
                <input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" defaultValue="Top 3 reciters split ৳15,000 — paid weekly via bKash." />
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT — Live preview */}
        <aside className="space-y-4">
          <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-slate-500" />
                <div className="text-sm font-bold text-slate-900">Live preview</div>
              </div>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">{layout}</span>
            </div>

            {/* Seasonal/Amal-aware card preview (mirrors V7-style) */}
            <div className="relative w-full overflow-hidden rounded-2xl text-white shadow-[0_18px_40px_-16px_rgba(31,58,95,0.6)]"
              style={{ background: `linear-gradient(135deg, #0E1F3D 0%, ${NAVY} 55%, #2E1A0B 100%)` }}>
              {motif === "crescent" && (
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20" style={{ background: GOLD }} />
              )}
              {motif === "stars" && (
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute left-6 top-3 h-1 w-1 rounded-full bg-white" />
                  <div className="absolute left-16 top-6 h-0.5 w-0.5 rounded-full bg-white" />
                  <div className="absolute right-24 top-4 h-1 w-1 rounded-full bg-white" />
                  <div className="absolute right-10 top-10 h-0.5 w-0.5 rounded-full bg-white" />
                </div>
              )}
              {motif === "rail" && (
                <div className="absolute left-0 top-0 h-full w-1.5" style={{ background: GOLD }} />
              )}
              <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                style={{ background: GOLD, color: NAVY }}>
                <ActiveIcon className="h-2.5 w-2.5" /> {tag}
              </div>
              <div className="relative flex items-center gap-3 px-4 pt-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_SOFT})` }}>
                  <ActiveIcon className="h-6 w-6" style={{ color: NAVY }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="bn text-[15.5px] font-extrabold leading-tight">জিলহজ্জ স্পেশাল</div>
                  <div className="text-[10px] text-white/65">Dhul Hijjah · first 10 blessed days</div>
                </div>
              </div>
              {amals.length > 0 && (
                <div className="relative mx-4 mt-2.5 flex flex-wrap gap-1.5">
                  {amals.map((a, i) => {
                    const IconC = ActiveAmalIcon(a.icon);
                    return (
                      <span key={i} className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9.5px] font-semibold"
                        style={{ background: "rgba(255,255,255,0.08)", color: GOLD_SOFT, boxShadow: `inset 0 0 0 1px ${GOLD}33` }}>
                        <IconC className="h-2.5 w-2.5" /> {a.name}
                      </span>
                    );
                  })}
                </div>
              )}
              <div className="relative mx-4 mt-2 h-1 overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                <div className="h-full rounded-full"
                  style={{ width: `${Math.min(100, Math.round((progress.current / Math.max(1, progress.total)) * 100))}%`, background: `linear-gradient(90deg, ${GOLD_SOFT}, ${GOLD})` }} />
              </div>
              <div className="relative flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-1.5 text-[10px] text-white/70">
                  <Clock className="h-3 w-3" /> {progress.unit} {progress.current} of {progress.total} · {countdown}
                </div>
                <button className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold"
                  style={{ background: GOLD, color: NAVY }}>
                  {ctaLabel} <ArrowRight className="h-3 w-3" />
                </button>
              </div>
              <div className="relative flex items-center justify-between border-t border-white/10 px-4 py-2 text-[10px] text-white/70">
                <span className="inline-flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-rose-400" /> {stats.live} live</span>
                <span>Lifetime <b className="text-white">{stats.lifetime}</b></span>
                <span>{stats.joined} joined</span>
              </div>
            </div>

            {/* Mini swatch card (legacy compact preview) */}
            <div className={`mt-4 rounded-2xl bg-gradient-to-br ${activeColor} p-3 text-white shadow-sm`}>
              <div className="flex items-center gap-2">
                <ActiveIcon className="h-4 w-4" />
                <div className="bn text-[13px] font-extrabold leading-tight">জিলহজ্জ স্পেশাল</div>
              </div>
              <div className="text-[10px] opacity-90">Dhul Hijjah Special</div>
            </div>

            {/* Banner 400x90 preview (scaled) */}
            <div className="mt-4">
              <div className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">Banner · 400×90</div>
              <div className="overflow-hidden rounded-xl ring-1 ring-slate-200">
                <div
                  className="flex h-[90px] w-[400px] items-center gap-3 px-4 text-white"
                  style={{ background: `linear-gradient(135deg, ${NAVY}, #2A4F7A)`, maxWidth: "100%" }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/30">
                    <Crown className="h-6 w-6" style={{ color: GOLD }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] uppercase tracking-wider opacity-75">Sponsored by</div>
                    <div className="truncate text-[13px] font-extrabold">Bismillah Foundation</div>
                    <div className="truncate text-[10.5px] opacity-85">Top 3 split ৳15,000 weekly</div>
                  </div>
                  <button className="rounded-full px-3 py-1 text-[10.5px] font-bold" style={{ background: GOLD, color: NAVY }}>
                    Join
                  </button>
                </div>
              </div>
            </div>

            {/* Prize card preview */}
            <div className="mt-4 rounded-xl p-3 ring-1" style={{ background: `${GOLD_SOFT}30`, borderColor: GOLD, boxShadow: `inset 0 0 0 1px ${GOLD}` }}>
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4" style={{ color: NAVY }} />
                <div className="text-[12px] font-extrabold" style={{ color: NAVY }}>৳15,000 prize pool</div>
              </div>
              <div className="mt-1 text-[10.5px]" style={{ color: NAVY, opacity: 0.75 }}>
                Top 3 reciters · paid weekly via bKash
              </div>
            </div>
          </div>

          {/* ============== FULL PREVIEW — all fields populated ============== */}
          <div className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4" style={{ color: GOLD }} />
                <div className="text-sm font-bold text-slate-900">Full preview</div>
                <span className="rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                  style={{ background: `${GOLD}22`, color: NAVY }}>
                  All fields filled
                </span>
              </div>
              <span className="text-[10px] text-slate-400">As it appears in feed</span>
            </div>
            <div className="mb-2 text-[10.5px] text-slate-500">
              This is how the channel looks once every field above is completed and published.
            </div>

            {/* Hero card — full filled */}
            <div className="relative overflow-hidden rounded-2xl text-white shadow-[0_20px_50px_-18px_rgba(31,58,95,0.7)]"
              style={{ background: `linear-gradient(135deg, #0E1F3D 0%, ${NAVY} 50%, #2E1A0B 100%)` }}>
              {/* Motif */}
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-20" style={{ background: GOLD }} />
              <div className="absolute inset-0 opacity-30">
                <div className="absolute left-6 top-4 h-1 w-1 rounded-full bg-white" />
                <div className="absolute left-20 top-8 h-0.5 w-0.5 rounded-full bg-white" />
                <div className="absolute right-28 top-5 h-1 w-1 rounded-full bg-white" />
                <div className="absolute right-12 top-12 h-0.5 w-0.5 rounded-full bg-white" />
                <div className="absolute left-32 top-14 h-0.5 w-0.5 rounded-full bg-white" />
              </div>
              <div className="absolute left-0 top-0 h-full w-1.5" style={{ background: GOLD }} />

              {/* Tag */}
              <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                style={{ background: GOLD, color: NAVY }}>
                <ActiveIcon className="h-2.5 w-2.5" /> {tag}
              </div>

              {/* Header */}
              <div className="relative flex items-start gap-3 px-4 pt-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-lg"
                  style={{ background: `linear-gradient(135deg, ${GOLD}, ${GOLD_SOFT})` }}>
                  <ActiveIcon className="h-7 w-7" style={{ color: NAVY }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="bn text-[16px] font-extrabold leading-tight">জিলহজ্জ স্পেশাল</div>
                  <div className="text-[11px] font-semibold text-white/85">Dhul Hijjah Special</div>
                  <div className="mt-0.5 text-[13px] font-bold" style={{ color: GOLD_SOFT, fontFamily: "serif" }} dir="rtl">
                    سُبْحَانَ ٱللَّٰهِ
                  </div>
                </div>
              </div>

              {/* Amals */}
              <div className="relative mx-4 mt-3">
                <div className="mb-1 text-[8.5px] font-bold uppercase tracking-wider text-white/55">Daily amals</div>
                <div className="flex flex-wrap gap-1.5">
                  {amals.map((a, i) => {
                    const IconC = ActiveAmalIcon(a.icon);
                    return (
                      <span key={i} className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9.5px] font-semibold"
                        style={{ background: "rgba(255,255,255,0.08)", color: GOLD_SOFT, boxShadow: `inset 0 0 0 1px ${GOLD}44` }}>
                        <IconC className="h-2.5 w-2.5" /> {a.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Progress + schedule */}
              <div className="relative mx-4 mt-3">
                <div className="mb-1 flex items-center justify-between text-[9.5px] text-white/70">
                  <span>{progress.unit} {progress.current} of {progress.total}</span>
                  <span>{Math.round((progress.current / Math.max(1, progress.total)) * 100)}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                  <div className="h-full rounded-full"
                    style={{ width: `${Math.min(100, Math.round((progress.current / Math.max(1, progress.total)) * 100))}%`, background: `linear-gradient(90deg, ${GOLD_SOFT}, ${GOLD})` }} />
                </div>
              </div>

              {/* Schedule row */}
              <div className="relative mx-4 mt-2.5 grid grid-cols-3 gap-1.5 text-[9.5px]">
                <div className="rounded-lg px-2 py-1.5" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="text-white/55">Window</div>
                  <div className="font-bold text-white">3:00 AM — Fajr</div>
                </div>
                <div className="rounded-lg px-2 py-1.5" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="text-white/55">Recurrence</div>
                  <div className="font-bold capitalize text-white">{recurrence}</div>
                </div>
                <div className="rounded-lg px-2 py-1.5" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="text-white/55">Ends in</div>
                  <div className="font-bold text-white">{countdown}</div>
                </div>
              </div>

              {/* CTA */}
              <div className="relative flex items-center justify-between px-4 py-3 pt-3">
                <div className="flex items-center gap-1.5 text-[10px] text-white/70">
                  <Clock className="h-3 w-3" /> Live now · join anytime
                </div>
                <button className="inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-[11px] font-bold shadow"
                  style={{ background: GOLD, color: NAVY }}>
                  {ctaLabel} <ArrowRight className="h-3 w-3" />
                </button>
              </div>

              {/* Sponsor banner inline */}
              <div className="relative mx-3 mb-3 flex items-center gap-2 rounded-xl px-3 py-2"
                style={{ background: "rgba(255,255,255,0.08)", boxShadow: `inset 0 0 0 1px ${GOLD}33` }}>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15">
                  <Crown className="h-4 w-4" style={{ color: GOLD }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[8.5px] uppercase tracking-wider text-white/60">Sponsored by</div>
                  <div className="truncate text-[11px] font-extrabold text-white">Bismillah Foundation</div>
                </div>
                <div className="text-right">
                  <div className="text-[8.5px] uppercase tracking-wider text-white/60">Prize</div>
                  <div className="text-[11px] font-extrabold" style={{ color: GOLD }}>৳15,000</div>
                </div>
              </div>

              {/* Stats footer */}
              <div className="relative flex items-center justify-between border-t border-white/10 px-4 py-2 text-[10px] text-white/75">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400" />
                  <b className="text-white">{stats.live}</b> live
                </span>
                <span>Lifetime <b className="text-white">{stats.lifetime}</b></span>
                <span><b className="text-white">{stats.joined}</b> joined</span>
              </div>
            </div>

            {/* Summary chips — quick recap of what's configured */}
            <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
              <div className="rounded-lg bg-slate-50 p-2 ring-1 ring-slate-200">
                <div className="font-semibold text-slate-500">Layout</div>
                <div className="font-bold text-slate-900">{layout.toUpperCase()}</div>
              </div>
              <div className="rounded-lg bg-slate-50 p-2 ring-1 ring-slate-200">
                <div className="font-semibold text-slate-500">Icon</div>
                <div className="font-bold capitalize text-slate-900">{iconId}</div>
              </div>
              <div className="rounded-lg bg-slate-50 p-2 ring-1 ring-slate-200">
                <div className="font-semibold text-slate-500">Motif</div>
                <div className="font-bold capitalize text-slate-900">{motif}</div>
              </div>
              <div className="rounded-lg bg-slate-50 p-2 ring-1 ring-slate-200">
                <div className="font-semibold text-slate-500">Amals</div>
                <div className="font-bold text-slate-900">{amals.length} configured</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-4 text-[11px] text-slate-500 ring-1 ring-slate-200">
            <div className="mb-1 flex items-center gap-1.5 font-semibold text-slate-700">
              <ShieldCheck className="h-3.5 w-3.5" /> Channels are permanent
            </div>
            Once published, a channel cannot be deleted — only archived. Sponsor, prize & schedule can rotate per season.
          </div>
        </aside>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  H6CreateRoomV2 — phone sheet, channel-aware                       */
/* ================================================================== */

function H6CreateRoomV2() {
  const [selected, setSelected] = useState("Durood");
  const channels = CHANNELS.slice(0, 4);

  return (
    <div className="relative flex h-full flex-col">
      <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${NAVY}cc, #0F172Acc)` }} />
      <div className="relative mt-auto rounded-t-3xl bg-white p-4 shadow-2xl">
        <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-slate-200" />
        <div className="mb-1 text-center text-[14px] font-extrabold text-slate-900">Create a room</div>
        <div className="mb-3 text-center text-[10px] text-slate-500">Pick a channel · invite people · start reciting</div>

        <div className="space-y-3">
          {/* Channel picker */}
          <div>
            <div className="mb-1 flex items-center justify-between">
              <div className="text-[9.5px] font-semibold uppercase tracking-wider text-slate-500">Channel</div>
              <div className="text-[9px] text-slate-400">Zikr is set by the channel</div>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {channels.map((c) => {
                const active = c.en === selected;
                return (
                  <button
                    key={c.en}
                    onClick={() => setSelected(c.en)}
                    className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${c.color} p-2 text-left text-white ${active ? "ring-2 ring-offset-1" : "opacity-80"}`}
                    style={active ? { boxShadow: `0 0 0 2px ${GOLD}` } : undefined}
                  >
                    <div className="bn text-[11px] font-extrabold leading-tight">{c.bn}</div>
                    <div className="text-[8.5px] opacity-90">{c.en} · {c.live} live</div>
                    {active && (
                      <CheckCircle2 className="absolute right-1 top-1 h-3.5 w-3.5" style={{ color: GOLD }} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Room name */}
          <div>
            <div className="mb-1 text-[9.5px] font-semibold uppercase tracking-wider text-slate-500">Room name</div>
            <div className="rounded-xl bg-slate-50 px-3 py-2 text-[12px] text-slate-800 ring-1 ring-slate-200">Family Circle</div>
          </div>

          {/* Privacy */}
          <div>
            <div className="mb-1 text-[9.5px] font-semibold uppercase tracking-wider text-slate-500">Privacy</div>
            <div className="grid grid-cols-3 gap-1.5 text-[10.5px] font-semibold">
              <div className="rounded-lg py-1.5 text-center text-white" style={{ background: NAVY }}>Private</div>
              <div className="rounded-lg bg-slate-100 py-1.5 text-center text-slate-600">Community</div>
              <div className="rounded-lg bg-slate-100 py-1.5 text-center text-slate-600">Public</div>
            </div>
          </div>

          {/* Locked channel chip — informational */}
          <div className="flex items-center gap-1.5 rounded-lg bg-slate-50 px-2.5 py-1.5 ring-1 ring-slate-200">
            <Lock className="h-3 w-3 text-slate-500" />
            <span className="text-[10px] text-slate-600">
              Room belongs to <b>{selected}</b> · zikr inherited from channel
            </span>
          </div>

          <button className="mt-1 w-full rounded-xl py-2.5 text-[12px] font-bold text-white" style={{ background: NAVY }}>
            Create room
          </button>
        </div>
      </div>
    </div>
  );
}
