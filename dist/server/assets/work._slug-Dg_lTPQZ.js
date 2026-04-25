import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as SiteNav } from "./SiteNav-BxP3nVbV.js";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
  /* @__PURE__ */ jsx(SiteNav, {}),
  /* @__PURE__ */ jsxs("div", { className: "pt-40 px-6 max-w-3xl mx-auto text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4", children: "// 404" }),
    /* @__PURE__ */ jsx("h1", { className: "font-display text-6xl font-extrabold tracking-tighter", children: "project not found." }),
    /* @__PURE__ */ jsx(Link, { to: "/work", className: "inline-block mt-8 font-mono text-sm uppercase tracking-widest text-acid hover:underline", children: "← back to /work" })
  ] })
] });
export {
  SplitNotFoundComponent as notFoundComponent
};
