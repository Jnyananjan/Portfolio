import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
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
          { title: `${loaderData.project.title} — Builder.exe` },
          { name: "description", content: loaderData.project.blurb },
          { property: "og:title", content: `${loaderData.project.title} — Builder.exe` },
          { property: "og:description", content: loaderData.project.blurb },
        ]
      : [{ title: "Project — Builder.exe" }],
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
            <div className="lg:col-span-9">
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">
                [{project.n}] {project.tag}
              </div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-6xl md:text-8xl xl:text-9xl font-extrabold tracking-tighter leading-[0.85]"
              >
                {project.title}
              </motion.h1>
            </div>
            <div className="lg:col-span-3 flex justify-start lg:justify-end">
              <div className="w-20 h-20 border border-acid/40 flex items-center justify-center text-acid acid-glow">
                <Icon className="w-9 h-9" />
              </div>
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
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-6">// overview</div>
              <p className="text-2xl md:text-3xl font-display font-bold leading-tight tracking-tight">
                {project.overview}
              </p>
            </div>

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

            {/* Visuals Placeholder */}
            <div className="aspect-video bg-card border border-border relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-acid/10 to-transparent opacity-50" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest border border-border px-4 py-2">
                    project_media_placeholder.mp4
                  </div>
               </div>
               <CircuitTraces />
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
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-acid text-primary-foreground px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-acid-glow transition-all acid-glow"
                >
                  start_conversation
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/work/$slug"
                  params={{ slug: next.slug }}
                  className="inline-flex items-center gap-3 border border-border px-8 py-4 font-mono text-sm uppercase tracking-widest hover:border-acid hover:text-acid transition-colors"
                >
                  next: {next.title}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
