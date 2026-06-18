import { TechPill } from "@/components/ui/tech-pill";

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  skills: string[];
}

interface ExperienceTimelineProps {
  experiences: ExperienceItem[];
}

export const ExperienceTimeline = ({
  experiences,
}: ExperienceTimelineProps) => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10 hidden sm:block" />

      <div className="space-y-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative sm:pl-8 group">
            <div className="absolute left-0 top-2 hidden sm:block -translate-x-1/2 w-2 h-2 rounded-full bg-primary ring-4 ring-background" />

            <div className="border border-gray-200 dark:border-white/10 rounded-lg p-6 transition-colors hover:border-primary/40">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <p className="font-mono text-sm text-primary mb-1">
                    {exp.duration}
                  </p>
                  <h3 className="font-mono text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-foreground font-medium">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground shrink-0">
                  {exp.location}
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                {exp.description}
              </p>

              {exp.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <TechPill key={i}>{skill}</TechPill>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
