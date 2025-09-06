"use client";
import { ReactNode, useCallback, useState } from "react";
import {
  ChevronsDown,
  Github,
  Menu,
  Rocket,
  Smartphone,
  Code2,
  Handshake,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Separator } from "../components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { Button } from "../components/ui/button";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const routeList: RouteProps[] = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#experiences",
    label: "Experiences",
  },
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#services",
    label: "Services",
  },
  {
    href: "#contacts",
    label: "Contact",
  },
];

const featureList: FeatureProps[] = [
  {
    title: "Modern Web Development",
    description:
      "Responsive, fast, and scalable websites with React, Next.js, and Tailwind CSS.",
    icon: <Rocket />,
  },
  {
    title: "Cross-Platform Mobile Apps",
    description:
      "Build powerful React Native apps that run smoothly on both iOS and Android devices.",
    icon: <Smartphone />,
  },
  {
    title: "TypeScript Expertise",
    description:
      "Clean, maintainable, and error-free code with TypeScript for web and mobile projects.",
    icon: <Code2 />,
  },
  {
    title: "Freelancer Mindset",
    description:
      "Focused on results, clear communication, and meeting deadlines to grow your business.",
    icon: <Handshake />,
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const _navbarChangeVisibility = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
        Mansour<span className="text-[#ffe960]">Dev</span>
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={_navbarChangeVisibility}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                    Mansour<span className="text-[#ffe960]">Dev</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start gap-2">
              <Separator />
              <ToggleTheme />
              <Button
                size="sm"
                variant="secondary"
                className="w-full justify-start mt-2"
              >
                <Link
                  aria-label="View on GitHub"
                  href="https://github.com/mansour-qaderi/portfolio"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  <Github className="size-5" />
                  Github
                </Link>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src="https://avatars.githubusercontent.com/u/75042455?v=4"
                  alt="RadixLogo"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description, icon }) => (
                    <li
                      key={title}
                      className="rounded-md p-3 text-sm hover:bg-muted"
                    >
                      {icon}
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>
                      <p className="line-clamp-2 text-muted-foreground">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />

        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/mansour-qaderi/portfolio"
            target="_blank"
          >
            <Github className="size-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
};
