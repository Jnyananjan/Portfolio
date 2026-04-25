import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CircuitTraces } from "@/components/site/CircuitTraces";
import { PROJECTS } from "@/data/projects";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Builder.exe — Hardware. Startups. AI." },
      { name: "description", content: "Portfolio of a maker — TechyPad macropad startup, a line-following robot, AI-built sites, BTech CSE AI/ML student." },
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

      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-6 w-full pt-32 pb-32">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 border border-acid/40 bg-acid/5 font-mono text-[11px] uppercase tracking-[0.2em] text-acid mb-8"
            >
              <Sparkles className="w-3 h-3" />
              v1.0 — portfolio.live
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[13vw] sm:text-[10vw] lg:text-[8.5rem] xl:text-[10rem] leading-[0.85] font-extrabold tracking-tighter"
            >
              I BUILD<br />
              <span className="text-acid text-glow italic">things</span><br />
              <span className="text-muted-foreground/60">that think.</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="mt-10 max-w-xl"
            >
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Hardware, startups, and software stitched together with curiosity.
                BTech CSE — AI/ML student turning ideas into circuits, products, and code.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
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
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="relative mb-5 border border-acid/30 overflow-hidden aspect-[4/5] bg-card">
              <img
                src={portrait}
                alt="Portrait placeholder"
                className="w-full h-full object-cover grayscale contrast-110 mix-blend-luminosity opacity-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest text-acid bg-background/60 px-2 py-0.5 border border-acid/30">
                operator.jpg
              </div>
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
                <div><div className="text-muted-foreground uppercase">projects</div><div className="text-acid text-xl font-bold mt-1">04+</div></div>
                <div><div className="text-muted-foreground uppercase">startup</div><div className="text-acid text-xl font-bold mt-1">01</div></div>
                <div><div className="text-muted-foreground uppercase">domain</div><div className="text-acid text-xl font-bold mt-1">AI/ML</div></div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = ["HARDWARE", "★", "AI / ML", "★", "STARTUPS", "★", "ROBOTICS", "★", "PRODUCT", "★", "CODE", "★"];
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="border-y border-border bg-acid text-primary-foreground py-4 overflow-hidden">
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

      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Link
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="block group relative border border-border bg-card overflow-hidden hover:border-acid/60 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-acid/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 md:p-10">
                <div className="flex items-start justify-between mb-12">
                  <span className="font-mono text-xs text-muted-foreground tracking-widest">[{p.n}] {p.tag}</span>
                  <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-acid group-hover:text-acid transition-colors">
                    <p.icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 group-hover:text-acid transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-md">{p.blurb}</p>
                <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between font-mono text-xs">
                  <span className="text-muted-foreground uppercase tracking-widest">read_more</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-acid group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </Link>
          </motion.article>
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
      <ContactCTA />
      <SiteFooter />
    </main>
  );
}
