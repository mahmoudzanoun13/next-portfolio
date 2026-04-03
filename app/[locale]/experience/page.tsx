import ExperienceTimeline from "@/components/experience/timeline";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { getTranslations } from "next-intl/server";

export default async function ExperiencePage() {
  const t = await getTranslations("Experience");
  return (
    <main className="pb-24 max-w-7xl mx-auto min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 hero-gradient pointer-events-none -z-10 opacity-30" />

      <Section>
        {/* Section Header */}
        <PageHeader
          tag={t("tag")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        {/* Experience Timeline */}
        <ExperienceTimeline />
      </Section>
    </main>
  );
}
