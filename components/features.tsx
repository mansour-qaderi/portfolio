import { AnimatedSection } from "@/shared/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

interface FeatureItem {
  title: string;
  description: string;
}

const featureList: FeatureItem[] = [
  {
    title: "Senior Frontend Expertise",
    description:
      "Over 5 years building web and mobile apps with React.js, Next.js, and React Native.",
  },
  {
    title: "Leadership & Mentorship",
    description:
      "Led teams, delegated tasks, and guided developers at Milestone Technologies and TrueTale.",
  },
  {
    title: "Full-Stack Frontend Skills",
    description:
      "Expert in TypeScript, Tailwind CSS, GraphQL, REST APIs, and Apollo.",
  },
  {
    title: "High-Quality, Maintainable Code",
    description:
      "Clean, scalable, and efficient code following best practices.",
  },
  {
    title: "Remote Collaboration & Productivity",
    description:
      "Successfully worked with teams across Oman, USA, and Afghanistan, coordinating across time zones.",
  },
  {
    title: "Proven Results & Reliability",
    description:
      "Delivered projects on time, optimized performance, and ensured excellent UX for multiple clients.",
  },
];

export const Features = () => {
  return (
    <AnimatedSection id="features">
      <SectionHeading
        number="04"
        label="Features"
        title="Why Work With Me"
        subtitle="With several years of hands-on experience, I help businesses transform ideas into digital products that deliver value and impact. My focus is on writing clean code, creating smooth user experiences, and delivering projects on time."
        align="center"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ title, description }) => (
          <div
            key={title}
            className="group rounded-lg border border-gray-200 dark:border-white/10 p-6 transition-colors hover:border-white/20"
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
