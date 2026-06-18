import { cn } from "@/lib/utils";

interface TechPillProps {
  children: React.ReactNode;
  className?: string;
}

export const TechPill = ({ children, className }: TechPillProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-gray-200 dark:border-white/10 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary",
        className,
      )}
    >
      {children}
    </span>
  );
};
