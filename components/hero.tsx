"use client";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { ScrollLink } from "@/shared/scroll-link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/shared/animated-section";
import heroImageDark from "@/images/hero-image-dark.jpeg";
import heroImageLight from "@/images/hero-image-light.jpeg";

export const Hero = () => {
  const { theme } = useTheme();

  return (
    <AnimatedSection id="hero" className="pt-32 md:pt-40">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8">
          <p className="font-mono text-sm text-primary tracking-wider">
            Senior Full Stack Developer
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Mansour Qaderi
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-prose">
            I&apos;m a Senior Full Stack Developer with a Bachelor&apos;s degree
            in Computer Science from Herat University and over 6 years of
            professional experience. I specialize in building scalable,
            high-performance web and mobile applications using modern
            technologies such as JavaScript, React, ReactNative, Next.js, and
            TypeScript. Passionate about clean code and problem-solving, I help
            businesses turn ideas into reliable, user-friendly digital products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="font-semibold group/arrow">
              <ScrollLink href="#contacts">
                Hire Me
                <ArrowRight className="ml-2 size-4 group-hover/arrow:translate-x-1 transition-transform" />
              </ScrollLink>
            </Button>

            <Button asChild variant="outline" className="font-semibold">
              <Link href="/resume.pdf" target="_blank">
                Download CV
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-lg border border-gray-200 dark:border-white/10">
            <Image
              width={600}
              height={600}
              className="w-full h-auto object-cover"
              src={theme === "light" ? heroImageLight : heroImageDark}
              alt="Mansour Qaderi"
              priority
            />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
