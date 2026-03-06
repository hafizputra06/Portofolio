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
    image: "/projects/sikawai.jpg",
    liveUrl: "/coming-soon",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "SIRAPOT",
    description: "A full featured student reporting system with admin dashboard, attendance system, and reporting for student and teacher.",
    category: ["laravel", "php", "web-app"],
    techStack: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/projects/sirapot.jpg",
    liveUrl: "/coming-soon",
  },
  {
    id: "3",
    title: "Face Recognition Attendance System",
    description: "A full featured face recognition attendance system with admin dashboard, attendance tracking, and reporting.",
    category: ["freelance", "php", "web-app"],
    techStack: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/projects/attendance.jpg",
    liveUrl: "/coming-soon",
  },
  {
    id: "4",
    title: "Student Reporting System",
    description: "A full featured student reporting system with admin dashboard, attendance system, and reporting for student and teacher build with laravel and vue.js.",
    category: ["laravel", "php", "web-app", "freelance"],
    techStack: ["Laravel", "Vue.js", "MySQL", "Tailwind CSS"],
    image: "/projects/raport.jpg",
    liveUrl: "/coming-soon",
  },
  {
    id: "5",
    title: "Portfolio Project",
    description: "A portfolio project built with Next.js and Tailwind CSS.",
    category: ["freelance", "web-app"],
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/projects/portfolio.jpg",
    liveUrl: "/coming-soon",
  },
];

export const categories = [
  { value: "all", label: "All Projects" },
  { value: "web-app", label: "Web App" },
  { value: "php", label: "PHP" },
  { value: "laravel", label: "Laravel" },
  { value: "freelance", label: "Freelance" },
];
