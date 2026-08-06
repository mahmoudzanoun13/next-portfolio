"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Recommendation } from "@/types/portfolio";
import { useTranslations } from "next-intl";
import { RecommendationModal } from "./recommendation-modal";

type RecommendationCardProps = {
  recommendation: Recommendation;
  isRtl: boolean;
};

export function RecommendationCard({
  recommendation,
  isRtl,
}: RecommendationCardProps) {
  const t = useTranslations("Hero.recommendations");
  const [isOpen, setIsOpen] = useState(false);

  // Determine badge color based on relationship type
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "mentorship":
        return "primary";
      case "collaboration":
        return "secondary";
      case "leadership":
        return "tertiary";
      case "client":
        return "tertiary";
      default:
        return "surface";
    }
  };

  const badgeVariant = getBadgeVariant(recommendation.relationshipType) as
    | "primary"
    | "secondary"
    | "tertiary"
    | "surface";

  return (
    <>
      <GlassCard className="p-6 md:p-8 flex flex-col h-90 justify-between hover:-translate-y-1 transition-transform duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-headline font-semibold text-lg shrink-0 border border-secondary/20 shadow-[0_0_15px_rgba(var(--color-secondary),0.1)]">
              {recommendation.avatarInitials}
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-headline font-semibold text-on-surface truncate text-base">
                {recommendation.name}
              </h3>
              <p className="text-xs text-on-surface-variant truncate">
                {recommendation.role}
              </p>
            </div>
          </div>

          {/* Relationship Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Badge
              variant={badgeVariant}
              className="uppercase tracking-wider text-[10px] shrink-0"
            >
              {recommendation.relationshipType}
            </Badge>
            <Badge
              className="bg-surface-variant/60 border border-white/10 text-on-surface-variant text-xs max-w-52.5 sm:max-w-57.5 min-w-0 shrink"
              title={recommendation.relationship}
            >
              <span className="truncate text-start block max-w-full">
                {recommendation.relationship}
              </span>
            </Badge>
          </div>

          {/* Text Snippet with line-clamp */}
          <p className="text-on-surface-variant/90 leading-relaxed text-sm line-clamp-4">
            {recommendation.text}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-white/5 mt-auto">
          <button
            onClick={() => setIsOpen(true)}
            className="text-secondary text-sm font-medium hover:text-secondary-fixed-dim transition-colors group flex items-center gap-2 cursor-pointer"
            aria-label={`${t("read_full")} - ${recommendation.name}`}
          >
            {t("read_full")}
            <span
              className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform inline-block"
              aria-hidden="true"
            >
              {isRtl ? "←" : "→"}
            </span>
          </button>
        </div>
      </GlassCard>

      {/* Recommendation Modal Dialog */}
      <RecommendationModal
        recommendation={recommendation}
        badgeVariant={badgeVariant}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
