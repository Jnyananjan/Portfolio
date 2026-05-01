import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CERTIFICATES } from "../data/certificates";
import { Award, ExternalLink, Calendar, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — Jnyananjan" },
      { name: "description", content: "Verified achievements and certifications in hardware and software." },
    ],
  }),
  component: CertificatesPage,
});

function Lightbox({ i, close, next, prev }: { i: number; close: () => void; next: () => void; prev: () => void }) {
  const item = CERTIFICATES[i];

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        close();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 110000,
        backgroundColor: "rgba(0, 0, 0, 0.98)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Close Button - positioned lower on mobile to avoid nav bar overlap */}
      <div
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); close(); }}
        style={{
          position: "absolute",
          top: "clamp(1rem, 5vw, 2rem)",
          right: "clamp(1rem, 5vw, 2rem)",
          padding: "0.75rem",
          zIndex: 110001,
          background: "var(--background)",
          border: "1px solid var(--border)",
          borderRadius: "9999px",
          cursor: "pointer",
          color: "var(--muted-foreground)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <div
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); prev(); }}
          style={{
            position: "absolute",
            left: "0.5rem",
            padding: "0.5rem",
            background: "var(--background)",
            border: "1px solid var(--border)",
            borderRadius: "9999px",
            cursor: "pointer",
            color: "var(--foreground)",
            zIndex: 110002,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ChevronLeft className="w-6 h-6" />
        </div>

        {item.image && (
          <img
            src={item.image}
            alt={item.title}
            style={{
              maxWidth: "100%",
              maxHeight: "65vh",
              objectFit: "contain",
              borderRadius: "2px",
              border: "1px solid var(--border)",
            }}
          />
        )}

        <div
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); next(); }}
          style={{
            position: "absolute",
            right: "0.5rem",
            padding: "0.5rem",
            background: "var(--background)",
            border: "1px solid var(--border)",
            borderRadius: "9999px",
            cursor: "pointer",
            color: "var(--foreground)",
            zIndex: 110002,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ChevronRight className="w-6 h-6" />
        </div>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1.5rem",
          paddingBottom: "clamp(1.5rem, 8vw, 2.5rem)",
          background: "var(--background)",
          borderTop: "1px solid var(--border)",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          zIndex: 110003,
        }}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="font-mono text-[10px] text-acid uppercase tracking-[0.3em] mb-1 font-bold">
              // {item.issuer}
            </div>
            <h2 className="text-lg md:text-2xl font-display font-bold uppercase tracking-tight text-foreground line-clamp-1">
              {item.title}
            </h2>
          </div>
          <div className="font-mono text-[10px] text-muted-foreground bg-card border border-border px-2 py-1 shrink-0">
            [{i + 1}/{CERTIFICATES.length}]
          </div>
        </div>

        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-acid text-primary-foreground font-mono text-xs uppercase tracking-widest py-3 hover:bg-acid-glow transition-all acid-glow"
          >
            Verify Certificate
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}

function CertificatesPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedIdx]);

  const handleNext = useCallback(() => setSelectedIdx((prev) => (prev !== null ? (prev + 1) % CERTIFICATES.length : null)), []);
  const handlePrev = useCallback(() => setSelectedIdx((prev) => (prev !== null ? (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length : null)), []);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <section className="pt-24 sm:pt-32 md:pt-40 pb-32 px-6 max-w-7xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">// archive — achievements</div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter mb-12 sm:mb-20 leading-[0.9] sm:leading-none">
          verified<br />
          <span className="italic text-acid">milestones.</span>
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((c, i) => (
            <div
              key={c.id}
              className="group relative border border-border bg-card p-8 hover:border-acid/60 transition-all cursor-pointer"
              onClick={() => setSelectedIdx(i)}
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-acid group-hover:text-acid transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex gap-2">
                  <button className="text-muted-foreground hover:text-acid transition-colors">
                    <Maximize2 className="w-5 h-5" />
                  </button>
                  {c.link && (
                    <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-acid" onClick={(e) => e.stopPropagation()}>
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="font-display text-2xl font-bold tracking-tight mb-4 group-hover:text-acid transition-colors">
                {c.title}
              </h3>
              
              {c.image && (
                <div className="mt-6 mb-8 aspect-video overflow-hidden border border-border bg-muted/10">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" />
                </div>
              )}

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono uppercase tracking-wider">
                  <span className="text-acid">/</span> {c.issuer}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground/60 font-mono">
                  <Calendar className="w-3 h-3" />
                  {c.date}
                </div>
              </div>

              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-acid/40 transition-all" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-transparent group-hover:border-acid/40 transition-all" />
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />

      {selectedIdx !== null && (
        <Lightbox
          i={selectedIdx}
          close={() => setSelectedIdx(null)}
          next={handleNext}
          prev={handlePrev}
        />
      )}
    </main>
  );
}
