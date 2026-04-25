import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CircuitBoard, Cpu, Globe, Bot, Zap, Sparkles } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Builder.exe" },
      { name: "description", content: "BTech CSE AI/ML student, hardware tinkerer, and founder of TechyPad." },
      { property: "og:title", content: "About — Builder.exe" },
      { property: "og:description", content: "BTech CSE AI/ML student, hardware tinkerer, and founder of TechyPad." },
    ],
  }),
  component: AboutPage,
});

const STACK = [
  { name: "Embedded C", icon: CircuitBoard },
  { name: "Arduino / ESP", icon: Cpu },
  { name: "Python", icon: Zap },
  { name: "PyTorch", icon: Sparkles },
  { name: "React", icon: Globe },
  { name: "TensorFlow", icon: Bot },
  { name: "PCB Design", icon: CircuitBoard },
  { name: "Linux", icon: Cpu },
];

const TIMELINE = [
  { year: "now", title: "BTech CSE — AI/ML", desc: "Studying neural systems while shipping hardware on the side." },
  { year: "2024", title: "Founded TechyPad", desc: "Took a customisable macropad from KiCad sketch to shipping product." },
  { year: "2024", title: "Built two AI-augmented sites", desc: "Owned the ideas, used AI as a collaborator to ship at speed." },
  { year: "2023", title: "Line-Following Robot", desc: "First end-to-end hardware project. PID tuning taught me patience." },
];

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
              src={portrait}
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

      <section className="px-6 py-20 border-y border-border bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">// timeline.log</div>
          <h2 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter mb-12">the road so far.</h2>
          <div className="space-y-px bg-border border border-border">
            {TIMELINE.map((t) => (
              <div key={t.title} className="bg-background grid grid-cols-12 gap-4 p-6 hover:bg-acid/5 transition-colors">
                <div className="col-span-3 md:col-span-2 font-mono text-xs uppercase tracking-widest text-acid pt-1">{t.year}</div>
                <div className="col-span-9 md:col-span-10">
                  <div className="font-display text-2xl font-bold tracking-tight">{t.title}</div>
                  <div className="text-muted-foreground mt-1">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">// toolkit</div>
        <h2 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter mb-12">
          the <span className="italic text-muted-foreground/70">toolkit.</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border">
          {STACK.map((s, i) => (
            <div key={s.name} className="bg-background p-8 flex flex-col items-start gap-4 hover:bg-acid hover:text-primary-foreground transition-all duration-300 group cursor-default">
              <s.icon className="w-7 h-7 text-acid group-hover:text-primary-foreground transition-colors" />
              <div>
                <div className="font-mono text-[10px] text-muted-foreground group-hover:text-primary-foreground/70 uppercase tracking-widest">
                  /{String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display font-bold text-xl tracking-tight mt-1">{s.name}</div>
              </div>
            </div>
          ))}
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
