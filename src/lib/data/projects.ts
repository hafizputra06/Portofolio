export interface Project {
  id: string;
  title: string;
  description: string;
  category: "web-app" | "api" | "e-commerce" | "open-source";
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with admin dashboard, payment integration, and inventory management.",
    category: "e-commerce",
    techStack: ["Laravel", "React", "MySQL", "Tailwind CSS", "Stripe"],
    image: "/projects/ecommerce.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Task Management API",
    description: "RESTful API for task management with authentication, real-time notifications, and team collaboration.",
    category: "api",
    techStack: ["Laravel", "MySQL", "JWT", "WebSocket"],
    image: "/projects/api.jpg",
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "SaaS Dashboard",
    description: "Analytics dashboard for tracking business metrics with charts, reports, and data export features.",
    category: "web-app",
    techStack: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"],
    image: "/projects/dashboard.jpg",
    liveUrl: "https://example.com",
  },
  {
    id: "4",
    title: "Blog CMS",
    description: "Content management system for blogging with markdown support, SEO optimization, and media management.",
    category: "web-app",
    techStack: ["Laravel", "Vue.js", "MySQL", "AWS S3"],
    image: "/projects/blog.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "5",
    title: "Laravel Package: CSV Export",
    description: "Open source Laravel package for easy CSV export functionality with customizable columns and formatting.",
    category: "open-source",
    techStack: ["PHP", "Laravel", "Composer"],
    image: "/projects/package.jpg",
    githubUrl: "https://github.com",
  },
  {
    id: "6",
    title: "Real Estate Platform",
    description: "Property listing platform with advanced search, map integration, and agent management system.",
    category: "web-app",
    techStack: ["Laravel", "React", "MySQL", "Google Maps API"],
    image: "/projects/realestate.jpg",
    liveUrl: "https://example.com",
  },
];

export const categories = [
  { value: "all", label: "All Projects" },
  { value: "web-app", label: "Web App" },
  { value: "api", label: "API" },
  { value: "e-commerce", label: "E-Commerce" },
  { value: "open-source", label: "Open Source" },
];
