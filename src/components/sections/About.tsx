"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { skills } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";

export function AboutPreview() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate Laravel developer with a keen eye for design and performance.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                <span className="text-6xl font-bold text-white">DEV</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h3 className="text-2xl font-bold mb-4">
              I&apos;m a Laravel & PHP Developer
            </h3>
            <p className="text-muted-foreground mb-6">
              With over 5 years of experience in web development, I specialize in 
              building scalable applications using Laravel and modern frontend technologies. 
              I love turning complex problems into simple, beautiful solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Laravel", "PHP", "React", "MySQL", "Tailwind CSS"].map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => [...prev, skill.level]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Skills & Expertise
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 50}>
              <div className="mb-2 flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground text-sm">
                  {animatedSkills[index] || 0}%
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${animatedSkills[index] || 0}%`,
                  }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
