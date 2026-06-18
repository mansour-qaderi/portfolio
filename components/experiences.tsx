import { AnimatedSection } from "@/shared/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  ExperienceTimeline,
  ExperienceItem,
} from "@/components/experience-timeline";
import { SWEATBET } from "@/constants";

const experiences: ExperienceItem[] = [
  {
    company: SWEATBET,
    role: "Senior Full Stack Developer",
    duration: "Jan 2026 - Present",
    location: "Remote",
    description:
      "Building a 2D skill-based wagering game for Sweatbet's esports platform from scratch using Next.js, NestJS, PostgreSQL, and Redis within a Turborepo monorepo.",
    skills: [
      "Next.js",
      "Nest.js",
      "Typescript",
      "Tailwind CSS",
      "PostgreSQL",
      "Redis",
      "Monorepo",
    ],
  },
  {
    company: "Milestone Technologies",
    role: "Senior Software Developer",
    duration: "Oct 2023 - Jan 2026",
    location: "Wilayat Muscat, Masqaţ, Oman (Remote)",
    description:
      "Led frontend strategy, mentored developers, and delivered scalable, innovative solutions aligned with company goals.",
    skills: [
      "Remix",
      "React Native",
      "Typescript",
      "Next.js",
      "REST APIs",
      "Tailwind CSS",
    ],
  },
  {
    company: "TrueTale",
    role: "Senior Frontend Developer",
    duration: "Aug 2022 - Oct 2023",
    location: "Los Angeles, USA (Remote)",
    description:
      "Led complex UI development, optimized performance, mentored junior developers, and implemented best practices for maintainable frontend solutions.",
    skills: [
      "Tailwind CSS",
      "React Native",
      "TypeScript",
      "Next.js",
      "Greaphql",
      "React Query",
      "Ant Design",
      "Google Analytics",
      "Google Tag Manager",
      "E2E Test",
    ],
  },
  {
    company: "Data Art",
    role: "Senior Frontend Developer (Part-time)",
    duration: "Jan 2022 - Jul 2022",
    location: "Herat, Afghanistan",
    description:
      "Worked on frontend tasks, bug fixes, UI improvements, and testing, maintaining design consistency and coding standards.",
    skills: [],
  },
  {
    company: "Microcis",
    role: "Frontend Developer",
    duration: "Aug 2020 - Jul 2022",
    location: "Herat, Afghanistan",
    description:
      "Developed and maintained user interfaces, integrated APIs, optimized performance, and ensured responsive designs across devices.",
    skills: [
      "JavaScript",
      "React.js",
      "TypeScript",
      "Next.js",
      "SCSS",
      "Material UI",
    ],
  },
];

export const Experiences = () => {
  return (
    <AnimatedSection id="experiences">
      <SectionHeading number="02" label="Experience" />
      <ExperienceTimeline experiences={experiences} />
    </AnimatedSection>
  );
};
