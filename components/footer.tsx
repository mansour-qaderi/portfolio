import Link from "next/link";
import { ScrollLink } from "@/shared/scroll-link";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/mansour-qaderi",
  },
  {
    label: "X",
    href: "https://x.com/mansour_qaderi",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mansour-qaderi",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/93790049201",
  },
];

export const Footer = () => {
  return (
    <footer
      className="py-12 md:py-16 border-t border-gray-200 dark:border-white/10"
      id="footer"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <ScrollLink
          href="/#hero"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          Mansour<span className="text-primary">Dev</span>
        </ScrollLink>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {socialLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        &copy; 2025 developed by{" "}
        <Link
          target="_blank"
          href="https://github.com/mansour-qaderi"
          className="text-primary hover:underline"
        >
          Mansour Qaderi
        </Link>
      </p>
    </footer>
  );
};
