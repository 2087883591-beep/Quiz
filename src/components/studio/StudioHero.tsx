import { useEffect, useState } from "react";
import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";

type Niche = {
  key: string;
  line: string;
  platform: string;
  img: string;
};

const niches: Niche[] = [
  { key: "pet care", line: "pet care stories make useful guidance feel personal", platform: "reels", img: reel4 },
  { key: "dating", line: "dating stories are turning lived experience into advice", platform: "tiktok", img: reel2 },
  { key: "travel", line: "travel creators are trading guides for lived-in diaries", platform: "tiktok", img: reel3 },
  { key: "language", line: "language learning is becoming a daily ritual", platform: "tiktok", img: reel1 },
  { key: "fitness", line: "fitness routines are becoming easier to follow every day", platform: "reels", img: reel2 },
  { key: "beauty", line: "beauty routines are shifting toward practical rituals", platform: "shorts", img: reel3 },
  { key: "body care", line: "body care is expanding into a complete daily ritual", platform: "reels", img: reel4 },
];

export function StudioHero() {
  const [active, setActive] = useState(3);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % niches.length), 3800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden px-6 pb-0 pt-36 text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-24 mx-auto h-72 max-w-3xl rounded-full bg-lime/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1180px] text-center">
        <h1 className="text-balance-tight text-[3rem] font-medium sm:text-[3.6rem]">2mv studio</h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          find, track, and decode viral videos across tiktok, instagram reels, and youtube shorts.
        </p>
      </div>

      {/* fanned card deck */}
      <div className="relative mt-14 flex h-[430px] items-end justify-center gap-2 sm:gap-3">
        {niches.map((n, i) => {
          const d = i - active;
          const isActive = d === 0;
          return (
            <button
              key={n.key}
              type="button"
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              style={{
                transform: `translateY(${Math.abs(d) * 16}px) rotate(${d * 5}deg)`,
                zIndex: 20 - Math.abs(d),
              }}
              className={`relative w-[150px] shrink-0 overflow-hidden rounded-[26px] text-left transition-all duration-500 ease-out sm:w-[190px] ${
                isActive
                  ? "h-[380px] ring-2 ring-lime"
                  : "h-[330px] opacity-70 ring-1 ring-line-dark hover:opacity-100"
              }`}
            >
              <img src={n.img} alt="" className="absolute inset-0 size-full object-cover" />
              <span className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-black/85" />
              <span className="absolute inset-x-4 top-4 flex items-center justify-between">
                <span className="text-xl font-medium text-white sm:text-2xl">{n.key}</span>
                {isActive && <span className="size-2 rounded-full bg-lime" />}
              </span>
              {isActive && (
                <span className="absolute inset-x-3 bottom-3 block rounded-2xl bg-black/60 p-3 backdrop-blur-md">
                  <span className="block text-[11px] leading-snug text-white/85">{n.line}</span>
                  <span className="mt-2 inline-block rounded-full bg-lime px-2.5 py-0.5 text-[10px] font-medium text-ink">
                    {n.platform}
                  </span>
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="relative z-30 mx-auto -mt-6 flex max-w-xl items-center gap-3 rounded-full bg-surface-dark-2/90 p-2 pl-5 ring-1 ring-line-dark backdrop-blur-xl">
        <span className="min-w-0 flex-1 truncate text-sm text-muted-foreground">
          what&apos;s trending in {niches[active]!.key}?
        </span>
        <a
          href="#pricing"
          className="shrink-0 rounded-full bg-lime px-5 py-2 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
        >
          start for free
        </a>
      </div>
    </section>
  );
}
