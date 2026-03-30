export type Project = {
  title: string;
  description: string;
  tags: string[];
  features: string[];
  link: string;
  image: string;
  accent: "primary" | "secondary" | "tertiary";
};

export type ExperienceHighlight = {
  text: string;
  focus: string;
};

export type ExperienceMetric = {
  label: string;
  icon: string;
};

export type ExperienceVisual = {
  type: string;
  icon: string;
  color: string;
  iconColor: string;
};

export type ExperienceStat = {
  label: string;
  value: string;
};

export type TimelineItem = {
  type: "experience" | "education";
  icon: string;
  period: string;
  title: string;
  company: string;
  companyLink?: string;
  highlights?: ExperienceHighlight[];
  tech?: string[];
  image?: string;
  description?: string;
  metrics?: ExperienceMetric[];
  visual?: ExperienceVisual[];
  stats?: ExperienceStat[];
};

export type PortfolioData = {
  projects: Project[];
  experience: TimelineItem[];
  stats: Array<{ label: string; value: string }>;
};
