import { Link } from "@/i18n/routing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";

export async function HeroContent() {
  const t = await getTranslations("Hero");

  return (
    <div className="lg:col-span-12 xl:col-span-7 space-y-8">
      <Badge
        variant="secondary"
        size="sm"
        className="bg-secondary-container/30 border border-secondary/20 transition-all hover:bg-secondary-container/50"
      >
        <span className="relative flex h-2 w-2 me-2" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
        </span>
        {t("badge")}
      </Badge>

      <h1
        id="hero-title"
        className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-[1.1]"
      >
        {t.rich("title", {
          highlight: (chunks: React.ReactNode) => (
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              {chunks}
            </span>
          ),
        })}
      </h1>

      <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl font-body font-light">
        {t.rich("subtitle", {
          bold: (chunks: React.ReactNode) => (
            <span className="font-semibold text-white">{chunks}</span>
          ),
        })}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button
          as={Link}
          href="/projects"
          size="lg"
          variant="primary"
          icon="arrow_forward"
          iconPosition="right"
          className="w-full sm:w-auto overflow-hidden group/btn"
          aria-label="Explore my project portfolio"
        >
          {t("cta_work")}
        </Button>
        <Button
          as="a"
          href="/assets/resume/CV-Mahmoud-Zanoun-Frontend-Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          variant="outline"
          icon="description"
          className="w-full sm:w-auto"
          aria-label="View my professional resume (opens in new tab)"
        >
          {t("cta_resume")}
        </Button>
      </div>
    </div>
  );
}
