"use client";

import { useState } from "react";
import { RecommendationCard } from "./recommendations/recommendation-card";
import { RecommendationsCallout } from "./recommendations/recommendations-callout";
import { RecommendationsCarousel } from "./recommendations/recommendations-carousel";
import { Recommendation } from "@/types/portfolio";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

type RecommendationsProps = {
  recommendations: Recommendation[];
  isRtl: boolean;
};

export default function Recommendations({
  recommendations,
  isRtl,
}: RecommendationsProps) {
  const t = useTranslations("Hero.recommendations");
  const [isExpanded, setIsExpanded] = useState(false);

  // Default to showing 6 cards (2 rows of 3 on desktop)
  const INITIAL_COUNT = 6;
  const visibleRecommendations = isExpanded
    ? recommendations
    : recommendations.slice(0, INITIAL_COUNT);

  const hasMore = recommendations.length > INITIAL_COUNT;

  return (
    <Section id="recommendations" className="py-24" aria-label={t("tag")}>
      <PageHeader
        as="h2"
        tag={t("tag")}
        title={t("title")}
        subtitle={t("subtitle")}
      />

      {/* LinkedIn Profile Action Box */}
      <RecommendationsCallout />

      <div>
        <div className="relative">
          {/* Grid Layout conforming to shadow-coding.com aesthetic */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {visibleRecommendations.map((recommendation) => (
              <RecommendationCard
                key={recommendation.id}
                recommendation={recommendation}
                isRtl={isRtl}
              />
            ))}
          </div>

          {/* Fade effect at the bottom when collapsed */}
          {!isExpanded && hasMore && (
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-background to-transparent pointer-events-none flex items-end justify-center pb-8" />
          )}
        </div>

        {hasMore && (
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsExpanded(!isExpanded)}
              className="min-w-62.5"
            >
              {isExpanded ? (
                <span className="flex items-center gap-2">
                  {t("show_less")} <span className="rotate-180">↓</span>
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  {t("show_more")} <span className="animate-bounce">↓</span>
                </span>
              )}
            </Button>
          </div>
        )}
      </div>

      {/* LinkedIn Screenshot Verification Carousel */}
      <RecommendationsCarousel />
    </Section>
  );
}
