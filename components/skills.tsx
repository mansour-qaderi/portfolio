"use client";

import { ReactNode } from "react";
import Marquee from "react-fast-marquee";
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
} from "lucide-react";
import { useTheme } from "next-themes";

interface SkillsProps {
  icon: ReactNode;
  name: string;
}

const skillList: SkillsProps[] = [
  { name: "JavaScript", icon: <Code /> },
  { name: "React.js", icon: <Code /> },
  { name: "Next.js", icon: <Monitor /> },
  { name: "TypeScript", icon: <Type /> },
  { name: "React Native", icon: <Smartphone /> },
  { name: "Tailwind CSS", icon: <Layers /> },
  { name: "REST APIs", icon: <Server /> },
  { name: "Git & GitHub", icon: <Github /> },
  { name: "GraphQL / Apollo", icon: <Globe /> },
  { name: "Performance Optimization", icon: <Rocket /> },
];

export const Skills = () => {
  const { theme } = useTheme();
  return (
    <section className="pt-20 md:pt-32" id="skills">
      <h2 className="text-lg md:text-xl text-primary text-center mb-4">
        Top Skills
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          gradientColor={
            theme === "light" ? "rgb(255, 255, 255)" : "rgb(4, 4, 4)"
          }
          gradient
          pauseOnHover
        >
          {skillList.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center gap-2 text-xl md:text-2xl font-medium mx-3"
            >
              {icon}
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
