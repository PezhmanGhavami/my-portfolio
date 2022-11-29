function App() {
  return (
    <>
      <header>
        <nav className="flex space-x-2 h-12">
          <a href="#">About</a>
          <a href="#">Exprience</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
          <a href="#">Resume</a>
        </nav>
      </header>
      <main className="mx-auto">
        <section>
          {/* INTRO (ALSO HAS CONTACT) */}
          <img
            className="rounded-full h-40 w-40"
            src="/my-headshot.webp"
            alt=""
          />
          <div>
            <h1 className="text-5xl">
              Hello! I'm Pezhman Ghavami.
            </h1>
            <h3 className="text-3xl">
              I'm a Full-Stack developer based in iran.
            </h3>
            {/* Shove location somewhere here */}
            LINKS
          </div>
        </section>
        {/* ABOUT */}
        <section>
          <h2>About Me</h2>
          <p>
            Since the beginning of my journey over the past
            5 years, I have been passionate about building
            dynamic, creative products using bleeding edge
            technologies to deliver intuitive user
            experiences.
          </p>
          <p>
            I am experienced (ADD LINK TO EXPERIENCES
            SECTION) in taking fullstack applications from
            scratch to production.
          </p>
          <p>
            (ADD LINK TO PROJECT SECTION) Currently I am
            iterating over this website and my other
            projects. Feel free to contact me if you are
            interested in working with me!
          </p>
        </section>
        <section>
          <h2>Experiences</h2>
          work experience 2017-2022
          <p>
            co-founder and software engineer at rayabot{" "}
            <br /> turned trading strategies into automated
            trading solutions(cbots) and indicators (cTrader
            cAlgo c#) <br /> internal REST api for
            authunticating and managing cbots (express){" "}
            <br /> telegram bots for broadcasting indicator
            signals, delivering trade notifications, and
            monitoring cbots status (Nodejs) <br /> a
            wordpress ecommerce website <br /> lead a team
            of 2 for building a paas solution which
            included: <br /> a sse server for realtime
            communications with clients <br /> a gui made
            using electron to act as a client for metatrader{" "}
            <br />
            user and admin control panels using react-admin
          </p>
        </section>
        <section>
          <h2>PROJECTS</h2>
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
        <section>CONTACT</section>
      </main>
    </>
  );
}

export default App;
