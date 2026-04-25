import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, CheckCircle2, Play, Globe, ArrowUpRight } from "lucide-react";
import { S as SiteNav } from "./SiteNav-BxP3nVbV.js";
import { S as SiteFooter } from "./SiteFooter-C7y_U3sz.js";
import { C as CircuitTraces } from "./CircuitTraces-CSkXBnzf.js";
import { R as Route, P as PROJECTS } from "./router-Nuha9_Wv.js";
function ProjectPage() {
  const {
    project
  } = Route.useLoaderData();
  const Icon = project.icon;
  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsx(SiteNav, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative pt-40 pb-20 px-6 overflow-hidden grid-bg border-b border-border", children: [
      /* @__PURE__ */ jsx(CircuitTraces, {}),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/work", className: "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-acid transition-colors mb-10", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
          "back to /work"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-8 items-end", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid", children: [
                "[",
                project.n,
                "] ",
                project.tag
              ] }),
              project.badge && /* @__PURE__ */ jsxs("div", { className: "px-2 py-0.5 bg-acid/10 border border-acid/30 text-acid font-mono text-[9px] uppercase tracking-widest flex items-center gap-1.5 rounded-full", children: [
                /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-acid animate-pulse" }),
                project.badge
              ] })
            ] }),
            /* @__PURE__ */ jsx("h1", { className: "font-display text-6xl md:text-8xl xl:text-9xl font-extrabold tracking-tighter leading-[0.85]", children: project.title }),
            project.subBadge && /* @__PURE__ */ jsxs("div", { className: "mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "w-8 h-px bg-border" }),
              project.subBadge
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4 flex flex-col items-start lg:items-end gap-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-20 h-20 border border-acid/40 flex items-center justify-center text-acid acid-glow", children: /* @__PURE__ */ jsx(Icon, { className: "w-9 h-9" }) }),
            (project.slug === "techypad" || project.slug === "line-following-robot" || project.slug === "led-watch" || project.slug === "pizzahut-menu" || project.slug === "cricket-score" || project.slug === "link-hub") && /* @__PURE__ */ jsxs("div", { className: `relative w-full max-w-sm lg:w-64 border border-border bg-card p-2 ${project.slug === "led-watch" ? "rounded-full aspect-square" : project.slug === "cricket-score" || project.slug === "link-hub" ? "rounded-sm border-t-[12px] border-x-4 border-b-8 border-muted" : "rounded-lg rotate-3"} hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-acid/5 overflow-hidden group flex items-center justify-center`, children: [
              (project.slug === "cricket-score" || project.slug === "link-hub") && /* @__PURE__ */ jsx("div", { className: "absolute top-[-8px] left-1/2 -translate-x-1/2 w-12 h-1 bg-border/20 rounded-full z-50" }),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-acid/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" }),
              /* @__PURE__ */ jsx("img", { src: project.slug === "techypad" ? "/projects/techypad-hero.png" : project.slug === "line-following-robot" ? "/projects/robot-hero.png" : project.slug === "led-watch" ? "/projects/watch-hero.png" : project.slug === "pizzahut-menu" ? "/projects/pizzahut-hero.png" : project.slug === "cricket-score" ? "/projects/cricket-hero.png" : "/projects/linkhub-hero.png", alt: project.title, className: `w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 ${project.slug === "led-watch" ? "object-contain scale-90" : ""}` }),
              project.slug === "led-watch" && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full border-2 border-acid/20 animate-pulse pointer-events-none" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-16", children: [
      /* @__PURE__ */ jsxs("aside", { className: "lg:col-span-4 space-y-12", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-widest text-acid mb-4", children: "// metadata" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-xs uppercase tracking-widest mb-1", children: "Year" }),
              /* @__PURE__ */ jsx("div", { className: "font-display text-xl font-bold", children: project.year })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-xs uppercase tracking-widest mb-1", children: "Role" }),
              /* @__PURE__ */ jsx("div", { className: "font-display text-xl font-bold", children: project.role })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-widest text-acid mb-4", children: "// tech_stack" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: project.stack.map((s) => /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] px-3 py-1.5 border border-border bg-card uppercase tracking-wider", children: s }, s)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-8 border-t border-border", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-[11px] uppercase tracking-widest text-acid mb-4", children: "// performance" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6", children: project.highlights.map((h) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground", children: h.label }),
            /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-xl text-acid mt-1", children: h.value })
          ] }, h.label)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("article", { className: "lg:col-span-8 space-y-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-10", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid mb-6", children: "// overview" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-4xl font-display font-bold leading-tight tracking-tight", children: project.overview })
          ] }),
          project.websiteUrl && /* @__PURE__ */ jsxs("a", { href: project.websiteUrl, target: "_blank", rel: "noreferrer", className: "group inline-flex items-center gap-3 bg-acid text-primary-foreground px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-acid-glow transition-all acid-glow w-full sm:w-auto", children: [
            project.slug === "link-hub" ? "Visit Live Hub" : project.tag.includes("REAL-TIME") ? "View Live Dashboard" : project.tag.includes("WEB") ? "View Live Website" : "Visit Official Website",
            /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })
          ] })
        ] }),
        project.challenge && /* @__PURE__ */ jsxs("div", { className: "bg-surface border border-border p-8 md:p-12 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid", children: project.tag.includes("REAL-TIME") ? "// system_design" : project.tag.includes("WEB") ? "// user_experience_strategy" : "// engineering_challenge" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl font-display font-semibold leading-snug", children: project.challenge }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[10px] text-muted-foreground uppercase tracking-widest pt-4", children: project.tag.includes("REAL-TIME") ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " WebSocket Broadcast"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " Optimistic Updates"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " Concurrent Observer Sync"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " Low-Latency Streaming"
            ] })
          ] }) : project.tag.includes("WEB") ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " Craving Triggers"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " Mobile-First UI"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " 60FPS Transitions"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " One-Handed Flow"
            ] })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " Symmetric Routing"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " Ultra-Low Leakage"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " Bespoke Enclosure"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " Multiplexed Control"
            ] })
          ] }) })
        ] }),
        project.management && /* @__PURE__ */ jsxs("div", { className: "bg-surface border border-border p-8 md:p-12 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid", children: "// dynamic_management" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl font-display font-semibold leading-snug", children: project.management }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[10px] text-muted-foreground uppercase tracking-widest pt-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " Decoupled Data"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " Rapid Scaling"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " Zero-Code Updates"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " Modular Architecture"
            ] })
          ] })
        ] }),
        project.experience && /* @__PURE__ */ jsxs("div", { className: "bg-surface border border-border p-8 md:p-12 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid", children: "// user_experience" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl font-display font-semibold leading-snug", children: project.experience }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[10px] text-muted-foreground uppercase tracking-widest pt-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " Zero Friction"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " One-Handed Layout"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " Instant Launch"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-acid" }),
              " Micro-Animations"
            ] })
          ] })
        ] }),
        project.gallery && /* @__PURE__ */ jsxs("div", { className: "space-y-10", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid", children: project.tag.includes("WEB") ? "// interface_showcase" : "// product_gallery" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: project.gallery.map((img, i) => /* @__PURE__ */ jsxs("div", { className: "group relative border border-border bg-card overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-acid/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" }),
            /* @__PURE__ */ jsx("img", { src: img.url, alt: img.caption, className: "w-full aspect-square object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700", loading: "lazy" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 z-20 font-mono text-[10px] uppercase tracking-widest bg-background/80 px-2 py-1 border border-border backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity", children: img.caption })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "the_problem" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: project.problem })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-widest text-acid", children: "the_solution" }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground leading-relaxed font-medium", children: project.solution })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid", children: "// feature_demo" }),
          /* @__PURE__ */ jsxs("div", { className: `aspect-video bg-card border border-border relative group overflow-hidden cursor-pointer ${project.tag.includes("WEB") ? "p-4" : ""}`, children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-acid/20 to-transparent opacity-50 z-10" }),
            project.tag.includes("WEB") && /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 w-full h-8 bg-surface border-b border-border z-40 flex items-center px-4 gap-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-border" }),
                /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-border" }),
                /* @__PURE__ */ jsx("div", { className: "w-2.5 h-2.5 rounded-full bg-border" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1 bg-background/50 rounded h-5 flex items-center px-3 font-mono text-[8px] text-muted-foreground", children: [
                "https://",
                project.slug,
                ".dev"
              ] })
            ] }),
            project.slug === "techypad" ? /* @__PURE__ */ jsx("img", { src: "/projects/techypad-lifestyle.png", alt: "Demo Preview", className: "absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" }) : project.slug === "line-following-robot" ? /* @__PURE__ */ jsx("img", { src: "/projects/robot-track.png", alt: "Track Test", className: "absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" }) : project.slug === "led-watch" ? /* @__PURE__ */ jsx("img", { src: "/projects/watch-hero.png", alt: "Watch Demo", className: "absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" }) : project.slug === "pizzahut-menu" ? /* @__PURE__ */ jsx("img", { src: "/projects/pizzahut-hero.png", alt: "Pizza Hut UI Demo", className: "absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" }) : project.slug === "cricket-score" ? /* @__PURE__ */ jsx("img", { src: "/projects/cricket-hero.png", alt: "Cricket Live Demo", className: "absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" }) : /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center z-20", children: /* @__PURE__ */ jsx("div", { className: "font-mono text-xs text-muted-foreground uppercase tracking-widest border border-border px-4 py-2", children: "project_media_placeholder.mp4" }) }),
            project.slug === "cricket-score" && /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-6 z-40 font-mono text-[9px] text-acid bg-background/90 p-4 border border-acid/20 backdrop-blur-sm max-w-[200px] hidden md:block", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2 text-[8px] text-muted-foreground uppercase", children: [
                /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-acid animate-ping" }),
                "Live Stream log"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1 opacity-80", children: [
                /* @__PURE__ */ jsx("div", { children: "[09:41:22] BALL_SYNC: SUCCESS" }),
                /* @__PURE__ */ jsx("div", { children: "[09:41:22] DB_BROADCAST: OK" }),
                /* @__PURE__ */ jsx("div", { children: "[09:41:23] LATENCY: 84ms" }),
                /* @__PURE__ */ jsx("div", { className: "text-white", children: "[09:41:24] 4 RUNS SCORED!" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center z-30", children: /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-full bg-background/40 backdrop-blur-md border border-acid/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-acid/20 transition-all duration-500", children: /* @__PURE__ */ jsx(Play, { className: "w-8 h-8 text-acid fill-acid" }) }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 scanline opacity-30 pointer-events-none" }),
            /* @__PURE__ */ jsx(CircuitTraces, {})
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs font-mono text-muted-foreground text-center italic tracking-widest", children: project.slug === "line-following-robot" ? "[Real-time High-Speed Track Test]" : project.slug === "led-watch" ? "[Real-Time LED Animation Engine]" : project.slug === "pizzahut-menu" ? "[High-Fidelity UI Interaction Demo]" : project.slug === "cricket-score" ? "[Sub-Second Real-Time Data Streaming]" : "[click_to_play_transmission.exe]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid", children: "// process_&_execution" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-6", children: project.story.map((p, i) => /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: p }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-20 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-display text-2xl font-bold mb-2", children: "Impressed by this work?" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Let's talk about how I can bring this energy to your next project." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto", children: [
            project.websiteUrl && /* @__PURE__ */ jsxs("a", { href: project.websiteUrl, target: "_blank", rel: "noreferrer", className: "inline-flex items-center justify-center gap-3 border border-acid/30 text-acid px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-acid hover:text-primary-foreground transition-all w-full sm:w-auto", children: [
              "Official Site",
              /* @__PURE__ */ jsx(Globe, { className: "w-4 h-4" })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center justify-center gap-3 bg-acid text-primary-foreground px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-acid-glow transition-all acid-glow w-full sm:w-auto", children: [
              "start_conversation",
              /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-10 flex justify-end", children: /* @__PURE__ */ jsxs(Link, { to: "/work/$slug", params: {
          slug: next.slug
        }, className: "group flex flex-col items-end gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]", children: "Next project" }),
          /* @__PURE__ */ jsxs("span", { className: "font-display text-3xl font-bold group-hover:text-acid transition-colors", children: [
            next.title,
            " →"
          ] })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  ProjectPage as component
};
