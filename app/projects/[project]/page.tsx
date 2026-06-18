import { StaticImageData } from "next/image";
import type { Metadata } from "next";
import { Suspense, use } from "react";

import { Gallery } from "@/components/project/gallery";
import {
  agScoutImages,
  agViewerImages,
  crmImages,
  selamHaliImages,
  selamHaliMobileImages,
  tagletImages,
  tagletMobileImages,
  umbrellaImages,
} from "./data";
import {
  AG_SCOUT_TAG,
  AG_VIEWER_TAG,
  CRM_TAG,
  SELAM_HALI_MOBILE_TAG,
  TAGLET_MOBILE_TAG,
  SELAM_HALI_TAG,
  TAGLET_TAG,
  UMBRELLA_TAG,
  AG_SCOUT,
  AG_VIEWER,
  CRM,
  SELAM_HALI,
  SELAM_HALI_MOBILE,
  TAGLET,
  TAGLET_MOBILE,
  UMBRELLA,
} from "@/constants";
import { notFound } from "next/navigation";
import { ProjectTag } from "@/types";
import { projects } from "@/components/projects/data";
import { ProjectCard } from "@/components/projects/card";

const validProject = [
  AG_SCOUT_TAG,
  AG_VIEWER_TAG,
  CRM_TAG,
  SELAM_HALI_MOBILE_TAG,
  TAGLET_MOBILE_TAG,
  SELAM_HALI_TAG,
  TAGLET_TAG,
  UMBRELLA_TAG,
];

const dynamicLoadImages: Record<ProjectTag, StaticImageData[]> = {
  [UMBRELLA_TAG]: umbrellaImages,
  [TAGLET_TAG]: tagletImages,
  [TAGLET_MOBILE_TAG]: tagletMobileImages,
  [CRM_TAG]: crmImages,
  [AG_VIEWER_TAG]: agViewerImages,
  [AG_SCOUT_TAG]: agScoutImages,
  [SELAM_HALI_TAG]: selamHaliImages,
  [SELAM_HALI_MOBILE_TAG]: selamHaliMobileImages,
};

const titles: Record<ProjectTag, string> = {
  [UMBRELLA_TAG]: UMBRELLA,
  [TAGLET_TAG]: TAGLET,
  [TAGLET_MOBILE_TAG]: TAGLET_MOBILE,
  [CRM_TAG]: CRM,
  [AG_VIEWER_TAG]: AG_VIEWER,
  [AG_SCOUT_TAG]: AG_SCOUT,
  [SELAM_HALI_TAG]: SELAM_HALI,
  [SELAM_HALI_MOBILE_TAG]: SELAM_HALI_MOBILE,
};

function assertValidProject(value: string): asserts value is ProjectTag {
  if (!validProject.includes(value)) notFound();
}

export async function generateMetadata({
  params,
}: {
  params: { project: string };
}): Promise<Metadata> {
  const { project } = params;
  assertValidProject(project);

  const title = titles[project as ProjectTag];
  return {
    title: `${title} - My Portfolio`,
    description: `Explore the ${project} project in my portfolio, showcasing innovative solutions and creative designs. Discover how I brought this project to life with cutting-edge technology and a passion for excellence.`,
  };
}

const ProjectPage = ({ params }: { params: Promise<{ project: string }> }) => {
  const { project } = use(params);
  assertValidProject(project);
  const images = dynamicLoadImages[project as ProjectTag];

  return (
    <div className="mx-auto max-w-(--breakpoint-2xl) px-4 mt-14">
      <div className="w-full h-full flex flex-col gap-4 lg:gap-8">
        <Suspense
          fallback={
            <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
          }
        >
          <Gallery images={images} />
          <OtherProjects ignoreProject={project} />
        </Suspense>
      </div>
    </div>
  );
};

type Props = {
  ignoreProject?: ProjectTag;
};

const OtherProjects = ({ ignoreProject }: Props) => {
  return (
    <div className="py-8">
      <h2 className="mb-4 text-2xl font-bold">Related Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          if (project.tag === ignoreProject) return null;
          return <ProjectCard key={project.title} {...project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectPage;
