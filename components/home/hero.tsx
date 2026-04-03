import { Section } from "@/components/ui/section";
import { HeroContent } from "./hero/hero-content";
import { HeroTechStack } from "./hero/hero-tech-stack";
import { HeroVisual } from "./hero/hero-visual";

export default async function Hero() {
  return (
    <Section className="py-12 md:py-24" aria-labelledby="hero-title">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-12 xl:col-span-7 space-y-8">
          <HeroContent />
          <HeroTechStack />
        </div>
        <HeroVisual />
      </div>
    </Section>
  );
}
