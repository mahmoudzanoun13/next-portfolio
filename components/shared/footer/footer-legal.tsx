"use client";

export function FooterLegal() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center md:items-end gap-6 md:gap-3 text-center md:text-right">
      <p
        className="text-sm text-on-surface font-semibold tracking-wide"
        suppressHydrationWarning
      >
        &copy; {currentYear} • Mahmoud Zanoun Portfolio
      </p>
      <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">
        <span>Crafted with Precision</span>
        <span
          className="w-1 h-1 rounded-full bg-primary animate-pulse"
          aria-hidden="true"
        ></span>
        <span>Ashmoun, Egypt</span>
      </div>
    </div>
  );
}
