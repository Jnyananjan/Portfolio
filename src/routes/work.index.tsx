import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PROJECTS } from "@/data/projects";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Builder.exe" },
      { name: "description", content: "All projects: TechyPad, Line-Following Robot, LED Watch, Pizza Hut Web Menu, Cricket Score Display, and Link Hub Website." },
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
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch border-t border-border pt-12">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex h-full"
            >
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="group relative border border-border bg-card overflow-hidden hover:border-acid/60 transition-all duration-500 flex flex-col w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-acid/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 md:p-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">[{p.n}] {p.tag}</span>
                    <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-acid group-hover:text-acid transition-colors flex-shrink-0">
                      <p.icon className="w-4 h-4" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 group-hover:text-acid transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-md line-clamp-3">{p.blurb}</p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-acid border border-acid/20 px-3 py-1.5 group-hover:bg-acid group-hover:text-primary-foreground transition-all">
                      view details
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">[{p.year}]</span>
                  </div>
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
