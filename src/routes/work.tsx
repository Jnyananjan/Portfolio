import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PROJECTS } from "@/data/projects";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Builder.exe" },
      { name: "description", content: "All projects: TechyPad macropad startup, line-following robot, AI-built sites, and AI/ML coursework." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <SiteNav />
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">
          // index_of /work
        </div>
        <h1 className="font-display text-6xl md:text-8xl font-extrabold tracking-tighter leading-none">
          everything<br />
          <span className="italic text-muted-foreground/70">i've made.</span>
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground">
          A running log of hardware, software, and the seams in between. Click any entry to read the full story.
        </p>
      </section>

      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="border-t border-border">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group grid grid-cols-12 gap-4 items-center py-8 border-b border-border hover:bg-acid/5 transition-colors px-2"
              >
                <div className="col-span-2 font-mono text-xs text-muted-foreground">[{p.n}]</div>
                <div className="col-span-7 md:col-span-6">
                  <div className="font-display text-3xl md:text-5xl font-bold tracking-tight group-hover:text-acid transition-colors">
                    {p.title}
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mt-2">{p.tag}</div>
                </div>
                <div className="hidden md:block col-span-3 font-mono text-xs text-muted-foreground">{p.year}</div>
                <div className="col-span-3 md:col-span-1 flex justify-end">
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-acid group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
