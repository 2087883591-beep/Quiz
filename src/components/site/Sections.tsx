import { useState } from "react";

function Eyebrow({ children, dark }: { children: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs ring-1 ${
        dark
          ? "bg-white/[0.04] text-muted-foreground ring-line-dark"
          : "bg-white text-ink-muted ring-line-light"
      }`}
    >
      <span className="size-1.5 rounded-full bg-lime" />
      {children}
    </span>
  );
}

/* ------------------------------ why reels ------------------------------ */

const whyItems = [
  {
    n: "01",
    title: "sends are the loudest signal.",
    body: "reels distribution in 2026 leans hard on shares to dms and stories. a reel that gets forwarded travels further than a reel that only gets liked — so the analyzer looks for the sendable moment, not just the hook.",
  },
  {
    n: "02",
    title: "replays beat run time.",
    body: "watch time counts replays, and a tight loop can push a 9-second reel past a 45-second one. the breakdown maps where the edit closes back on itself and whether the last frame invites a second pass.",
  },
  {
    n: "03",
    title: "reels is its own ranking system.",
    body: "feed, stories, explore and reels rank separately. follower count matters less here than early engagement velocity and original audio, which is why small accounts still break out.",
  },
];

export function WhyReels() {
  return (
    <section className="bg-surface-light px-6 py-24 text-ink">
      <div className="mx-auto max-w-[1180px]">
        <Eyebrow>why reels are different</Eyebrow>
        <h2 className="text-balance-tight mt-6 max-w-3xl text-4xl font-medium sm:text-5xl">
          a reel is not a short vertical tiktok.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
          the same footage performs differently on reels because the ranking system rewards
          different behaviour. the analyzer reads a reel against reels mechanics, not generic
          short-form rules.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {whyItems.map((it) => (
            <article
              key={it.n}
              className="rounded-3xl bg-surface-light-2 p-6 ring-1 ring-line-light transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-lime text-xs font-medium text-ink">
                {it.n}
              </span>
              <h3 className="mt-5 text-lg font-medium leading-snug">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- ranking signals --------------------------- */

const signals = [
  {
    s: "sends & shares",
    w: "top-tier",
    d: "the analyzer names the shareable payload — the fact, the punchline, the location, the visual receipt someone forwards to a friend.",
  },
  {
    s: "watch time + replays",
    w: "top-tier",
    d: "beat map of where attention is likely to drop, and whether the loop closes cleanly enough to earn a replay.",
  },
  {
    s: "early engagement velocity",
    w: "high",
    d: "how fast the opening earns a reaction: comment bait, on-screen question, incomplete statement in the first 1.5 seconds.",
  },
  {
    s: "saves",
    w: "high",
    d: "does the reel carry reference value — a list, a route, a price, a step sequence worth keeping.",
  },
  {
    s: "original audio",
    w: "medium",
    d: "whether the audio is original or borrowed, and how voice, sfx and music sit against the cut rhythm.",
  },
  {
    s: "comments & replies",
    w: "medium",
    d: "the disagreement or gap the reel leaves open on purpose, mapped to the frame where it lands.",
  },
  {
    s: "caption & on-screen text",
    w: "supporting",
    d: "text hierarchy, timing, reveal order — and how the caption extends rather than repeats the visual.",
  },
];

const weightStyle: Record<string, string> = {
  "top-tier": "bg-lime text-ink",
  high: "bg-ink text-white",
  medium: "bg-ink/10 text-ink",
  supporting: "bg-transparent text-ink-muted ring-1 ring-line-light",
};

export function RankingSignals() {
  return (
    <section className="bg-surface-light px-6 pb-24 text-ink">
      <div className="mx-auto max-w-[1180px]">
        <Eyebrow>ranking signals</Eyebrow>
        <h2 className="text-balance-tight mt-6 max-w-3xl text-4xl font-medium sm:text-5xl">
          what the reels system weighs — and how 2mv reads it inside the frames.
        </h2>

        <div className="mt-10 overflow-hidden rounded-3xl bg-surface-light-2 ring-1 ring-line-light">
          <div className="hidden grid-cols-[1.1fr_0.6fr_2fr] gap-6 border-b border-line-light px-7 py-4 text-xs uppercase tracking-widest text-ink-muted md:grid">
            <span>signal</span>
            <span>weight</span>
            <span>how the analyzer reads it</span>
          </div>
          {signals.map((row) => (
            <div
              key={row.s}
              className="grid gap-2 border-b border-line-light px-7 py-6 transition-colors last:border-0 hover:bg-surface-light md:grid-cols-[1.1fr_0.6fr_2fr] md:gap-6"
            >
              <span className="text-[15px] font-medium">{row.s}</span>
              <span>
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${weightStyle[row.w]}`}
                >
                  {row.w}
                </span>
              </span>
              <p className="text-sm leading-relaxed text-ink-muted">{row.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- anatomy ------------------------------- */

const anatomy = [
  {
    t: "0.0 – 1.0s",
    n: "01",
    title: "scroll stop",
    body: "one visual with no setup, usually mid-motion. no logo, no intro, no slow pan. the analyzer identifies the device used and whether the first frame reads at thumbnail size.",
  },
  {
    t: "1.0 – 3.0s",
    n: "02",
    title: "promise",
    body: "the reel states what the viewer gets if they stay. spoken, on-screen, or implied by a visible countdown of items. missing this beat is the most common reason a reel stalls.",
  },
  {
    t: "3.0 – 8.0s",
    n: "03",
    title: "escalation",
    body: "cut rhythm tightens, each shot adds new information. the breakdown flags any shot that repeats what the previous one already said.",
  },
  {
    t: "8s – end",
    n: "04",
    title: "payoff",
    body: "the reveal, the number, the transformation. this is the frame most likely to trigger a send, and it gets timed against the run length.",
  },
  {
    t: "last 0.5s",
    n: "05",
    title: "loop close",
    body: "the final frame either matches the opening frame — making the replay invisible — or it hard-stops. the analyzer scores which one the edit chose.",
  },
];

export function Anatomy() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-surface-dark px-6 py-24 text-foreground">
      <div className="mx-auto max-w-[1180px]">
        <Eyebrow dark>anatomy of a viral reel</Eyebrow>
        <h2 className="text-balance-tight mt-6 max-w-3xl text-4xl font-medium sm:text-5xl">
          five beats decide whether a reel travels.
        </h2>

        <div className="mt-10 divide-y divide-line-dark border-y border-line-dark">
          {anatomy.map((b, i) => {
            const isOpen = open === i;
            return (
              <button
                key={b.n}
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="grid w-full grid-cols-[88px_1fr] items-start gap-4 py-6 text-left sm:grid-cols-[140px_1fr] sm:gap-8"
              >
                <span
                  className={`text-xs tabular-nums transition-colors ${isOpen ? "text-lime" : "text-muted-foreground"}`}
                >
                  {b.t}
                </span>
                <span>
                  <span className="flex items-baseline gap-3">
                    <span className="text-xs text-muted-foreground">{b.n}</span>
                    <span className="text-xl font-medium sm:text-2xl">{b.title}</span>
                  </span>
                  <span
                    className={`grid transition-all duration-500 ${
                      isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <span className="overflow-hidden">
                      <span className="block max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {b.body}
                      </span>
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- 8 axes -------------------------------- */

const axes = [
  ["01", "topic", "which subjects are actually pulling views in your niche right now."],
  ["02", "hook", "the first-seconds device, phrasing and framing that stops the scroll."],
  ["03", "pattern", "the repeatable structure a format follows from open to payoff."],
  ["04", "content flow", "beat-level pacing: where tension builds, holds and releases."],
  ["05", "visuals", "shot composition, motion, on-screen text and visual density."],
  ["06", "audio & music", "track choice, sound design and how audio drives retention."],
  ["07", "viewer psychology", "the mechanism doing the work, curiosity gap, status, relief, proof."],
  ["08", "audience profile", "who the video is actually landing with, and why it resonates."],
];

export function Axes() {
  return (
    <section className="bg-surface-light px-6 py-24 text-ink">
      <div className="mx-auto max-w-[1180px]">
        <Eyebrow>what it analyzes</Eyebrow>
        <h2 className="text-balance-tight mt-6 max-w-3xl text-4xl font-medium sm:text-5xl">
          every viral video breakdown runs on eight axes.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
          each axis returns an analysis, a recommendation and production guidance — so the output
          reads like a brief, not a report.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {axes.map(([n, title, body]) => (
            <article
              key={n}
              className="group rounded-3xl bg-surface-light-2 p-6 ring-1 ring-line-light transition-all duration-300 hover:-translate-y-1 hover:bg-ink"
            >
              <span className="text-xs text-ink-muted transition-colors group-hover:text-lime">
                {n}
              </span>
              <h3 className="mt-6 text-lg font-medium transition-colors group-hover:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted transition-colors group-hover:text-white/70">
                {body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- myths -------------------------------- */

const myths = [
  [
    "there is one best time to post reels.",
    "reels are distributed by recommendation, not chronology. a strong reel keeps accumulating reach for days; timing shifts the first hour, not the ceiling.",
  ],
  [
    "hashtags decide reach.",
    "hashtags are weak topic hints. the content signal — what is actually in the frames and audio — carries far more weight.",
  ],
  [
    "you need followers to break out.",
    "the reels system tests content against non-followers first. early watch time and sends decide expansion, which is why accounts under 1k still hit millions.",
  ],
  [
    "longer reels get suppressed.",
    "length is not penalised — unfinished watch time is. a 60-second reel that holds beats a 12-second reel people swipe past.",
  ],
  [
    "deleting a low-view reel helps the account.",
    "there is no account-level punishment to undo. each reel is tested largely on its own merits.",
  ],
];

export function Myths() {
  return (
    <section className="bg-surface-dark px-6 py-24 text-foreground">
      <div className="mx-auto max-w-[1180px]">
        <Eyebrow dark>myths vs data</Eyebrow>
        <h2 className="text-balance-tight mt-6 max-w-3xl text-4xl font-medium sm:text-5xl">
          most reels advice is describing an algorithm that no longer exists.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {myths.map(([m, d]) => (
            <article
              key={m}
              className="rounded-3xl bg-white/[0.04] p-6 ring-1 ring-line-dark transition-colors hover:bg-white/[0.07]"
            >
              <div className="flex gap-3">
                <span className="text-muted-foreground">×</span>
                <span className="text-base font-medium text-muted-foreground line-through decoration-white/25">
                  {m}
                </span>
              </div>
              <div className="mt-4 flex gap-3">
                <span className="text-lime">✓</span>
                <p className="text-sm leading-relaxed text-foreground/85">{d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- metrics ------------------------------- */

const metrics = [
  [
    "views / plays",
    "how many times the reel started playing, replays included.",
    "a volume number only. never read it without watch time next to it.",
  ],
  [
    "reach vs views",
    "unique accounts vs total plays.",
    "views far above reach means people replayed — your loop is working.",
  ],
  [
    "average watch time",
    "seconds held per play against run length.",
    "the retention truth. under 40% of run length points at a broken promise beat.",
  ],
  [
    "sends per reach",
    "shares to dms and stories, normalised.",
    "the single best predictor of expansion. optimise the payoff frame for it.",
  ],
  [
    "saves per reach",
    "how often the reel got kept.",
    "signals reference value. high saves with low sends means useful but not social.",
  ],
  [
    "follows from reel",
    "new follows attributed to the reel.",
    "tells you whether the reel sold the account or just the clip.",
  ],
];

export function Metrics() {
  return (
    <section className="bg-surface-light px-6 py-24 text-ink">
      <div className="mx-auto max-w-[1180px]">
        <Eyebrow>instagram reels analytics</Eyebrow>
        <h2 className="text-balance-tight mt-6 max-w-3xl text-4xl font-medium sm:text-5xl">
          which reels metrics actually mean something.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted">
          instagram insights covers your own account. read these six the right way, then use the
          analyzer to explain what caused them.
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl bg-surface-light-2 ring-1 ring-line-light">
          <div className="hidden grid-cols-3 gap-6 border-b border-line-light px-7 py-4 text-xs uppercase tracking-widest text-ink-muted md:grid">
            <span>metric</span>
            <span>what it means</span>
            <span>how to use it</span>
          </div>
          {metrics.map(([m, means, use]) => (
            <div
              key={m}
              className="grid gap-2 border-b border-line-light px-7 py-6 transition-colors last:border-0 hover:bg-surface-light md:grid-cols-3 md:gap-6"
            >
              <span className="text-[15px] font-medium">{m}</span>
              <p className="text-sm leading-relaxed text-ink-muted">{means}</p>
              <p className="text-sm leading-relaxed text-ink-muted">{use}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ who uses it ---------------------------- */

const who = [
  [
    "brand social teams",
    "turn a scroll session through your category's top reels into a brief your editors can shoot without a rewrite.",
  ],
  [
    "creators",
    "find the reels winning in your niche, then rebuild the structure — hook device, beat map, loop close — with your own footage.",
  ],
  [
    "agencies",
    "run the same reels teardown process across every client account instead of relying on one strategist's instinct.",
  ],
];

export function WhoUses() {
  return (
    <section className="bg-surface-dark px-6 pb-24 pt-24 text-foreground">
      <div className="mx-auto max-w-[1180px]">
        <Eyebrow dark>who uses it</Eyebrow>
        <h2 className="text-balance-tight mt-6 max-w-3xl text-4xl font-medium sm:text-5xl">
          for everyone deciding which reel to film next.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {who.map(([t, b]) => (
            <article
              key={t}
              className="rounded-3xl bg-white/[0.04] p-7 ring-1 ring-line-dark transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-medium">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
