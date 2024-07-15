import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/Navbar";

import { metadataMaker } from "@/lib/utils";

import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import SingleWorkExperience from "@/components/SingleWorkExperience";
import SinglePersonalProject from "@/components/SinglePersonalProject";

import headshot from "@/public/headshot.webp";
import EmailLogo from "@/assets/social-logos/email.svg";
import GithubLogo from "@/assets/social-logos/github.svg";
import LinkedInLogo from "@/assets/social-logos/linkedin.svg";

import { homepageContent } from "@/content/homepage";

export const generateMetadata = async () => {
  return metadataMaker({
    title: "Pezhman Ghavami - Full-Stack Developer",
    description: "Pezhman Ghavami's Portfolio website",
    endpoint: "",
  });
};

const Main = () => {
  return (
    <div className="overflow-x-hidden bg-neutral-900 text-neutral-300">
      <Navbar />
      <main
        id="main-container"
        className="mx-auto my-28 flex w-11/12 max-w-3xl flex-col gap-12 text-lg"
      >
        {/* Intro */}
        <section
          id="intro"
          className="flex scroll-m-16 flex-col-reverse items-center text-center text-white sm:flex-row sm:justify-between sm:text-left"
        >
          {/* Text section */}
          <div className="flex max-w-lg flex-col gap-4">
            <h1 className="text-4xl font-medium sm:text-5xl">
              {homepageContent.intro.title}
            </h1>
            <p className="text-xl sm:text-2xl">
              {homepageContent.intro.subtitle}
            </p>
          </div>
          {/* Image and links section */}
          <div className="mb-6 flex flex-col justify-between sm:mb-0">
            <div className="mb-2 flex size-36 items-center justify-center overflow-hidden rounded-full bg-gray-600 sm:size-48">
              <Image
                alt={""}
                aria-hidden
                quality={100}
                src={headshot}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex items-center justify-evenly text-white">
              <Link {...homepageContent.intro.links.github} target="_blank">
                <GithubLogo className="h-7 w-7 transition-colors duration-300 hover:text-white/70" />
              </Link>
              <Link {...homepageContent.intro.links.linkedin} target="_blank">
                <LinkedInLogo className="h-7 w-7 transition-colors duration-300 hover:text-white/70" />
              </Link>
              <Link {...homepageContent.intro.links.email} target="_blank">
                <EmailLogo className="h-7 w-7 transition-colors duration-300 hover:text-white/70" />
              </Link>
            </div>
          </div>
        </section>
        {/* ABOUT */}
        <section className="scroll-m-16" id="about">
          <SectionHeading>{homepageContent.about.title}</SectionHeading>
          <div>
            <p>{homepageContent.about.text}</p>
          </div>
        </section>
        {/* Work Experience */}
        <section className="scroll-m-16" id="work-experience">
          <SectionHeading>
            {homepageContent.workExperiences.title}
          </SectionHeading>
          <div className="flex flex-col gap-6">
            {homepageContent.workExperiences.data.map((data) => (
              <SingleWorkExperience key={data.id} data={data} />
            ))}
          </div>
        </section>
        {/* Personal Projects */}
        <section className="scroll-m-16" id="personal-projects">
          <SectionHeading>
            {homepageContent.personalProjects.title}
          </SectionHeading>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-4">
            {homepageContent.personalProjects.data.map((data) => (
              <SinglePersonalProject key={data.id} data={data} />
            ))}
          </div>
        </section>
        {/* Contact */}
        <section id="contact">
          <SectionHeading>{homepageContent.contact.title}</SectionHeading>
          <p>{homepageContent.contact.subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0">
            <Button>
              <Link
                href={homepageContent.contact.email.href}
                title={homepageContent.contact.email.buttonTitle}
              >
                {homepageContent.contact.email.buttonText}
              </Link>
            </Button>
            <div className="relative h-[1px] w-24 bg-neutral-600 after:absolute after:-top-4 after:right-1/2 after:h-7 after:w-7 after:translate-x-1/2 after:rounded-full after:bg-neutral-900 after:text-center after:content-['or']" />
            <Button>
              <Link
                href={homepageContent.contact.linkedin.href}
                title={homepageContent.contact.linkedin.buttonTitle}
              >
                {homepageContent.contact.linkedin.buttonText}
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
