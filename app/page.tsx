import Hero from "@/components/home/hero";
import { Section } from "@/components/ui/section";
import { PORTFOLIO_DATA } from "@/constants/portfolio";

export default function Home() {
  return (
    <main className="relative min-h-screen tech-grid overflow-x-hidden">
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 hero-gradient pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
        aria-hidden="true"
      />

      <Hero />

      {/* Stats Section */}
      <Section className="py-12" aria-label="Professional Statistics">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8" role="list">
          {PORTFOLIO_DATA.stats.map((stat) => (
            <div key={stat.label} className="space-y-1" role="listitem">
              <p className="text-3xl font-headline font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-xs text-outline uppercase tracking-widest font-bold opacity-70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
