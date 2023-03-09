import { useEffect, useRef, useState } from "react";

import { ReactComponent as EmailLogo } from "./assets/social-logos/email.svg";
import { ReactComponent as GithubLogo } from "./assets/social-logos/github.svg";
import { ReactComponent as LinkedInLogo } from "./assets/social-logos/linkedin.svg";

const navLinkStyles =
  "transition-colors duration-150 hover:text-white hover:bg-neutral-800 px-2 py-1 rounded-md";
const sectionHeadingStyles =
  "text-white text-3xl sm:text-4xl mb-3";
const anchroTagStyles = "text-blue-400 hover:underline";
const personalProjectCard = {
  container:
    "flex flex-col justify-between items-center border border-neutral-600 rounded-md sm:col-span-2 px-3 py-6 space-y-6",
  aboutContainer: "",
  heading: "text-white text-xl mb-3",
  description: "text-base",
  stack: "brightness-75 text-lg mt-1",
  linkContainer:
    "flex flex-col justify-around items-center space-y-2",
  link: "transition-colors duration-150 rounded-md w-fit px-2 py-1 border border-neutral-600 hover:text-white hover:bg-neutral-800",
};

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isInAbout, setIsInAbout] = useState(false);
  const [isInWork, setIsInWork] = useState(false);
  const [isInProjects, setIsInProjects] = useState(false);
  const [isInContact, setIsInContact] = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutTriggerPoint =
        aboutRef.current?.clientHeight;
      const workTriggerPoint = aboutTriggerPoint! * 2 + 48;
      const projectsTriggerPoint =
        workRef.current?.clientHeight! +
        workTriggerPoint +
        48;
      const conractTriggerPoint =
        globalThis.document.documentElement.scrollHeight -
        globalThis.document.documentElement.clientHeight;

      if (globalThis.window.scrollY < aboutTriggerPoint!) {
        setIsInAbout(false);
        setIsInWork(false);
        setIsInProjects(false);
        setIsInContact(false);
      } else if (
        globalThis.window.scrollY >= aboutTriggerPoint! &&
        globalThis.window.scrollY < workTriggerPoint!
      ) {
        setIsInAbout(true);
        setIsInWork(false);
        setIsInProjects(false);
        setIsInContact(false);
      } else if (
        globalThis.window.scrollY >= workTriggerPoint! &&
        globalThis.window.scrollY < projectsTriggerPoint!
      ) {
        setIsInAbout(false);
        setIsInWork(true);
        setIsInProjects(false);
        setIsInContact(false);
      } else if (
        globalThis.window.scrollY >=
          projectsTriggerPoint! &&
        globalThis.window.scrollY < conractTriggerPoint!
      ) {
        setIsInAbout(false);
        setIsInWork(false);
        setIsInProjects(true);
        setIsInContact(false);
      } else {
        setIsInAbout(false);
        setIsInWork(false);
        setIsInProjects(false);
        setIsInContact(true);
      }
    };
    globalThis.document.addEventListener(
      "scroll",
      handleScroll,
    );
    return () => {
      globalThis.document.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {openMenu && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-10 h-screen w-screen bg-neutral-900/10 backdrop-blur-sm"
        />
      )}
      <header className="fixed inset-x-0 top-0 z-30 mx-auto flex max-w-2xl items-center justify-between bg-neutral-900/95 pr-3 shadow-lg backdrop-blur-sm sm:justify-start sm:p-0">
        {/* Logo */}
        <a
          href="#intro"
          title="Click to go back to top"
          className={`mr-2 rounded-md${
            openMenu ? " pointer-events-none blur-sm" : ""
          }`}
        >
          <img
            src="/logo-64x64.webp"
            alt="Home | Pezhman Ghavami"
          />
        </a>
        {/* Menu button */}
        <div
          onClick={toggleMenu}
          className={`z-40 flex h-8 w-8 flex-col items-center justify-center space-y-1 rounded-md bg-neutral-700 p-1 sm:hidden transition${
            openMenu ? " ring-2 ring-neutral-400" : ""
          }`}
        >
          <div
            className={`h-[2px] w-full transition ${
              openMenu
                ? "translate-y-[0.2rem] -rotate-45 bg-white"
                : "bg-neutral-300"
            }`}
          />
          <div
            className={`h-[2px] transition ${
              openMenu
                ? "w-full -translate-y-[0.2rem] rotate-45 bg-white"
                : "w-4/6 self-end bg-neutral-300"
            }`}
          />
        </div>
        {/* Nav links and resume button */}
        <nav
          className={`absolute top-0 right-0 z-20 flex h-screen w-2/3 flex-1 translate-x-full flex-col justify-evenly bg-neutral-800 px-10 text-center text-lg transition-transform duration-150 sm:static sm:h-auto sm:translate-x-0 sm:flex-row sm:justify-between sm:bg-transparent sm:px-0 sm:text-base${
            openMenu ? " translate-x-0" : ""
          }`}
        >
          <ul className="flex h-2/3 flex-col items-center justify-center sm:flex-row">
            <li
              onClick={closeMenu}
              title="Click to go to the about section"
              className={`${navLinkStyles}${
                isInAbout ? " font-semibold text-white" : ""
              }`}
            >
              {" "}
              <a href="#about">About</a>
            </li>
            <li
              onClick={closeMenu}
              title="Click to go to the work experience section"
              className={`${navLinkStyles}${
                isInWork ? " font-semibold text-white" : ""
              }`}
            >
              <a href="#work-experience">Work Experience</a>
            </li>
            <li
              onClick={closeMenu}
              title="Click to go to the personal projects section"
              className={`${navLinkStyles}${
                isInProjects
                  ? " font-semibold text-white"
                  : ""
              }`}
            >
              <a href="#personal-projects">
                Perosnal Projects
              </a>
            </li>
            <li
              onClick={closeMenu}
              title="Click to go to the contact section"
              className={`${navLinkStyles}${
                isInContact
                  ? " font-semibold text-white"
                  : ""
              }`}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <a
            href="/resume.pdf"
            target="_blank"
            title="Click to download my resume"
            className="rounded-md border border-neutral-600 px-2 py-1 transition-colors duration-150 hover:bg-neutral-800 hover:text-white"
          >
            Resume
          </a>
        </nav>
      </header>
      <main className="mx-auto my-28 w-11/12 max-w-2xl space-y-12 text-lg">
        {/* Intro */}
        <section
          id="intro"
          className="flex scroll-m-16 flex-col-reverse items-center text-center text-white sm:flex-row sm:justify-between sm:text-left"
        >
          {/* INTRO (ALSO HAS CONTACT) */}
          <div className="space-y-4 sm:mr-6">
            <h1 className="text-4xl font-medium sm:text-5xl">
              Hello! I'm Pezhman Ghavami
            </h1>
            <h3 className="text-2xl sm:text-3xl">
              I'm an Expert Front-End engineer with a strong
              passion for the bleeding-edge.
            </h3>
          </div>
          <div className="mb-12 flex h-36 w-36 flex-col justify-between sm:mb-0 sm:h-48 sm:w-48 ">
            <img
              className="rounded-full"
              src="/my-headshot.webp"
              alt="My-photo"
            />
            <div className="flex items-center justify-evenly text-white">
              <a
                title="Click to visit my github"
                target="_blank"
                href="https://github.com/pezhmanghavami"
              >
                <GithubLogo className="h-7 w-7 transition-colors duration-150 hover:text-white/70" />
              </a>
              <a
                title="Click to visit my linkedin"
                target="_blank"
                href="https://www.linkedin.com/in/pezhmanghavami"
              >
                <LinkedInLogo className="h-6 w-6 transition-colors duration-150 hover:text-white/70" />
              </a>
              <a
                title="Click to send me an email"
                target="_blank"
                href="mailto:mail@pezhmanghavami.com"
              >
                <EmailLogo className="h-7 w-7 transition-colors duration-150 hover:text-white/70" />
              </a>
            </div>
          </div>
        </section>
        {/* ABOUT */}
        <section
          ref={aboutRef}
          className="scroll-m-16"
          id="about"
        >
          <h2 className={sectionHeadingStyles}>About Me</h2>
          <div className="space-y-2">
            <p>
              Since the beginning of my journey, I have been
              passionate about building dynamic, creative
              products using the latest technologies to
              deliver intuitive user experiences.
            </p>
            <p>
              Over the past four years, I have{" "}
              <a
                href="#work-experience"
                className={anchroTagStyles}
              >
                worked
              </a>{" "}
              on various projects, taking them from ideas to
              production.
            </p>
            <p>
              Currently, I am iterating over this website
              and my{" "}
              <a
                href="#personal-projects"
                className={anchroTagStyles}
              >
                other projects
              </a>
              . Feel free to{" "}
              <a
                className={anchroTagStyles}
                href="#contact"
              >
                contact me
              </a>{" "}
              if you are interested in working with me!
            </p>
          </div>
        </section>
        {/* Work Experience */}
        <section
          ref={workRef}
          className="scroll-m-16"
          id="work-experience"
        >
          <h2 className={sectionHeadingStyles}>
            Work Experience
          </h2>
          <div>
            <p className="w-fit flex-1 brightness-90">
              May 2017- February 2022
            </p>
            <div className="space-y-2">
              <a
                className={anchroTagStyles}
                href="https://rayabot.com/"
              >
                Co-Founder and Full-Stack Developer -
                Rayabot
              </a>

              <div className="space-y-3 text-base">
                <div>
                  <p className="brightness-90">2019-2021</p>
                  <p>
                    Worked with a team of developers and
                    designers to build a SaaS product which
                    included:
                  </p>
                  <ul className="list-inside list-disc">
                    <li>
                      A user control panel for managing
                      subscriptions
                    </li>
                    <li>
                      An admin control panel to manage users
                      and the instances of our automated
                      trading software
                    </li>
                    <li>
                      Product performance data visualization
                      in the admin panel
                    </li>
                    <li>
                      An SSE server for broadcasting our
                      trading software's server instance
                      events to the clients
                    </li>
                    <li>
                      A client in the cTrader platform as a
                      cBot
                    </li>
                    <li>
                      A GUI made using electron to act as a
                      bridge client for MetaTrader
                    </li>
                  </ul>
                  <p className="text-lg brightness-75">
                    React • Redux-Toolkit • React Router •
                    Sass • Styled Components • D3.js •
                    Electron • Express.js • PostgreSQL •
                    Redis • JavaScript • C# • cAlgo • MQL5
                  </p>
                </div>
                <div>
                  <p className="brightness-90">2019</p>
                  <p>
                    Made an internal REST API for
                    authenticating and managing our various
                    trading software.
                  </p>
                  <p className="text-lg brightness-75">
                    Express.js • JavaScript
                  </p>
                </div>
                <div>
                  <p className="brightness-90">2018</p>
                  <p>
                    Made a WordPress e-commerce website.
                  </p>
                  <p className="text-lg brightness-75">
                    WordPress
                  </p>
                </div>
                <div>
                  <p className="brightness-90">2017-2022</p>
                  <p>
                    Closely collaborated with the trading
                    team to turn their strategies into
                    indicators and automated trading
                    solutions in the cAlgo platform.
                  </p>
                  <p className="text-lg brightness-75">
                    cAlgo • C#
                  </p>
                </div>
                <div>
                  <p className="brightness-90">2017-2022</p>

                  <p>
                    Made several telegram bots for
                    broadcasting indicator signals,
                    delivering trade notifications, and
                    monitoring different trading software
                    statuses.
                  </p>
                  <p className="text-lg brightness-75">
                    Node.js • Prisma • SQLite • JavaScript •
                    TypeScript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Personal Projects */}
        <section
          ref={projectsRef}
          className="scroll-m-16"
          id="personal-projects"
        >
          <h2 className={sectionHeadingStyles}>
            Personal Projects
          </h2>
          <p>
            Here are some of my personal projects that I'm
            currently working on.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-4">
            {/* Clothing Shop */}
            <div className={personalProjectCard.container}>
              <div
                className={
                  personalProjectCard.aboutContainer
                }
              >
                <h4 className={personalProjectCard.heading}>
                  Clothing Shop
                </h4>
                <p
                  className={
                    personalProjectCard.description
                  }
                >
                  An e-commerce prototype website, made to
                  be a playground for trying out different
                  kinds of tech
                </p>
                <p className={personalProjectCard.stack}>
                  Next.js • React • Tailwindcss • SWR •
                  iron-session • Prisma • PostgreSQL •
                  TypeScript
                </p>
              </div>
              <div
                className={
                  personalProjectCard.linkContainer
                }
              >
                <a
                  title="Click to go to the repository"
                  href="https://github.com/pezhmanghavami/clothing-shop"
                  target="_blank"
                  className={personalProjectCard.link}
                >
                  See the code
                </a>
                <a
                  title="Click to open the live version"
                  href="https://clothingshop.pezhmanghavami.com"
                  target="_blank"
                  className={personalProjectCard.link}
                >
                  Checkout the live version
                </a>
              </div>
            </div>
            {/* Chat App */}
            <div className={personalProjectCard.container}>
              <div
                className={
                  personalProjectCard.aboutContainer
                }
              >
                <h4 className={personalProjectCard.heading}>
                  Chat App
                </h4>
                <p
                  className={
                    personalProjectCard.description
                  }
                >
                  This is a prototype chat application. Like
                  my other project, the purpose of this one
                  is also testing out different tech but
                  with real-time communications and more App
                  like behavior
                </p>
                <p className={personalProjectCard.stack}>
                  React • Tailwindcss • SWR • React Router •
                  Vite • Socket.IO • Express.js •
                  iron-session • Prisma • PostgreSQL •
                  TypeScript
                </p>
              </div>
              <div
                className={
                  personalProjectCard.linkContainer
                }
              >
                <a
                  title="Click to go to the repository"
                  href="https://github.com/pezhmanghavami/chat-app"
                  target="_blank"
                  className={personalProjectCard.link}
                >
                  See the code
                </a>
                <a
                  title="Click to open the live version"
                  href="https://chatapp.pezhmanghavami.com"
                  target="_blank"
                  className={personalProjectCard.link}
                >
                  Checkout the live version
                </a>
              </div>
            </div>
            {/* Sorting Visualizer */}
            <div
              className={
                personalProjectCard.container +
                " sm:col-start-2"
              }
            >
              <div
                className={
                  personalProjectCard.aboutContainer
                }
              >
                <h4 className={personalProjectCard.heading}>
                  Sorting Visualizer
                </h4>
                <p
                  className={
                    personalProjectCard.description
                  }
                >
                  An app to visualize different sorting
                  algorithms with the ability to rewind them
                  to better understand how each algorithm
                  works. It is also very mesmerizing to
                  watch!
                </p>
                <p className={personalProjectCard.stack}>
                  React • Vite • TypeScript
                </p>
              </div>
              <div
                className={
                  personalProjectCard.linkContainer
                }
              >
                <a
                  title="Click to go to the repository"
                  href="https://github.com/pezhmanghavami/sorting-visualizer"
                  target="_blank"
                  className={personalProjectCard.link}
                >
                  See the code
                </a>
                <a
                  title="Click to open the live version"
                  href="https://sortingvisualizer.pezhmanghavami.com"
                  target="_blank"
                  className={personalProjectCard.link}
                >
                  Checkout the live version
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Contact */}
        <section ref={contactRef} id="contact">
          <h2 className={sectionHeadingStyles}>
            Get in touch
          </h2>
          <p>
            If you'd like to build something interesting
            together or have any questions, you can contact
            me through the ways listed below:
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:justify-between sm:gap-0">
            <a
              title="Click to send me an Email"
              className="rounded-md border border-neutral-600 px-2 py-1 transition-colors duration-150 hover:bg-neutral-800 hover:text-white"
              href="mailto:mail@pezhmanghavami.com"
            >
              Say hi via an Email
            </a>
            <a
              title="Click to go to my Linkedin profile"
              className="rounded-md border border-neutral-600 px-2 py-1 transition-colors duration-150 hover:bg-neutral-800 hover:text-white"
              href="https://www.linkedin.com/in/pezhmanghavami"
            >
              Or send me a message on Linkedin
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
