"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { experiences } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Work Experience
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.year} delay={index * 100}>
              <div className="relative pl-8 pb-12 last:pb-0">
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary" />
                {index !== experiences.length - 1 && (
                  <div className="absolute left-1.5 top-4 w-0.5 h-full bg-border" />
                )}

                <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <span className="text-sm text-primary font-medium">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                  <p className="text-muted-foreground font-medium">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground mt-3">
                    {exp.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
