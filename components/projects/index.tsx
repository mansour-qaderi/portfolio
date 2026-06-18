import { AnimatedSection } from "@/shared/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "./card";
import { projects } from "./data";
import { ProjectTag } from "@/types";

type Props = {
  ignoreProject?: ProjectTag;
};

export const Projects = ({ ignoreProject }: Props) => {
  const visibleProjects = projects.filter(
    (project) => project.tag !== ignoreProject
  );

  return (
    <AnimatedSection id="projects">
      <SectionHeading
        number="03"
        label="Projects"
        subtitle={`${visibleProjects.length} selected works spanning web, mobile, and enterprise systems.`}
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </AnimatedSection>
  );
};
