import { StaticImageData } from "next/image";
import {
  ag1,
  ags1,
  crm1,
  sel1,
  selm1,
  swb1,
  tag1,
  tagm1,
  umb1,
} from "@/images";
import {
  AG_SCOUT_ROUTE,
  AG_VIEWER_ROUTE,
  CRM_ROUTE,
  SELAM_HALI_MOBILE_ROUTE,
  SELAM_HALI_ROUTE,
  SWEATBET_ROUTE,
  TAGLET_MOBILE_ROUTE,
  TAGLET_ROUTE,
  UMBRELLA_ROUTE,
} from "@/constants/route";
import {
  AG_SCOUT,
  AG_SCOUT_TAG,
  AG_VIEWER,
  AG_VIEWER_TAG,
  CRM,
  CRM_TAG,
  SELAM_HALI,
  SELAM_HALI_MOBILE,
  SELAM_HALI_MOBILE_TAG,
  SELAM_HALI_TAG,
  SWEATBET,
  SWEATBET_TAG,
  TAGLET,
  TAGLET_MOBILE,
  TAGLET_MOBILE_TAG,
  TAGLET_TAG,
  UMBRELLA,
  UMBRELLA_TAG,
} from "@/constants";
import { ProjectTag } from "@/types";

export type Project = {
  title: string;
  tag: ProjectTag;
  description: string;
  tech: string[];
  image: StaticImageData;
  href: string;
};

export const projects: Project[] = [
  {
    title: UMBRELLA,
    tag: UMBRELLA_TAG,
    description:
      "Umbrella ERP is a modern Enterprise Resource Planning platform that provides businesses with integrated tools to streamline operations, improve efficiency, and enable data-driven decision-making. The api-alpha.umbrellaerp.com endpoint serves as an API interface for developers or systems to interact programmatically with Umbrella ERP services.",
    image: umb1,
    tech: ["Remix", "TypeScript", "Tailwind CSS", "Fast API"],
    href: UMBRELLA_ROUTE,
  },
  {
    title: TAGLET,
    tag: TAGLET_TAG,
    description:
      "Taglet is an all-in-one connected product and smart packaging platform that helps consumer brands engage shoppers both in store and after purchase. It uses interactive, digital touchpoints to extend product experiences beyond physical packaging and boost key business metrics like conversion, loyalty, and repeat sales.",
    image: tag1,
    tech: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Tailwind CSS",
      "Ant Design",
      "Google Tag Manager",
      "Google Analytics",
      "E2E Testing",
      "Cucumber",
    ],
    href: TAGLET_ROUTE,
  },
  {
    title: TAGLET_MOBILE,
    tag: TAGLET_MOBILE_TAG,
    description:
      "Taglet is an all-in-one connected product and smart packaging platform that helps consumer brands engage shoppers both in store and after purchase. It uses interactive, digital touchpoints to extend product experiences beyond physical packaging and boost key business metrics like conversion, loyalty, and repeat sales.",
    image: tagm1,
    tech: [
      "React Native",
      "Next.js",
      "TypeScript",
      "React Query",
      "GraphQL",
      "Pure CSS",
      "Tailwind CSS",
    ],
    href: TAGLET_MOBILE_ROUTE,
  },
  {
    title: CRM,
    tag: CRM_TAG,
    description:
      "BlindsBlaze CRM Frontend is a modern, responsive web application built with Next.js to manage customers, products, sales, and operations for window treatment retailers. It connects to a Tryton ERP backend via REST APIs, delivering an intuitive CRM experience with scalable architecture and clean UI.",
    image: crm1,
    tech: [
      "Next.js",
      "TypeScript",
      "Fast APi",
      "Tailwind CSS",
      "Radix UI",
      "React Hook Form & Zod",
    ],
    href: CRM_ROUTE,
  },
  {
    title: AG_VIEWER,
    tag: AG_VIEWER_TAG,
    description:
      "AG Viewer Health Dashboard is a modern system-monitoring interface designed to provide real-time visibility into service health, uptime, latency, and alerts. The redesigned UI focuses on clarity, fast insights, and actionable diagnostics for operational teams.",
    image: ag1,
    tech: [
      "Next.js",
      "TypeScript",
      "Vite",
      "AWS",
      "Fast APi",
      "Tailwind CSS",
      "Radix UI",
      "React Hook Form",
    ],
    href: AG_VIEWER_ROUTE,
  },
  {
    title: AG_SCOUT,
    tag: AG_SCOUT_TAG,
    description:
      "AG Scout is a mobile application for farm management and field scouting that helps farmers visualize plots on a map, monitor crop conditions, and record field observations directly from the field.",
    image: ags1,
    tech: [
      "React Native",
      "TypeScript",
      "Expo",
      "React Query",
      "Maps",
      "Zustand",
    ],
    href: AG_SCOUT_ROUTE,
  },
  {
    title: SELAM_HALI,
    tag: SELAM_HALI_TAG,
    description:
      "Selam Hali is a leading Turkish carpet and rug retailer known for its high-quality, handcrafted products. The Selam Hali website offers an extensive collection of traditional and contemporary carpets, providing customers with a seamless online shopping experience.",
    image: sel1,
    tech: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Apollo Graphql",
      "Material UI",
      "Tailwind CSS",
      "React Hook Form",
    ],
    href: SELAM_HALI_ROUTE,
  },
  {
    title: SELAM_HALI_MOBILE,
    tag: SELAM_HALI_MOBILE_TAG,
    description:
      "Selam Hali is a leading Turkish carpet and rug retailer known for its high-quality, handcrafted products. The Selam Hali website offers an extensive collection of traditional and contemporary carpets, providing customers with a seamless online shopping experience.",
    image: selm1,
    tech: [
      "React Native Cli",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
      "React Hook Form",
      "Zustand",
    ],
    href: SELAM_HALI_MOBILE_ROUTE,
  },
  {
    title: SWEATBET,
    tag: SWEATBET_TAG,
    description:
      "SweatBet is a mobile application for sports betting that allows users to bet on sports events and earn money.",
    image: swb1,
    tech: ["React Native", "TypeScript", "React Query", "Tailwind CSS"],
    href: SWEATBET_ROUTE,
  },
];
