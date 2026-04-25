import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import { Mail, MapPin, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { S as SiteNav } from "./SiteNav-BxP3nVbV.js";
import { S as SiteFooter } from "./SiteFooter-C7y_U3sz.js";
import { C as CircuitTraces } from "./CircuitTraces-CSkXBnzf.js";
const initial = {
  name: "",
  email: "",
  topic: "Collaboration",
  message: ""
};
function ContactPage() {
  const [form, setForm] = useState(initial);
  const [sending, setSending] = useState(false);
  const update = (k) => (e) => setForm((f) => ({
    ...f,
    [k]: e.target.value
  }));
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("All fields except topic are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("That email doesn't look right.");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    toast.success("Transmission received. I'll reply soon.");
    setForm(initial);
  };
  return /* @__PURE__ */ jsxs("main", { className: "bg-background text-foreground min-h-screen", children: [
    /* @__PURE__ */ jsx(SiteNav, {}),
    /* @__PURE__ */ jsx(Toaster, { theme: "dark", position: "bottom-right", toastOptions: {
      style: {
        background: "var(--card)",
        color: "var(--foreground)",
        border: "1px solid var(--acid)",
        fontFamily: "var(--font-mono)",
        fontSize: "12px"
      }
    } }),
    /* @__PURE__ */ jsxs("section", { className: "relative pt-40 pb-16 px-6 overflow-hidden grid-bg border-b border-border", children: [
      /* @__PURE__ */ jsx(CircuitTraces, {}),
      /* @__PURE__ */ jsxs("div", { className: "relative max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4", children: "// open_channel" }),
        /* @__PURE__ */ jsxs("h1", { className: "font-display text-6xl md:text-8xl xl:text-9xl font-extrabold tracking-tighter leading-[0.85]", children: [
          "send a",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "italic text-acid text-glow", children: "transmission." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "px-6 py-20 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5 space-y-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xl font-display leading-snug", children: "Got an idea, a hardware project, or an AI experiment in mind? Drop a message — I read everything." }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-5 font-mono text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-acid mt-1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-[11px] uppercase tracking-widest", children: "email" }),
              /* @__PURE__ */ jsx("a", { href: "mailto:hello@jnyananjan.com", className: "hover:text-acid", children: "hello@jnyananjan.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-acid mt-1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-[11px] uppercase tracking-widest", children: "based in" }),
              /* @__PURE__ */ jsx("div", { children: "India · UTC+5:30" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Github, { className: "w-4 h-4 text-acid mt-1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-[11px] uppercase tracking-widest", children: "github" }),
              /* @__PURE__ */ jsx("a", { href: "https://github.com/jnyananjan", target: "_blank", rel: "noreferrer", className: "hover:text-acid", children: "@jnyananjan" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Linkedin, { className: "w-4 h-4 text-acid mt-1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-muted-foreground text-[11px] uppercase tracking-widest", children: "linkedin" }),
              /* @__PURE__ */ jsx("a", { href: "https://linkedin.com/in/jnyananjan", target: "_blank", rel: "noreferrer", className: "hover:text-acid", children: "/in/jnyananjan" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-6 border-t border-border font-mono text-xs text-muted-foreground", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-acid acid-glow" }),
          "status: open to collabs & freelance"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit, className: "lg:col-span-7 border border-border bg-card p-6 md:p-10 space-y-6 relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between font-mono text-[10px] text-muted-foreground uppercase tracking-widest", children: [
          /* @__PURE__ */ jsx("span", { children: "~ /transmission/new.form" }),
          /* @__PURE__ */ jsx("span", { className: "text-acid", children: "● live" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsx(Field, { label: "01 / name", children: /* @__PURE__ */ jsx("input", { type: "text", value: form.name, onChange: update("name"), placeholder: "ada lovelace", required: true, className: "w-full bg-transparent border-0 border-b border-border focus:border-acid outline-none py-2 font-mono text-sm placeholder:text-muted-foreground/50" }) }),
          /* @__PURE__ */ jsx(Field, { label: "02 / email", children: /* @__PURE__ */ jsx("input", { type: "email", value: form.email, onChange: update("email"), placeholder: "ada@analytical.engine", required: true, className: "w-full bg-transparent border-0 border-b border-border focus:border-acid outline-none py-2 font-mono text-sm placeholder:text-muted-foreground/50" }) })
        ] }),
        /* @__PURE__ */ jsx(Field, { label: "03 / topic", children: /* @__PURE__ */ jsx("select", { value: form.topic, onChange: update("topic"), className: "w-full bg-transparent border-0 border-b border-border focus:border-acid outline-none py-2 font-mono text-sm appearance-none cursor-pointer", children: ["Collaboration", "Hardware project", "TechyPad inquiry", "Hiring / freelance", "Just saying hi"].map((o) => /* @__PURE__ */ jsx("option", { value: o, className: "bg-card text-foreground", children: o }, o)) }) }),
        /* @__PURE__ */ jsx(Field, { label: "04 / message", children: /* @__PURE__ */ jsx("textarea", { value: form.message, onChange: update("message"), placeholder: "tell me what you're building...", required: true, rows: 6, className: "w-full bg-transparent border-0 border-b border-border focus:border-acid outline-none py-2 font-mono text-sm placeholder:text-muted-foreground/50 resize-none" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 pt-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "font-mono text-[10px] text-muted-foreground", children: [
            form.message.length,
            " chars · ENTER to break, CMD+RET to send"
          ] }),
          /* @__PURE__ */ jsxs("button", { type: "submit", disabled: sending, className: "group inline-flex items-center gap-3 bg-acid text-primary-foreground px-6 py-3 font-mono text-sm uppercase tracking-widest hover:bg-acid-glow transition-all acid-glow disabled:opacity-50 disabled:cursor-not-allowed", children: [
            sending ? "transmitting..." : "send transmission",
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-6 pb-32 max-w-7xl mx-auto", children: /* @__PURE__ */ jsx(Link, { to: "/work", className: "font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-acid", children: "← or browse the work" }) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "block font-mono text-[10px] uppercase tracking-[0.25em] text-acid mb-2", children: label }),
    children
  ] });
}
export {
  ContactPage as component
};
