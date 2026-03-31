import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen tech-grid overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 hero-gradient pointer-events-none -z-10" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10"
        aria-hidden="true"
      />

      <Section
        className="min-h-[80vh] flex flex-col justify-center"
        innerClassName="flex flex-col items-center justify-center text-center gap-12"
      >
        <div className="relative group flex flex-col items-center">
          <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all pointer-events-none" />

          {/* 404 Text */}
          <h1 className="text-[120px] md:text-[180px] font-headline font-black text-on-surface leading-none tracking-tighter opacity-10 animate-pulse select-none">
            404
          </h1>

          {/* Floating Icon */}
          <span className="material-symbols-outlined text-[100px] md:text-[120px] text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
            explore_off
          </span>
        </div>

        <div className="space-y-6 max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-on-surface tracking-tighter italic">
            You&apos;ve wandered into{" "}
            <span className="text-primary italic">void</span>.
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto">
            The page you are looking for has been moved, deleted, or never
            existed. Let&apos;s get you back to the signal.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 relative z-10 mt-12">
          <Button as={Link} href="/" variant="primary" size="xl" icon="home">
            Return to Signal
          </Button>
          <Button
            as={Link}
            href="/projects"
            variant="outline"
            size="xl"
            icon="grid_view"
          >
            Explore Work
          </Button>
        </div>
      </Section>
    </main>
  );
}
