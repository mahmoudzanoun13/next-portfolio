"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { CORE_TECHS } from "@/constants/portfolio";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";

export default function Hero() {
  return (
    <Section className="py-12 md:py-24" aria-labelledby="hero-title">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-8">
          <Badge
            variant="secondary"
            size="sm"
            className="bg-secondary-container/30 border border-secondary/20"
          >
            <span className="relative flex h-2 w-2 mr-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Available for Innovation
          </Badge>

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
            <Button
              as={Link}
              href="/projects"
              size="lg"
              variant="primary"
              icon="arrow_forward"
              iconPosition="right"
              className="w-full sm:w-auto"
              aria-label="Explore my project portfolio"
            >
              Explore My Work
            </Button>
            <Button
              as="a"
              href="/assets/resume/CV-Mahmoud-Zanoun-Frontend-Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="outline"
              icon="description"
              className="w-full sm:w-auto"
              aria-label="View my professional resume (opens in new tab)"
            >
              View Resume
            </Button>
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
              {CORE_TECHS.map((tech) => (
                <Badge
                  key={tech.label}
                  variant={tech.priority ? "secondary" : "surface"}
                  size="md"
                  className={cn(
                    "px-4 py-2",
                    tech.priority
                      ? "bg-secondary-container/40 hover:bg-secondary-container/60"
                      : "hover:bg-surface-container-high",
                  )}
                  role="listitem"
                >
                  {tech.label}
                </Badge>
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

            <GlassCard
              variant="medium"
              withHover={false}
              className="absolute inset-0 overflow-hidden p-8"
            >
              <div className="w-full h-full relative overflow-hidden rounded-xl bg-surface-container-lowest">
                <Image
                  alt="High-tech interface representation showcase"
                  className="w-full h-full object-cover opacity-60"
                  src="/assets/hero-visual.png"
                  fill
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface-container-lowest via-transparent to-transparent"></div>

                {/* Floating Code Snippet Card */}
                <CodeSnippetCard />
              </div>
            </GlassCard>
          </div>

          {/* PWA/Install Hint */}
          <InstallHint />
        </div>
      </div>
    </Section>
  );
}

function CodeSnippetCard() {
  return (
    <GlassCard
      variant="medium"
      className="absolute bottom-6 left-6 right-6 p-4 rounded-xl border border-primary/20 hover:-translate-y-1 z-10"
    >
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
          name: <span className="text-tertiary">{'"Mahmoud Zanoun"'}</span>,
        </div>
        <div className="pl-4">
          role: <span className="text-tertiary">{'"Senior Frontend"'}</span>,
        </div>
        <div className="pl-4">
          experience: <span className="text-tertiary">{'"3+ Years"'}</span>
        </div>
        <div>{"};"}</div>
      </div>
    </GlassCard>
  );
}

function InstallHint() {
  return (
    <GlassCard
      variant="medium"
      className="mt-8 p-4 flex items-center justify-between group cursor-pointer hover:border-secondary/40"
      role="button"
      aria-label="Install as Web App for offline experience"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
          <span className="material-symbols-outlined">install_desktop</span>
        </div>
        <div>
          <h4 className="text-sm font-bold text-on-surface">
            Install as Web App
          </h4>
          <p className="text-xs text-on-surface-variant">
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
    </GlassCard>
  );
}
