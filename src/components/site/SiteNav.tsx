import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/certificates", label: "Certs" },
  { to: "/gallery", label: "Photos" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ── Top bar (fixed, z-index 900) ── */}
      <header
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100000 }}
        className="border-b border-border/50 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1 sm:gap-2 font-mono text-xs sm:text-sm whitespace-nowrap overflow-visible"
            onClick={() => setOpen(false)}
          >
            <span className="w-2 h-2 rounded-full bg-acid acid-glow block shrink-0" />
            <span className="text-foreground shrink-0">jnyananjan</span>
            <span className="text-muted-foreground shrink-0">@root:~$</span>
            <span className="text-acid cursor-blink shrink-0">_</span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-acid" }}
                className="hover:text-acid transition-colors"
              >
                /{l.label.toLowerCase()}
              </Link>
            ))}
          </nav>

          {/* Hamburger button */}
          <div
            className="md:hidden relative flex items-center justify-center w-12 h-12 cursor-pointer shrink-0"
            style={{
              zIndex: 100001,
              color: "var(--foreground)",
              WebkitTapHighlightColor: "transparent",
            }}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div
          id="mobile-nav-overlay"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            backgroundColor: "var(--background)",
            display: "flex",
            flexDirection: "column",
            paddingTop: "5rem",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            overflowY: "auto",
          }}
        >
          <div
            className="grid-bg"
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.1,
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "0.25rem", marginTop: "1.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--acid)",
                textTransform: "uppercase",
                letterSpacing: "0.3em",
                marginBottom: "1.5rem",
              }}
            >
              // navigation_matrix
            </p>
            {LINKS.map((l) => (
              <div key={l.to} style={{ marginBottom: "0.25rem" }}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: true }}
                  activeProps={{ style: { color: "var(--acid)" } }}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.3em",
                    fontSize: "1.15rem",
                    lineHeight: "2.5",
                    color: "var(--muted-foreground)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                >
                  /{l.label.toLowerCase()}
                </Link>
              </div>
            ))}
          </div>

          <div
            style={{
              position: "relative",
              marginTop: "auto",
              paddingBottom: "2.5rem",
              borderTop: "1px solid color-mix(in oklab, var(--border) 40%, transparent)",
              paddingTop: "1.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--muted-foreground)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  borderRadius: "9999px",
                  backgroundColor: "var(--acid)",
                }}
              />
              © 2024 Jnyananjan
            </span>
          </div>
        </div>
      )}
    </>
  );
}
