import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "studio", to: "/studio" },
  { label: "tools", to: "/" },
  { label: "blog", to: "/" },
] as const;

export function Nav({
  active = "tools",
  cta = "book a demo",
  ctaHref = "#analyze",
}: {
  active?: "studio" | "tools" | "blog";
  cta?: string;
  ctaHref?: string;
}) {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3">
      <nav className="pointer-events-auto flex w-full max-w-[720px] items-center gap-2 rounded-full bg-surface-dark-2/85 p-2 pl-6 ring-1 ring-line-dark backdrop-blur-xl">
        <Link to="/" className="mr-auto text-xl font-semibold tracking-tight text-foreground">
          2mv
        </Link>
        <div className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                active === l.label
                  ? "bg-white/10 font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <a
          href={ctaHref}
          className="group flex items-center gap-2 rounded-full bg-foreground py-1.5 pl-5 pr-1.5 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
        >
          {cta}
          <span className="flex size-7 items-center justify-center rounded-full bg-ink text-foreground">
            <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
          </span>
        </a>
      </nav>
    </div>
  );
}
