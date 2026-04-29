import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CircuitBoard, Cpu, Globe, Bot, Zap, Sparkles } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ABOUT_STACK, ABOUT_TIMELINE } from "@/data/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jnyananjan" },
      { name: "description", content: "Hardware tinkerer, founder of TechyPad, and explorer of AI/ML systems." },
      { property: "og:title", content: "About — Jnyananjan" },
      { property: "og:description", content: "Hardware tinkerer, founder of TechyPad, and explorer of AI/ML systems." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <SiteNav />

      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">// who_is_this</div>
        <h1 className="font-display text-6xl md:text-8xl xl:text-9xl font-extrabold tracking-tighter leading-[0.85]">
          a builder<br />
          <span className="italic text-acid">first,</span><br />
          everything<br />else after.
        </h1>
      </section>

      <section className="px-6 pb-20 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 order-first">
          <div className="relative border border-acid/30 overflow-hidden aspect-[4/5] bg-card">
            <img
              src="https://rronjqymokxfprqraeoi.supabase.co/storage/v1/object/public/Images/me.png"
              alt="Portrait placeholder"
              className="w-full h-full object-cover grayscale contrast-110 mix-blend-luminosity opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest text-acid bg-background/60 px-2 py-0.5 border border-acid/30">
              operator.jpg
            </div>
            <div className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-background/60 px-2 py-0.5 border border-border">
              // placeholder
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 space-y-6">
          <p className="text-2xl md:text-3xl font-display font-semibold leading-snug tracking-tight">
            I'm a tech lover who can't sit still — soldering one weekend, shipping a startup the next, training a model on Monday.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I started with circuits because I wanted to know how things actually worked. That curiosity pushed me into firmware,
            then into web, then into machine learning — until the boundaries between disciplines stopped meaning anything.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Today I'm running TechyPad, a customisable macropad startup, while finishing my BTech in Computer Science with an
            AI/ML specialisation. I treat coursework, side projects, and the startup as one big workshop.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 font-mono text-sm pt-4">
            <div className="border-l-2 border-acid pl-4">
              <div className="text-muted-foreground uppercase text-xs tracking-widest mb-2">discipline</div>
              <div>BTech — CSE<br />AI / ML track</div>
            </div>
            <div className="border-l-2 border-acid pl-4">
              <div className="text-muted-foreground uppercase text-xs tracking-widest mb-2">obsession</div>
              <div>Hardware × software<br />Products with personality</div>
            </div>
            <div className="border-l-2 border-acid pl-4">
              <div className="text-muted-foreground uppercase text-xs tracking-widest mb-2">currently</div>
              <div>Scaling TechyPad<br />Studying neural nets</div>
            </div>
            <div className="border-l-2 border-acid pl-4">
              <div className="text-muted-foreground uppercase text-xs tracking-widest mb-2">philosophy</div>
              <div>Idea {">"} tooling.<br />Ship before ready.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-3 bg-acid text-primary-foreground px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-acid-glow transition-all acid-glow"
        >
          let's build something
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}
