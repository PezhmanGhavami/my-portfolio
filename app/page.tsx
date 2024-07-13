import Navbar from "@/components/Navbar";

import EmailLogo from "@/assets/social-logos/email.svg";
import GithubLogo from "@/assets/social-logos/github.svg";
import LinkedInLogo from "@/assets/social-logos/linkedin.svg";
import { metadataMaker } from "@/lib/utils";

const sectionHeadingStyles = "text-white text-3xl sm:text-4xl mb-3";
const buttonStyles =
  "rounded-md border border-neutral-600 px-3 py-1 transition-colors duration-300 hover:bg-neutral-800 hover:text-white";

const personalProjectsData = [
  {
    id: 1,
    imageURL: "/mockups/clothing-shop-mockup.png",
    imageAlt: "Clothing Shop preview",
    name: "Clothing Shop",
    description:
      "An e-commerce prototype website, made to be a playground for trying out different kinds of tech. This website utilizes the best practices of Next.js such as SSG and ISR while taking advantage of the next image and next head modules to deliver lightning fast load times and amazing SEO.",
    techStack:
      "Next.js • React • Tailwind CSS • SWR • iron-session • Prisma • PostgreSQL • TypeScript",
    githubURL: "https://github.com/PezhmanGhavami/clothing-shop",
    liveURL: "https://clothingshop.pezhmanghavami.com",
  },
  {
    id: 2,
    imageURL: "/mockups/chat-app-mockup.png",
    imageAlt: "Chat App preview",
    name: "Chat App",
    description:
      "This is a prototype chat application. Like my other project, the purpose of this one is also testing out different tech but with real-time communications (Socket.IO and WebRTC) and more App like behavior.",
    techStack:
      "React • Tailwind CSS • SWR • React Router • simple-peer • Vite • Socket.IO • Express.js • iron-session • Prisma • PostgreSQL • TypeScript",
    githubURL: "https://github.com/PezhmanGhavami/chat-app",
    liveURL: "https://chatapp.pezhmanghavami.com",
  },
  {
    id: 3,
    imageURL: "/mockups/sorting-visualizer-mockup.png",
    imageAlt: "Sorting Visualizer preview",
    name: "Sorting Visualizer",
    description:
      "An app to visualize different sorting algorithms with the ability to rewind them to better understand how each algorithm works. Since there are a lot of re-renderings happening, optimization was an important aspect of development, by leveraging the useCallback hook I managed to create smoother re-renders, specially when rewinding through the results.",
    techStack: "React • Vite • TypeScript",
    githubURL: "https://github.com/PezhmanGhavami/sorting-visualizer",
    liveURL: "https://sortingvisualizer.pezhmanghavami.com",
  },
];

const workExperiencesData = [
  {
    id: 2,
    duration: "February 2022 - April 2023",
    jobTitle: "Career Break | Medical Leave",
    highlights: [
      "Took a break due to a medical condition that has now been completely resolved. Recovered to full health and available for full-time employment.",
      "Started and completed three Personal Projects to keep my skills fresh and have a playground for trying out different tech.",
      "Kept myself updated with the industry trends and further developed my skills as a Web Developer by learning and trying out libraries like tRPC, Zustand and Cypress.",
    ],
  },
  {
    id: 1,
    duration: "May 2017 - February 2022",
    jobTitle: "Full-Stack Developer & Co-Founder | Rayabot",
    highlights: [
      "Led a team of 4 developers in collaboration with a UI/UX designer to develop and launch a SaaS product that led to a 150% increase in yearly revenue and a %1000 increase in the active user base that year.",
      "Built and deployed an Admin dashboard for managing users, server events, and clients of our SaaS product using React.",
      "Achieved 100% test coverage by writing unit tests using Jest for the Admin and User dashboards.",
      "Participated in the development of an Electron.js app's UI using React.",
      "By Visualizing the trade log of our automated trading software using D3.js, I helped the trading team to improve trade accuracy by 50%, lower maximum equity drawdown by 20%, and increase yearly profits by 6%.",
      "By optimizing our main trading bot, I made the algorithm run 40% faster, which resulted in quicker backtests and improved productivity.",
      "Improved performance of our primary indicator and made its initial calculation go from O(n^2) to O(n), drastically cutting draw time.",
      "Closely collaborated with the trading team to turn their strategies into indicators and automated trading solutions in the cTrader platform and TradingView.",
    ],
  },
];

