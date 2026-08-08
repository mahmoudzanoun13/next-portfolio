export type SkillCategory =
  | "Core Languages"
  | "Frameworks & UI"
  | "Backend & DB"
  | "Tooling & API"
  | "Testing"
  | "Management & Agile";

export type Skill = {
  name: string;
  category: SkillCategory;
  svg?: string;
};

export const SKILLS_DATA: Skill[] = [
  // Core Languages
  { name: "HTML5", category: "Core Languages" },
  { name: "CSS3", category: "Core Languages" },
  { name: "Sass", category: "Core Languages" },
  { name: "JavaScript", category: "Core Languages" },
  { name: "ES6+", category: "Core Languages" },
  { name: "TypeScript", category: "Core Languages" },

  // Frameworks & UI
  { name: "React", category: "Frameworks & UI" },
  { name: "Next.js", category: "Frameworks & UI" },
  { name: "React Router", category: "Frameworks & UI" },
  { name: "Redux", category: "Frameworks & UI" },
  { name: "RTK Query", category: "Frameworks & UI" },
  { name: "Zustand", category: "Frameworks & UI" },
  { name: "Tanstack Query", category: "Frameworks & UI" },
  { name: "Nuqs", category: "Frameworks & UI" },
  { name: "React Hook Form", category: "Frameworks & UI" },
  { name: "Zod", category: "Frameworks & UI" },
  { name: "Framer Motion", category: "Frameworks & UI" },
  { name: "Bootstrap", category: "Frameworks & UI" },
  { name: "React Bootstrap", category: "Frameworks & UI" },
  { name: "Tailwind CSS", category: "Frameworks & UI" },
  { name: "Shadcn/ui", category: "Frameworks & UI" },
  { name: "MUI", category: "Frameworks & UI" },
  { name: "Styled-Components", category: "Frameworks & UI" },
  { name: "JQuery", category: "Frameworks & UI" },

  // Backend & DB
  { name: "Node.js", category: "Backend & DB" },
  { name: "Express.js", category: "Backend & DB" },
  { name: "PostgreSQL", category: "Backend & DB" },
  { name: "Prisma", category: "Backend & DB" },
  { name: "Socket.io", category: "Backend & DB" },
  { name: "JWT", category: "Backend & DB" },
  { name: "Linux", category: "Backend & DB" },
  { name: "Ubuntu", category: "Backend & DB" },

  // Tooling & API
  { name: "Restful APIs", category: "Tooling & API" },
  { name: "Axios", category: "Tooling & API" },
  { name: "Git", category: "Tooling & API" },
  { name: "GitHub", category: "Tooling & API" },
  { name: "GitHub Actions", category: "Tooling & API" },
  { name: "NPM", category: "Tooling & API" },
  { name: "PNPM", category: "Tooling & API" },
  { name: "Yarn", category: "Tooling & API" },
  { name: "Bun", category: "Tooling & API" },
  { name: "Webpack", category: "Tooling & API" },
  { name: "Vite", category: "Tooling & API" },
  { name: "ESLint", category: "Tooling & API" },
  { name: "Prettier", category: "Tooling & API" },
  { name: "Postman", category: "Tooling & API" },
  { name: "Vercel", category: "Tooling & API" },
  { name: "CI/CD", category: "Tooling & API" },

  // Testing
  { name: "Jest", category: "Testing" },
  { name: "Vitest", category: "Testing" },
  { name: "React Testing Library", category: "Testing" },
  { name: "Playwright", category: "Testing" },
  { name: "Storybook", category: "Testing" },
  { name: "Lighthouse", category: "Testing" },

  // Management & Agile
  { name: "Jira", category: "Management & Agile" },
  { name: "ClickUp", category: "Management & Agile" },
  { name: "Huly", category: "Management & Agile" },
  { name: "Figma", category: "Management & Agile" },
];
