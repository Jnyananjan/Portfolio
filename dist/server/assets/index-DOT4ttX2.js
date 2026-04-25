import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { S as SiteNav } from "./SiteNav-BxP3nVbV.js";
import { S as SiteFooter } from "./SiteFooter-C7y_U3sz.js";
import { C as CircuitTraces } from "./CircuitTraces-CSkXBnzf.js";
import { P as PROJECTS, T as TIMELINE, S as STACK } from "./router-Nuha9_Wv.js";
import { p as portrait } from "./portrait-Bb32QF5l.js";
const BOOT_LINES = ["> initializing builder.exe", "> loading modules: hardware, software, ai/ml", "> compiling 4 years of curiosity...", "> system ready ▮"];
function BootSequence() {
  const [shown, setShown] = useState([]);
  useEffect(() => {
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => setShown((s) => [...s, line]), i * 500);
    });
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "font-mono text-xs sm:text-sm text-acid/80 space-y-1", children: shown.map((l, i) => /* @__PURE__ */ jsx(motion.div, { initial: {
    opacity: 0,
    x: -10
  }, animate: {
    opacity: 1,
    x: 0
  }, children: l }, i)) });
}
function Hero() {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return /* @__PURE__ */ jsxs("section", { ref, className: "relative min-h-[100svh] flex items-center overflow-hidden grid-bg", children: [
    /* @__PURE__ */ jsx(CircuitTraces, {}),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { style: {
      y,
      opacity
    }, className: "relative max-w-7xl mx-auto px-6 w-full pt-32 pb-40", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-8 items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 border border-acid/40 bg-acid/5 font-mono text-[11px] uppercase tracking-[0.2em] text-acid mb-8", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "w-3 h-3" }),
          "v1.0 — portfolio.live"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-[13vw] sm:text-[10vw] lg:text-[8.5rem] xl:text-[10rem] leading-[0.85] font-extrabold tracking-tighter", children: [
          "I BUILD",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-acid text-glow italic", children: "things" }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground/60", children: "that think." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-10 max-w-xl", children: /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg text-muted-foreground leading-relaxed", children: "Hardware, startups, and software stitched together with curiosity. BTech CSE — AI/ML student turning ideas into circuits, products, and code." }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/work", className: "group inline-flex items-center gap-3 bg-acid text-primary-foreground px-6 py-3 font-mono text-sm uppercase tracking-widest hover:bg-acid-glow transition-all acid-glow", children: [
            "view work",
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "inline-flex items-center gap-3 border border-border px-6 py-3 font-mono text-sm uppercase tracking-widest hover:border-acid hover:text-acid transition-colors", children: "contact.txt" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative mb-5 border border-acid/30 overflow-hidden aspect-[4/5] bg-card group", children: [
          /* @__PURE__ */ jsxs("div", { className: "w-full h-full relative", children: [
            /* @__PURE__ */ jsx("img", { src: portrait, alt: "Portrait", className: "w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000", style: {
              maskImage: "radial-gradient(circle at center, black 40%, transparent 85%)",
              WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 85%)"
            } }),
            /* @__PURE__ */ jsx("img", { src: portrait, alt: "", className: "absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-30 mix-blend-screen translate-x-1", style: {
              filter: "hue-rotate(90deg) saturate(200%)",
              maskImage: "radial-gradient(circle at center, black 40%, transparent 85%)",
              WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 85%)"
            } })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-30 pointer-events-none bg-noise mix-blend-overlay" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 pointer-events-none" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest text-acid bg-background/80 px-2 py-0.5 border border-acid/30 backdrop-blur-md", children: "operator_id: 0x4F2" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-acid/40 m-2 group-hover:border-acid transition-colors" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-acid/40 m-2 group-hover:border-acid transition-colors" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 right-4 h-px bg-acid/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-center" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative border border-acid/30 bg-card/60 backdrop-blur-sm p-5 scanline overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between font-mono text-[10px] text-muted-foreground mb-3 uppercase tracking-widest", children: [
            /* @__PURE__ */ jsx("span", { children: "terminal — boot.log" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-muted-foreground/40" }),
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-muted-foreground/40" }),
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-acid" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(BootSequence, {}),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-4 border-t border-border/50 grid grid-cols-3 gap-3 font-mono text-[10px]", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-muted-foreground uppercase", children: "projects" }),
              /* @__PURE__ */ jsx("div", { className: "text-acid text-xl font-bold mt-1", children: "+04" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-muted-foreground uppercase", children: "startup" }),
              /* @__PURE__ */ jsx("div", { className: "text-acid text-xl font-bold mt-1", children: "01" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-muted-foreground uppercase", children: "domain" }),
              /* @__PURE__ */ jsx("div", { className: "text-acid text-xl font-bold mt-1", children: "AI/ML" })
            ] })
          ] })
        ] })
      ] })
    ] }) })
  ] });
}
function Marquee() {
  const items = ["HARDWARE", "★", "AI / ML", "★", "STARTUPS", "★", "ROBOTICS", "★", "PRODUCT", "★", "CODE", "★"];
  const repeated = [...items, ...items, ...items, ...items];
  return /* @__PURE__ */ jsx("div", { className: "relative z-10 border-y border-border bg-acid text-primary-foreground py-4 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "flex animate-marquee whitespace-nowrap font-display font-extrabold text-3xl tracking-tight", children: repeated.map((item, i) => /* @__PURE__ */ jsx("span", { className: "mx-6", children: item }, i)) }) });
}
function TimelineSection() {
  return /* @__PURE__ */ jsxs("section", { className: "px-6 py-32 border-y border-border bg-surface relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-30 pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto relative", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4", children: "// timeline.log" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-7xl font-extrabold tracking-tighter mb-16", children: [
        "the road ",
        /* @__PURE__ */ jsx("span", { className: "italic text-muted-foreground/70", children: "so far." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-px bg-border border border-border overflow-hidden rounded-sm", children: TIMELINE.map((t, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        x: -20
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.1
      }, className: "bg-background grid grid-cols-12 gap-4 p-8 hover:bg-acid/5 transition-all group", children: [
        /* @__PURE__ */ jsx("div", { className: "col-span-3 md:col-span-2 font-mono text-xs uppercase tracking-widest text-acid/60 group-hover:text-acid pt-1 transition-colors", children: t.year }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-9 md:col-span-10", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-2xl md:text-3xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-300", children: t.title }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground mt-2 max-w-2xl leading-relaxed", children: t.desc })
        ] })
      ] }, t.title)) })
    ] })
  ] });
}
function FeaturedWork() {
  return /* @__PURE__ */ jsxs("section", { className: "relative py-32 px-6 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-16 flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4", children: "// section_02 — selected_work" }),
        /* @__PURE__ */ jsxs("h2", { className: "font-display text-6xl md:text-8xl font-extrabold tracking-tighter leading-none", children: [
          "things i've",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "italic text-muted-foreground/70", children: "built." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Link, { to: "/work", className: "font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-acid flex items-center gap-2 group", children: [
        "view all",
        /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch", children: PROJECTS.filter((p) => p.featured).map((p, i) => /* @__PURE__ */ jsx("article", { className: "flex h-full", children: /* @__PURE__ */ jsxs(Link, { to: "/work/$slug", params: {
      slug: p.slug
    }, className: "group relative border border-border bg-card overflow-hidden hover:border-acid/60 transition-all duration-500 flex flex-col w-full", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-acid/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
      /* @__PURE__ */ jsxs("div", { className: "relative p-8 md:p-10 flex flex-col h-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs text-muted-foreground tracking-widest", children: [
            "[",
            p.n,
            "] ",
            p.tag
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 border border-border flex items-center justify-center group-hover:border-acid group-hover:text-acid transition-colors flex-shrink-0", children: /* @__PURE__ */ jsx(p.icon, { className: "w-5 h-5" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-4xl md:text-5xl font-bold tracking-tight group-hover:text-acid transition-colors", children: p.title }),
            p.badge && /* @__PURE__ */ jsxs("div", { className: "px-2 py-0.5 bg-acid/10 border border-acid/20 text-acid font-mono text-[9px] uppercase tracking-widest rounded flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-acid animate-pulse" }),
              p.badge.split(" ").pop()
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed max-w-md", children: p.blurb })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 pt-6 border-t border-border/60 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-acid border border-acid/20 px-3 py-1.5 group-hover:bg-acid group-hover:text-primary-foreground transition-all", children: [
            "view_case_study",
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "font-mono text-[10px] text-muted-foreground uppercase tracking-widest", children: [
            "[",
            p.year,
            "]"
          ] })
        ] })
      ] })
    ] }) }, p.slug)) })
  ] });
}
function ToolkitSection() {
  return /* @__PURE__ */ jsxs("section", { className: "px-6 py-32 max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4", children: "// toolkit" }),
    /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-7xl font-extrabold tracking-tighter mb-16", children: [
      "the ",
      /* @__PURE__ */ jsx("span", { className: "italic text-muted-foreground/70", children: "toolkit." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border overflow-hidden rounded-sm", children: STACK.map((s, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.05
    }, className: "bg-background p-10 flex flex-col items-start gap-6 hover:bg-acid hover:text-primary-foreground transition-all duration-500 group cursor-default", children: [
      /* @__PURE__ */ jsx(s.icon, { className: "w-8 h-8 text-acid group-hover:text-primary-foreground transition-colors duration-500" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "font-mono text-[10px] text-muted-foreground group-hover:text-primary-foreground/70 uppercase tracking-widest", children: [
          "/",
          String(i + 1).padStart(2, "0")
        ] }),
        /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-2xl tracking-tight mt-1", children: s.name })
      ] })
    ] }, s.name)) })
  ] });
}
function ContactCTA() {
  return /* @__PURE__ */ jsxs("section", { className: "relative py-32 px-6 overflow-hidden grid-bg border-t border-border", children: [
    /* @__PURE__ */ jsx(CircuitTraces, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-5xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid mb-6", children: "// end_of_file — let's_build()" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-6xl md:text-9xl font-extrabold tracking-tighter leading-[0.9]", children: [
        "got an idea",
        /* @__PURE__ */ jsx("br", {}),
        "worth ",
        /* @__PURE__ */ jsx("span", { className: "italic text-acid text-glow", children: "soldering?" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg text-muted-foreground max-w-xl mx-auto", children: "Collabs, hardware projects, AI experiments, or just nerd-talk — the inbox is always open." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 flex flex-wrap justify-center gap-4", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-3 bg-acid text-primary-foreground px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-acid-glow transition-all acid-glow", children: [
        "send transmission",
        /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })
      ] }) })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(SiteNav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Marquee, {}),
    /* @__PURE__ */ jsx(FeaturedWork, {}),
    /* @__PURE__ */ jsx(TimelineSection, {}),
    /* @__PURE__ */ jsx(ToolkitSection, {}),
    /* @__PURE__ */ jsx(ContactCTA, {}),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  Index as component
};
