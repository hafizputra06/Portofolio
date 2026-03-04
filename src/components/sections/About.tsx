"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { skills } from "@/lib/data/portfolio";
import { Code2, Zap, Shield } from "lucide-react";

function AnimatedFeatureCard({
  icon: Icon,
  title,
  subtitle,
  delay,
  accentColor,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  delay: number;
  accentColor: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: delay / 1000 });

    tl.to(cardRef.current, {
      y: -8,
      duration: 1.5,
      ease: "power1.inOut",
    })
      .to(cardRef.current, {
        y: 0,
        duration: 1.5,
        ease: "power1.inOut",
      });

    gsap.to(iconRef.current, {
      scale: 1.15,
      duration: 0.8,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(glowRef.current, {
      opacity: 0.6,
      scale: 1.1,
      duration: 1.2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, { scope: cardRef });

  return (
    <div
      ref={cardRef}
      className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 relative overflow-hidden"
    >
      <div
        ref={glowRef}
        className={`absolute inset-0 bg-gradient-to-br ${accentColor} opacity-20 blur-xl transition-opacity`}
      />
      <div
        ref={iconRef}
        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${accentColor} flex items-center justify-center mb-2 relative z-10`}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>
      <p className="font-semibold text-slate-900 dark:text-white relative z-10">{title}</p>
      <p className="text-sm text-slate-500 dark:text-slate-400 relative z-10">{subtitle}</p>
    </div>
  );
}

export function AboutPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Crafting Digital Excellence
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Passionate Laravel developer with a keen eye for design and performance.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl blur-2xl opacity-20" />
              <div className="relative w-72 h-72 mx-auto bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
                <span className="text-7xl font-bold text-white">DEV</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              I&apos;m a Laravel & PHP Developer
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              With over 1 years of experience in web development, I specialize in
              building scalable applications using Laravel, PHP and modern frontend technologies.
              I love turning complex problems into simple, beautiful solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <AnimatedFeatureCard
                icon={Code2}
                title="Clean Code"
                subtitle="PSR-12 Standards"
                delay={0}
                accentColor="from-blue-500 to-blue-600"
              />
              <AnimatedFeatureCard
                icon={Shield}
                title="Secure"
                subtitle="Best Practices"
                delay={1.5}
                accentColor="from-cyan-500 to-cyan-600"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {["Laravel", "PHP", "HTML", "MySQL", "Tailwind CSS"].map((skill) => (
                <Badge key={skill} variant="default" className="px-4 py-1.5">
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
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-slate-900/50" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              Skills
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Technical Expertise
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 30}>
              <div className="px-6 py-3 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-default">
                <span className="font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
