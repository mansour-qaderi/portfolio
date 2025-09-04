import { LaptopIcon, Server, ChartLine, Plug } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { AnimatedSection } from "@/shared/animated-section";

const services = [
  {
    title: "Web Application Development",
    description: "React, Next.js, Tailwind, TypeScript",
    icon: <LaptopIcon size={30} className="text-[#ffe960]" />,
  },
  {
    title: "Backend Development",
    description: "NestJS, Node.js, Express, MongoDB, REST API, GraphQL",
    icon: <Server size={30} className="text-[#ffe960]" />,
  },
  {
    title: "Accounting & Sales Dashboard Systems",
    description: "Custom ERP, Reporting, Analytics",
    icon: <ChartLine size={30} className="text-[#ffe960]" />,
  },
  {
    title: "API Integration & Development",
    description: "Third-party APIs, Payment Systems, Sync Solutions",
    icon: <Plug size={30} className="text-[#ffe960]" />,
  },
];

export const Services = () => {
  return (
    <AnimatedSection id="services">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full  mx-auto">
        {services.map((service, idx) => {
          const icon = service.icon;
          return (
            <Card
              key={idx}
              className="rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <CardContent className="flex flex-col sm:flex-row items-center sm:items-start pt-6 gap-2 md:gap-4">
                {icon}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </AnimatedSection>
  );
};
