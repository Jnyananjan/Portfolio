import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PROJECTS } from "@/data/projects";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Jnyananjan" },
      { name: "description", content: "All projects: TechyPad, Line-Following Robot, LED Watch, Pizza Hut Web Menu, Cricket Score Display, and Link Hub Website." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <section className="pt-24 sm:pt-32 md:pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">
          // index_of /work
        </div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] sm:leading-none">
          everything<br />
          <span className="italic text-muted-foreground/70">i've made.</span>
        </h1>
        <p className="mt-8 max-w-xl text-muted-foreground">
          A running log of hardware, software, and the seams in between. Click any entry to read the full story.
        </p>
      </section>

      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="flex flex-col border-t border-border mt-12">
          {PROJECTS.map((p) => (
            <div
              key={p.slug}
              className="w-full border-b border-border group"
            >
              <Link
                to="/work/$slug"
                params={{ slug: p.slug }}
                className="relative overflow-hidden block py-8 md:py-12 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-acid/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 px-4 sm:px-8">
                  {/* Left Icon (PC Only, Smaller) */}
                  <div className="hidden md:flex w-10 h-10 border border-border items-center justify-center group-hover:border-acid group-hover:text-acid transition-colors rounded-full shrink-0">
                    <p.icon className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* PC Metadata Row (md+) */}
                    <div className="hidden md:flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                      <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">[{p.year.split(' ')[0]}]</span>
                      <span className="font-mono text-[10px] text-acid tracking-widest uppercase">[{p.n}]</span>
                      <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{p.tag}</span>
                      {p.badge && (
                        <div className="flex px-2 py-0.5 bg-acid/5 border border-acid/20 text-acid font-mono text-[8px] uppercase tracking-tighter rounded items-center gap-1.5">
                           <span className="w-1 h-1 rounded-full bg-acid animate-pulse" />
                           {p.badge}
                        </div>
                      )}
                    </div>

                    {/* Mobile Metadata Row (default, hidden on md+) */}
                    <div className="flex md:hidden items-center gap-4 mb-3">
                      <span className="font-mono text-[10px] text-acid tracking-widest uppercase">[{p.n}]</span>
                      <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{p.tag}</span>
                    </div>

                    {/* Title and Blurb */}
                    <div className="space-y-1.5 md:space-y-3 mb-4 md:mb-5">
                      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter group-hover:text-acid transition-colors leading-none">
                        {p.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed max-w-4xl line-clamp-2">
                        {p.blurb}
                      </p>
                    </div>

                    {/* Bottom Controls Row */}
                    <div className="flex flex-row items-center justify-between gap-6 pt-3 md:pt-4 border-t border-border/60">
                      <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest text-acid border border-acid/20 px-2 py-1 md:px-3 md:py-1.5 group-hover:bg-acid group-hover:text-primary-foreground transition-all">
                        view_details
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {p.websiteUrl && (
                          <a 
                            href={p.websiteUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex px-2 py-1 md:px-3 md:py-1.5 bg-foreground/5 border border-border hover:border-acid hover:text-acid text-muted-foreground font-mono text-[8px] md:text-[9px] uppercase tracking-widest rounded items-center gap-1 transition-all"
                          >
                            live <ArrowUpRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                          </a>
                        )}
                        {p.githubUrl && (
                          <a 
                            href={p.githubUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex px-2 py-1 md:px-3 md:py-1.5 bg-foreground/5 border border-border hover:border-acid hover:text-acid text-muted-foreground font-mono text-[8px] md:text-[9px] uppercase tracking-widest rounded items-center gap-1 transition-all"
                          >
                            github <ArrowUpRight className="w-2.5 h-2.5 md:w-3 md:h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
