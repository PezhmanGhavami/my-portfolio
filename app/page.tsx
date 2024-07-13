import Image from "next/image";

import Navbar from "@/components/Navbar";

import { metadataMaker } from "@/lib/utils";

import Button from "@/components/Button";
import SingleWorkExperience from "@/components/SingleWorkExperience";
import SinglePersonalProject from "@/components/SinglePersonalProject";

import headshot from "@/public/headshot.webp";
import EmailLogo from "@/assets/social-logos/email.svg";
import GithubLogo from "@/assets/social-logos/github.svg";
import LinkedInLogo from "@/assets/social-logos/linkedin.svg";

import { homepageContent } from "@/content/homepage";

// TODO - remove
const sectionHeadingStyles = "text-white text-3xl sm:text-4xl mb-3";

export const generateMetadata = async () => {
  return metadataMaker({
    title: "Pezhman Ghavami - Front-End Developer",
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
        className="mx-auto my-28 w-11/12 max-w-3xl space-y-12 text-lg"
      >
        {/* Intro */}
        <section
          id="intro"
          className="flex scroll-m-16 flex-col-reverse items-center text-center text-white sm:flex-row sm:justify-between sm:text-left"
        >
          {/* Text section */}
          <div className="max-w-lg space-y-4">
            <h1 className="text-4xl font-medium sm:text-5xl">
              {homepageContent.intro.title}
            </h1>
            <p className="text-xl sm:text-2xl">
              {homepageContent.intro.subtitle}
            </p>
          </div>
          {/* Image and links section */}
          <div className="mb-12 flex flex-col justify-between sm:mb-0">
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
              <a
                title="Click to visit my github"
                target="_blank"
                href="https://github.com/PezhmanGhavami"
              >
                <GithubLogo className="h-7 w-7 transition-colors duration-300 hover:text-white/70" />
              </a>
              <a
                title="Click to visit my linkedin"
                target="_blank"
                href="https://www.linkedin.com/in/pezhmanghavami"
              >
                <LinkedInLogo className="h-7 w-7 transition-colors duration-300 hover:text-white/70" />
              </a>
              <a
                title="Click to send me an email"
                target="_blank"
                href="mailto:mail@pezhmanghavami.com"
              >
                <EmailLogo className="h-7 w-7 transition-colors duration-300 hover:text-white/70" />
              </a>
            </div>
          </div>
        </section>
        {/* ABOUT */}
        <section className="scroll-m-16" id="about">
          <h2 className={sectionHeadingStyles}>
            {homepageContent.about.title}
          </h2>
          <div className="space-y-2">
            <p>{homepageContent.about.text}</p>
          </div>
        </section>
        {/* Work Experience */}
        <section className="scroll-m-16" id="work-experience">
          <h2 className={sectionHeadingStyles}>
            {homepageContent.workExperiences.title}
          </h2>
          <div className="space-y-6">
            {homepageContent.workExperiences.data.map((data) => (
              <SingleWorkExperience key={data.id} data={data} />
            ))}
          </div>
        </section>
        {/* Personal Projects */}
        <section className="scroll-m-16" id="personal-projects">
          <h2 className={sectionHeadingStyles}>
            {homepageContent.personalProjects.title}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-4">
            {homepageContent.personalProjects.data.map((data) => (
              <SinglePersonalProject key={data.id} data={data} />
            ))}
          </div>
        </section>
        {/* Contact */}
        <section id="contact">
          <h2 className={sectionHeadingStyles}>
            {homepageContent.contact.title}
          </h2>
          <p>{homepageContent.contact.subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <Button>
              <a
                title="Click to send me an Email"
                href="mailto:mail@pezhmanghavami.com"
              >
                {homepageContent.contact.buttons.email}
              </a>
            </Button>
            <div className="relative h-[1px] w-24 bg-neutral-600 after:absolute after:-top-4 after:right-1/2 after:h-7 after:w-7 after:translate-x-1/2 after:rounded-full after:bg-neutral-900 after:text-center after:content-['or']" />
            <Button>
              <a
                title="Click to go to my Linkedin profile"
                href="https://www.linkedin.com/in/pezhmanghavami"
              >
                {homepageContent.contact.buttons.linkedin}
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
