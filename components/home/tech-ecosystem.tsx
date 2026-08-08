"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Section } from "@/components/ui/section";
import { PageHeader } from "@/components/ui/page-header";
import { SKILLS_DATA, SkillCategory, Skill } from "@/constants/skills";
import { SkillIcon } from "./skills/skill-icon";

export function TechEcosystem() {
  const t = useTranslations("Hero.skills");
  const [hoveredCategory, setHoveredCategory] = useState<SkillCategory | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);

  // Group translations for categories using a helper function so we don't spam translation files initially
  // In a full production app, these would be in the loaded translation file as well.
  const translateCategory = (cat: string) => {
    try {
      return t(`categories.${cat.replace(/ /g, "_").toLowerCase()}`);
    } catch {
      return cat;
    }
  };

  return (
    <Section id="skills" className="bg-[#0b0524] relative overflow-hidden py-16 md:py-24">
      {/* Background radial gradient to give a subtle glow, centered */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(186,158,255,0.05)_0%,rgba(15,7,46,0)_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-start w-full">
        <PageHeader 
          tag={t("tag")} 
          title={t("title")} 
          subtitle={t("subtitle")}
          as="h2"
          alignment="start"
          className="mb-10"
        />

        <div className="mt-8 flex flex-col items-center w-full">
          
          {/* Dynamic header - this changes when a skill is hovered */}
          <div className="h-10 mb-6 flex items-center justify-center text-center transition-all duration-300">
            {hoveredSkill ? (
              <h3 className="text-secondary font-headline font-bold text-sm sm:text-base tracking-widest uppercase animate-fade-in flex items-center gap-2">
                <span className="text-white">{hoveredSkill.name}</span>
                <span className="text-white/30">—</span>
                <span>{translateCategory(hoveredSkill.category)}</span>
              </h3>
            ) : (
              <h3 className="text-on-surface-variant font-headline font-medium text-sm sm:text-base tracking-[0.2em] uppercase">
                {t("default_header")}
              </h3>
            )}
          </div>

          {/* Scattered Floating Grid */}
          <div 
            className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-9 gap-3 sm:gap-4 max-w-250 w-full"
            onMouseLeave={() => {
              setHoveredCategory(null);
              setHoveredSkill(null);
            }}
          >
            {(() => {
              // We have 58 skills. To create a scattered look, we'll place them into a larger grid
              // by injecting nulls at specific logical positions.
              const gridItems = [];
              let skillIndex = 0;
              
              // Let's create an 8x9 grid (72 cells). 58 skills + 14 empty cells = 72 cells. 
              // We pick strategic empty indices to scatter them organically.
              const emptyIndices = new Set([
                0, 5, 8, 13, 19, 27, 42, 45, 53, 61, 62, 68, 70, 71
              ]);

              for (let i = 0; i < 72; i++) {
                if (emptyIndices.has(i) || skillIndex >= SKILLS_DATA.length) {
                  // Empty block
                  gridItems.push(<div key={`empty-${i}`} className="hidden md:block aspect-square" />);
                } else {
                  const skill = SKILLS_DATA[skillIndex];
                  const isDimmed = hoveredCategory !== null && hoveredCategory !== skill.category;
                  
                  gridItems.push(
                    <div
                      key={`${skill.name}-${skillIndex}`}
                      title={skill.name}
                      className={`
                        relative aspect-square bg-[#0f072e]/80 border border-white/5 rounded-2xl flex flex-col items-center justify-center p-2
                        transition-all duration-500 cursor-default group hover:shadow-[0_0_20px_rgba(186,158,255,0.15)]
                        ${hoveredSkill?.name === skill.name ? 'bg-surface-container -translate-y-1 scale-105 z-10' : ''}
                      `}
                      onMouseEnter={() => {
                        setHoveredCategory(skill.category);
                        setHoveredSkill(skill);
                      }}
                    >
                      <SkillIcon name={skill.name} isDimmed={isDimmed} />
                    </div>
                  );
                  skillIndex++;
                }
              }
              return gridItems;
            })()}
          </div>
          
        </div>
      </div>
    </Section>
  );
}
