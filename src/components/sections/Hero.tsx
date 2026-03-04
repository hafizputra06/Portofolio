"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const typingTexts = [
  "Building Scalable Apps with Laravel and PHP",
  "Creating Beautiful Web Experiences",
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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900" />

      <div className="absolute top-20 -right-20 w-80 h-80 bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for freelance work
              <Sparkles className="w-4 h-4" />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-slate-900 dark:text-white">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                Modern Web
              </span>
              <br />
              Applications
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="h-8 md:h-10 mb-6">
              <span className="text-xl md:text-2xl text-slate-600 dark:text-slate-300">
                {currentText}
                <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mb-8">
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
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-900/50">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">1+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-slate-200 dark:bg-slate-700" />
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg dark:shadow-slate-900/50">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Projects</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
