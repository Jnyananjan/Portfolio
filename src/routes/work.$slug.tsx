import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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

      <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-4 space-y-8">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-acid mb-2">// year</div>
            <div className="font-display text-2xl font-bold">{project.year}</div>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-acid mb-2">// role</div>
            <div className="font-display text-xl font-semibold">{project.role}</div>
          </div>
          <div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-acid mb-2">// stack</div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="font-mono text-xs px-3 py-1 border border-border bg-card">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
            {project.highlights.map((h) => (
              <div key={h.label}>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{h.label}</div>
                <div className="font-display font-bold text-acid mt-1">{h.value}</div>
              </div>
            ))}
          </div>
        </aside>

        <article className="lg:col-span-8 space-y-6">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid">// the_story</div>
          {project.story.map((p, i) => (
            <p key={i} className={i === 0 ? "text-2xl md:text-3xl font-display font-semibold leading-snug tracking-tight" : "text-lg text-muted-foreground leading-relaxed"}>
              {p}
            </p>
          ))}

          <div className="pt-10 mt-10 border-t border-border flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-acid text-primary-foreground px-6 py-3 font-mono text-sm uppercase tracking-widest hover:bg-acid-glow transition-all acid-glow"
            >
              talk about this
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className="inline-flex items-center gap-3 border border-border px-6 py-3 font-mono text-sm uppercase tracking-widest hover:border-acid hover:text-acid transition-colors"
            >
              next: {next.title}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
