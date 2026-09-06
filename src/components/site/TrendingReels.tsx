import { Play } from "lucide-react";
import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";
import reel4 from "@/assets/reel-4.jpg";

export type Reel = {
  handle: string;
  thumb: string;
  label: string;
  metric: string;
  note: string;
  url: string;
};

export const reels: Reel[] = [
  {
    handle: "radhika_merchant_9226",
    thumb: reel1,
    label: "most-viewed reel of the week",
    metric: "70m+ views",
    note: "single-frame hook, no intro card",
    url: "https://www.instagram.com/reel/DYCtgNFTemj/",
  },
  {
    handle: "instacoachmike",
    thumb: reel2,
    label: "growth breakdown reel",
    metric: "80m views / 6 months",
    note: "claim-first hook, sendable proof",
    url: "https://www.instagram.com/reel/DaQyBxSBJEY/",
  },
  {
    handle: "instacoachmike",
    thumb: reel3,
    label: "comment-trigger reel",
    metric: "30m+ views / 90 days",
    note: "comment-word cta drives replies",
    url: "https://www.instagram.com/reel/DZLOwn4BEjD/",
  },
  {
    handle: "natgeotravel",
    thumb: reel4,
    label: "travel aesthetic reel",
    metric: "121.1k views",
    note: "beauty frame loops back to frame 1",
    url: "https://www.instagram.com/reel/DXqL2p0Tabc/",
  },
];

export function TrendingReels({
  onPick,
  selected,
}: {
  onPick: (url: string) => void;
  selected: string;
}) {
  return (
    <section className="mx-auto mt-24 max-w-[1180px] px-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="eyebrow text-muted-foreground">trending reels right now</h2>
        <p className="text-sm text-muted-foreground">
          tap a reel to drop its url into the box above
        </p>
      </div>

      <div className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible">
        {reels.map((r) => {
          const isSelected = selected === r.url;
          return (
            <button
              key={r.url}
              type="button"
              onClick={() => onPick(r.url)}
              className={`group w-[260px] shrink-0 snap-start overflow-hidden rounded-3xl bg-surface-dark-2 text-left ring-1 transition-all duration-300 hover:-translate-y-1 lg:w-auto ${
                isSelected ? "ring-2 ring-lime" : "ring-line-dark hover:ring-white/25"
              }`}
            >
              <div className="relative aspect-[9/14] overflow-hidden">
                <img
                  src={r.thumb}
                  alt={`reel by ${r.handle}`}
                  loading="lazy"
                  width={576}
                  height={1024}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-0 flex items-center gap-2 bg-gradient-to-b from-black/70 to-transparent p-3">
                  <span className="size-7 rounded-full bg-white/25 ring-1 ring-white/40" />
                  <div className="min-w-0">
                    <div className="truncate text-xs font-medium text-white">{r.handle}</div>
                    <div className="text-[10px] text-white/70">Original audio</div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-black/35 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <Play className="size-6 fill-white text-white" />
                  </span>
                </div>
              </div>
              <div className="space-y-1.5 p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-sm font-medium text-foreground">{r.label}</span>
                </div>
                <div className="text-xs text-lime">{r.metric}</div>
                <p className="text-xs leading-relaxed text-muted-foreground">{r.note}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
