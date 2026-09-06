import type { ReactNode } from "react";

/* ------------------------------ mock visuals ------------------------------ */

function MarketSignalsMock() {
  const bars = ["1.2m", "3.8m", "940k", "2.4m", "670k"];
  return (
    <div className="relative h-full w-full p-6">
      <div className="grid h-full grid-cols-5 items-end gap-3 opacity-70">
        {bars.map((b, i) => (
          <div key={b} className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-ink-muted">{b}</span>
            <div
              className={`w-full rounded-xl ${i % 2 ? "bg-lime" : "bg-ink/10"}`}
              style={{ height: `${40 + i * 22}px` }}
            />
          </div>
        ))}
      </div>

      <div className="absolute left-6 top-8 rounded-2xl bg-ink p-4 text-white shadow-xl">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/60">
          <span className="size-1.5 rounded-full bg-lime" /> watching now
        </div>
        <div className="mt-1 text-2xl font-medium">12,847</div>
        <div className="text-[11px] text-white/60">videos today · 500+ niches</div>
      </div>

      <div className="absolute bottom-16 right-5 w-[230px] rounded-2xl bg-white p-4 text-ink shadow-xl ring-1 ring-line-light">
        <p className="text-xs font-medium">nobody is talking about this savings trick</p>
        <p className="mt-1 text-[10px] text-ink-muted">@moneybymara · finance</p>
        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-full bg-lime px-2 py-0.5 text-[10px] font-medium text-ink">
            +412% · 24h
          </span>
          <span className="text-[10px] text-ink-muted">gaining traction</span>
        </div>
      </div>

      <div className="absolute bottom-5 left-6 flex gap-2 text-[10px] text-ink-muted">
        <span>tiktok</span>
        <span>·</span>
        <span>reels</span>
        <span>·</span>
        <span>shorts</span>
      </div>
    </div>
  );
}

const accounts = [
  ["s", "@glowbysasha", "+12%"],
  ["m", "@fitwithmax", "+5%"],
  ["i", "@modeirene", "+21%"],
  ["t", "@techtally", "+8%"],
];

function TargetTrackingMock() {
  return (
    <div className="relative h-full w-full p-6">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="size-56 rounded-full ring-1 ring-line-light" />
        <div className="absolute size-80 rounded-full ring-1 ring-line-light" />
      </div>

      {accounts.map(([i, h, v], k) => (
        <div
          key={h}
          className="absolute flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-lg ring-1 ring-line-light"
          style={{
            top: `${18 + k * 19}%`,
            left: k % 2 ? "auto" : `${8 + k * 6}%`,
            right: k % 2 ? `${6 + k * 5}%` : "auto",
          }}
        >
          <span className="flex size-5 items-center justify-center rounded-full bg-lime text-[10px] font-medium text-ink">
            {i}
          </span>
          <span className="text-[11px] text-ink">{h}</span>
          <span className="rounded-full bg-lime/40 px-1.5 text-[10px] text-ink">{v}</span>
        </div>
      ))}

      <div className="absolute bottom-6 left-6 w-[240px] rounded-2xl bg-white p-4 shadow-xl ring-1 ring-line-light">
        <div className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-full bg-lime text-[11px] font-medium text-ink">
            m
          </span>
          <span className="text-xs font-medium text-ink">@moneybymara</span>
          <span className="ml-auto rounded-full bg-ink/5 px-2 text-[10px] text-ink-muted">#1</span>
        </div>
        <p className="mt-1 text-[10px] text-ink-muted">finance · tiktok</p>
        <svg viewBox="0 0 120 30" className="mt-3 h-8 w-full">
          <path
            d="M0 26 L20 22 L40 24 L60 14 L80 16 L100 6 L120 2"
            fill="none"
            stroke="currentColor"
            className="text-ink"
            strokeWidth="2"
          />
        </svg>
        <div className="mt-2 flex justify-between text-[11px] text-ink">
          <span>
            5.1m <span className="text-ink-muted">avg views</span>
          </span>
          <span>
            +38% <span className="text-ink-muted">30d trend</span>
          </span>
        </div>
      </div>
    </div>
  );
}

const beats = [
  ["hook", "visual shock", "0–2s", 18],
  ["setup", "reaction stack", "2–6s", 30],
  ["build", "open loop", "6–12s", 55],
  ["reveal", "the payoff", "12–14s", 70],
  ["climax", "dopamine hit", "14–22s", 100],
] as const;

