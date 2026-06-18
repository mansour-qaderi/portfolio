"use client";
import { useCallback, useState } from "react";
import { Github, Menu } from "lucide-react";
import Link from "next/link";
import { ScrollLink } from "@/shared/scroll-link";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "/#hero", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experiences", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#features", label: "Features" },
  { href: "/#services", label: "Services" },
  { href: "/#contacts", label: "Contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-white/10 bg-background/80 backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          Mansour<span className="text-primary">Dev</span>
        </Link>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <ToggleTheme />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="flex flex-col justify-between bg-background border-white/10"
            >
              <div>
                <SheetHeader className="mb-6">
                  <SheetTitle className="font-mono text-left">
                    Mansour<span className="text-primary">Dev</span>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-1">
                  {routeList.map(({ href, label }) => (
                    <Button
                      key={href}
                      onClick={closeMenu}
                      asChild
                      variant="ghost"
                      className="justify-start font-mono text-sm"
                    >
                      <ScrollLink href={href}>{label}</ScrollLink>
                    </Button>
                  ))}
                </nav>
              </div>

              <SheetFooter className="flex-col items-start gap-3 sm:flex-col">
                <Separator className="bg-white/10" />
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link
                    aria-label="View on GitHub"
                    href="https://github.com/mansour-qaderi/portfolio"
                    target="_blank"
                  >
                    <Github className="size-4 mr-2" />
                    GitHub
                  </Link>
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {routeList.map(({ href, label }) => (
            <ScrollLink
              key={href}
              href={href}
              className="font-mono text-sm text-muted-foreground px-3 py-2 transition-colors hover:text-primary"
            >
              {label}
            </ScrollLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <ToggleTheme />
          <Button
            asChild
            variant="ghost"
            size="icon"
            aria-label="View on GitHub"
          >
            <Link
              href="https://github.com/mansour-qaderi/portfolio"
              target="_blank"
            >
              <Github className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
