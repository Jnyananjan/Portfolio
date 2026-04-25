import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const LINKS = [
  { to: "/", label: "/home" },
  { to: "/work", label: "/work" },
  { to: "/about", label: "/about" },
  { to: "/contact", label: "/contact" }
];
function SiteNav() {
  return /* @__PURE__ */ jsx("nav", { className: "fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 font-mono text-sm", children: [
      /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-acid acid-glow" }),
      /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "jnyananjan" }),
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "@root:~$" }),
      /* @__PURE__ */ jsx("span", { className: "text-acid cursor-blink", children: "_" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground", children: LINKS.map((l) => /* @__PURE__ */ jsx(
      Link,
      {
        to: l.to,
        activeOptions: { exact: true },
        activeProps: { className: "text-acid" },
        className: "hover:text-acid transition-colors",
        children: l.label
      },
      l.to
    )) })
  ] }) });
}
export {
  SiteNav as S
};
