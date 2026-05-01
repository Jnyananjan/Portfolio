import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8 font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest">
        <div className="text-center md:text-left space-y-2">
          <div>© 2024 JNYANANJAN — ALL RIGHTS RESERVED.</div>
          <div className="text-acid/60">HANDCRAFTED WITH PRECISION & CURIOSITY.</div>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <Link to="/contact" className="hover:text-acid transition-colors flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-acid" />
            contact.txt
          </Link>
          <a href="https://github.com/jnyananjan" target="_blank" rel="noreferrer" className="hover:text-acid transition-colors flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-acid" />
            github.io
          </a>
          <a href="https://linkedin.com/in/jnyananjan" target="_blank" rel="noreferrer" className="hover:text-acid transition-colors flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-acid" />
            linkedin.pro
          </a>
        </div>
      </div>
    </footer>
  );
}
