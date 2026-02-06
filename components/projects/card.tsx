import Image from "next/image";
import { Badge } from "../ui/badge";
import { Project } from "./data";
import Link from "next/link";

export const ProjectCard = ({
  title,
  description,
  tech,
  image,
  href,
}: Project) => {
  return (
    <div
      className="
        group relative overflow-hidden rounded-xl
        bg-white shadow-md
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
      "
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="
      object-cover
      group-hover:blur-[2px] group-hover:scale-100
      transition-all duration-500
    "
        />

        <div
          className="
      absolute inset-0
      opacity-0
      group-hover:opacity-100
      transition-opacity duration-300
      flex flex-col justify-end p-4
    "
        >
          <h3 className="text-gray-700 font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          <span className="mt-2 text-sm text-orange-400">View details →</span>
        </div>
      </div>

      {/* Footer (visible always) */}
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {tech.map((item, i) => (
            <Badge key={i} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>
      </div>

      {/* Clickable link */}
      {href && (
        <Link href={href} className="absolute inset-0" aria-label={title} />
      )}
    </div>
  );
};
