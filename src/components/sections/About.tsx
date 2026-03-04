"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { AnimatedProfileImage, DEFAULT_IMAGE } from "./ProfileImage";
import { skills } from "@/lib/data/portfolio";
import { Zap } from "lucide-react";

function AnimatedSkillBadge({
  name,
  index,
}: {
  name: string;
  index: number;
}) {
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(badgeRef.current, {
      y: -4,
      duration: 1.2 + (index * 0.08),
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, { scope: badgeRef });

  return (
    <div
      ref={badgeRef}
      className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl transition-all duration-300 cursor-default"
    >
      <span className="font-semibold text-slate-700 dark:text-slate-200">
        {name}
      </span>
    </div>
  );
}

function CleanCodeAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<HTMLDivElement[]>([]);

  const codeLines = [
    { indent: 0, color: "text-purple-500", text: "function" },
    { indent: 1, color: "text-blue-500", text: "build" },
    { indent: 2, color: "text-yellow-500", text: "()" },
    { indent: 0, color: "text-purple-500", text: "{" },
    { indent: 1, color: "text-green-500", text: "const" },
    { indent: 2, color: "text-orange-500", text: "result" },
    { indent: 2, color: "text-yellow-500", text: "=" },
    { indent: 2, color: "text-pink-500", text: "parse();" },
    { indent: 0, color: "text-purple-500", text: "}" },
  ];

  useGSAP(() => {
    linesRef.current.forEach((line, i) => {
      if (line) {
        gsap.fromTo(
          line,
          { opacity: 0.3, x: -10 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: i * 0.15,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          }
        );
      }
    });
  }, { scope: containerRef });

  return (
    <div className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 relative overflow-hidden flex flex-col h-full">
      <div
        ref={containerRef}
        className="flex-grow space-y-1 font-mono text-xs pt-2"
      >
        {codeLines.map((line, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) linesRef.current[i] = el;
            }}
            className={`flex ${line.indent > 0 ? `pl-${line.indent * 4}` : ""}`}
          >
            <span className="text-slate-400 w-4">{(i + 1).toString().padStart(2, "0")}</span>
            <span className={line.color}>{line.text}</span>
          </div>
        ))}
      </div>
      <div className="pt-2">
        <p className="font-semibold text-slate-900 dark:text-white text-sm">Clean Code</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">PSR-12 Standards</p>
      </div>
    </div>
  );
}

function SecureAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shieldRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const check1Ref = useRef<HTMLDivElement>(null);
  const check2Ref = useRef<HTMLDivElement>(null);
  const check3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(shieldRef.current, {
      y: -4,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(glowRef.current, {
      opacity: 0.6,
      scale: 1.1,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    const checks = [check1Ref.current, check2Ref.current, check3Ref.current];
    checks.forEach((check, i) => {
      if (check) {
        gsap.fromTo(
          check,
          { opacity: 0.4, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: i * 0.2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          }
        );
      }
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 relative overflow-hidden flex flex-col h-full"
    >
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="relative mb-3">
          <div
            ref={glowRef}
            className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-30 blur-xl"
          />
          <div
            ref={shieldRef}
            className="relative w-16 h-16 flex items-center justify-center"
          >
            <svg
              className="w-16 h-16 text-cyan-500 drop-shadow-lg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-1.5">
          <div
            ref={check1Ref}
            className="flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded"
          >
            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            SQLi
          </div>
          <div
            ref={check2Ref}
            className="flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded"
          >
            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            XSS
          </div>
          <div
            ref={check3Ref}
            className="flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded"
          >
            <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            CSRF
          </div>
        </div>
      </div>

      <div className="pt-2">
        <p className="font-semibold text-slate-900 dark:text-white text-sm">Secure</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">Best Practices</p>
      </div>
    </div>
  );
}

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
          <AnimatedProfileImage src={DEFAULT_IMAGE} alt="Hafiz Rahadian Putra" />

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
              <CleanCodeAnimation />
              <SecureAnimation />
            </div>

            <div className="flex flex-wrap gap-2">
              {["Laravel", "PHP", "HTML", "MySQL", "Tailwind CSS"].map((skill, index) => (
                <AnimatedSkillBadge key={skill} name={skill} index={index} />
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
            <AnimatedSkillBadge key={skill.name} name={skill.name} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
