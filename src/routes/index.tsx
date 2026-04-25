import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Sparkles, CircuitBoard, Cpu, Globe, Bot, Zap } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CircuitTraces } from "@/components/site/CircuitTraces";
import { PROJECTS } from "@/data/projects";

import { ABOUT_TIMELINE, ABOUT_STACK } from "@/data/about";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jnyananjan — Hardware. Startups. AI." },
      { name: "description", content: "Portfolio of a maker — TechyPad, Line-Following Robot, LED Watch, and Pizza Hut Web Menu." },
    ],
  }),
  component: Index,
});

const BOOT_LINES = [
  "> initializing builder.exe",
  "> loading modules: hardware, software, ai/ml",
  "> compiling 4 years of curiosity...",
  "> system ready ▮",
];

function BootSequence() {
  const [shown, setShown] = useState<string[]>([]);
  useEffect(() => {
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => setShown((s) => [...s, line]), i * 500);
    });
  }, []);
  return (
    <div className="font-mono text-xs sm:text-sm text-acid/80 space-y-1">
      {shown.map((l, i) => (
        <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          {l}
        </motion.div>
      ))}
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center overflow-hidden grid-bg">
      <CircuitTraces />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-6 w-full pt-32 pb-40">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-acid/40 bg-acid/5 font-mono text-[11px] uppercase tracking-[0.2em] text-acid mb-8">
              <Sparkles className="w-3 h-3" />
              v1.0 — portfolio.live
            </div>

            <h1 className="font-display text-[13vw] sm:text-[10vw] lg:text-[8.5rem] xl:text-[10rem] leading-[0.85] font-extrabold tracking-tighter">
              I BUILD<br />
              <span className="text-acid text-glow italic">things</span><br />
              <span className="text-muted-foreground/60">that think.</span>
            </h1>

            <div className="mt-10 max-w-xl">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Hardware, startups, and software stitched together with curiosity.
                BTech CSE — AI/ML student turning ideas into circuits, products, and code.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 bg-acid text-primary-foreground px-6 py-3 font-mono text-sm uppercase tracking-widest hover:bg-acid-glow transition-all acid-glow"
              >
                view work
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-border px-6 py-3 font-mono text-sm uppercase tracking-widest hover:border-acid hover:text-acid transition-colors"
              >
                contact.txt
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative mb-5 border border-acid/30 overflow-hidden aspect-[4/5] bg-card group">
              {/* Glitch Animation for the Image */}
              <div className="w-full h-full relative">
                <img
                  src={portrait}
                  alt="Portrait"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  style={{
                    maskImage: "radial-gradient(circle at center, black 40%, transparent 85%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 85%)",
                  }}
                />

                {/* Color Ghosting Effect on Hover */}
                <img
                  src={portrait}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-30 mix-blend-screen translate-x-1"
                  style={{
                    filter: "hue-rotate(90deg) saturate(200%)",
                    maskImage: "radial-gradient(circle at center, black 40%, transparent 85%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 85%)",
                  }}
                />
              </div>

              {/* Advanced Scanline & Noise Overlay */}
              <div className="absolute inset-0 opacity-30 pointer-events-none bg-noise mix-blend-overlay" />
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 pointer-events-none" />

              <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest text-acid bg-background/80 px-2 py-0.5 border border-acid/30 backdrop-blur-md">
                operator_id: 0x4F2
              </div>

              {/* Animated Corner Brackets */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-acid/40 m-2 group-hover:border-acid transition-colors" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-acid/40 m-2 group-hover:border-acid transition-colors" />

              <div className="absolute bottom-4 left-4 right-4 h-px bg-acid/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-center" />
            </div>
            <div className="relative border border-acid/30 bg-card/60 backdrop-blur-sm p-5 scanline overflow-hidden">
              <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground mb-3 uppercase tracking-widest">
                <span>terminal — boot.log</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                  <div className="w-2 h-2 rounded-full bg-acid" />
                </div>
              </div>
              <BootSequence />
              <div className="mt-6 pt-4 border-t border-border/50 grid grid-cols-3 gap-3 font-mono text-[10px]">
                <div><div className="text-muted-foreground uppercase">projects</div><div className="text-acid text-xl font-bold mt-1">+04</div></div>
                <div><div className="text-muted-foreground uppercase">startup</div><div className="text-acid text-xl font-bold mt-1">01</div></div>
                <div><div className="text-muted-foreground uppercase">domain</div><div className="text-acid text-xl font-bold mt-1">AI/ML</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["HARDWARE", "★", "AI / ML", "★", "STARTUPS", "★", "ROBOTICS", "★", "PRODUCT", "★", "CODE", "★"];
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="relative z-10 border-y border-border bg-acid text-primary-foreground py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap font-display font-extrabold text-3xl tracking-tight">
        {repeated.map((item, i) => <span key={i} className="mx-6">{item}</span>)}
      </div>
    </div>
  );
}


