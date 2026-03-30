import ProjectCard from "@/components/projects/project-card";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

export default function ProjectsPage() {
  return (
    <main className="pb-24 max-w-7xl mx-auto min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 hero-gradient pointer-events-none -z-10 opacity-30"></div>

      <Section>
        {/* Section Header */}
        <PageHeader
          tag="My Portfolio"
          title="My Recent Work"
          subtitle="A selection of high-impact digital products built with a focus on performance, scalability, and exceptional user experience."
        />

        {/* Projects Grid */}
        <div className="relative z-10 flex flex-col gap-10">
          {PORTFOLIO_DATA.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
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
              Have a <span className="text-secondary">vision</span> in mind?
            </h2>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed max-w-md mx-auto">
              Let&apos;s collaborate to build something that pushes the
              boundaries of the modern web.
            </p>
          </div>
          <Button size="xl" variant="primary">
            Let&apos;s Collaborate
          </Button>
        </GlassCard>
      </Section>
    </main>
  );
}
