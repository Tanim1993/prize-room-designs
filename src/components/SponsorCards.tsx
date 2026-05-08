import { ArrowRight, Trophy, Users, Target, Clock, Sparkles, Crown, ShieldCheck } from "lucide-react";
import sponsorLogo from "@/assets/sponsor-logo.png";

const TITLE_BN = "সুবহানাল্লাহি ওয়া বিহামদিহী";
const SUB_BN = "সুবহানাল্লাহি ওয়া বিহামদিহী সুবহানাল্লাহিল আযীম — এই তাসবীহ পাঠে জান্নাতে খেজুর গাছ রোপিত হয়।";

function Logo({ size = 28 }: { size?: number }) {
  return (
    <img
      src={sponsorLogo}
      alt="Sponsor"
      className="rounded-full object-cover ring-1 ring-white/20"
      style={{ width: size, height: size }}
    />
  );
}

function Stat({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
      <Icon className="h-3.5 w-3.5" />
      <span className="font-medium">{label}</span>
    </div>
  );
}

/* ---------- VARIANT 1 — Clean minimal white ---------- */
function V1() {
  return (
    <div className="rounded-3xl bg-card p-5 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.15)] ring-1 ring-border/60">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Sponsored · <span className="text-ink">Wizlife</span>
        </span>
        <span className="rounded-full bg-navy-soft px-2 py-0.5 text-[10px] font-semibold text-navy">Prize Room</span>
      </div>
      <h3 className="bn mt-3 text-[18px] font-bold leading-snug text-ink">{TITLE_BN}</h3>
      <p className="bn mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">{SUB_BN}</p>

      <div className="mt-4 flex items-end justify-between rounded-2xl bg-navy-soft/70 px-4 py-3">
        <div>
          <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Total Prize</div>
          <div className="mt-0.5 text-xl font-extrabold text-navy">৳40,000</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Goal</div>
          <div className="mt-0.5 text-sm font-bold text-ink">100/day</div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Stat icon={Users} label="16" />
          <Stat icon={Clock} label="265d left" />
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white transition hover:bg-navy-deep">
          Join Now <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

/* ---------- VARIANT 2 — Premium navy + gold featured ---------- */
function V2() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-deep via-navy to-[oklch(0.22_0.09_270)] p-5 text-white shadow-[0_20px_40px_-20px_rgba(8,12,40,0.6)]">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />

      <div className="relative flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold ring-1 ring-gold/30">
          <Crown className="h-3 w-3" /> Featured
        </span>
        <div className="flex items-center gap-1.5 text-[11px] text-white/70">
          <Logo size={20} /> Wizlife
        </div>
      </div>

      <h3 className="bn relative mt-4 text-[20px] font-bold leading-snug">{TITLE_BN}</h3>
      <p className="bn relative mt-1.5 line-clamp-2 text-[12.5px] leading-relaxed text-white/65">{SUB_BN}</p>

      <div className="relative mt-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold to-gold-soft text-navy-deep shadow-md">
            <Trophy className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-[10px] uppercase tracking-wider text-white/50">Total Prize Pool</div>
            <div className="text-2xl font-extrabold tracking-tight text-gold-soft">৳40,000</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-wider text-white/50">Goal</div>
            <div className="text-sm font-bold">100/day</div>
          </div>
        </div>
      </div>

      <div className="relative mt-4 flex items-center justify-between">
        <div className="flex items-center gap-3 text-[11.5px] text-white/70">
          <span className="inline-flex items-center gap-1"><Users className="h-3.5 w-3.5" />16</span>
          <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />265d</span>
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-xs font-bold text-navy-deep shadow-lg shadow-gold/30 transition hover:brightness-105">
          Join Now <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

/* ---------- VARIANT 3 — Sponsor-first ---------- */
function V3() {
  return (
    <div className="overflow-hidden rounded-3xl bg-card shadow-[0_8px_24px_-12px_rgba(15,23,42,0.18)] ring-1 ring-border/60">
      <div className="flex items-center gap-3 bg-gradient-to-r from-navy to-navy-deep px-5 py-3.5 text-white">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/20">
          <ShieldCheck className="h-5 w-5 text-gold" />
        </div>
        <div className="flex-1">
          <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/60">Sponsored by</div>
          <div className="text-sm font-bold">Islamic Shop BD</div>
        </div>
        <Trophy className="h-4 w-4 text-gold" />
      </div>

      <div className="p-5">
        <h3 className="bn text-[18px] font-bold leading-snug text-ink">{TITLE_BN}</h3>
        <p className="bn mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">{SUB_BN}</p>

        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <div className="rounded-xl bg-navy-soft p-3">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Prize</div>
            <div className="text-lg font-extrabold text-navy">৳40,000</div>
          </div>
          <div className="rounded-xl bg-gold-soft/60 p-3">
            <div className="text-[10px] uppercase tracking-wider text-[oklch(0.45_0.1_75)]">Goal</div>
            <div className="text-lg font-extrabold text-[oklch(0.4_0.12_70)]">100/day</div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3.5">
          <div className="flex items-center gap-3">
            <Stat icon={Users} label="16 joined" />
            <Stat icon={Clock} label="265d" />
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white">
            Join Now <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- VARIANT 4 — Prize-first ---------- */
function V4() {
  return (
    <div className="overflow-hidden rounded-3xl bg-card shadow-[0_8px_24px_-12px_rgba(15,23,42,0.18)] ring-1 ring-border/60">
      <div className="relative flex items-center justify-between bg-gradient-to-br from-gold-soft via-[oklch(0.96_0.06_85)] to-white px-5 pb-5 pt-6">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[oklch(0.4_0.12_70)] ring-1 ring-gold/30">
            <Trophy className="h-3 w-3" /> Total Prize Pool
          </div>
          <div className="mt-2 text-[28px] font-black leading-none tracking-tight text-navy-deep">৳40,000</div>
          <div className="mt-1 text-[11px] font-medium text-navy/60">Goal · 100 zikr / day</div>
        </div>
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-gold to-[oklch(0.7_0.16_70)] text-white shadow-lg shadow-gold/30">
          <Trophy className="h-7 w-7" />
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-muted-foreground">Sponsored · <span className="font-semibold text-ink">Wizlife</span></span>
          <span className="rounded-full bg-navy-soft px-2 py-0.5 text-[10px] font-semibold text-navy">Prize Room</span>
        </div>
        <h3 className="bn mt-2.5 text-[18px] font-bold leading-snug text-ink">{TITLE_BN}</h3>
        <p className="bn mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">{SUB_BN}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Stat icon={Users} label="16" />
            <Stat icon={Target} label="100/day" />
            <Stat icon={Clock} label="265d" />
          </div>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white">
            Join <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- VARIANT 5 — Modern compact w/ badges ---------- */
function V5() {
  return (
    <div className="rounded-3xl bg-card p-4 shadow-[0_8px_20px_-12px_rgba(15,23,42,0.15)] ring-1 ring-border/60">
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="rounded-full bg-navy px-2 py-0.5 text-[10px] font-semibold text-white">Featured</span>
        <span className="rounded-full bg-gold-soft px-2 py-0.5 text-[10px] font-semibold text-[oklch(0.4_0.12_70)]">Exclusive</span>
        <span className="rounded-full bg-navy-soft px-2 py-0.5 text-[10px] font-semibold text-navy">Sponsored</span>
        <span className="ml-auto inline-flex items-center gap-1 text-[11px] text-muted-foreground">
          <Clock className="h-3 w-3" /> 265d
        </span>
      </div>

      <h3 className="bn mt-3 text-[17px] font-bold leading-snug text-ink">{TITLE_BN}</h3>

      <div className="mt-3 flex items-center gap-3 rounded-2xl border border-border/70 bg-background/50 px-3 py-2.5">
        <Trophy className="h-4 w-4 text-gold" />
        <div className="flex-1">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Prize</div>
          <div className="text-sm font-bold text-ink">৳40,000 · <span className="font-medium text-muted-foreground">100/day</span></div>
        </div>
        <button className="rounded-full bg-navy px-3 py-1.5 text-[11px] font-semibold text-white">Join →</button>
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Logo size={18} />
          <span>by <span className="font-semibold text-ink">WafiLife</span></span>
        </div>
        <span className="inline-flex items-center gap-1 text-muted-foreground">
          <Users className="h-3 w-3" /> 16 users
        </span>
      </div>
    </div>
  );
}

/* ---------- VARIANT 6 — Elegant high-trust ---------- */
function V6() {
  return (
    <div className="rounded-3xl bg-card p-5 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.2)] ring-1 ring-border/60">
      <div className="flex items-center gap-2.5">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-navy-soft ring-1 ring-navy/10">
          <ShieldCheck className="h-4 w-4 text-navy" />
        </div>
        <div className="flex-1">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Verified Sponsor</div>
          <div className="text-sm font-bold text-ink">Islamic Shop BD</div>
        </div>
        <span className="text-[10px] font-medium text-muted-foreground">Powered by <span className="font-semibold text-ink">Aa Sumaih</span></span>
      </div>

      <div className="my-4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <h3 className="bn text-[18px] font-bold leading-snug text-ink">{TITLE_BN}</h3>
      <p className="bn mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">{SUB_BN}</p>

      <div className="mt-4 flex items-center gap-4">
        <div className="flex-1">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Total Prize</div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-extrabold text-navy">৳40,000</span>
            <span className="text-[11px] font-medium text-gold">+ rewards</span>
          </div>
        </div>
        <div className="h-10 w-px bg-border" />
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Daily Goal</div>
          <div className="text-base font-bold text-ink">100<span className="text-xs font-medium text-muted-foreground">/day</span></div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Stat icon={Users} label="16 joined" />
          <Stat icon={Clock} label="265 days left" />
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white">
          Join Now <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

/* ---------- VARIANT 7 — Soft light w/ blue accents ---------- */
function V7() {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-navy-soft via-white to-navy-soft/50 p-5 shadow-[0_8px_24px_-14px_rgba(15,23,42,0.18)] ring-1 ring-navy/5">
      <div className="flex items-center justify-between text-[11px] text-navy/60">
        <span className="inline-flex items-center gap-1.5">
          <Sparkles className="h-3 w-3 text-navy" />
          Sponsored by <span className="font-semibold text-navy">Wizlife</span>
        </span>
        <span>265 days left</span>
      </div>

      <h3 className="bn mt-3 text-[18px] font-bold leading-snug text-navy-deep">{TITLE_BN}</h3>
      <p className="bn mt-1.5 line-clamp-2 text-[12.5px] leading-relaxed text-navy/60">{SUB_BN}</p>

      <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/80 p-3.5 ring-1 ring-navy/10 backdrop-blur">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-navy text-gold">
            <Trophy className="h-4 w-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Total Prize</div>
            <div className="text-lg font-extrabold text-navy-deep">৳40,000</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Goal</div>
          <div className="text-sm font-bold text-navy-deep">100/day</div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Stat icon={Users} label="16 joined" />
        <button className="inline-flex items-center gap-1.5 rounded-full bg-navy px-5 py-2 text-xs font-semibold text-white shadow-md shadow-navy/20">
          Join Now <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

/* ---------- VARIANT 8 — Bold high-prize featured ---------- */
function V8() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-navy-deep p-[1.5px] shadow-[0_24px_50px_-20px_rgba(8,12,40,0.55)]">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/40 via-transparent to-gold/30" />
      <div className="relative rounded-[calc(1.5rem-1.5px)] bg-gradient-to-b from-navy-deep to-[oklch(0.14_0.07_265)] p-5 text-white">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-gold to-[oklch(0.7_0.16_70)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-navy-deep">
            <Crown className="h-3 w-3" /> Mega Prize Room
          </span>
          <span className="text-[11px] text-white/50">265d left</span>
        </div>

        <div className="mt-5 text-center">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold/80">Total Prize Pool</div>
          <div className="mt-1 bg-gradient-to-b from-white to-gold-soft bg-clip-text text-[40px] font-black leading-none tracking-tight text-transparent">
            ৳40,000
          </div>
          <div className="mt-1.5 text-[11px] text-white/50">Daily goal · 100 zikr</div>
        </div>

        <h3 className="bn mt-5 text-center text-[16px] font-bold leading-snug">{TITLE_BN}</h3>

        <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/[0.04] px-4 py-2.5 ring-1 ring-white/10">
          <div className="flex items-center gap-2 text-[11px] text-white/70">
            <Logo size={20} />
            <span>by <span className="font-semibold text-white">WafiLife</span></span>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] text-white/60">
            <Users className="h-3 w-3" /> 16
          </span>
        </div>

        <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-gold to-[oklch(0.72_0.16_72)] py-3 text-sm font-bold text-navy-deep shadow-lg shadow-gold/25 transition hover:brightness-105">
          Join Now <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

/* ---------- SponsorBrand — prominent logo lockup ---------- */
function SponsorBrand({
  name = "Wizlife",
  tagline = "Halal Lifestyle Brand",
  tone = "light",
}: { name?: string; tagline?: string; tone?: "light" | "dark" }) {
  const isDark = tone === "dark";
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative h-11 w-11 overflow-hidden rounded-2xl bg-white shadow-md ring-2 ring-white/80">
        <img src={sponsorLogo} alt={name} className="h-full w-full object-cover" />
        <span className="absolute -bottom-1 -right-1 grid h-4 w-4 place-items-center rounded-full bg-navy text-gold ring-2 ring-white">
          <ShieldCheck className="h-2.5 w-2.5" />
        </span>
      </div>
      <div className="leading-tight">
        <div className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${isDark ? "text-white/55" : "text-muted-foreground"}`}>
          Sponsored by
        </div>
        <div className={`text-[14px] font-extrabold tracking-tight ${isDark ? "text-white" : "text-ink"}`}>
          {name}
        </div>
        <div className={`text-[10.5px] ${isDark ? "text-white/50" : "text-muted-foreground"}`}>{tagline}</div>
      </div>
    </div>
  );
}

/* ---------- VARIANT 9 — Logo-led trust card ---------- */
function V9() {
  return (
    <div className="rounded-3xl bg-card p-5 shadow-[0_10px_28px_-14px_rgba(15,23,42,0.18)] ring-1 ring-border/60">
      <div className="flex items-center justify-between">
        <SponsorBrand name="Wizlife" tagline="Halal Lifestyle Brand" />
        <span className="inline-flex items-center gap-1 rounded-full bg-navy-soft px-2 py-1 text-[10px] font-semibold text-navy">
          <ShieldCheck className="h-3 w-3" /> Verified
        </span>
      </div>

      <div className="my-4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <h3 className="bn text-[18px] font-bold leading-snug text-ink">{TITLE_BN}</h3>
      <p className="bn mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">{SUB_BN}</p>

      <div className="mt-4 flex items-end justify-between rounded-2xl bg-navy-soft/70 px-4 py-3">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Total Prize</div>
          <div className="text-xl font-extrabold text-navy">৳40,000</div>
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white">
          Join Now <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

/* ---------- VARIANT 10 — Sponsor banner header ---------- */
function V10() {
  return (
    <div className="overflow-hidden rounded-3xl bg-card shadow-[0_10px_28px_-14px_rgba(15,23,42,0.2)] ring-1 ring-border/60">
      <div className="relative flex items-center gap-3 bg-gradient-to-r from-navy-deep via-navy to-[oklch(0.3_0.09_268)] px-5 py-4">
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gold/15 to-transparent" />
        <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white shadow-lg ring-2 ring-gold/40">
          <img src={sponsorLogo} alt="Wizlife" className="h-full w-full object-cover" />
        </div>
        <div className="relative flex-1 text-white">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">Sponsored by</div>
          <div className="text-[15px] font-extrabold tracking-tight">Wizlife</div>
        </div>
        <span className="relative inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white ring-1 ring-white/15">
          <ShieldCheck className="h-3 w-3 text-gold" /> Verified
        </span>
      </div>

      <div className="p-5">
        <h3 className="bn text-[18px] font-bold leading-snug text-ink">{TITLE_BN}</h3>
        <p className="bn mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">{SUB_BN}</p>

        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <div className="rounded-xl bg-navy-soft p-3">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Prize</div>
            <div className="text-lg font-extrabold text-navy">৳40,000</div>
          </div>
          <div className="rounded-xl bg-gold-soft/60 p-3">
            <div className="text-[10px] uppercase tracking-wider text-[oklch(0.45_0.1_75)]">Goal</div>
            <div className="text-lg font-extrabold text-[oklch(0.4_0.12_70)]">100/day</div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3.5">
          <Stat icon={Users} label="16 joined · 265d left" />
          <button className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white">
            Join Now <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- VARIANT 11 — Premium dark with sponsor lockup ---------- */
function V11() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-deep via-navy to-[oklch(0.22_0.09_270)] p-5 text-white shadow-[0_22px_45px_-22px_rgba(8,12,40,0.6)]">
      <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gold/15 blur-3xl" />

      <div className="relative flex items-center justify-between">
        <SponsorBrand name="Wizlife" tagline="Halal Lifestyle Brand" tone="dark" />
        <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gold ring-1 ring-gold/30">
          <Crown className="h-3 w-3" /> Featured
        </span>
      </div>

      <h3 className="bn relative mt-4 text-[19px] font-bold leading-snug">{TITLE_BN}</h3>
      <p className="bn relative mt-1.5 line-clamp-2 text-[12.5px] leading-relaxed text-white/65">{SUB_BN}</p>

      <div className="relative mt-4 flex items-center justify-between rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur">
        <div>
          <div className="text-[10px] uppercase tracking-wider text-white/50">Total Prize Pool</div>
          <div className="text-2xl font-extrabold tracking-tight text-gold-soft">৳40,000</div>
          <div className="mt-0.5 text-[11px] text-white/55">Goal · 100 zikr / day</div>
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2.5 text-xs font-bold text-navy-deep shadow-lg shadow-gold/30">
          Join Now <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="relative mt-3 flex items-center justify-between text-[11px] text-white/55">
        <span className="inline-flex items-center gap-1"><Users className="h-3 w-3" /> 16 joined</span>
        <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> 265 days left</span>
      </div>
    </div>
  );
}

/* ---------- VARIANT 12 — Side logo emblem ---------- */
function V12() {
  return (
    <div className="flex overflow-hidden rounded-3xl bg-card shadow-[0_10px_28px_-14px_rgba(15,23,42,0.18)] ring-1 ring-border/60">
      <div className="flex w-[110px] flex-col items-center justify-center gap-2 bg-gradient-to-b from-navy-deep to-navy p-4 text-white">
        <div className="h-14 w-14 overflow-hidden rounded-2xl bg-white shadow-md ring-2 ring-gold/40">
          <img src={sponsorLogo} alt="Wizlife" className="h-full w-full object-cover" />
        </div>
        <div className="text-center leading-tight">
          <div className="text-[9px] font-semibold uppercase tracking-[0.14em] text-gold">Sponsor</div>
          <div className="text-[12px] font-extrabold">Wizlife</div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold text-white ring-1 ring-white/15">
          <ShieldCheck className="h-2.5 w-2.5 text-gold" /> Verified
        </span>
      </div>

      <div className="flex-1 p-4">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-gold-soft px-2 py-0.5 text-[10px] font-semibold text-[oklch(0.4_0.12_70)]">Prize Room</span>
          <span className="text-[11px] text-muted-foreground">265d left</span>
        </div>
        <h3 className="bn mt-2 line-clamp-2 text-[15.5px] font-bold leading-snug text-ink">{TITLE_BN}</h3>

        <div className="mt-3 flex items-end justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Total Prize</div>
            <div className="text-lg font-extrabold text-navy">৳40,000</div>
          </div>
          <button className="inline-flex items-center gap-1 rounded-full bg-navy px-3 py-1.5 text-[11px] font-semibold text-white">
            Join <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}

const VARIANTS = [
  { n: 1, title: "Clean Minimal White", desc: "Calm hierarchy, soft prize panel", C: V1 },
  { n: 2, title: "Premium Navy + Gold", desc: "Featured hero card with depth", C: V2 },
  { n: 3, title: "Sponsor-First", desc: "Trust band header, dual prize tiles", C: V3 },
  { n: 4, title: "Prize-First", desc: "Gold prize banner takes the stage", C: V4 },
  { n: 5, title: "Compact w/ Badges", desc: "Dense, badge-rich, list-friendly", C: V5 },
  { n: 6, title: "Elegant High-Trust", desc: "Verified sponsor, refined dividers", C: V6 },
  { n: 7, title: "Soft Light Blue", desc: "Airy, gentle navy accents", C: V7 },
  { n: 8, title: "Bold Mega Prize", desc: "Centered, high-conversion CTA", C: V8 },
  { n: 9, title: "Logo-Led Trust", desc: "Prominent sponsor lockup up top", C: V9 },
  { n: 10, title: "Sponsor Banner", desc: "Bold branded header strip", C: V10 },
  { n: 11, title: "Premium Dark + Brand", desc: "Sponsor lockup on dark hero", C: V11 },
  { n: 12, title: "Side Emblem", desc: "Vertical sponsor rail with logo", C: V12 },
];

export default function SponsorCards() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-navy-soft/40">
      {/* Bengali web font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap"
      />

      <header className="mx-auto max-w-7xl px-6 pb-6 pt-12">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy/70">
          <Sparkles className="h-3 w-3 text-gold" /> Design Exploration
        </div>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-navy-deep sm:text-4xl">
          Sponsored / Prize Room — Card Concepts
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Eight distinct directions for premium sponsored Zikr rooms. Each variant explores a different
          hierarchy, sponsor placement, and conversion treatment — all on a navy-friendly system with
          subtle gold accents.
        </p>
      </header>

      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {VARIANTS.map(({ n, title, desc, C }) => (
          <section key={n} className="flex flex-col gap-3">
            <div className="flex items-baseline justify-between">
              <div className="inline-flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-md bg-navy text-[11px] font-bold text-white">
                  {n}
                </span>
                <h2 className="text-sm font-bold text-ink">Variant {n}</h2>
              </div>
            </div>
            <C />
            <div className="px-1">
              <div className="text-[12px] font-semibold text-ink">{title}</div>
              <div className="text-[11.5px] text-muted-foreground">{desc}</div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
