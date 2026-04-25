import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Play, ExternalLink, Globe } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CircuitTraces } from "@/components/site/CircuitTraces";
import { getProject, PROJECTS } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Jnyananjan` },
          { name: "description", content: loaderData.project.blurb },
          { property: "og:title", content: `${loaderData.project.title} — Jnyananjan` },
          { property: "og:description", content: loaderData.project.blurb },
        ]
      : [{ title: "Project — Jnyananjan" }],
  }),
  notFoundComponent: () => (
    <main className="bg-background text-foreground min-h-screen">
      <SiteNav />
      <div className="pt-40 px-6 max-w-3xl mx-auto text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">// 404</div>
        <h1 className="font-display text-6xl font-extrabold tracking-tighter">project not found.</h1>
        <Link to="/work" className="inline-block mt-8 font-mono text-sm uppercase tracking-widest text-acid hover:underline">
          ← back to /work
        </Link>
      </div>
    </main>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const Icon = project.icon;
  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <main className="bg-background text-foreground min-h-screen">
      <SiteNav />

      {/* Header Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden grid-bg border-b border-border">
        <CircuitTraces />
        <div className="relative max-w-7xl mx-auto">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-acid transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            back to /work
          </Link>

          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid">
                  [{project.n}] {project.tag}
                </div>
                {project.badge && (
                  <div className="px-2 py-0.5 bg-acid/10 border border-acid/30 text-acid font-mono text-[9px] uppercase tracking-widest flex items-center gap-1.5 rounded-full">
                    <span className="w-1 h-1 rounded-full bg-acid animate-pulse" />
                    {project.badge}
                  </div>
                )}
              </div>
              <h1 className="font-display text-6xl md:text-8xl xl:text-9xl font-extrabold tracking-tighter leading-[0.85]">
                {project.title}
              </h1>
              {project.subBadge && (
                <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-3">
                  <span className="w-8 h-px bg-border" />
                  {project.subBadge}
                </div>
              )}
            </div>
                 <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-6">
              <div className="w-20 h-20 border border-acid/40 flex items-center justify-center text-acid acid-glow">
                <Icon className="w-9 h-9" />
              </div>
              {(project.slug === "techypad" || project.slug === "line-following-robot" || project.slug === "led-watch" || project.slug === "pizzahut-menu" || project.slug === "cricket-score" || project.slug === "link-hub") && (
                <div className={`relative w-full max-w-sm lg:w-64 border border-border bg-card p-2 ${project.slug === 'led-watch' ? 'rounded-full aspect-square' : project.slug === 'cricket-score' || project.slug === 'link-hub' ? 'rounded-sm border-t-[12px] border-x-4 border-b-8 border-muted' : 'rounded-lg rotate-3'} hover:rotate-0 transition-transform duration-500 shadow-2xl shadow-acid/5 overflow-hidden group flex items-center justify-center`}>
                   {(project.slug === 'cricket-score' || project.slug === 'link-hub') && (
                     <div className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-12 h-1 bg-border/20 rounded-full z-50" />
                   )}
                   <div className="absolute inset-0 bg-acid/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                   <img 
                    src={
                      project.slug === "techypad" ? "/projects/techypad-hero.png" : 
                      project.slug === "line-following-robot" ? "/projects/robot-hero.png" :
                      project.slug === "led-watch" ? "/projects/watch-hero.png" :
                      project.slug === "pizzahut-menu" ? "/projects/pizzahut-hero.png" :
                      project.slug === "cricket-score" ? "/projects/cricket-hero.png" :
                      "/projects/linkhub-hero.png"
                    } 
                    alt={project.title} 
                    className={`w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 ${project.slug === 'led-watch' ? 'object-contain scale-90' : ''}`}
                   />
                   {project.slug === 'led-watch' && (
                     <div className="absolute inset-0 rounded-full border-2 border-acid/20 animate-pulse pointer-events-none" />
                   )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Sidebar Info */}
          <aside className="lg:col-span-4 space-y-12">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-acid mb-4">// metadata</div>
              <div className="space-y-6">
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Year</div>
                  <div className="font-display text-xl font-bold">{project.year}</div>
                </div>
                <div>
                  <div className="text-muted-foreground text-xs uppercase tracking-widest mb-1">Role</div>
                  <div className="font-display text-xl font-bold">{project.role}</div>
                </div>
              </div>
            </div>

            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-acid mb-4">// tech_stack</div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="font-mono text-[10px] px-3 py-1.5 border border-border bg-card uppercase tracking-wider">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="font-mono text-[11px] uppercase tracking-widest text-acid mb-4">// performance</div>
              <div className="grid grid-cols-2 gap-6">
                {project.highlights.map((h) => (
                  <div key={h.label}>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{h.label}</div>
                    <div className="font-display font-bold text-xl text-acid mt-1">{h.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Detailed Content */}
          <article className="lg:col-span-8 space-y-20">
            {/* Overview Section */}
            <div className="space-y-10">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-6">// overview</div>
                <p className="text-2xl md:text-4xl font-display font-bold leading-tight tracking-tight">
                  {project.overview}
                </p>
              </div>

              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 bg-acid text-primary-foreground px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-acid-glow transition-all acid-glow w-full sm:w-auto"
                >
                  {project.slug === 'link-hub' ? 'Visit Live Hub' : project.tag.includes('REAL-TIME') ? 'View Live Dashboard' : project.tag.includes('WEB') ? 'View Live Website' : 'Visit Official Website'}
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              )}
            </div>

            {/* Engineering Challenge Section */}
            {project.challenge && (
              <div className="bg-surface border border-border p-8 md:p-12 space-y-6">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid">
                  {project.tag.includes('REAL-TIME') ? '// system_design' : project.tag.includes('WEB') ? '// user_experience_strategy' : '// engineering_challenge'}
                </div>
                <p className="text-xl md:text-2xl font-display font-semibold leading-snug">
                  {project.challenge}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[10px] text-muted-foreground uppercase tracking-widest pt-4">
                  {project.tag.includes('REAL-TIME') ? (
                    <>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> WebSocket Broadcast</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> Optimistic Updates</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> Concurrent Observer Sync</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> Low-Latency Streaming</div>
                    </>
                  ) : project.tag.includes('WEB') ? (
                    <>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> Craving Triggers</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> Mobile-First UI</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> 60FPS Transitions</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> One-Handed Flow</div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> Symmetric Routing</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> Ultra-Low Leakage</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> Bespoke Enclosure</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> Multiplexed Control</div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Specialized Section: Management (CMS) */}
            {project.management && (
              <div className="bg-surface border border-border p-8 md:p-12 space-y-6">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid">// dynamic_management</div>
                <p className="text-xl md:text-2xl font-display font-semibold leading-snug">
                  {project.management}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[10px] text-muted-foreground uppercase tracking-widest pt-4">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> Decoupled Data</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> Rapid Scaling</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> Zero-Code Updates</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> Modular Architecture</div>
                </div>
              </div>
            )}

            {/* Specialized Section: Experience (UX) */}
            {project.experience && (
              <div className="bg-surface border border-border p-8 md:p-12 space-y-6">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid">// user_experience</div>
                <p className="text-xl md:text-2xl font-display font-semibold leading-snug">
                  {project.experience}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[10px] text-muted-foreground uppercase tracking-widest pt-4">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> Zero Friction</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> One-Handed Layout</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> Instant Launch</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-acid" /> Micro-Animations</div>
                </div>
              </div>
            )}

            {/* Gallery Grid (Project Specific) */}
            {project.gallery && (
              <div className="space-y-10">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid">
                  {project.tag.includes('WEB') ? '// interface_showcase' : '// product_gallery'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="group relative border border-border bg-card overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-acid/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 z-20 font-mono text-[10px] uppercase tracking-widest bg-background/80 px-2 py-1 border border-border backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                        {img.caption}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">the_problem</div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div className="space-y-4">
                <div className="font-mono text-xs uppercase tracking-widest text-acid">the_solution</div>
                <p className="text-foreground leading-relaxed font-medium">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Media Section Upgrade */}
            <div className="space-y-6">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid">// feature_demo</div>
              <div className={`aspect-video bg-card border border-border relative group overflow-hidden cursor-pointer ${project.tag.includes('WEB') ? 'p-4' : ''}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-acid/20 to-transparent opacity-50 z-10" />
                
                {project.tag.includes('WEB') && (
                  <div className="absolute top-0 left-0 w-full h-8 bg-surface border-b border-border z-40 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-border" />
                      <div className="w-2.5 h-2.5 rounded-full bg-border" />
                      <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    </div>
                    <div className="flex-1 bg-background/50 rounded h-5 flex items-center px-3 font-mono text-[8px] text-muted-foreground">
                      https://{project.slug}.dev
                    </div>
                  </div>
                )}

                {project.slug === "techypad" ? (
                  <img 
                    src="/projects/techypad-lifestyle.png" 
                    alt="Demo Preview" 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                ) : project.slug === "line-following-robot" ? (
                  <img 
                    src="/projects/robot-track.png" 
                    alt="Track Test" 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                ) : project.slug === "led-watch" ? (
                  <img 
                    src="/projects/watch-hero.png" 
                    alt="Watch Demo" 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                ) : project.slug === "pizzahut-menu" ? (
                  <img 
                    src="/projects/pizzahut-hero.png" 
                    alt="Pizza Hut UI Demo" 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                ) : project.slug === "cricket-score" ? (
                   <img 
                    src="/projects/cricket-hero.png" 
                    alt="Cricket Live Demo" 
                    className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest border border-border px-4 py-2">
                      project_media_placeholder.mp4
                    </div>
                  </div>
                )}
                
                {project.slug === 'cricket-score' && (
                  <div className="absolute bottom-6 left-6 z-40 font-mono text-[9px] text-acid bg-background/90 p-4 border border-acid/20 backdrop-blur-sm max-w-[200px] hidden md:block">
                    <div className="flex items-center gap-2 mb-2 text-[8px] text-muted-foreground uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-acid animate-ping" />
                      Live Stream log
                    </div>
                    <div className="space-y-1 opacity-80">
                      <div>[09:41:22] BALL_SYNC: SUCCESS</div>
                      <div>[09:41:22] DB_BROADCAST: OK</div>
                      <div>[09:41:23] LATENCY: 84ms</div>
                      <div className="text-white">[09:41:24] 4 RUNS SCORED!</div>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center z-30">
                  <div className="w-20 h-20 rounded-full bg-background/40 backdrop-blur-md border border-acid/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-acid/20 transition-all duration-500">
                    <Play className="w-8 h-8 text-acid fill-acid" />
                  </div>
                </div>

                <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />
                <CircuitTraces />
              </div>
              <p className="text-xs font-mono text-muted-foreground text-center italic tracking-widest">
                {
                  project.slug === "line-following-robot" ? "[Real-time High-Speed Track Test]" : 
                  project.slug === "led-watch" ? "[Real-Time LED Animation Engine]" :
                  project.slug === "pizzahut-menu" ? "[High-Fidelity UI Interaction Demo]" :
                  project.slug === "cricket-score" ? "[Sub-Second Real-Time Data Streaming]" :
                  "[click_to_play_transmission.exe]"
                }
              </p>
            </div>

            {/* Full Story */}
            <div className="space-y-8">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid">// process_&_execution</div>
              <div className="space-y-6">
                {project.story.map((p, i) => (
                  <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-20 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h4 className="font-display text-2xl font-bold mb-2">Impressed by this work?</h4>
                <p className="text-muted-foreground">Let's talk about how I can bring this energy to your next project.</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 border border-acid/30 text-acid px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-acid hover:text-primary-foreground transition-all w-full sm:w-auto"
                  >
                    Official Site
                    <Globe className="w-4 h-4" />
                  </a>
                )}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-acid text-primary-foreground px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-acid-glow transition-all acid-glow w-full sm:w-auto"
                >
                  start_conversation
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Next Project Link */}
            <div className="pt-10 flex justify-end">
              <Link
                to="/work/$slug"
                params={{ slug: next.slug }}
                className="group flex flex-col items-end gap-2"
              >
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.3em]">Next project</span>
                <span className="font-display text-3xl font-bold group-hover:text-acid transition-colors">{next.title} →</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
