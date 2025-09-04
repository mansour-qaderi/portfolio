"use client";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImageDark from "@/images/hero-image-dark.jpeg";
import heroImageLight from "@/images/hero-image-light.jpeg";

export const Hero = () => {
  const { theme } = useTheme();
  return (
    <section
      id="hero"
      className="grid place-items-center lg:max-w-screen-xl gap-8"
    >
      <div className="text-center space-y-8">
        <Badge variant="outline" className="text-sm py-2">
          <span className="mr-2 text-primary">
            <Badge>Senior Software Developer</Badge>
          </span>
        </Badge>

        <div className="mx-auto text-center text-4xl md:text-6xl font-bold">
          <h1>Mansour Qaderi</h1>
        </div>

        <p className="mx-auto text-xl text-muted-foreground">
          I’m a Senior Software Developer with a Bachelor’s degree in Computer
          Science from Herat University and over 5 years of professional
          experience. I specialize in building scalable, high-performance web
          and mobile applications using modern technologies like JavaScript,
          React, and Next.js. Passionate about clean code and problem-solving, I
          help businesses turn ideas into reliable, user-friendly digital
          products.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="font-bold group/arrow">
            <Link href="#contacts">Hire Me</Link>
            <ArrowRight className="ml-2 group-hover/arrow:translate-x-1 transition-transform" />
          </Button>

          <Button asChild variant="secondary" className="font-bold">
            <Link href="/resume.pdf" target="_blank">
              Download CV
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative group mt-14">
        <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
        <Image
          width={1200}
          height={1200}
          className="w-full md:w-[1200px] mx-auto rounded-lg relative rouded-lg leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
          src={theme === "light" ? heroImageLight : heroImageDark}
          alt="dashboard"
        />

        <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
      </div>
    </section>
  );
};
