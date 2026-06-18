import { AnimatedSection } from "@/shared/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

interface FeatureItem {
  title: string;
  description: string;
}

const featureList: FeatureItem[] = [
  {
    title: "Senior Full Stack Developer",
    description:
      "6+ years architecting and shipping frontend-heavy web, mobile, and gaming apps with Next.js, React Native, and NestJS.",
  },
  {
    title: "Technical Leadership",
    description:
      "Led frontend strategy and mentored development teams as a senior contributor and team lead at Milestone Technologies and TrueTale.",
  },
  {
    title: "Modern Frontend Architecture",
    description:
      "Skilled in TypeScript, Tailwind CSS, Remix, GraphQL, REST APIs, and monorepo architecture with Turborepo.",
  },
  {
    title: "Scalable, Maintainable Code",
    description:
      "Champion clean, well-tested code and consistent coding standards across every codebase I touch.",
  },
  {
    title: "Cross-Functional Collaboration",
    description:
      "Partnered with product, design, and engineering teams across Oman, the USA, and Afghanistan to ship aligned, user-focused features.",
  },
  {
    title: "End-to-End Ownership",
    description:
      "From game state management at Sweatbet to scalable frontend systems at Milestone, I own delivery from architecture through to production.",
  },
];

export const Features = () => {
  return (
    <AnimatedSection id="features">
      <SectionHeading
        number="04"
        label="Features"
        subtitle="With several years of hands-on experience, I help businesses transform ideas into digital products that deliver value and impact. My focus is on writing clean code, creating smooth user experiences, and delivering projects on time."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ title, description }) => (
          <div
            key={title}
            className="group rounded-lg border border-gray-200 dark:border-white/10 p-6 transition-colors hover:border-primary/40"
          >
            <div className="w-8 h-px bg-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};
