import { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Laravel & PHP Developer",
  description: "Learn more about my background, skills, and experience as a Laravel developer.",
};

export default function AboutPage() {
  return <AboutContent />;
}
