import Link from "next/link";
import Image from "next/image";

import Button from "@/components/Button";

import { homepageContent, type TPersonalProjectData } from "@/content/homepage";

const SinglePersonalProject = ({ data }: { data: TPersonalProjectData }) => {
  return (
    <div className="flex flex-col items-center justify-between overflow-hidden rounded-md border border-neutral-600 sm:col-span-2 last-of-type:sm:col-start-2">
      <div className="space-y-4">
        <div className="flex aspect-square w-full items-center justify-center bg-gray-600">
          <Image
            quality={100}
            src={data.imageURL}
            alt={data.imageAlt}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="px-3">
          <h4 className="mb-3 text-xl text-white">{data.name}</h4>
          <p className="text-base">{data.description}</p>
          <p className="mt-1 text-lg brightness-75">{data.techStack}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-around space-y-2 py-6">
        <Button>
          <Link
            title="Click to go to the repository"
            href={data.githubURL}
            target="_blank"
          >
            {homepageContent.personalProjects.buttons.github}
          </Link>
        </Button>
        <Button>
          <Link
            title="Click to open the live version"
            href={data.liveURL}
            target="_blank"
          >
            {homepageContent.personalProjects.buttons.liveVersion}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default SinglePersonalProject;
