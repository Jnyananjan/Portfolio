import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { S as SiteNav } from "./SiteNav-BxP3nVbV.js";
import { S as SiteFooter } from "./SiteFooter-C7y_U3sz.js";
import { P as PROJECTS } from "./router-Nuha9_Wv.js";
function WorkPage() {
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsx(SiteNav, {}),
    /* @__PURE__ */ jsxs("section", { className: "pt-40 pb-20 px-6 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4", children: "// index_of /work" }),
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-6xl md:text-8xl font-extrabold tracking-tighter leading-none", children: [
        "everything",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic text-muted-foreground/70", children: "i've made." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-xl text-muted-foreground", children: "A running log of hardware, software, and the seams in between. Click any entry to read the full story." })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-6 pb-32 max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch border-t border-border pt-12", children: PROJECTS.map((p) => /* @__PURE__ */ jsx("div", { className: "flex h-full", children: /* @__PURE__ */ jsxs(Link, { to: "/work/$slug", params: {
      slug: p.slug
    }, className: "group relative border border-border bg-card overflow-hidden hover:border-acid/60 transition-all duration-500 flex flex-col w-full", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-acid/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
      /* @__PURE__ */ jsxs("div", { className: "relative p-8 md:p-10 flex flex-col h-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-8", children: [
          /* @__PURE__ */ jsxs("span", { className: "font-mono text-[10px] text-muted-foreground tracking-widest uppercase", children: [
            "[",
            p.n,
            "] ",
            p.tag
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 border border-border flex items-center justify-center group-hover:border-acid group-hover:text-acid transition-colors flex-shrink-0", children: /* @__PURE__ */ jsx(p.icon, { className: "w-4 h-4" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-display text-3xl md:text-4xl font-bold tracking-tight group-hover:text-acid transition-colors", children: p.title }),
            p.badge && /* @__PURE__ */ jsxs("div", { className: "px-1.5 py-0.5 bg-acid/10 border border-acid/20 text-acid font-mono text-[8px] uppercase tracking-tighter rounded flex items-center gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "w-1 h-1 rounded-full bg-acid animate-pulse" }),
              p.badge.split(" ").pop()
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm leading-relaxed max-w-md line-clamp-3", children: p.blurb })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-border/60 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-acid border border-acid/20 px-3 py-1.5 group-hover:bg-acid group-hover:text-primary-foreground transition-all", children: [
            "view details",
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "font-mono text-[10px] text-muted-foreground uppercase tracking-widest", children: [
            "[",
            p.year,
            "]"
          ] })
        ] })
      ] })
    ] }) }, p.slug)) }) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
export {
  WorkPage as component
};
