import { AnimatedSection } from "@/shared/animated-section";
import { ProjectCard } from "./card";
import { projects } from "./data";
import { ProjectTag } from "@/types";

type Props = {
  ignoreProject?: ProjectTag;
};

export const Projects = ({ ignoreProject }: Props) => {
  return (
    <AnimatedSection id="projects">
      <h2 className="text-lg text-primary text-center tracking-wider mb-4">
        Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          if (project.tag === ignoreProject) return null;
          return <ProjectCard key={project.title} {...project} />;
        })}
      </div>
    </AnimatedSection>
  );
};
