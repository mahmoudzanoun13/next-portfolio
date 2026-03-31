import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HeroContent() {
  return (
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
        3 years of hands-on experience in building scalable, high-performance
        web applications. Specialized in{" "}
        <span className="font-semibold text-white">React</span> and{" "}
        <span className="font-semibold text-white">Next.js</span>, integrating{" "}
        <span className="font-semibold text-white">AI tools</span> to push the
        boundaries of modern user interfaces.
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
    </div>
  );
}
