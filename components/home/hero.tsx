"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const TECHS = [
  { label: "React", priority: true },
  { label: "Next.js", priority: true },
  { label: "TypeScript", priority: false },
  { label: "Tailwind CSS", priority: false },
  { label: "AI Tools Integration", priority: true },
  { label: "Zustand", priority: false },
];

export default function Hero() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 py-12 md:py-24 relative z-10"
      aria-labelledby="hero-title"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/30 border border-secondary/20 text-secondary text-xs font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Available for Innovation
          </div>

          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-headline font-bold tracking-tighter leading-[1.1]"
          >
            Architecting{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              Digital Excellence
            </span>{" "}
            as a Senior Frontend Developer
          </h1>

          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-2xl font-body font-light">
            3 years of hands-on experience in building scalable,
            high-performance web applications. Specialized in{" "}
            <span className="font-semibold text-white">React</span> and{" "}
            <span className="font-semibold text-white">Next.js</span>,
            integrating{" "}
            <span className="font-semibold text-white">AI tools</span> to push
            the boundaries of modern user interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/projects"
              className="group flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-md font-bold transition-all hover:translate-y-[-2px] hover:shadow-[0_20px_40px_-15px_rgba(186,158,255,0.4)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Explore my project portfolio"
            >
              Explore My Work
              <span
                className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </Link>
            <a
              href="/assets/resume/CV-Mahmoud-Zanoun-Frontend-Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-outline-variant/30 px-8 py-4 rounded-md font-bold transition-all active:scale-95 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="View my professional resume (opens in new tab)"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                description
              </span>
              View Resume
            </a>
          </div>

          {/* Skills Area */}
          <div className="pt-12 space-y-4">
            <h2 className="text-xs uppercase tracking-[0.2em] text-outline font-bold">
              Core Technologies
            </h2>
            <div
              className="flex flex-wrap gap-3"
              role="list"
              aria-label="Core Technology Labels"
            >
              {TECHS.map((tech) => (
                <div
                  key={tech.label}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full border transition-colors",
                    tech.priority
                      ? "bg-secondary-container/40 text-secondary border-secondary/10 hover:bg-secondary-container/60"
                      : "bg-surface-variant text-on-surface-variant border-outline-variant/20 hover:bg-surface-container-high",
                  )}
                  role="listitem"
                >
                  <span className="text-sm font-bold">{tech.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Visual Component */}
        <div
          className="lg:col-span-12 xl:col-span-5 relative"
          aria-hidden="true"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Abstract Tech Visual */}
            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-secondary/20 rounded-3xl rotate-6 animate-pulse"></div>

            <div className="absolute inset-0 glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center p-8">
              <div className="w-full h-full relative overflow-hidden rounded-xl bg-surface-container-lowest">
                <Image
                  alt="High-tech interface representation showcase"
                  className="w-full h-full object-cover opacity-60"
                  src="/assets/hero-visual.png"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>

                {/* Floating Code Snippet Card */}
                <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-xl border border-primary/20 transform hover:-translate-y-1 transition-transform z-10">
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-error-dim"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#f9bc2d]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary-dim"></div>
                  </div>
                  <div className="space-y-2 font-mono text-[10px] md:text-xs text-on-surface-variant">
                    <div className="flex gap-2">
                      <span className="text-primary">const</span>
                      <span className="text-secondary">developer</span> = {"{"}
                    </div>
                    <div className="pl-4">
                      name:{" "}
                      <span className="text-tertiary">
                        {'"Mahmoud Zanoun"'}
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      role:{" "}
                      <span className="text-tertiary">
                        {'"Senior Frontend"'}
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      experience:{" "}
                      <span className="text-tertiary">{'"3+ Years"'}</span>
                    </div>
                    <div>{"};"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PWA/Install Hint */}
          <div
            className="mt-8 glass-panel p-4 rounded-xl border border-secondary/10 flex items-center justify-between group cursor-pointer hover:border-secondary/40 transition-all"
            role="button"
            aria-label="Install as Web App for offline experience"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">
                  install_desktop
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-on-surface">
                  Install as Web App
                </h4>
                <p className="text-xs text-on-surface-variant opacity-80">
                  Enjoy a seamless offline experience
                </p>
              </div>
            </div>
            <span
              className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors"
              aria-hidden="true"
            >
              download
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
