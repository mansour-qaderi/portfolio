import { ReactNode } from "react";
import { Award, CheckCircle, Clock, Code2, Globe, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeaturesProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    title: "Senior Frontend Expertise",
    description:
      "Over 5 years building web and mobile apps with React.js, Next.js, and React Native.",
    icon: <Award />,
  },
  {
    title: "Leadership & Mentorship",
    description:
      "Led teams, delegated tasks, and guided developers at Milestone Technologies and TrueTale.",
    icon: <Users />,
  },
  {
    title: "Full-Stack Frontend Skills",
    description:
      "Expert in TypeScript, Tailwind CSS, GraphQL, REST APIs, and Apollo.",
    icon: <Code2 />,
  },
  {
    title: "High-Quality, Maintainable Code",
    description:
      "Clean, scalable, and efficient code following best practices.",
    icon: <CheckCircle />,
  },
  {
    title: "Remote Collaboration & Productivity",
    description:
      "Successfully worked with teams across Oman, USA, and Afghanistan, coordinating across time zones.",
    icon: <Globe />,
  },
  {
    title: "Proven Results & Reliability",
    description:
      "Delivered projects on time, optimized performance, and ensured excellent UX for multiple clients.",
    icon: <Clock />,
  },
];

export const Features = () => {
  return (
    <section id="features">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        🚀 Why Work With Me
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        With several years of hands-on experience, I help businesses transform
        ideas into digital products that deliver value and impact. My focus is
        on writing clean code, creating smooth user experiences, and delivering
        projects on time.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  {icon}
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
