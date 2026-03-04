"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { experiences } from "@/lib/data/portfolio";
import { Briefcase } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-cyan-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              <Briefcase className="w-4 h-4" />
              Experience
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Experience History
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.year} delay={index * 100}>
              <div className="relative pl-10 pb-10 last:pb-0">
                <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 z-10" />
                {index !== experiences.length - 1 && (
                  <div className="absolute left-2 top-7 w-0.5 h-full bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-700 dark:to-slate-800" />
                )}

                <div className="ml-4 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {exp.year}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium mt-1">
                    {exp.company}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
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
