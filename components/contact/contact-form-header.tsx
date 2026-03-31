"use client";

export function ContactFormHeader() {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-headline font-bold text-on-surface flex items-center gap-3">
        <span className="w-8 h-px bg-primary/30" />
        Send a Digital Signal
      </h2>
      <p className="text-sm text-on-surface-variant max-w-md">
        Fill out the form below and I&apos;ll respond personally to your
        inquiry.
      </p>
    </div>
  );
}
