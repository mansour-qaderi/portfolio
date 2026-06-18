import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number: string;
  label: string;
  title?: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({
  number,
  label,
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className,
      )}
    >
      <p className="font-mono text-sm text-primary tracking-wider mb-3">
        {number}. {label}
      </p>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg text-muted-foreground leading-relaxed",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
