import ExperienceTimeline from "@/components/experience/timeline";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";

export default function ExperiencePage() {
  return (
    <main className="pb-24 max-w-7xl mx-auto min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 hero-gradient pointer-events-none -z-10 opacity-30" />

      <Section>
        {/* Section Header */}
        <PageHeader
          tag="Career & Education"
          title="My Journey"
          subtitle="A professional trajectory defined by continuous learning, architectural precision, and a commitment to engineering excellence."
        />

        {/* Experience Timeline */}
        <ExperienceTimeline />
      </Section>
    </main>
  );
}
