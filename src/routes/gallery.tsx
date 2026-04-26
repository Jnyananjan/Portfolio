"use client";
import React, { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { GALLERY_ITEMS } from "../data/gallery";
import { Camera, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Jnyananjan" },
      { name: "description", content: "Visual journey of builds, experiments, and the process." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Keyboard navigation
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

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev !== null ? (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length : null));
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev !== null ? (prev + 1) % GALLERY_ITEMS.length : null));
  };

  return (
    <main className="bg-background text-foreground min-h-screen">
      <SiteNav />

      <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">// archive — visual_log</div>
        <h1 className="font-display text-6xl md:text-8xl font-extrabold tracking-tighter mb-20 leading-none">
          behind the<br />
          <span className="italic text-acid">scenes.</span>
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden border border-border bg-card"
            >
              {/* Image Container */}
              <div 
                className="w-full h-full relative cursor-pointer"
                onClick={() => setSelectedIdx(i)}
              >
                <img 
                  src={item.url} 
                  alt={item.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-acid/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 pointer-events-none">
                <div className="font-mono text-[10px] text-acid uppercase tracking-widest mb-2">
                  // {item.category}
                </div>
                <p className="text-sm font-medium leading-snug">
                  {item.caption}
                </p>
              </div>

              {/* The Zoom Button */}
              <button 
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIdx(i);
                }}
                className="absolute top-4 right-4 p-2 bg-background/90 border border-border text-foreground backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all hover:bg-acid hover:text-primary-foreground hover:border-acid z-[50] cursor-pointer"
                title="Zoom In"
              >
                <Maximize2 className="w-4 h-4 pointer-events-none" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 border border-dashed border-border flex flex-col items-center text-center">
          <Camera className="w-12 h-12 text-muted-foreground mb-4" />
          <h3 className="font-display text-2xl font-bold mb-2">More coming soon.</h3>
          <p className="text-muted-foreground max-w-md">
            I'm currently documenting my latest hardware builds and software experiments. Check back later for a more detailed look.
          </p>
        </div>
      </section>

      <SiteFooter />

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background/98 backdrop-blur-2xl overflow-hidden animate-in fade-in duration-200">
          <div 
            className="absolute inset-0 cursor-zoom-out"
            onClick={() => setSelectedIdx(null)}
          />
          
          <div 
            className="relative w-full h-full flex flex-col p-6 md:p-12 lg:p-20 z-10 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 p-3 text-muted-foreground hover:text-acid transition-colors z-[10010]"
            >
              <X className="w-10 h-10" />
            </button>

            <div className="relative flex-1 flex items-center justify-center bg-black/40 border border-border/50 overflow-hidden shadow-2xl">
              {/* Navigation Buttons */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 bg-background/80 border border-border text-acid hover:bg-acid hover:text-primary-foreground transition-all rounded-full z-[10010] shadow-xl"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 bg-background/80 border border-border text-acid hover:bg-acid hover:text-primary-foreground transition-all rounded-full z-[10010] shadow-xl"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <img 
                key={GALLERY_ITEMS[selectedIdx].url}
                src={GALLERY_ITEMS[selectedIdx].url} 
                alt={GALLERY_ITEMS[selectedIdx].caption}
                className="max-w-full max-h-full object-contain pointer-events-none"
              />
            </div>

            {/* Info Bar */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="font-mono text-[10px] text-acid uppercase tracking-widest mb-2 font-bold">
                  // {GALLERY_ITEMS[selectedIdx].category}
                </div>
                <p className="text-2xl md:text-3xl font-display font-black tracking-tight uppercase leading-none">
                  {GALLERY_ITEMS[selectedIdx].caption}
                </p>
              </div>
              <div className="font-mono text-sm text-muted-foreground bg-card border border-border px-6 py-3 uppercase tracking-[0.2em] font-bold">
                [{selectedIdx + 1} / {GALLERY_ITEMS.length}]
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
