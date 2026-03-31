import Image from "next/image";

interface ProjectCardImageProps {
  image: string;
  title: string;
  priority?: boolean;
}

export function ProjectCardImage({
  image,
  title,
  priority = false,
}: ProjectCardImageProps) {
  return (
    <div className="xl:w-[450px] relative aspect-video rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-700 self-center">
      <Image
        src={image}
        alt={`Live preview screenshot of ${title} project interface`}
        fill
        sizes="(max-width: 1280px) 100vw, 450px"
        priority={priority}
        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent"
        aria-hidden="true"
      />
    </div>
  );
}
