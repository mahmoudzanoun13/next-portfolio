import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <main className="relative min-h-screen pt-24 tech-grid overflow-x-hidden">
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

      {/* Stats Section (Social Proof) */}
      <section
        className="max-w-7xl mx-auto px-6 py-12"
        aria-label="Professional Statistics"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8" role="list">
          {[
            { label: "Years Experience", value: "3+" },
            { label: "Projects Delivered", value: "6+" },
            { label: "Code Accuracy", value: "95%" },
            { label: "Tech Stack Tools", value: "15+" },
          ].map((stat) => (
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
      </section>
    </main>
  );
}
