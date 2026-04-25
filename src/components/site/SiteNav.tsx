import { Link } from "@tanstack/react-router";

const LINKS = [
  { to: "/", label: "/home" },
  { to: "/work", label: "/work" },
  { to: "/about", label: "/about" },
  { to: "/contact", label: "/contact" },
] as const;

export function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-mono text-sm">
          <div className="w-2 h-2 rounded-full bg-acid acid-glow" />
          <span className="text-foreground">builder</span>
          <span className="text-muted-foreground">@home:~$</span>
          <span className="text-acid cursor-blink">_</span>
        </Link>
        <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-acid" }}
              className="hover:text-acid transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
