import ExperienceTimeline from "@/components/experience/timeline";

export default function ExperiencePage() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      {/* Background decoration */}
      <div className="fixed inset-0 hero-gradient pointer-events-none -z-10 opacity-30"></div>

      {/* Section Header */}
      <header className="mb-24 text-center md:text-left relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container mb-6 border border-white/5 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(83,221,252,0.8)]"></span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant">
            Career Path
          </span>
        </div>
        <h1 className="text-6xl md:text-[80px] font-headline font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary leading-[1.1]">
          My Professional Journey
        </h1>
        <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed font-light">
          A trajectory defined by precision, architecting scalable digital
          ecosystems and mastering the art of high-performance frontend
          development.
        </p>
      </header>

      {/* Timeline Section */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <ExperienceTimeline />
      </div>

      {/* Featured Certification Banner */}
      <section className="mt-40 p-12 rounded-3xl bg-gradient-to-br from-surface-container-high to-surface-container-low border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative z-10 group overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <div className="max-w-xl relative z-10 flex flex-col gap-3">
          <h2 className="text-4xl font-headline font-bold text-on-surface">
            Technical Excellence
          </h2>
          <p className="text-lg text-on-surface-variant font-light leading-relaxed">
            Continuously expanding the horizon with the latest in AI-driven
            frontend development and reactive systems.
          </p>
        </div>
        <button className="px-10 py-5 bg-transparent border border-primary/30 text-primary rounded-xl font-headline font-bold tracking-widest hover:bg-primary/10 hover:border-primary transition-all active:scale-95 whitespace-nowrap relative z-10 uppercase text-xs">
          View All Credentials
        </button>
      </section>
    </main>
  );
}
