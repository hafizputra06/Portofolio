import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/About";
import { SkillsSection } from "@/components/sections/About";
import { ExperienceTimeline } from "@/components/sections/Experience";
import { ProjectsPreview } from "@/components/sections/Projects";
import { ContactPreview } from "@/components/sections/Contact";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <AboutPreview />
        <SkillsSection />
        <ExperienceTimeline />
        <ProjectsPreview />
        <ContactPreview />
      </main>
      <Footer />
    </>
  );
}
