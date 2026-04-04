"use client";

import { useEffect, useState } from "react";

// Standard PWA install prompt event type
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export function usePwa() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      // Prevent browser default and save event
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Initial check for display mode deferred to the next frame to avoid cascading renders
    const checkDisplayMode = () => {
      const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
      if (!isStandalone) {
        setIsInstallable(true);
      }
    };

    const frameId = requestAnimationFrame(checkDisplayMode);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
      cancelAnimationFrame(frameId);
    };
  }, []);

  const install = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setIsInstallable(false);
    }
  };

  return { install, isInstallable };
}
