"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Section className="min-h-screen flex flex-col items-center justify-center text-center gap-10">
      <div className="relative group">
        <div className="absolute -inset-10 bg-error/10 blur-[100px] rounded-full group-hover:bg-error/20 transition-all pointer-events-none" />
        <span className="material-symbols-outlined text-8xl text-error animate-pulse">
          warning
        </span>
      </div>
      <div className="space-y-4 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-headline font-bold text-on-surface tracking-tighter">
          Something went <span className="text-error">wrong</span>.
        </h1>
        <p className="text-on-surface-variant text-lg font-light leading-relaxed">
          The requested operation could not be completed successfully. Our
          engineers have been notified.
        </p>
      </div>
      <div className="flex gap-4">
        <Button variant="primary" onClick={() => reset()} icon="refresh">
          Try Again
        </Button>
        <Button as="a" href="/" variant="outline" icon="home">
          Return Home
        </Button>
      </div>
    </Section>
  );
}
