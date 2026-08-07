"use client";

import Image from "next/image";
import { useState } from "react";

export function SkillIcon({ name, isDimmed }: { name: string; isDimmed: boolean }) {
  const [imgError, setImgError] = useState(false);

  // We map the name to an iconify / simple-icons URL or similar.
  // Using jsdelivr devicons as a reliable source for most of these.
  const getIconUrl = (skillName: string) => {
    const map: Record<string, string> = {
      HTML5: "html5/html5-original.svg",
      CSS3: "css3/css3-original.svg",
      Sass: "sass/sass-original.svg",
      JavaScript: "javascript/javascript-original.svg",
      TypeScript: "typescript/typescript-original.svg",
      React: "react/react-original.svg",
      "Next.js": "nextjs/nextjs-original.svg",
      "React Router": "reactrouter/reactrouter-original.svg",
      Redux: "redux/redux-original.svg",
      "RTK Query": "redux/redux-original.svg",
      Zustand: "zustand/zustand-original.svg",
      Bootstrap: "bootstrap/bootstrap-original.svg",
      "React Bootstrap": "reactbootstrap/reactbootstrap-original.svg",
      "Tailwind CSS": "tailwindcss/tailwindcss-original.svg",
      MUI: "materialui/materialui-original.svg",
      "Styled-Components": "styledcomponents/styledcomponents-original.svg",
      "Framer Motion": "framermotion/framermotion-original.svg",
      JQuery: "jquery/jquery-original.svg",
      "Node.js": "nodejs/nodejs-original.svg",
      "Express.js": "express/express-original.svg",
      PostgreSQL: "postgresql/postgresql-original.svg",
      Prisma: "prisma/prisma-original.svg",
      "Socket.io": "socketio/socketio-original.svg",
      Linux: "linux/linux-original.svg",
      Ubuntu: "ubuntu/ubuntu-original.svg",
      Git: "git/git-original.svg",
      GitHub: "github/github-original.svg",
      "GitHub Actions": "githubactions/githubactions-original.svg",
      Axios: "axios/axios-plain.svg",
      Webpack: "webpack/webpack-original.svg",
      NPM: "npm/npm-original-wordmark.svg",
      PNPM: "pnpm/pnpm-original.svg",
      Yarn: "yarn/yarn-original.svg",
      Bun: "bun/bun-original.svg",
      ESLint: "eslint/eslint-original.svg",
      Prettier: "prettier/prettier-original.svg",
      Postman: "postman/postman-original.svg",
      Vite: "vitejs/vitejs-original.svg",
      Vercel: "vercel/vercel-original.svg",
      Jest: "jest/jest-plain.svg",
      Vitest: "vitest/vitest-original.svg",
      Storybook: "storybook/storybook-original.svg",
      Playwright: "playwright/playwright-original.svg",
      Jira: "jira/jira-original.svg",
      Figma: "figma/figma-original.svg",
    };

    const path = map[skillName];
    if (path) {
      return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`;
    }
    return null;
  };

  const iconUrl = getIconUrl(name);

  // Fallback letters generator
  const getInitials = (str: string) => {
    // e.g "Restful APIs" -> "RA", "ES6+" -> "ES"
    const words = str.split(" ").filter(Boolean);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return str.slice(0, 2).toUpperCase();
  };

  return (
    <div
      className={`w-full h-full flex items-center justify-center transition-all duration-500 ease-out p-4 ${
        isDimmed ? "opacity-20 grayscale brightness-50" : "opacity-100 grayscale-0"
      }`}
    >
      {iconUrl && !imgError ? (
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={iconUrl}
            alt={`${name} icon`}
            fill
            className={`object-contain transition-transform duration-300 ${!isDimmed && "scale-110"}`}
            onError={() => setImgError(true)}
            sizes="(max-width: 768px) 40px, 48px"
            // For Vercel/NextJS images from external domains, we might need configuration,
            // so we can use standard img tag instead for absolute devicons URLs to avoid config issues
            unoptimized
          />
        </div>
      ) : (
        <div 
          className={`flex items-center justify-center font-headline font-bold text-xl tracking-wider transition-colors duration-300 ${!isDimmed ? 'text-secondary' : 'text-on-surface-variant'}`}
        >
          {getInitials(name)}
        </div>
      )}
    </div>
  );
}
