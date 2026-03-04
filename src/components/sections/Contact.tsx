"use client";

import { Mail, MapPin, Linkedin, Github, MessageCircle, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function ContactPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30 dark:opacity-10" />

      <div className="absolute top-20 -right-20 w-80 h-80 bg-white/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-cyan-400/20 dark:bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 shadow-lg">
              <MessageCircle className="w-4 h-4" />
              Contact
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Get In Touch
            </h2>
            <p className="text-blue-100 dark:text-blue-200 max-w-2xl mx-auto text-lg leading-relaxed">
              Have a project in mind? Let&apos;s discuss how we can work together.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <ScrollReveal delay={100}>
            <a
              href="mailto:hafizrahadianputra06@gmail.com"
              className="flex items-center gap-3 text-white hover:text-blue-100 transition-colors bg-white/10 dark:bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl hover:bg-white/20 dark:hover:bg-white/15 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-lg bg-white/20 dark:bg-white/10 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">hafizrahadianputra06@gmail.com</span>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex items-center gap-3 text-white bg-white/10 dark:bg-white/5 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg">
              <div className="w-10 h-10 rounded-lg bg-white/20 dark:bg-white/10 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-medium">Purwokerto, Indonesia</span>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 dark:hover:bg-white/15 hover:scale-110 transition-all shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-white/10 dark:bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 dark:hover:bg-white/15 hover:scale-110 transition-all shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </ScrollReveal>

        <div className="text-center">
          <a href="/contact">
            <button className="px-10 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:shadow-white/30 hover:scale-105 hover:-translate-y-0.5 flex items-center gap-2 mx-auto dark:bg-gradient-to-r dark:from-blue-500 dark:to-cyan-400 dark:text-white dark:hover:from-blue-600 dark:hover:to-cyan-500 dark:shadow-blue-500/25 dark:hover:shadow-blue-500/40">
              <Zap className="w-5 h-5" />
              Send a Message
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
