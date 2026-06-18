import { ReactNode } from "react";
import {
  Code,
  Globe,
  Layers,
  Monitor,
  Rocket,
  Server,
  Smartphone,
  Type,
  Github,
  Database,
} from "lucide-react";
import { AnimatedSection } from "@/shared/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

interface SkillItem {
  name: string;
  icon: ReactNode;
}

const skillList: SkillItem[] = [
  { name: "React.js", icon: <Code className="size-4" /> },
  { name: "Next.js", icon: <Code className="size-4" /> },
  { name: "TypeScript", icon: <Type className="size-4" /> },
  { name: "Tailwind CSS", icon: <Layers className="size-4" /> },
  { name: "Node.js", icon: <Server className="size-4" /> },
  { name: "Nest.js", icon: <Server className="size-4" /> },
  { name: "Express.js", icon: <Server className="size-4" /> },
  { name: "Remix.js", icon: <Monitor className="size-4" /> },
  { name: "React Native", icon: <Smartphone className="size-4" /> },
  { name: "PostgreSQL", icon: <Database className="size-4" /> },
  { name: "Redis", icon: <Rocket className="size-4" /> },
  { name: "Git & GitHub", icon: <Github className="size-4" /> },
  { name: "GraphQL", icon: <Globe className="size-4" /> },
  { name: "Fast API", icon: <Globe className="size-4" /> },
];

export const Skills = () => {
  return (
    <AnimatedSection id="skills">
      <SectionHeading number="01" label="Top Skills" />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {skillList.map(({ icon, name }) => (
          <div
            key={name}
            className="group flex items-center gap-3 rounded-lg border border-gray-200 dark:border-white/10 px-4 py-3 transition-colors hover:border-primary/40"
          >
            <span className="text-muted-foreground transition-colors group-hover:text-primary">
              {icon}
            </span>
            <span className="font-mono text-sm text-foreground">{name}</span>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};
