"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";

interface ContactFormSuccessProps {
  onReset: () => void;
}

export function ContactFormSuccess({ onReset }: ContactFormSuccessProps) {
  return (
    <GlassCard
      variant="medium"
      className="p-12 flex flex-col items-center justify-center text-center gap-8 min-h-[500px] animate-in fade-in zoom-in duration-700"
    >
      <div className="relative group">
        <div className="absolute -inset-10 bg-primary/20 blur-[80px] rounded-full group-hover:bg-primary/30 transition-all pointer-events-none" />
        <span className="material-symbols-outlined text-8xl text-primary animate-bounce">
          check_circle
        </span>
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-headline font-bold text-on-surface tracking-tight">
          Message <span className="text-primary italic">Received</span>
        </h2>
        <p className="text-on-surface-variant max-w-sm mx-auto leading-relaxed">
          Thank you for reaching out. I&apos;ve received your inquiry and will
          get back to you at mahmoudzanoun35@yahoo.com within 24 hours.
        </p>
      </div>
      <Button variant="outline" onClick={onReset} icon="undo">
        Send Another
      </Button>
    </GlassCard>
  );
}
