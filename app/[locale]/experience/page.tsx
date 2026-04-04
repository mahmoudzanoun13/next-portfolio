import ExperienceTimeline from "@/components/experience/timeline";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { getTranslations } from "next-intl/server";
import { getMetadataConfig } from "@/constants/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Metadata");

  return {
    ...getMetadataConfig(t, locale, "/experience"),
    title: t("title_template").replace("%s", "Experience"),
  };
}

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
