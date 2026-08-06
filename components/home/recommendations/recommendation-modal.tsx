"use client";

import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import { Recommendation } from "@/types/portfolio";
import { useTranslations } from "next-intl";

type RecommendationModalProps = {
  recommendation: Recommendation;
  badgeVariant: "primary" | "secondary" | "tertiary" | "surface";
  isOpen: boolean;
  onClose: () => void;
};

export function RecommendationModal({
  recommendation,
  badgeVariant,
  isOpen,
  onClose,
}: RecommendationModalProps) {
  const t = useTranslations("Hero.recommendations");
  const firstName = recommendation.name.split(" ")[0];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <a
          href={recommendation.id}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/30 font-medium text-sm rounded-xl transition-all shadow-sm"
        >
          <span>{t("view_person_linkedin", { name: firstName })}</span>
          <span aria-hidden="true">↗</span>
        </a>
      }
    >
      {/* Recommender Header inside Modal */}
      <div className="flex items-start gap-4 pb-5 border-b border-white/10">
        <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-headline font-semibold text-xl shrink-0 border border-secondary/20 shadow-[0_0_15px_rgba(var(--color-secondary),0.2)]">
          {recommendation.avatarInitials}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-headline font-bold text-on-surface leading-tight">
            {recommendation.name}
          </h2>
          <p className="text-xs md:text-sm text-on-surface-variant/90 mt-1 leading-snug">
            {recommendation.role}
          </p>

          {/* Badges in Modal */}
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <Badge
              variant={badgeVariant}
              className="uppercase tracking-wider text-[10px]"
            >
              {recommendation.relationshipType}
            </Badge>
            <Badge className="bg-surface-variant/60 border border-white/10 text-on-surface-variant text-xs">
              {recommendation.relationship}
            </Badge>
          </div>
        </div>
      </div>

      {/* Full Text Body */}
      <div className="text-on-surface-variant/95 leading-relaxed text-sm md:text-base whitespace-pre-line pt-2">
        {recommendation.text}
      </div>
    </Modal>
  );
}
