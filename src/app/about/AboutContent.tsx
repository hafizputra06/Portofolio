"use client";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SkillsSection } from "@/components/sections/About";
import { ExperienceTimeline } from "@/components/sections/Experience";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Download } from "lucide-react";

export function AboutContent() {
  return (
    <>
      <Navigation />
      <main className="pt-24">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                About Me
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
                I&apos;m a passionate Laravel & PHP developer with 1+ years of experience
                building scalable web applications.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <ScrollReveal>
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <span className="text-8xl font-bold text-white">DEV</span>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h2 className="text-2xl font-bold mb-4">
                  Turning Ideas Into Reality
                </h2>
                <p className="text-muted-foreground mb-6">
                  I specialize in building robust, scalable web applications using Laravel
                  and modern frontend technologies. My approach combines technical expertise
                  with a keen eye for design, ensuring that every project I work on is
                  not only functional but also visually appealing and user friendly.
                </p>
                <Button variant="outline">
                  <Download className="mr-2 w-4 h-4" />
                  Download CV
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <SkillsSection />
        <ExperienceTimeline />
      </main>
      <Footer />
    </>
  );
}