const content = {
  intro: {
    title: "hey, I'm Pezhman 👋",
    subtitle:
      "I'm a Front-End Developer with an IMMENSE passion for the bleeding-edge.",
  },
  contact: {
    title: "",
    subtitle:
      "If you'd like to build something cool together or have any questions, you can contact me through the ways listed below:",
  },
};

type personalProjectData = (typeof personalProjectsData)[0];
type workExperienceData = (typeof workExperiencesData)[0];

const WorkExperience = ({ data }: { data: workExperienceData }) => {
  return (
    <div>
      <Navbar />
      <p className="w-fit flex-1 brightness-90">{data.duration}</p>
      <div className="space-y-2">
        <p className="text-blue-400">{data.jobTitle}</p>

        <div className="space-y-3 text-base">
          <ul>
            {data.highlights.map((highlight, index) => (
              <li className="list-inside list-disc" key={index}>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const PersonalProjectCard = ({ data }: { data: personalProjectData }) => {
  return (
    <div className="flex flex-col items-center justify-between overflow-hidden rounded-md border border-neutral-600 sm:col-span-2 last-of-type:sm:col-start-2">
      <div className="space-y-4">
        <img
          src={data.imageURL}
          alt={data.imageAlt}
          className="aspect-square w-full bg-gray-600"
        />
        <div className="px-3">
          <h4 className="mb-3 text-xl text-white">{data.name}</h4>
          <p className="text-base">{data.description}</p>
          <p className="mt-1 text-lg brightness-75">{data.techStack}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-around space-y-2 py-6">
        <a
          title="Click to go to the repository"
          href={data.githubURL}
          target="_blank"
          className={buttonStyles}
        >
          See the code
        </a>
        <a
          title="Click to open the live version"
          href={data.liveURL}
          target="_blank"
          className={buttonStyles}
        >
          Checkout the live version
        </a>
      </div>
    </div>
  );
};

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
      <main className="mx-auto my-28 w-11/12 max-w-3xl space-y-12 text-lg">
        {/* Intro */}
        <section
          id="intro"
          className="flex scroll-m-16 flex-col-reverse items-center text-center text-white sm:flex-row sm:justify-between sm:text-left"
        >
          <div className="max-w-lg space-y-4">
            <h1 className="text-4xl font-medium sm:text-5xl">
              {content.intro.title}
            </h1>
            <p className="text-xl sm:text-2xl">{content.intro.subtitle}</p>
          </div>
          <div className="mb-12 flex h-36 w-36 flex-col justify-between sm:mb-0 sm:h-48 sm:w-48">
            <img
              className="mb-2 rounded-full"
              src="/headshot.webp"
              alt="My-photo"
            />
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
          <h2 className={sectionHeadingStyles}>About Me</h2>
          <div className="space-y-2">
            <p>
              Driven by curiosity and a deep desire to create, I am a Front-End
              Developer with more than five years of experience in building,
              testing and deploying scalable websites and web applications.
            </p>
          </div>
        </section>
        {/* Work Experience */}
        <section className="scroll-m-16" id="work-experience">
          <h2 className={sectionHeadingStyles}>Work Experience</h2>
          <div className="space-y-6">
            {workExperiencesData.map((data) => (
              <WorkExperience key={data.id} data={data} />
            ))}
          </div>
        </section>
        {/* Personal Projects */}
        <section className="scroll-m-16" id="personal-projects">
          <h2 className={sectionHeadingStyles}>Personal Projects</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-4">
            {personalProjectsData.map((data) => (
              <PersonalProjectCard key={data.id} data={data} />
            ))}
          </div>
        </section>
        {/* Contact */}
        <section id="contact">
          <h2 className={sectionHeadingStyles}>Get in touch</h2>
          <p>{content.contact.subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <a
              title="Click to send me an Email"
              className={buttonStyles}
              href="mailto:mail@pezhmanghavami.com"
            >
              Say hi via an Email
            </a>
            <div className="relative h-[1px] w-24 bg-neutral-600 after:absolute after:-top-4 after:right-1/2 after:h-7 after:w-7 after:translate-x-1/2 after:rounded-full after:bg-neutral-900 after:text-center after:content-['or']" />
            <a
              title="Click to go to my Linkedin profile"
              className={buttonStyles}
              href="https://www.linkedin.com/in/pezhmanghavami"
            >
              Send me a message on Linkedin
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
