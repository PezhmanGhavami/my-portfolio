import { useEffect } from "react";

import { ReactComponent as EmailLogo } from "./assets/social-logos/email.svg";
import { ReactComponent as GithubLogo } from "./assets/social-logos/github.svg";
import { ReactComponent as LinkedInLogo } from "./assets/social-logos/linkedin.svg";

const navLinkStyles =
  "hover:text-white hover:bg-neutral-800 px-2 py-1 rounded-md";
const sectionHeadingStyles =
  "text-white text-3xl sm:text-4xl mb-3";
const anchroTagStyles = "text-blue-400 hover:underline";

function App() {
  useEffect(() => {
    globalThis.document;
  }, []);
  return (
    <>
      <header className="sticky top-0 bg-neutral-900/95 backdrop-blur-sm shadow-lg mb-8 sm:mb-16 flex">
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
        <div className="flex-1 flex justify-between items-center">
          <nav className="flex justify-evenly items-center">
            <a
              href="#about"
              title="Click to go to the about section"
              className={navLinkStyles}
            >
              About
            </a>
            <a
              href="#work-experience"
              title="Click to go to the work experience section"
              className={navLinkStyles}
            >
              Work Experience
            </a>
            <a
              href="#projects"
              title="Click to go to the projects section"
              className={navLinkStyles}
            >
              Projects
            </a>
            <a
              href="#contact"
              title="Click to go to the contact section"
              className={navLinkStyles}
            >
              Contact
            </a>
          </nav>
          <button
            type="button"
            title="Click to download my resume"
            className="rounded-md px-2 py-1 border hover:text-white hover:bg-neutral-800"
          >
            Resume
          </button>
        </div>
      </header>
      <main className="mx-auto space-y-12 text-lg">
        {/* Intro */}
        <section
          id="intro"
          className="flex flex-col-reverse sm:flex-row sm:justify-between items-center text-white text-center sm:text-left scroll-m-8 sm:scroll-m-16"
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
          <div className="w-36 h-36 sm:w-48 sm:h-48 mb-12 sm:mb-0">
            <img
              className="rounded-full"
              src="/my-headshot.webp"
              alt="My-photo"
            />
            <div className="flex justify-evenly items-center text-white">
              <a href="">
                <GithubLogo className="w-7 h-7 hover:brightness-75" />
              </a>
              <a href="">
                <LinkedInLogo className="w-6 h-6 hover:brightness-75" />
              </a>
              <a href="">
                <EmailLogo className="w-7 h-7 hover:brightness-75" />
              </a>
            </div>
          </div>
        </section>
        {/* ABOUT */}
        <section id="about">
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
                href="#projects"
                className={anchroTagStyles}
              >
                other projects
              </a>
              . Feel free to contact me if you are
              interested in working with me!
            </p>
          </div>
        </section>
        {/* Work Experience */}
        <section id="work-experience">
          <h2 className={sectionHeadingStyles}>
            Work Experience
          </h2>
          <div className="sm:grid grid-cols-4">
            <p className="flex-1 w-fit col-span-1 brightness-90">
              2017-2022
            </p>
            <div className="col-span-3">
              <a
                className={anchroTagStyles}
                href="https://rayabot.com/"
              >
                Co-Founder and Full-Stack Developer -
                Rayabot
              </a>

              <div className="space-y-3">
                <div>
                  <p className="text-base brightness-90">
                    2019-2021
                  </p>
                  <p>
                    Worked with a team of developers and
                    designers to build a SaaS solution which
                    included:
                  </p>
                  <ul className="list-disc list-inside">
                    <li>
                      A user control panel for managing
                      subscriptions
                    </li>
                    <li>
                      An admin control panel to manage users
                      and cBots
                    </li>
                    <li>
                      cBots performance data visualization,
                      in the admin panel
                    </li>
                    <li>
                      A sse server for realtime
                      communications with the clients
                    </li>
                    <li>
                      A client in the cTrader platform as a
                      cBot
                    </li>
                    <li>
                      A gui made using electron to act as a
                      client for metatrader
                    </li>
                  </ul>
                  <p>A LIST OF TECH</p>
                </div>
                <div>
                  <p className="text-base brightness-90">
                    2019
                  </p>
                  <p>
                    Made an internal REST api for
                    authunticating and managing cbots.
                  </p>
                  <p>A LIST OF TECH</p>
                </div>
                <div>
                  <p className="text-base brightness-90">
                    2018
                  </p>
                  <p>Made a wordpress e-commerce website</p>
                  <p>A LIST OF TECH</p>
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
                  <p>A LIST OF TECH</p>
                </div>
                <div>
                  <p className="text-base brightness-90">
                    2017-2022
                  </p>

                  <p>
                    Made several telegram bots for
                    broadcasting indicator signals,
                    delivering trade notifications, and
                    monitoring different cBot statuses
                  </p>
                  <p>A LIST OF TECH</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Projects */}
        <section id="projects">
          <h2 className={sectionHeadingStyles}>PROJECTS</h2>
          <p>
            Here are some of the project that I'm currently
            working on; These are like playgrounds so I can
            checkout different tech and play around with
            them!
          </p>
          <div>clothing shop</div>
          <div>chat app</div>
          <div>sorting visualizer</div>
        </section>
        {/* Technical skills */}
        {/* I can mix these with the experience and projects section */}
        <section>
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
        </section>
        {/* Contact */}
        <section id="contact">
          <h2 className={sectionHeadingStyles}>Contact</h2>
          <p>
            If you'd like to build something cool together
            you can contact me through ways listed below
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
