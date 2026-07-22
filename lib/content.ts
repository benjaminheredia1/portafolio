// Single source of truth for portfolio content.
// When projects become dynamic, swap `projects` for a DB fetch and keep the same shape.

export const profile = {
  name: "Benjamin Heredia",
  role: "Full-Stack Engineer",
  location: "Santa Cruz de la Sierra, Bolivia",
  email: "benjaherediaruiz@gmail.com",
  github: "https://github.com/benjaminheredia1",
  tagline:
    "Full-stack systems and AI integrations, shipped — hospital platforms, academic systems, self-service bots.",
  coreStack: [
    "Next.js",
    "NestJS",
    "Laravel",
    "React",
    "PostgreSQL",
    "LangChain",
    "n8n",
  ],
};

export interface Experience {
  hash: string;
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  tech: string[];
}

export const experience: Experience[] = [
  {
    hash: "f2a91c4",
    company: "Nexus Patio Tech — MotoClick",
    role: "Software Engineer Jr",
    period: "Feb 2026 — Jun 2026",
    location: "Santa Cruz",
    summary:
      "Took the self-service bot from spec to production — LLM-driven conversation flow wired into n8n workflows, deployed on AWS and run on Kubernetes.",
    tech: ["NestJS", "React", "Angular", "Flutter", "n8n", "AWS", "Kubernetes"],
  },
  {
    hash: "d7e03b8",
    company: "PuntoCom Srl",
    role: "Software Engineer Jr",
    period: "Jul 2025 — Feb 2026",
    location: "Santa Cruz",
    // TODO: name the actual LangChain decision-support capability (e.g. what it flags/summarizes) once confirmed — sharpens this further.
    summary:
      "Built the patient management platform used in day-to-day clinical operations, then layered in LangChain-based decision-support for staff.",
    tech: ["Laravel", "React", "NestJS", "n8n", "Make", "LangChain"],
  },
  {
    hash: "9c4f7aa",
    company: "UTEPSA",
    role: "Systems Assistant → Developer",
    period: "Jun 2024 — Jan 2026",
    location: "Santa Cruz",
    summary:
      "Started in help desk, moved into building UTEPSA's academic systems solo. Automated department workflows with n8n and Selenium, and added LangChain + Google SDK integrations on top.",
    tech: ["Vue", "React", "Laravel", "Python", "n8n", "Selenium"],
  },
  {
    hash: "b1d58e2",
    company: "Boring Ventures",
    role: "Fullstack AI Engineer Jr",
    period: "Sep 2025 — Dec 2025",
    location: "Cochabamba",
    // TODO: name a specific shipped product here if you can share it — strongest fix for this entry.
    summary:
      "Took custom Next.js + Supabase products from client requirements to a deployed system, solo — architecture calls included.",
    tech: ["Next.js", "Supabase", "TypeScript"],
  },
  {
    hash: "6e8a1f0",
    company: "Rocaz Soluciones",
    role: "Software Engineering Intern",
    period: "Mar 2025 — Jul 2025",
    location: "Santa Cruz",
    summary:
      "Kept production systems alive: Hostinger server management, and debugging issues in codebases with zero documentation.",
    tech: ["Laravel", "MySQL", "Hostinger"],
  },
  {
    hash: "3a2c9d6",
    company: "Desarrollamelo",
    role: "Software Engineer Jr",
    period: "Sep 2024 — Jun 2025",
    location: "Santa Cruz",
    summary:
      "Shipped features and deployments across hospital systems, ERPs and academic platforms — refactored the worst legacy segments for up to 80% improvement.",
    tech: ["Laravel", "React", "MySQL"],
  },
];

export interface Project {
  title: string;
  org: string;
  year: string;
  description: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    title: "MotoClick self-service AI bot",
    org: "Nexus Patio Tech",
    year: "2026",
    description:
      "AI-powered bot that handles customer interaction end to end, built on LLM integrations and n8n workflow automations, deployed on AWS.",
    tech: ["NestJS", "React", "n8n", "LLMs", "AWS"],
  },
  {
    title: "Clinical management platform",
    org: "PuntoCom Srl",
    year: "2025",
    // TODO: same as experience[1] — name the actual decision-support capability once confirmed.
    description:
      "Patient management platform for clinics, with LangChain-based decision-support layered in for staff.",
    tech: ["Laravel", "React", "NestJS", "LangChain"],
  },
  {
    title: "Academic systems & automations",
    org: "UTEPSA",
    year: "2024 — 2026",
    description:
      "Academic systems built independently from scratch, plus n8n and Selenium automations that removed manual work across departments.",
    tech: ["Vue", "Laravel", "Python", "n8n", "Selenium"],
  },
  {
    title: "Hospital & ERP systems",
    org: "Desarrollamelo",
    year: "2024 — 2025",
    description:
      "Feature development and deep refactors across hospital information systems and ERPs — legacy segments improved by up to 80%.",
    tech: ["Laravel", "React", "MySQL"],
  },
  {
    title: "Custom systems on Next.js + Supabase",
    org: "Boring Ventures",
    year: "2025",
    // TODO: same as experience[3] — name a specific product if you can share it.
    description:
      "Custom Next.js + Supabase products taken solo from client requirements to a deployed system — architecture decisions included.",
    tech: ["Next.js", "Supabase", "TypeScript"],
  },
  {
    title: "Production maintenance & recovery",
    org: "Rocaz Soluciones",
    year: "2025",
    description:
      "Kept live systems healthy: resolving production errors, managing Hostinger servers and troubleshooting undocumented legacy code.",
    tech: ["Laravel", "MySQL"],
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "Vue", "Angular", "Flutter", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["NestJS", "Laravel", "Express", "Django", "Node.js", "Python"],
  },
  {
    label: "Data & Infra",
    items: [
      "PostgreSQL",
      "MySQL",
      "Prisma",
      "Docker",
      "AWS",
      "Kubernetes",
    ],
  },
  {
    label: "AI & Automation",
    items: ["LangChain", "LLM APIs", "n8n", "Make", "Selenium"],
  },
];

export const highlights = [
  "ICPC participant",
  "Taught the university's basic Python course",
  "CCNA coursework",
  "CTF & competitive programming",
];
