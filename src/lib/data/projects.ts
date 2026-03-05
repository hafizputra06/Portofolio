export interface Project {
  id: string;
  title: string;
  description: string;
  category: ("web-app" | "php" | "laravel" | "freelance")[];
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "SIKAWAI",
    description: "A full featured employee attendance system with admin dashboard, attendance tracking, and reporting.",
    category: ["web-app", "php"],
    techStack: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/projects/ecommerce.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "SIRAPOT",
    description: "A full featured student reporting system with admin dashboard, attendance system, and reporting for student and teacher.",
    category: ["laravel", "php", "web-app"],
    techStack: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/projects/api.jpg",
    liveUrl: "https://example.com",
  },
  {
    id: "3",
    title: "SaaS Dashboard",
    description: "Analytics dashboard for tracking business metrics with charts, reports, and data export features.",
    category: ["freelance"],
    techStack: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"],
    image: "/projects/dashboard.jpg",
    liveUrl: "https://example.com",
  },
  {
    id: "4",
    title: "Blog CMS",
    description: "Content management system for blogging with markdown support, SEO optimization, and media management.",
    category: ["laravel"],
    techStack: ["Laravel", "Vue.js", "MySQL", "AWS S3"],
    image: "/projects/blog.jpg",
    liveUrl: "https://example.com",
  },
  {
    id: "5",
    title: "Laravel Package: CSV Export",
    description: "Open source Laravel package for easy CSV export functionality with customizable columns and formatting.",
    category: ["php"],
    techStack: ["PHP", "Laravel", "Composer"],
    image: "/projects/package.jpg",
    liveUrl: "https://example.com",
  },
];

export const categories = [
  { value: "all", label: "All Projects" },
  { value: "web-app", label: "Web App" },
  { value: "php", label: "PHP" },
  { value: "laravel", label: "Laravel" },
  { value: "freelance", label: "Freelance" },
];
