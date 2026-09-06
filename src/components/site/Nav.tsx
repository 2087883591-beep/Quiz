import { ArrowUpRight } from "lucide-react";

export function Nav() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3">
      <nav className="pointer-events-auto flex w-full max-w-[720px] items-center gap-2 rounded-full bg-surface-dark-2/85 p-2 pl-6 backdrop-blur-xl ring-1 ring-line-dark">
        <a href="#top" className="mr-auto text-xl font-semibold tracking-tight text-foreground">
          2mv
        </a>
        <div className="hidden items-center gap-1 sm:flex">
          <a
            href="#top"
            className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            studio
          </a>
          <a
            href="#top"
            className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-foreground"
          >
            tools
          </a>
          <a
            href="#top"
            className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            blog
          </a>
        </div>
        <a
          href="#analyze"
          className="group flex items-center gap-2 rounded-full bg-foreground py-1.5 pl-5 pr-1.5 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
        >
          book a demo
          <span className="flex size-7 items-center justify-center rounded-full bg-ink text-foreground">
            <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
          </span>
        </a>
      </nav>
    </div>
  );
}
