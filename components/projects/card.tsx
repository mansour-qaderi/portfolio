import Image from "next/image";
import Link from "next/link";
import { TechPill } from "@/components/ui/tech-pill";
import { Project } from "./data";

export const ProjectCard = ({
  title,
  description,
  tech,
  image,
  href,
}: Project) => {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg border border-gray-200 dark:border-white/10 bg-transparent transition-all duration-300 hover:border-primary/40 hover:scale-[1.01]"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {description}
          </p>
          <span className="inline-block mt-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            View details →
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {tech.map((item, i) => (
            <TechPill key={i}>{item}</TechPill>
          ))}
        </div>
      </div>
    </Link>
  );
};
