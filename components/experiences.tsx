import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { AnimatedSection } from "@/shared/animated-section";

interface ExperienceProps {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
}

const experiences: ExperienceProps[] = [
  {
    company: "Milestone Technologies",
    role: "Senior Software Developer",
    duration: "Oct 2023 - Present",
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
      <h2 className="text-lg text-primary text-center tracking-wider mb-4">
        Experiences
      </h2>

      <div className="grid lg:grid-cols-2 gap-4 w-full">
        {experiences.map((exp, idx) => (
          <Card
            key={idx}
            className="shadow-lg rounded-2xl border hover:shadow-xl dark:hover:shadow-[hsl(20deg,4.35%,12.28%)] transition"
          >
            <CardHeader className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-600">{exp.company}</p>
              </div>
              <div className="text-gray-500 mt-2 md:mt-0 text-sm">
                {exp.duration} | {exp.location}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-2">{exp.description}</p>
              {exp.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
};
