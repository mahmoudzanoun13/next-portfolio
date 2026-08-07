"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

// All 14 recommendation screenshots in order — split evenly between 2 columns
const COLUMN_A_IMAGES = [
  { src: "/assets/recommendations/omar-mohammed-el-gharieb.png", alt: "Omar Mohammed El Gharieb — LinkedIn recommendation" },
  { src: "/assets/recommendations/khaled-yahia.png", alt: "Khaled Yahia — LinkedIn recommendation" },
  { src: "/assets/recommendations/ahmed-elsayed-saleh.png", alt: "Ahmed ElSayed Saleh — LinkedIn recommendation" },
  { src: "/assets/recommendations/muhammad-bendary.png", alt: "Muhammad Bendary — LinkedIn recommendation" },
  { src: "/assets/recommendations/abdulrahman-mahmoud.png", alt: "AbdulRahman Mahmoud — LinkedIn recommendation" },
  { src: "/assets/recommendations/kareem-yasser.png", alt: "Kareem Yasser — LinkedIn recommendation" },
  { src: "/assets/recommendations/nehal-salah.png", alt: "Nehal Salah — LinkedIn recommendation" },
];

const COLUMN_B_IMAGES = [
  { src: "/assets/recommendations/omar-abo-el-wafa.png", alt: "Omar Abo El Wafa — LinkedIn recommendation" },
  { src: "/assets/recommendations/amr-hussien.png", alt: "Amr Hussien — LinkedIn recommendation" },
  { src: "/assets/recommendations/amr-zaher.png", alt: "Amr Zaher — LinkedIn recommendation" },
  { src: "/assets/recommendations/waleed-adel.png", alt: "Waleed Adel — LinkedIn recommendation" },
  { src: "/assets/recommendations/ahmed-tayee.png", alt: "Ahmed Tayee — LinkedIn recommendation" },
  { src: "/assets/recommendations/omnia-osman.png", alt: "Omnia Osman — LinkedIn recommendation" },
  { src: "/assets/recommendations/zeyad-hekal.png", alt: "Zeyad Hekal — LinkedIn recommendation" },
];

type MarqueeColumnProps = {
  images: typeof COLUMN_A_IMAGES;
  direction: "up" | "down";
  duration?: string;
};

function MarqueeColumn({ images, direction, duration = "35s" }: MarqueeColumnProps) {
  // Duplicate so the seamless loop always has content on screen
  const doubled = [...images, ...images];

  return (
    <div
      className="flex flex-col gap-3 overflow-hidden"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div
        className="flex flex-col gap-3 group-hover:[animation-play-state:paused]"
        style={{
          animationName: direction === "up" ? "marquee-up" : "marquee-down",
          animationDuration: duration,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {doubled.map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            className="relative w-full overflow-hidden rounded-xl border border-white/10 shadow-lg hover:border-secondary/30 hover:shadow-secondary/10 transition-all duration-300 cursor-pointer group/card"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={795}
              height={300}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function RecommendationsCarousel() {
  const t = useTranslations("Hero.recommendations");

  return (
    <div className="mt-20 pt-16 border-t border-white/5">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-10">
        <div className="flex items-center gap-2">
          {/* LinkedIn icon */}
          <svg className="w-5 h-5 fill-secondary" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
          <span className="font-headline font-bold text-on-surface">{t("carousel_title")}</span>
        </div>
        <div className="flex-1 h-px bg-linear-to-r from-white/10 to-transparent" aria-hidden="true" />
        <span className="text-xs text-on-surface-variant font-medium">{t("carousel_hint")}</span>
      </div>

      {/* Two-column vertical marquee — group allows pause-on-hover from parent */}
      <div className="group grid grid-cols-1 sm:grid-cols-2 gap-4 h-125 sm:h-145 overflow-hidden">
        <MarqueeColumn images={COLUMN_A_IMAGES} direction="up" duration="40s" />
        <MarqueeColumn images={COLUMN_B_IMAGES} direction="down" duration="36s" />
      </div>
    </div>
  );
}
