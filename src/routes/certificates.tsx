import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CERTIFICATES } from "../data/certificates";
import { Award, ExternalLink, Calendar } from "lucide-react";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — Jnyananjan" },
      { name: "description", content: "Verified achievements and certifications in hardware and software." },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <SiteNav />

      <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-acid mb-4">// archive — achievements</div>
        <h1 className="font-display text-6xl md:text-8xl font-extrabold tracking-tighter mb-20 leading-none">
          verified<br />
          <span className="italic text-acid">milestones.</span>
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((c) => (
            <div
              key={c.id}
              className="group relative border border-border bg-card p-8 hover:border-acid/60 transition-all"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-acid group-hover:text-acid transition-colors">
                  <Award className="w-6 h-6" />
                </div>
                {c.link && (
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-acid">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>

              <h3 className="font-display text-2xl font-bold tracking-tight mb-4 group-hover:text-acid transition-colors">
                {c.title}
              </h3>
              
              {c.image && (
                <div className="mt-6 mb-8 aspect-video overflow-hidden border border-border bg-muted/10">
                  <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-all duration-500" />
                </div>
              )}

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono uppercase tracking-wider">
                  <span className="text-acid">/</span> {c.issuer}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground/60 font-mono">
                  <Calendar className="w-3 h-3" />
                  {c.date}
                </div>
              </div>

              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-acid/40 transition-all" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-transparent group-hover:border-acid/40 transition-all" />
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
