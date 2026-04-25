import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Mail, Github, Linkedin } from "lucide-react";
function SiteFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border bg-background", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 py-10 flex flex-wrap items-center justify-between gap-6 font-mono text-xs text-muted-foreground", children: [
    /* @__PURE__ */ jsx("div", { children: "© Jnyananjan — running on caffeine & curiosity." }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "hover:text-acid flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4" }),
        " contact"
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "https://github.com", target: "_blank", rel: "noreferrer", className: "hover:text-acid flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Github, { className: "w-4 h-4" }),
        " github"
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "https://linkedin.com", target: "_blank", rel: "noreferrer", className: "hover:text-acid flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Linkedin, { className: "w-4 h-4" }),
        " linkedin"
      ] })
    ] })
  ] }) });
}
export {
  SiteFooter as S
};
