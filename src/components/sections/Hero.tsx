"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const typingTexts = [
  "Building Scalable Apps with Laravel",
  "Creating Beautiful Web Experiences",
  "Developing RESTful APIs",
  "Crafting Clean Code Solutions",
];

export function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = typingTexts[textIndex];
    const timeout = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(text.substring(0, currentText.length + 1));
        if (currentText === text) {
          setIsDeleting(true);
          setTimeout(() => {}, 2000);
        }
      } else {
        setCurrentText(text.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <ScrollReveal>
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Hello, I&apos;m a Developer
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Modern Web
              </span>
              <br />
              Applications
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="h-8 md:h-10 mb-6">
              <span className="text-xl md:text-2xl text-muted-foreground">
                {currentText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              I transform ideas into elegant, scalable web applications using 
              modern technologies. Let&apos;s build something amazing together.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <Button size="lg" className="group">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <Download className="mr-2 w-4 h-4" />
                Download CV
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
