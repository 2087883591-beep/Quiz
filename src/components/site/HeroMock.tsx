import { useEffect, useState } from "react";

const beats = [
  { name: "hook", sub: "visual shock", time: "0–2s", w: 22 },
  { name: "setup", sub: "reaction stack", time: "2–6s", w: 44 },
  { name: "build", sub: "open loop", time: "6–12s", w: 66 },
  { name: "reveal", sub: "the payoff", time: "12–14s", w: 80 },
  { name: "climax", sub: "dopamine hit", time: "14–22s", w: 96 },
];

const chips = ["formula", "hook", "script", "triggers", "patterns", "…"];

export function HeroMock() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % beats.length), 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative rounded-[34px] bg-white/[0.04] p-3 ring-1 ring-line-dark">
      <div className="relative rounded-[26px] bg-surface-light p-5 pt-8 sm:p-8">
        {/* decoded chip */}
        <div className="absolute -top-1 left-4 z-20 rounded-2xl bg-white p-4 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.5)] sm:left-8">
          <div className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-lime" />
            <span className="eyebrow text-ink-muted">decoded</span>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-x-5 gap-y-1">
            {chips.map((c) => (
              <span key={c} className="text-xs text-ink/70">
                ✓ {c}
              </span>
            ))}
          </div>
        </div>

        {/* timeline panel */}
        <div className="relative mt-16 rounded-2xl bg-surface-dark p-5 ring-1 ring-white/5">
          <div className="flex items-center justify-between">
            <span className="text-xs tracking-wide text-muted-foreground">frame-by-frame</span>
            <span className="text-xs tabular-nums text-muted-foreground">0:22</span>
          </div>
          <div className="mt-4 space-y-3.5">
            {beats.map((b, i) => (
              <div key={b.name} className="grid grid-cols-[92px_1fr_auto] items-center gap-3">
                <div>
                  <div
                    className={`text-sm font-medium transition-colors ${
                      i === active ? "text-lime" : "text-foreground"
                    }`}
                  >
                    {b.name}
                  </div>
                  <div className="text-[11px] text-muted-foreground">{b.sub}</div>
                </div>
                <div className="h-[3px] overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full origin-left rounded-full transition-all duration-700 ${
                      i <= active ? "bg-lime/80" : "bg-white/25"
                    }`}
                    style={{ width: `${i <= active ? b.w : 12}%` }}
                  />
                </div>
                <span className="text-[11px] tabular-nums text-muted-foreground">{b.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* open loop callout */}
        <div className="animate-float-soft absolute -bottom-6 right-2 z-20 w-[230px] rounded-2xl bg-white p-4 shadow-[0_22px_50px_-20px_rgba(0,0,0,0.55)] sm:right-[-18px]">
          <span className="inline-block rounded-full bg-lime px-2.5 py-1 text-[11px] font-medium text-ink">
            open loop
          </span>
          <p className="mt-2 text-[13px] leading-snug text-ink/80">
            a <strong className="font-semibold text-ink">12s curiosity gap</strong> holds the scroll
            to the reveal.
          </p>
        </div>
      </div>
    </div>
  );
}
