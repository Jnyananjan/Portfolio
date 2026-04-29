"use client";
import React, { useState, useEffect, useCallback } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GALLERY_ITEMS } from "../data/gallery";
import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Jnyananjan" },
      { name: "description", content: "Visual journey of builds, experiments, and the process." },
    ],
  }),
  component: GalleryPage,
});

function Lightbox({ i, close, next, prev }: { i: number; close: () => void; next: () => void; prev: () => void }) {
  const item = GALLERY_ITEMS[i];

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        close();
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "rgba(0, 0, 0, 0.98)", // Solid, no backdrop-filter bug
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Close Button */}
      <div
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); close(); }}
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          padding: "1rem",
          zIndex: 100001,
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
        <X className="w-6 h-6 sm:w-8 sm:h-8" />
      </div>

      {/* Main View */}
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
        {/* Prev */}
        <div
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); prev(); }}
          style={{
            position: "absolute",
            left: "0.5rem",
            padding: "0.75rem",
            background: "var(--background)",
            border: "1px solid var(--border)",
            borderRadius: "9999px",
            cursor: "pointer",
            color: "var(--foreground)",
            zIndex: 100002,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>

        <img
          src={item.url}
          alt={item.caption}
          style={{
            maxWidth: "100%",
            maxHeight: "75vh",
            objectFit: "contain",
            borderRadius: "2px",
            border: "1px solid var(--border)",
          }}
        />

        {/* Next */}
        <div
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); next(); }}
          style={{
            position: "absolute",
            right: "0.5rem",
            padding: "0.75rem",
            background: "var(--background)",
            border: "1px solid var(--border)",
            borderRadius: "9999px",
            cursor: "pointer",
            color: "var(--foreground)",
            zIndex: 100002,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </div>

      {/* Info Bar */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1.5rem",
          background: "var(--background)",
          borderTop: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          zIndex: 100003,
        }}
      >
        <div>
          <div className="font-mono text-[10px] text-acid uppercase tracking-[0.3em] mb-2 font-bold">
            // {item.category}
          </div>
          <h2 className="text-lg md:text-3xl font-display font-bold uppercase tracking-tight text-foreground line-clamp-1">
            {item.caption}
          </h2>
        </div>
        <div className="font-mono text-xs text-muted-foreground bg-card border border-border px-3 py-2 shrink-0">
          [{i + 1}/{GALLERY_ITEMS.length}]
        </div>
      </div>
    </div>
  );
}

function GalleryPage() {
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

  const handleNext = useCallback(() => setSelectedIdx((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null)), []);
  const handlePrev = useCallback(() => setSelectedIdx((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null)), []);

  return (
    <main className="bg-background text-foreground min-h-screen">
      <section className="pt-24 sm:pt-32 md:pt-40 pb-32 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">// archive — visual_log</div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter mb-12 sm:mb-20 leading-[0.9] sm:leading-none">
          behind the<br />
          <span className="italic text-acid">scenes.</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden border border-border bg-card cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setSelectedIdx(i);
              }}
            >
              <img
                src={item.url}
                alt={item.caption}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col items-center justify-center p-8 text-center pointer-events-none">
                <Maximize2 className="w-8 h-8 text-acid mb-4 scale-75 group-hover:scale-100 transition-transform duration-500" />
                <div className="font-mono text-[10px] text-acid uppercase tracking-[0.2em] mb-1 font-bold">
                  // {item.category}
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-foreground">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 sm:mt-32 p-8 sm:p-16 border border-dashed border-acid/20 flex flex-col items-center text-center bg-acid/5 mx-auto">
          <Camera className="w-12 h-12 text-acid mb-6" />
          <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tighter">More modules pending...</h3>
          <p className="text-muted-foreground max-w-sm mt-4 font-mono text-[10px] sm:text-xs uppercase tracking-widest">
            documenting hardware x software experiments.
          </p>
        </div>
      </section>

      <SiteFooter />

      {/* Lightbox - pure fixed sibling div */}
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
