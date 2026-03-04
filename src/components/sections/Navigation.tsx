"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200/50 dark:border-slate-700/50 py-3 shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold">
            <span className="text-blue-600 dark:text-blue-400">&lt;</span>
            <span className="text-slate-800 dark:text-white">Hi, iam Hafiz</span>
            <span className="text-blue-600 dark:text-blue-400">/&gt;</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                pathname === link.href
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                  : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-800"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={cn(
              "relative rounded-xl p-2.5 transition-all duration-300 group overflow-hidden",
              "hover:bg-gradient-to-br hover:shadow-lg",
              theme === "dark" 
                ? "hover:from-amber-500/20 hover:to-yellow-500/20 hover:shadow-amber-500/20" 
                : "hover:from-blue-500/20 hover:to-cyan-500/20 hover:shadow-blue-500/20"
            )}
            aria-label="Toggle theme"
          >
            <div className="relative z-10 transition-transform duration-500 group-hover:rotate-180">
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-amber-500" />
              ) : (
                <Moon className="h-5 w-5 text-blue-600" />
              )}
            </div>
            <div className={cn(
              "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              theme === "dark" 
                ? "bg-gradient-to-br from-amber-500/10 to-yellow-500/10" 
                : "bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
            )} />
          </button>

          <button
            className="md:hidden rounded-xl p-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-slate-800 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-slate-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-slate-200/50 dark:border-slate-700/50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg md:hidden">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={cn(
                  "px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200",
                  pathname === link.href
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                    : "text-slate-600 dark:text-slate-400"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
