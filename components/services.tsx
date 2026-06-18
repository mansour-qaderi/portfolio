import { LaptopIcon, Server, ChartLine, Plug } from "lucide-react";
import { AnimatedSection } from "@/shared/animated-section";
import { SectionHeading } from "@/components/ui/section-heading";

const services = [
  {
    title: "Web & Mobile Development",
    description: "React, React Native, Next.js, Tailwind, TypeScript",
    icon: LaptopIcon,
  },
  {
    title: "Backend Development",
    description: "NestJS, Node.js, Express, MongoDB, REST API, GraphQL",
    icon: Server,
  },
  {
    title: "Accounting & Sales Dashboard Systems",
    description: "Custom ERP, Reporting, Analytics",
    icon: ChartLine,
  },
  {
    title: "API Integration & Development",
    description: "Third-party APIs, Payment Systems, Sync Solutions",
    icon: Plug,
  },
];

export const Services = () => {
  return (
    <AnimatedSection id="services">
      <SectionHeading number="05" label="Services" />

      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((service, idx) => {
          const Icon = service.icon;
          const index = String(idx + 1).padStart(2, "0");

          return (
            <div
              key={idx}
              className="group flex gap-5 rounded-lg border border-gray-200 dark:border-white/10 p-6 transition-colors hover:border-white/20"
            >
              <div className="flex flex-col items-start gap-3">
                <span className="font-mono text-sm text-primary">{index}</span>
                <Icon className="size-5 text-primary/40" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
};
