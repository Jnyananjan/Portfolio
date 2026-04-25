import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-6 font-mono text-xs text-muted-foreground">
        <div>© Jnyananjan — running on caffeine & curiosity.</div>
        <div className="flex gap-6">
          <Link to="/contact" className="hover:text-acid flex items-center gap-2">
            <Mail className="w-4 h-4" /> contact
          </Link>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-acid flex items-center gap-2">
            <Github className="w-4 h-4" /> github
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-acid flex items-center gap-2">
            <Linkedin className="w-4 h-4" /> linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}
