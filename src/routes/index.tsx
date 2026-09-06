import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Plus, Loader2 } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { HeroMock } from "@/components/site/HeroMock";
import { TrendingReels } from "@/components/site/TrendingReels";
import {
  Anatomy,
  Axes,
  Metrics,
  Myths,
  RankingSignals,
  WhoUses,
  WhyReels,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "instagram reels analyzer — reverse-engineer a viral reel | 2mv" },
      {
        name: "description",
        content:
          "paste any public reel url and get instagram reels analytics that go past views: hook device, promise beat, sendable moment and loop close.",
      },
      { property: "og:title", content: "instagram reels analyzer — 2mv" },
      {
        property: "og:description",
        content:
          "reverse-engineer a viral reel, frame by frame. hook, beats, sends and the reel you should film next.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [url, setUrl] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  const analyze = () => {
    if (state === "loading") return;
    setState("loading");
    setTimeout(() => setState("done"), 1600);
  };

  return (
    <div id="top" className="bg-shell">
      <Nav />

      <main className="overflow-hidden rounded-b-[40px] bg-surface-dark text-foreground">
        {/* hero */}
        <section className="mx-auto grid max-w-[1180px] items-center gap-14 px-6 pb-8 pt-36 lg:grid-cols-2 lg:pt-44">
          <div className="animate-fade-up">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>home</span>
              <span className="text-white/25">/</span>
              <span>ai video analyzer</span>
              <span className="text-white/25">/</span>
              <span className="text-foreground">instagram reels</span>
            </nav>

            <h1 className="text-balance-tight mt-6 text-[2.6rem] font-medium sm:text-[3.4rem]">
              instagram reels analyzer
              <span className="block text-muted-foreground">
                reverse-engineer a viral reel, frame by frame.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              paste any public reel url and get instagram reels analytics that go past views: the
              hook device, the promise beat, the sendable moment, the loop close — plus the reel you
              should film next.
            </p>

            <form
              id="analyze"
              onSubmit={(e) => {
                e.preventDefault();
                analyze();
              }}
              className="mt-9 flex max-w-xl items-center gap-3 rounded-full bg-white/[0.05] p-2 pl-3 ring-1 ring-line-dark transition-colors focus-within:ring-lime/60"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-muted-foreground">
                <Plus className="size-4" />
              </span>
              <input
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  setState("idle");
                }}
                placeholder="paste an instagram reel url — or just hit try"
                className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground sm:text-[15px]"
              />
              <button
                type="submit"
                className="group flex shrink-0 items-center gap-2 rounded-full bg-lime py-2 pl-5 pr-2 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
              >
                {state === "loading" ? "analyzing" : "try for free"}
                <span className="flex size-8 items-center justify-center rounded-full bg-ink text-lime">
                  {state === "loading" ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  )}
                </span>
              </button>
            </form>

            <p className="mt-3 text-sm text-muted-foreground">
              {state === "done"
                ? "queued — we'll decode the hook, beats and loop close of that reel."
                : "paste a public reel link, or add a video file"}
            </p>
          </div>

          <div className="animate-fade-up lg:pl-6">
            <HeroMock />
          </div>
        </section>

        <TrendingReels
          selected={url}
          onPick={(u) => {
            setUrl(u);
            setState("idle");
            document.getElementById("analyze")?.scrollIntoView({ block: "center" });
          }}
        />
        <div className="h-24" />
      </main>

      <WhyReels />
      <RankingSignals />

      <div className="rounded-[40px] bg-surface-dark">
        <Anatomy />
      </div>

      <Axes />

      <div className="rounded-[40px] bg-surface-dark">
        <Myths />
      </div>

      <Metrics />

      <WhoUses />
      <Footer />
    </div>
  );
}