function FeaturedWork() {
  return (
    <section className="relative py-32 px-6 max-w-7xl mx-auto">
      <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">
            // section_02 — selected_work
          </div>
          <h2 className="font-display text-6xl md:text-8xl font-extrabold tracking-tighter leading-none">
            things i've<br />
            <span className="italic text-muted-foreground/70">built.</span>
          </h2>
        </div>
        <Link
          to="/work"
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-acid flex items-center gap-2 group"
        >
          view all
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        {PROJECTS.filter(p => p.featured).map((p, i) => (
          <article
            key={p.slug}
            className="flex h-full"
          >
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group relative border border-border bg-card overflow-hidden hover:border-acid/60 transition-all duration-500 flex flex-col w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-acid/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 md:p-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-12">
                  <span className="font-mono text-xs text-muted-foreground tracking-widest">[{p.n}] {p.tag}</span>
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-acid group-hover:text-acid transition-colors flex-shrink-0">
                    <p.icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight group-hover:text-acid transition-colors">
                      {p.title}
                    </h3>
                    {p.badge && (
                      <div className="px-2 py-0.5 bg-acid/10 border border-acid/20 text-acid font-mono text-[9px] uppercase tracking-widest rounded flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-acid animate-pulse" />
                        {p.badge.split(' ').pop()}
                      </div>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-md">{p.blurb}</p>
                </div>

                <div className="mt-12 pt-6 border-t border-border/60 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-acid border border-acid/20 px-3 py-1.5 group-hover:bg-acid group-hover:text-primary-foreground transition-all">
                    view_case_study
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">[{p.year}]</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="px-6 py-20 border-y border-border bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">// timeline.log</div>
        <h2 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter mb-12">the road so far.</h2>
        <div className="space-y-px bg-border border border-border">
          {ABOUT_TIMELINE.map((t) => (
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
  );
}

function ToolkitSection() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">// toolkit</div>
      <h2 className="font-display text-5xl md:text-6xl font-extrabold tracking-tighter mb-12">
        the <span className="italic text-muted-foreground/70">toolkit.</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border">
        {ABOUT_STACK.map((s, i) => (
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
  );
}

function ContactCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden grid-bg border-t border-border">
      <CircuitTraces />
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-6">
          // end_of_file — let's_build()
        </div>
        <h2 className="font-display text-6xl md:text-9xl font-extrabold tracking-tighter leading-[0.9]">
          got an idea<br />
          worth <span className="italic text-acid text-glow">soldering?</span>
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          Collabs, hardware projects, AI experiments, or just nerd-talk — the inbox is always open.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-acid text-primary-foreground px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-acid-glow transition-all acid-glow"
          >
            send transmission
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <SiteNav />
      <Hero />
      <Marquee />
      <FeaturedWork />
      <TimelineSection />
      <ToolkitSection />
      <ContactCTA />
      <SiteFooter />
    </main>
  );
}
