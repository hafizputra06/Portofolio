"use client";

import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function ContactPreview() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how we can work together.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-8">
          <ScrollReveal delay={100}>
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span>hello@example.com</span>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <span>Jakarta, Indonesia</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-white/10 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-white/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="text-center mt-12">
          <a href="/contact">
            <button className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors">
              Send a Message
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
