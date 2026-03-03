import { Metadata } from "next";
import { ProjectsContent } from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects | Laravel & PHP Developer",
  description: "Browse through my portfolio of web applications, APIs, and open-source projects.",
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
