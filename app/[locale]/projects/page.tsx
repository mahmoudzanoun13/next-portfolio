import ProjectCard from "@/components/projects/project-card";
import { getPortfolioData } from "@/constants/portfolio";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";

export default async function ProjectsPage() {
  const locale = await getLocale();
  const t = await getTranslations("Projects");
  const portfolioData = getPortfolioData(locale);
  return (
    <main className="pb-24 max-w-7xl mx-auto min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 hero-gradient pointer-events-none -z-10 opacity-30"></div>

      <Section>
        {/* Section Header */}
        <PageHeader
          tag={t("tag")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        {/* Projects Grid */}
        <div className="relative z-10 flex flex-col gap-10">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              priority={index === 0}
              exploreText={t("explore_case")}
            />
          ))}
        </div>

        {/* Call to action */}
        <GlassCard
          variant="medium"
          className="mt-40 p-16 flex flex-col items-center justify-center text-center gap-10 group overflow-hidden"
          role="region"
          aria-label="Collaboration Call to Action"
        >
          <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="max-w-xl relative z-10 flex flex-col gap-5">
            <h2 className="text-5xl font-headline font-bold text-on-surface tracking-tighter">
              {t.rich("cta_vision", {
                highlight: (chunks) => (
                  <span className="text-secondary">{chunks}</span>
                ),
              })}
            </h2>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed max-w-md mx-auto">
              {t("cta_desc")}
            </p>
          </div>
          <Button
            as={Link}
            href="/contact"
            size="xl"
            variant="primary"
            icon="chat"
          >
            {t("cta_button")}
          </Button>
        </GlassCard>
      </Section>
    </main>
  );
}
