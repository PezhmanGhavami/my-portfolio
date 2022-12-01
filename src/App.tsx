import { useEffect, useRef, useState } from "react";

import { ReactComponent as EmailLogo } from "./assets/social-logos/email.svg";
import { ReactComponent as GithubLogo } from "./assets/social-logos/github.svg";
import { ReactComponent as LinkedInLogo } from "./assets/social-logos/linkedin.svg";

const navLinkStyles =
  "transition-colors duration-150 hover:text-white hover:bg-neutral-800 px-2 py-1 rounded-md";
const sectionHeadingStyles =
  "text-white text-3xl sm:text-4xl mb-3";
const anchroTagStyles = "text-blue-400 hover:underline";

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
        projectsRef.current?.clientHeight! +
        projectsTriggerPoint +
        48;
      aboutRef.current?.clientHeight;
      console.log(globalThis.window.scrollY);
      console.log(globalThis.window.innerHeight - 32);

      // console.log(aboutTriggerPoint);
      // console.log(workTriggerPoint);
      // console.log(projectsTriggerPoint);
      // console.log(conractTriggerPoint);
      if (
        globalThis.window.scrollY >= aboutTriggerPoint! &&
        globalThis.window.scrollY < workTriggerPoint!
      ) {
        console.log("is in about");
        setIsInAbout(true);
        setIsInWork(false);
        setIsInProjects(false);
        setIsInContact(false);
      } else if (
        globalThis.window.scrollY >= workTriggerPoint!
      ) {
        console.log("is in work");
        setIsInAbout(false);
        setIsInWork(true);
        setIsInProjects(false);
        setIsInContact(false);
      } else {
        setIsInAbout(false);
        setIsInWork(false);
        setIsInProjects(false);
        setIsInContact(false);
      }
    };
    globalThis.document.addEventListener(
      "scroll",
      handleScroll
    );
    return () => {
      globalThis.document.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {openMenu && (
        <div
          onClick={closeMenu}
          className="fixed z-10 w-screen h-screen inset-0 bg-neutral-900/10 backdrop-blur-sm"
        />
      )}
      <header className="fixed inset-x-0 z-30 top-0 bg-neutral-900/95 backdrop-blur-sm shadow-lg mx-auto max-w-2xl flex justify-between sm:justify-start items-center pr-3 sm:p-0">
        {/* Logo */}
        <a
          href="#intro"
          title="Click to go back to top"
          className="mr-2"
        >
          <img
            src="/logo-64x64.webp"
            alt="Home | Pezhman Ghavami"
          />
        </a>
        {/* Menu button */}
        <div
          onClick={toggleMenu}
          className={`sm:hidden z-40 flex flex-col justify-center items-center w-8 h-8 p-1 space-y-1 bg-neutral-700 rounded-md transition${
            openMenu ? " ring-2 ring-neutral-400" : ""
          }`}
        >
          <div
            className={`w-full h-[2px] transition ${
              openMenu
                ? "translate-y-[0.2rem] -rotate-45 bg-white"
                : "bg-neutral-300"
            }`}
          />
          <div
            className={`h-[2px] transition ${
              openMenu
                ? "w-full -translate-y-[0.2rem] rotate-45 bg-white"
                : "bg-neutral-300 w-4/6 self-end"
            }`}
          />
        </div>
        {/* Nav links and resume button */}
        <nav
          className={`flex-1 flex flex-col sm:flex-row justify-evenly sm:justify-between absolute z-20 sm:static top-0 right-0 h-screen w-2/3 sm:h-auto translate-x-full sm:translate-x-0 transition-transform duration-150 bg-neutral-800 sm:bg-transparent px-12 sm:px-0 text-lg sm:text-base${
            openMenu ? " translate-x-0" : ""
          }`}
        >
          <ul className="flex flex-col sm:flex-row justify-center items-center h-2/3">
            <li
              onClick={closeMenu}
              title="Click to go to the about section"
              className={`${navLinkStyles}${
                isInAbout ? " text-white font-semibold" : ""
              }`}
            >
              {" "}
              <a href="#about">About</a>
            </li>
            <li
              onClick={closeMenu}
              title="Click to go to the work experience section"
              className={`${navLinkStyles}${
                isInWork ? " text-white font-semibold" : ""
              }`}
            >
              <a href="#work-experience">Work Experience</a>
            </li>
            <li
              onClick={closeMenu}
              title="Click to go to the personal projects section"
              className={navLinkStyles}
            >
              <a href="#personal-projects">
                Perosnal Projects
              </a>
            </li>
            <li
              onClick={closeMenu}
              title="Click to go to the contact section"
              className={navLinkStyles}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button
            type="button"
            title="Click to download my resume"
            className="transition-colors duration-150 rounded-md px-2 py-1 border hover:text-white hover:bg-neutral-800"
          >
            Resume
          </button>
        </nav>
      </header>
      <main className="mx-auto w-11/12 max-w-2xl space-y-12 my-28 text-lg">
        {/* Intro */}
        <section
          id="intro"
          className="flex flex-col-reverse sm:flex-row sm:justify-between items-center text-white text-center sm:text-left scroll-m-16"
        >
          {/* INTRO (ALSO HAS CONTACT) */}
          <div className="space-y-4 sm:mr-6">
            <h1 className="text-4xl sm:text-5xl font-medium">
              Hello! I'm Pezhman Ghavami
            </h1>
            <h2 className="text-2xl sm:text-3xl">
              I'm a Full-Stack developer based in iran.
            </h2>
          </div>
          <div className="w-36 h-36 sm:w-48 sm:h-48 mb-12 sm:mb-0 flex flex-col justify-between ">
            <img
              className="rounded-full"
              src="/my-headshot.webp"
              alt="My-photo"
            />
            <div className="flex justify-evenly items-center text-white">
              <a href="">
                <GithubLogo className="w-7 h-7 transition-colors duration-150 hover:text-white/70" />
              </a>
              <a href="">
                <LinkedInLogo className="w-6 h-6 transition-colors duration-150 hover:text-white/70" />
              </a>
              <a href="">
                <EmailLogo className="w-7 h-7 transition-colors duration-150 hover:text-white/70" />
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
              Since the beginning of my journey I have been
              passionate about building dynamic, creative
              products using bleeding edge technologies to
              deliver intuitive user experiences.
            </p>
            <p>
              Over the past 5 years I have{" "}
              <a
                href="#work-experience"
                className={anchroTagStyles}
              >
                worked
              </a>{" "}
              on a wide variety of projects taking them from
              ideas to production.
            </p>
            <p>
              Currently I am iterating over this website and
              my{" "}
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
          <div className="sm:grid grid-cols-4">
            <p className="flex-1 w-fit col-span-1 brightness-90">
              2017-2022
            </p>
            <div className="col-span-3 space-y-2">
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
                  <ul className="list-disc list-inside">
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
                      Product performance data
                      visualization, in the admin panel
                    </li>
                    <li>
                      An SSE server for Realtime broadcast
                      of our trading software's, server
                      instance events, to the clients
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
                  <p className="brightness-75 text-lg">
                    React • Redux-Toolkit • Sass • Styled
                    Components • D3.js • Electron •
                    Express.js • PostgreSQL • Redis •
                    JavaScript • C# • cAlgo • MQL5
                  </p>
                </div>
                <div>
                  <p className="text-base brightness-90">
                    2019
                  </p>
                  <p>
                    Made an internal REST api for
                    authunticating and managing trading
                    softwares.
                  </p>
                  <p className="brightness-75 text-lg">
                    Express.js • JavaScript
                  </p>
                </div>
                <div>
                  <p className="text-base brightness-90">
                    2018
                  </p>
                  <p>
                    Made a wordpress e-commerce website.
                  </p>
                  <p className="brightness-75 text-lg">
                    Wordpress
                  </p>
                </div>
                <div>
                  <p className="text-base brightness-90">
                    2017-2022
                  </p>
                  <p>
                    Closely collaborated with the trading
                    team to turn their strategies into
                    indicators and automated trading
                    solutions in the cAlgo platform.
                  </p>
                  <p className="brightness-75 text-lg">
                    cAlgo • C#
                  </p>
                </div>
                <div>
                  <p className="text-base brightness-90">
                    2017-2022
                  </p>

                  <p>
                    Made several telegram bots for
                    broadcasting indicator signals,
                    delivering trade notifications, and
                    monitoring different trading software
                    statuses.
                  </p>
                  <p className="brightness-75 text-lg">
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
            Here are some of my personal project that I'm
            currently working on; These are like playgrounds
            so I can checkout different tech and play around
            with them!
          </p>
          <div>clothing shop</div>
          <div>chat app</div>
          <div>sorting visualizer</div>
        </section>
        {/* Technical skills */}
        {/* I can mix these with the experience and projects section */}
        {/* <section>
          <h2>
            Here are some of my favourite technologes that
            i'm currently using
          </h2>
          <ul>
            <li>Typescript</li>
            <li>React</li>
            <li>Astro</li>
            <li>NextJs</li>
            <li>SWR</li>
            <li>Zustand</li>
            <li>React Router</li>
            <li>Next Auth</li>
            <li>Iron session</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>Tailwindcss</li>
            <li>Vite</li>
            <li>Prisma</li>
            <li>PostgreSQL</li>
            <li>Expressjs</li>
            <li>Socket.io</li>
            <li>Nodejs</li>
            <li>Jest</li>
            <li>Cypress</li>
          </ul>
          <h2>Technologies that I have worked with</h2>
          <ul>
            <li>Javascript</li>
            <li>Redux Toolkit</li>
            <li>React Query (TanStack Query)</li>
            <li>tRPC</li>
            <li>Firebase</li>
            <li>Apollo client react</li>
            <li>Styled Components</li>
            <li>Electron</li>
            <li>Mongodb</li>
            <li>SQLite</li>
            <li>Redis</li>
            <li>Koa</li>
            <li>ws</li>
            <li>D3.js</li>
            <li>Webpack</li>
            <li>Docker</li>
            <li>C#</li>
          </ul>
        </section> */}
        {/* Contact */}
        <section ref={contactRef} id="contact">
          <h2 className={sectionHeadingStyles}>Contact</h2>
          <p>
            If you'd like to build something cool together
            you can contact me through ways listed below
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
