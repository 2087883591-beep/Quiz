import { ArrowUpRight } from "lucide-react";

const columns = [
  {
    title: "explore",
    links: [
      "service",
      "studio",
      "ai video analyzer",
      "instagram reels analyzer",
      "tiktok video analyzer",
      "youtube shorts analyzer",
      "tools",
      "blog",
    ],
  },
  { title: "connect", links: ["book a demo"] },
  { title: "legal", links: ["privacy policy", "terms of use"] },
];

export function Footer() {
  return (
    <footer className="bg-surface-dark px-6 pb-16 pt-20 text-foreground">
      <div className="mx-auto grid max-w-[1180px] gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <div>
          <div className="text-4xl font-semibold tracking-tight">2mv</div>
          <p className="mt-2 text-sm text-muted-foreground">from zero to millions of views.</p>

          <p className="mt-12 max-w-sm text-sm leading-relaxed text-foreground/80">
            newsletters for viral trends, go-to-market insights, and growth strategies.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-4 flex max-w-sm items-center gap-2 rounded-full bg-white/[0.06] p-1.5 pl-5 ring-1 ring-line-dark"
          >
            <input
              type="email"
              placeholder="enter your email"
              className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button className="group flex items-center gap-1.5 rounded-full bg-lime py-1.5 pl-4 pr-1.5 text-sm font-medium text-ink">
              join
              <span className="flex size-7 items-center justify-center rounded-full bg-ink text-lime">
                <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
              </span>
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <div className="eyebrow text-muted-foreground">{col.title}</div>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-sm text-foreground/80 transition-colors hover:text-lime"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-[1180px] border-t border-line-dark pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} 2mv. all rights reserved.
      </div>
    </footer>
  );
}