function ViralBreakdownMock() {
  return (
    <div className="relative h-full w-full p-6">
      <div className="absolute right-6 top-6 w-[62%] rounded-2xl bg-ink p-4 text-white shadow-xl">
        <div className="flex items-center justify-between text-[10px] text-white/60">
          <span>frame-by-frame</span>
          <span>0:22</span>
        </div>
        <div className="mt-3 space-y-2">
          {beats.map(([n, d, t, w]) => (
            <div key={n} className="flex items-center gap-3">
              <span className="w-14 text-[11px] capitalize">{n}</span>
              <span className="flex-1">
                <span
                  className="block h-1.5 rounded-full bg-lime"
                  style={{ width: `${w}%` }}
                />
                <span className="mt-1 block text-[9px] text-white/45">{d}</span>
              </span>
              <span className="w-12 text-right text-[9px] text-white/45">{t}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-5 top-24 w-[210px] rounded-2xl bg-white p-4 shadow-xl ring-1 ring-line-light">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-ink-muted">
          <span className="size-1.5 rounded-full bg-lime" /> decoded
        </div>
        <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-[11px] text-ink">
          {["formula", "hook", "script", "triggers", "patterns", "…"].map((x) => (
            <span key={x} className="flex items-center gap-1.5">
              <span className="text-lime">✓</span> {x}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-10 w-[230px] rounded-2xl bg-lime p-4 text-ink shadow-xl">
        <p className="text-xs font-medium">open loop</p>
        <p className="mt-1 text-[11px] leading-snug">
          12s curiosity gap holds the scroll to the reveal.
        </p>
      </div>
    </div>
  );
}

function ContentPatternsMock() {
  return (
    <div className="relative h-full w-full p-6">
      <div className="absolute right-8 top-6 w-[55%] rounded-2xl bg-white p-4 shadow-xl ring-1 ring-line-light">
        <div className="flex items-center justify-between text-[10px] text-ink-muted">
          <span>opportunity matrix</span>
          <span>18 patterns</span>
        </div>
        <div className="relative mt-3 h-28 rounded-xl bg-surface-light-2 ring-1 ring-line-light">
          <div className="absolute left-2 top-2 h-10 w-16 rounded-lg bg-lime/70" />
          {[
            [70, 20],
            [45, 60],
            [80, 70],
            [30, 40],
            [60, 35],
          ].map(([l, t]) => (
            <span
              key={`${l}-${t}`}
              className="absolute size-2 rounded-full bg-ink/20"
              style={{ left: `${l}%`, top: `${t}%` }}
            />
          ))}
          <span className="absolute right-3 top-4 rounded-lg bg-ink px-2 py-1 text-[10px] text-white">
            8.2m avg views
          </span>
        </div>
        <div className="mt-2 flex justify-between text-[9px] uppercase tracking-widest text-ink-muted">
          <span>potential</span>
          <span>competition</span>
        </div>
      </div>

      <div className="absolute bottom-6 left-5 w-[260px] rounded-2xl bg-white p-4 shadow-xl ring-1 ring-line-light">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[10px] text-ink-muted">#2</span>
          <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[10px] text-ink-muted">
            low competition
          </span>
        </div>
        <span className="mt-2 inline-block rounded-md bg-lime px-2 py-0.5 text-[10px] font-medium text-ink">
          recommended
        </span>
        <p className="mt-2 text-xs font-medium text-ink">birth chart placement breakdowns</p>
        <p className="mt-1 text-[11px] text-ink">
          8.2m <span className="text-ink-muted">avg views · 38 videos · 24 creators</span>
        </p>
        <div className="mt-3 grid grid-cols-4 gap-2 text-center">
          {[
            ["like", "6.4%"],
            ["cmnt", "2.1%"],
            ["share", "1.4%"],
            ["save", "4.1%"],
          ].map(([a, b]) => (
            <span key={a} className="rounded-lg bg-surface-light-2 py-1.5">
              <span className="block text-[9px] text-ink-muted">{a}</span>
              <span className="block text-[11px] text-ink">{b}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-24 right-8 rounded-2xl bg-ink p-3 text-white shadow-xl">
        <div className="flex items-center gap-1.5 text-[10px] text-white/60">
          <span className="size-1.5 rounded-full bg-lime" /> cluster #2
        </div>
        <div className="mt-2 flex gap-1.5 text-[11px]">
          {["42m", "12m", "5.2m", "+35"].map((x) => (
            <span key={x} className="rounded-md bg-white/10 px-2 py-1">
              {x}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlaybookMock() {
  return (
    <div className="relative h-full w-full p-6">
      <div className="absolute inset-x-8 top-6 rounded-2xl bg-ink p-5 text-white shadow-xl">
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/60">your playbook</span>
          <span className="rounded-full bg-lime px-2.5 py-0.5 text-[10px] font-medium text-ink">
            ready to execute
          </span>
        </div>
        <p className="mt-4 text-[10px] uppercase tracking-widest text-white/45">hook</p>
        <p className="mt-1 text-sm leading-snug">
          “nobody tells you this about your skin barrier…”
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-white/[0.06] p-3">
            <p className="text-[10px] uppercase tracking-widest text-lime">do this</p>
            <ul className="mt-2 space-y-1 text-[11px] text-white/80">
              <li>reaction-first hook in frame one</li>
              <li>before &amp; after reveal by 0:03</li>
              <li>text-heavy, save-able carousel</li>
            </ul>
          </div>
          <div className="rounded-xl bg-white/[0.06] p-3">
            <p className="text-[10px] uppercase tracking-widest text-white/45">avoid this</p>
            <ul className="mt-2 space-y-1 text-[11px] text-white/55 line-through">
              <li>generic “hi guys” intro</li>
              <li>long verbal setup up front</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-8 w-[240px] rounded-2xl bg-white p-4 shadow-xl ring-1 ring-line-light">
        <p className="text-[10px] uppercase tracking-widest text-ink-muted">scorecard</p>
        <div className="mt-3 space-y-2">
          {[
            ["view potential", 5],
            ["beginner friendly", 4],
            ["brand fit", 5],
          ].map(([label, v]) => (
            <div key={label as string} className="flex items-center gap-2">
              <span className="w-28 text-[11px] text-ink">{label}</span>
              <span className="flex flex-1 gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <span
                    key={n}
                    className={`h-1.5 flex-1 rounded-full ${n <= (v as number) ? "bg-lime" : "bg-ink/10"}`}
                  />
                ))}
              </span>
              <span className="text-[10px] text-ink-muted">{v as number}/5</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 right-8 rounded-2xl bg-lime px-4 py-3 text-ink shadow-xl">
        <p className="text-[10px] uppercase tracking-widest">projected performance</p>
        <p className="text-2xl font-medium">top 8%</p>
      </div>
    </div>
  );
}

/* -------------------------------- section -------------------------------- */

const blocks: {
  n: string;
  eyebrow: string;
  title: ReactNode;
  body: string;
  chips: string[];
  visual: ReactNode;
}[] = [
  {
    n: "01",
    eyebrow: "market signals",
    title: (
      <>
        stop doomscrolling.
        <br />
        2mv watches for you.
      </>
    ),
    body: "2mv watches tens of thousands of viral videos across tiktok, reels, and youtube shorts daily, so you're always plugged into what's gaining traction in your niche.",
    chips: ["12,000+ videos daily", "cross-platform", "500+ niches", "self-updated"],
    visual: <MarketSignalsMock />,
  },
  {
    n: "02",
    eyebrow: "target tracking",
    title: (
      <>
        every account &amp; signal.
        <br />
        in one place.
      </>
    ),
    body: "while you focus on your business, 2mv tracks and analyses every account that matters in your space, surfacing every move in real time.",
    chips: [
      "post performance",
      "engagement data",
      "account trajectory",
      "rising outliers",
      "unified view",
      "auto-updated",
    ],
    visual: <TargetTrackingMock />,
  },
  {
    n: "03",
    eyebrow: "viral breakdown",
    title: (
      <>
        no more guessing.
        <br />
        know why it went viral.
      </>
    ),
    body: "a frame-by-frame breakdown of every viral video, revealing the formula, hook, structure, script, triggers, and more behind millions of views.",
    chips: [
      "data-driven",
      "outcome-proven",
      "multi-dimensional",
      "backed by scale",
      "ready to use",
      "frame-by-frame",
    ],
    visual: <ViralBreakdownMock />,
  },
  {
    n: "04",
    eyebrow: "content patterns",
    title: (
      <>
        access to patterns
        <br />
        that perform.
      </>
    ),
    body: "2mv clusters top videos into viral patterns, ranked by competition and growth potential, so you know exactly where to focus and win.",
    chips: [
      "repeated patterns",
      "trending summary",
      "visual & bgm grouping",
      "virality potential",
    ],
    visual: <ContentPatternsMock />,
  },
  {
    n: "05",
    eyebrow: "viral playbook",
    title: (
      <>
        dedicated playbook,
        <br />
        ready to go viral.
      </>
    ),
    body: "real-time signals, viral breakdowns, and proven patterns become a dedicated content strategy, ready to execute for your next viral hit.",
    chips: [
      "views explode",
      "followers skyrocket",
      "engagement soars",
      "conversions surge",
      "production costs drop",
    ],
    visual: <PlaybookMock />,
  },
];

export function BringsYou() {
  return (
    <section className="bg-surface-light px-6 py-24 text-ink">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-balance-tight text-4xl font-medium sm:text-5xl">
            <span className="text-ink-muted">2mv</span> studio
            <br />
            brings you
          </h2>
          <p className="max-w-sm text-base leading-relaxed text-ink-muted">
            five connected views turn the noise of short-form video into a clear next move.
          </p>
        </div>

        <div className="mt-20 space-y-24">
          {blocks.map((b, i) => (
            <div
              key={b.n}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div className={i % 2 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 text-xs text-ink-muted">
                  <span>{b.n}</span>
                  <span className="h-px w-6 bg-line-light" />
                  <span className="tracking-widest">{b.eyebrow}</span>
                </div>
                <h3 className="text-balance-tight mt-5 text-3xl font-medium sm:text-4xl">
                  {b.title}
                </h3>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink-muted sm:text-base">
                  {b.body}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {b.chips.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-surface-light-2 px-3 py-1.5 text-xs text-ink-muted ring-1 ring-line-light"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`h-[420px] overflow-hidden rounded-[32px] bg-surface-light-2 ring-1 ring-line-light ${
                  i % 2 ? "lg:order-1" : ""
                }`}
              >
                {b.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
