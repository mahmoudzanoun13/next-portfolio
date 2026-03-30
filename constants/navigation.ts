export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/mahmoud-zanoun-517b14222",
    label: "LinkedIn",
    icon: "work_history", // Using a professional icon for LinkedIn
  },
  {
    href: "https://github.com/mahmoudzanoun13",
    label: "GitHub",
    icon: "code",
  },
  {
    href: "https://github.com/mahmoudzanoun13/next-portfolio",
    label: "Source Code",
    icon: "terminal",
  },
] as const;
