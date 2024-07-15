import { Metadata } from "next";
import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export type TMetadataDataProp = {
  title: string;
  image?: { link: string };
  seo_post_title: string;
  seo_meta_description: string;
};

export type TMetadataProps = {
  data: TMetadataDataProp;
  lang?: string;
  pathname: string;
};

export type TSimpleMetadataObjectProps = {
  title: string;
  description: string;
  endpoint: string;
};

/**
 * A function that merges class names using clsx and tailwind-merge
 * @param  inputs - The class names to be merged
 * @returns The merged class names
 * @example cn('text-red-500', 'font-bold') Returns 'text-red-500 font-bold'
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/**
 *
 * A structured return for generateMetadata function
 * @param props A props object of type TSimpleMetadataObjectProps
 * @returns A Metadata object for Next.js
 */
export const metadataMaker = (props: TSimpleMetadataObjectProps): Metadata => {
  const pageUrl = `${process.env.BASE_URL}/${props.endpoint}`;

  return {
    title: props.title,
    description: props.description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "website",
      url: pageUrl,
      title: props.title,
      description: props.description,
      // images:
      //   "https://res.cloudinary.com/drsgyshsf/image/upload/v1680355890/my-portfolio/og-and-tc/pezhmanghavami-og_vl5x4l.png",
    },
    twitter: {
      card: "summary_large_image",
      title: props.title,
      description: props.description,
      site: pageUrl,
      // images:
      //   "https://res.cloudinary.com/drsgyshsf/image/upload/v1680355891/my-portfolio/og-and-tc/pezhmanghavami-tc_spuarz.png",
    },
  };
};
