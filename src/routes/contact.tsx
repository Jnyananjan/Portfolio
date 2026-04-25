import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Toaster, toast } from "sonner";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CircuitTraces } from "@/components/site/CircuitTraces";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Builder.exe" },
      { name: "description", content: "Send a transmission. Collabs, hardware projects, AI experiments — the inbox is always open." },
      { property: "og:title", content: "Contact — Builder.exe" },
      { property: "og:description", content: "Send a transmission. Collabs, hardware projects, AI experiments." },
    ],
  }),
  component: ContactPage,
});

type FormState = { name: string; email: string; topic: string; message: string };
const initial: FormState = { name: "", email: "", topic: "Collaboration", message: "" };

function ContactPage() {
  const [form, setForm] = useState<FormState>(initial);
  const [sending, setSending] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
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

  return (
    <main className="bg-background text-foreground min-h-screen">
      <SiteNav />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--card)",
            color: "var(--foreground)",
            border: "1px solid var(--acid)",
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
          },
        }}
      />

      <section className="relative pt-40 pb-16 px-6 overflow-hidden grid-bg border-b border-border">
        <CircuitTraces />
        <div className="relative max-w-7xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">// open_channel</div>
          <h1 className="font-display text-6xl md:text-8xl xl:text-9xl font-extrabold tracking-tighter leading-[0.85]">
            send a<br />
            <span className="italic text-acid text-glow">transmission.</span>
          </h1>
        </div>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <p className="text-xl font-display leading-snug">
            Got an idea, a hardware project, or an AI experiment in mind? Drop a message — I read everything.
          </p>

          <div className="space-y-5 font-mono text-sm">
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-acid mt-1" />
              <div>
                <div className="text-muted-foreground text-[11px] uppercase tracking-widest">email</div>
                <a href="mailto:hello@builder.dev" className="hover:text-acid">hello@builder.dev</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-acid mt-1" />
              <div>
                <div className="text-muted-foreground text-[11px] uppercase tracking-widest">based in</div>
                <div>India · UTC+5:30</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Github className="w-4 h-4 text-acid mt-1" />
              <div>
                <div className="text-muted-foreground text-[11px] uppercase tracking-widest">github</div>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-acid">@builder</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Linkedin className="w-4 h-4 text-acid mt-1" />
              <div>
                <div className="text-muted-foreground text-[11px] uppercase tracking-widest">linkedin</div>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-acid">/in/builder</a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-border font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-acid acid-glow" />
              status: open to collabs & freelance
            </span>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="lg:col-span-7 border border-border bg-card p-6 md:p-10 space-y-6 relative"
        >
          <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            <span>~ /transmission/new.form</span>
            <span className="text-acid">● live</span>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <Field label="01 / name">
              <input
                type="text" value={form.name} onChange={update("name")}
                placeholder="ada lovelace" required
                className="w-full bg-transparent border-0 border-b border-border focus:border-acid outline-none py-2 font-mono text-sm placeholder:text-muted-foreground/50"
              />
            </Field>
            <Field label="02 / email">
              <input
                type="email" value={form.email} onChange={update("email")}
                placeholder="ada@analytical.engine" required
                className="w-full bg-transparent border-0 border-b border-border focus:border-acid outline-none py-2 font-mono text-sm placeholder:text-muted-foreground/50"
              />
            </Field>
          </div>

          <Field label="03 / topic">
            <select
              value={form.topic} onChange={update("topic")}
              className="w-full bg-transparent border-0 border-b border-border focus:border-acid outline-none py-2 font-mono text-sm appearance-none cursor-pointer"
            >
              {["Collaboration", "Hardware project", "TechyPad inquiry", "Hiring / freelance", "Just saying hi"].map((o) => (
                <option key={o} value={o} className="bg-card text-foreground">{o}</option>
              ))}
            </select>
          </Field>

          <Field label="04 / message">
            <textarea
              value={form.message} onChange={update("message")}
              placeholder="tell me what you're building..." required rows={6}
              className="w-full bg-transparent border-0 border-b border-border focus:border-acid outline-none py-2 font-mono text-sm placeholder:text-muted-foreground/50 resize-none"
            />
          </Field>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <div className="font-mono text-[10px] text-muted-foreground">
              {form.message.length} chars · ENTER to break, CMD+RET to send
            </div>
            <button
              type="submit" disabled={sending}
              className="group inline-flex items-center gap-3 bg-acid text-primary-foreground px-6 py-3 font-mono text-sm uppercase tracking-widest hover:bg-acid-glow transition-all acid-glow disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? "transmitting..." : "send transmission"}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </form>
      </section>

      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <Link
          to="/work"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-acid"
        >
          ← or browse the work
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-acid mb-2">{label}</span>
      {children}
    </label>
  );
}
