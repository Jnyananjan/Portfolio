import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Sparkles, CircuitBoard, Cpu, Globe, Bot, Zap } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CircuitTraces } from "@/components/site/CircuitTraces";
import { PROJECTS } from "@/data/projects";

import { ABOUT_TIMELINE, ABOUT_STACK } from "@/data/about";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jnyananjan — Hardware. Startups. AI." },
      { name: "description", content: "Portfolio of a maker — TechyPad, Line-Following Robot, LED Watch, and Pizza Hut & Kitchen Web Menu." },
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
    <section ref={ref} className="relative min-h-[100svh] flex items-center overflow-hidden bg-background">
      <CircuitTraces />

      {/* Merged Background Image */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none flex justify-end"
      >
        <div className="relative w-full h-full lg:w-[70%]">
          <img
            src="https://i.ibb.co/9kw0Typn/Gemini-Generated-Image-epe12kepe12kepe1.png"
            alt="Portrait background"
            className="w-full h-full object-cover object-center grayscale contrast-[1.2] opacity-[0.25] mix-blend-screen"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 30%, black 80%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 30%, black 80%, transparent)",
            }}
          />
          {/* Advanced Scanline & Noise Overlay */}
          <div className="absolute inset-0 opacity-40 pointer-events-none bg-noise mix-blend-overlay" />
          <div className="absolute inset-0 opacity-30 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
        </div>
      </motion.div>

      {/* Fade out towards the bottom and left */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none lg:w-[50%]" />

      <div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-6 w-full pt-32 pb-40 z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-acid/40 bg-background/60 backdrop-blur-md font-mono text-[11px] uppercase tracking-[0.2em] text-acid mb-8">
              <Sparkles className="w-3 h-3" />
              v1.0 — portfolio.live
            </div>

            <h1 className="font-display text-[12vw] sm:text-[10vw] lg:text-[8.5rem] xl:text-[10rem] leading-[0.9] sm:leading-[0.85] font-extrabold tracking-tighter">
              I BUILD<br />
              <span className="text-acid text-glow italic">things</span><br />
              <span className="text-muted-foreground/80">that think.</span>
            </h1>

            <div className="mt-8 sm:mt-10 max-w-xl">
              <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed font-medium bg-background/40 backdrop-blur-sm p-4 rounded-xl border border-border/50">
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
                className="inline-flex items-center gap-3 border border-border px-6 py-3 font-mono text-sm uppercase tracking-widest hover:border-acid hover:text-acid transition-colors bg-background/50 backdrop-blur-md"
              >
                contact.txt
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative border border-acid/30 bg-background/70 backdrop-blur-xl p-5 scanline overflow-hidden shadow-2xl">
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
                <div><div className="text-muted-foreground uppercase">projects</div><div className="text-acid text-xl font-bold mt-1">+06</div></div>
                <div><div className="text-muted-foreground uppercase">startup</div><div className="text-acid text-xl font-bold mt-1">+01</div></div>
                <div><div className="text-muted-foreground uppercase">domain</div><div className="text-acid text-xl font-bold mt-1">AI/ML</div></div>
              </div>
              {/* Animated Corner Brackets */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-acid/40 m-2" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-acid/40 m-2" />
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


function ProjectSkeleton() {
  return (
    <div className="border border-border bg-card overflow-hidden flex flex-col w-full h-full animate-pulse">
      <div className="relative p-8 md:p-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-12">
          <div className="h-3 w-24 bg-muted rounded" />
          <div className="w-12 h-12 border border-border bg-muted" />
        </div>
        <div className="flex-1">
          <div className="h-10 w-48 bg-muted rounded mb-4" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-muted rounded" />
            <div className="h-4 w-2/3 bg-muted rounded" />
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border/60 flex items-center justify-between">
          <div className="h-8 w-32 bg-muted rounded" />
          <div className="h-3 w-12 bg-muted rounded" />
        </div>
      </div>
    </div>
  );
}

function FeaturedWork() {
  const [isLoading, setIsLoading] = useState(false); // Set to true to test skeleton
  const featuredSlugs = ["techypad", "line-following-robot", "pizzahut-menu", "cricket-score"];
  const featuredProjects = PROJECTS.filter((p) => featuredSlugs.includes(p.slug));

  return (
    <section data-assistant-target="work" className="relative py-32 px-6 max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-16 flex-wrap gap-4">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">
            // section_02 — selected_work
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight sm:leading-none">
            systems i've<br />
            <span className="italic text-muted-foreground/70">shipped.</span>
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

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
        {isLoading ? (
          Array(4).fill(0).map((_, i) => <ProjectSkeleton key={i} />)
        ) : (
          featuredProjects.map((p) => (
            <article
              key={p.slug}
              className="flex h-full"
            >
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group relative border border-border bg-card overflow-hidden hover:border-acid transition-all duration-300 flex flex-col w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-acid/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 md:p-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-12">
                    <span className="font-mono text-xs text-muted-foreground tracking-widest">[{p.n}] {p.tag}</span>
                    <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-acid group-hover:text-acid transition-colors flex-shrink-0">
                      <p.icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight group-hover:text-acid transition-colors">
                        {p.title}
                      </h3>
                    </div>
                    <div className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed max-w-md">
                        {p.blurb}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.stack.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-acid/5 border border-acid/10 text-acid/70 font-mono text-[9px] uppercase tracking-widest rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-6 border-t border-border/60 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-acid border border-acid/20 px-3 py-1.5 group-hover:bg-acid group-hover:text-primary-foreground transition-all">
                      view_case_study
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">[{p.year.split(' ')[0]}]</span>
                  </div>
                </div>
              </Link>
            </article>
          ))
        )}
      </div>
    </section>
  );
}

function WhyMeSection() {
  const points = [
    { title: "I build both hardware and software systems", icon: CircuitBoard },
    { title: "I take ideas from concept to real product", icon: Zap },
    { title: "I focus on performance, not just visuals", icon: Cpu },
    { title: "I design for real-world usage", icon: Bot },
  ];

  return (
    <section className="px-6 py-16 sm:py-32 border-y border-border bg-surface relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid gap-16 lg:gap-24 items-start">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">// why_me.log</div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter mb-8 leading-tight sm:leading-none">
              casual but<br />
              <span className="italic text-acid text-glow">confident.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-md leading-relaxed mb-12">
              I don't just write code. I solder circuits, tune PID loops, and build systems that live in the real world.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-4 p-4 border border-border bg-background/50 backdrop-blur-sm group hover:border-acid transition-colors">
                <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-acid group-hover:text-acid shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Availability</div>
                  <div className="font-display font-bold text-base sm:text-lg">Response: &lt;24h</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border border-border bg-background/50 backdrop-blur-sm group hover:border-acid transition-colors">
                <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-acid group-hover:text-acid shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Opportunities</div>
                  <div className="font-display font-bold text-base sm:text-lg">Open to Collabs</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-8">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 border border-border bg-card hover:border-acid/60 transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className="font-mono text-2xl text-muted-foreground/30 group-hover:text-acid/40 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight group-hover:text-acid transition-colors leading-tight">
                    {p.title}
                  </h3>
                </div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-acid/40 transition-all" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-transparent group-hover:border-acid/40 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="px-6 py-20 border-y border-border bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">// archive.log</div>
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
    <section data-assistant-target="toolkit" className="px-6 py-20 max-w-7xl mx-auto">
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
    <section data-assistant-target="contact" className="relative py-16 sm:py-32 px-6 overflow-hidden grid-bg border-t border-border">
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
      <Hero />
      <Marquee />
      <FeaturedWork />
      <TimelineSection />
      <ToolkitSection />
      <WhyMeSection />
      <ContactCTA />
      <SiteFooter />
    </main>
  );
}
