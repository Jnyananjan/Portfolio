import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { S as SiteNav } from "./SiteNav-BxP3nVbV.js";
import { S as SiteFooter } from "./SiteFooter-C7y_U3sz.js";
import { p as portrait } from "./portrait-Bb32QF5l.js";
import { T as TIMELINE, S as STACK } from "./router-Nuha9_Wv.js";
function AboutPage() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsx(SiteNav, {}),
    /* @__PURE__ */ jsxs("section", { className: "pt-40 pb-20 px-6 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4", children: "// who_is_this" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-6xl md:text-8xl xl:text-9xl font-extrabold tracking-tighter leading-[0.85]", children: [
        "a builder",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic text-acid", children: "first," }),
        /* @__PURE__ */ jsx("br", {}),
        "everything",
        /* @__PURE__ */ jsx("br", {}),
        "else after."
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "px-6 pb-20 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-4 order-first", children: /* @__PURE__ */ jsxs("div", { className: "relative border border-acid/30 overflow-hidden aspect-[4/5] bg-card", children: [
        /* @__PURE__ */ jsx("img", { src: portrait, alt: "Portrait placeholder", className: "w-full h-full object-cover grayscale contrast-110 mix-blend-luminosity opacity-90", loading: "lazy" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest text-acid bg-background/60 px-2 py-0.5 border border-acid/30", children: "operator.jpg" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-background/60 px-2 py-0.5 border border-border", children: "// placeholder" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8 space-y-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl font-display font-semibold leading-snug tracking-tight", children: "I'm a tech lover who can't sit still — soldering one weekend, shipping a startup the next, training a model on Monday." }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "I started with circuits because I wanted to know how things actually worked. That curiosity pushed me into firmware, then into web, then into machine learning — until the boundaries between disciplines stopped meaning anything." }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "Today I'm running TechyPad, a customisable macropad startup, while finishing my BTech in Computer Science with an AI/ML specialisation. I treat coursework, side projects, and the startup as one big workshop." }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6 font-mono text-sm pt-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "border-l-2 border-acid pl-4", children: [
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground uppercase text-xs tracking-widest mb-2", children: "discipline" }),
            /* @__PURE__ */ jsxs("div", { children: [
              "BTech — CSE",
              /* @__PURE__ */ jsx("br", {}),
              "AI / ML track"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-l-2 border-acid pl-4", children: [
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground uppercase text-xs tracking-widest mb-2", children: "obsession" }),
            /* @__PURE__ */ jsxs("div", { children: [
              "Hardware × software",
              /* @__PURE__ */ jsx("br", {}),
              "Products with personality"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-l-2 border-acid pl-4", children: [
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground uppercase text-xs tracking-widest mb-2", children: "currently" }),
            /* @__PURE__ */ jsxs("div", { children: [
              "Scaling TechyPad",
              /* @__PURE__ */ jsx("br", {}),
              "Studying neural nets"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-l-2 border-acid pl-4", children: [
            /* @__PURE__ */ jsx("div", { className: "text-muted-foreground uppercase text-xs tracking-widest mb-2", children: "philosophy" }),
            /* @__PURE__ */ jsxs("div", { children: [
              "Idea ",
              ">",
              " tooling.",
              /* @__PURE__ */ jsx("br", {}),
              "Ship before ready."
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-6 py-20 border-y border-border bg-surface", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4", children: "// timeline.log" }),
      /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-6xl font-extrabold tracking-tighter mb-12", children: "the road so far." }),
      /* @__PURE__ */ jsx("div", { className: "space-y-px bg-border border border-border", children: TIMELINE.map((t) => /* @__PURE__ */ jsxs("div", { className: "bg-background grid grid-cols-12 gap-4 p-6 hover:bg-acid/5 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "col-span-3 md:col-span-2 font-mono text-xs uppercase tracking-widest text-acid pt-1", children: t.year }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-9 md:col-span-10", children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-2xl font-bold tracking-tight", children: t.title }),
          /* @__PURE__ */ jsx("div", { className: "text-muted-foreground mt-1", children: t.desc })
        ] })
      ] }, t.title)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "px-6 py-20 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4", children: "// toolkit" }),
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-5xl md:text-6xl font-extrabold tracking-tighter mb-12", children: [
        "the ",
        /* @__PURE__ */ jsx("span", { className: "italic text-muted-foreground/70", children: "toolkit." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border", children: STACK.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "bg-background p-8 flex flex-col items-start gap-4 hover:bg-acid hover:text-primary-foreground transition-all duration-300 group cursor-default", children: [
        /* @__PURE__ */ jsx(s.icon, { className: "w-7 h-7 text-acid group-hover:text-primary-foreground transition-colors" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "font-mono text-[10px] text-muted-foreground group-hover:text-primary-foreground/70 uppercase tracking-widest", children: [
            "/",
            String(i + 1).padStart(2, "0")
          ] }),
          /* @__PURE__ */ jsx("div", { className: "font-display font-bold text-xl tracking-tight mt-1", children: s.name })
        ] })
      ] }, s.name)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-6 pb-32 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-3 bg-acid text-primary-foreground px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-acid-glow transition-all acid-glow", children: [
      "let's build something",
      /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })
    ] }) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  AboutPage as component
};
