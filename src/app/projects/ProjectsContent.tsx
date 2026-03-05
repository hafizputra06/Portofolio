"use client";

import { useState } from "react";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { projects, categories, Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsContent() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category.includes(activeCategory as "web-app" | "php" | "laravel" | "freelance"));

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white">
                My Projects
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-slate-600 dark:text-slate-400 text-center max-w-2xl mx-auto mb-12">
                Here are some of the projects I&apos;ve worked on, showcasing my expertise
                in Laravel, PHP, and modern web technologies.
              </p>
            </ScrollReveal>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={cn(
                    "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
                    activeCategory === cat.value
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                      : "bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 hover:bg-blue-100 dark:hover:bg-slate-600 border-2 border-transparent hover:border-blue-300 dark:hover:border-slate-500"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 50}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No projects found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card hover className="overflow-hidden p-0 group h-full">
      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
        <Code2 className="w-16 h-16 text-primary/50 group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6 flex flex-col h-[calc(100%-aspect-video)]">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {project.description}
        </p>

        <div className="flex gap-3 pt-4 border-t border-border">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
