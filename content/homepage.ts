import chatAppMockup from "@/public/mockups/chat-app-mockup.png";
import clothingShopMockup from "@/public/mockups/clothing-shop-mockup.png";
import sortingVisualizerMockup from "@/public/mockups/sorting-visualizer-mockup.png";

export const homepageContent = {
  navbar: {
    logo: {
      text: "PG",
      title: "Click to go back to top",
      href: "#intro",
    },
    resumeButton: {
      href: "/Pezhman-Ghavami-Resume.pdf", //https://flowcv.com/
      title: "Click to download my resume",
      text: "Resume",
    },
  },
  intro: {
    title: "Pezhman Ghavami",
    subtitle: "Full-Stack Engineer",
    links: {
      github: {
        title: "Click to visit my github",
        href: "https://github.com/PezhmanGhavami",
      },
      linkedin: {
        title: "Click to visit my linkedin",
        href: "https://www.linkedin.com/in/pezhmanghavami",
      },
      email: {
        title: "Click to send me an email",
        href: "mailto:pejmanghavami@gmail.com",
      },
    },
  },
  // about: {
  //   title: "About Me",
  //   text: "A curious problem-solver with six+ years of experience crafting robust, scalable web solutions as a Full-Stack engineer.",
  // },
  workExperiences: {
    title: "Work Experience",
    data: [
      {
        id: 4,
        duration: "November 2024 - Now",
        jobTitle: "Full-Stack Engineer | MD.co.uk",
        highlights: [
          // "Led the development of a visual site builder for the company's website, allowing non-technical users to create and manage their own websites through drag and drop .",
          // "Enhanced the company's SEO by 20% by improving the Lighthouse score of the website.",
        ],
      },
      {
        id: 3,
        duration: "July 2023 - November 2024",
        jobTitle: "Front-End Developer | Quarkino",
        highlights: [
          // TRIED ADDING METRICS
          "Spearheaded the migration of legacy web applications and tools from Vue2 to Next.js 13, doubling page load speeds and cutting maintenance costs by 50%.",
          "Created a reusable Next.js project template that reduced new project setup time by 50% and increased code consistency by 80%.",
          "Collaborated with a cross-functional team to rewrite the core product and select client websites (ICIB, Depoint) using React. This resulted in a 40% growth in website traffic and a 25% enhancement in user engagement.",
          "Designed and developed a robust SDK for Quarkino's headless CMS, enhancing front-end development efficiency by 35% and reducing integration time by 40%.",
          "Implemented a mono repository architecture to consolidate diverse front-end applications into a single codebase, tripling build speeds and improving development efficiency by 45%.",
          // ORIGINAL VERSION
          // "Spearheaded the development and execution of a migration strategy to modernize legacy web applications and tools from Vue2 to Next.js 13, significantly enhancing Lighthouse performance metrics.",
          // "Created a reusable Next.js project template to streamline new project initiation.",
          // "Collaborated with a cross-functional team to rewrite our core product and select client websites, including ICIB and Depoint, using React technologies.",
          // "Designed and developed a robust SDK for Quarkino's headless CMS, significantly enhancing front-end development efficiency.",
          // "Successfully implemented a mono repo architecture to consolidate diverse front-end applications into a single codebase, significantly improving development efficiency.",
        ],
      },
      {
        id: 2,
        duration: "February 2022 - April 2023",
        jobTitle: "Career Break | Medical Leave",
        highlights: [
          "Navigated a medically mandated leave of absence for six months, followed by a comprehensive recovery plan that resulted in a seamless reintegration into the workplace with no productivity loss.",
          "Completed 5 freelance projects over a four month period, delivering high quality web applications that increased client engagement by 30% and contributed to a 25% rise in overall website traffic.",
          "Implemented three personal projects to maintain proficiency and explore new technologies to stay current with the industry trends.",
        ],
      },
      {
        id: 1,
        duration: "May 2017 - February 2022",
        jobTitle: "Full-Stack Engineer & Co-Founder | Rayabot",
        highlights: [
          "Led a team of four developers and a UI/UX designer to launch a SaaS product, driving a 150% revenue surge and 10x user growth in a single year.",
          "Built and deployed a React-based Admin dashboard for managing users, server events, and clients of the SaaS product.",
          "Achieved 100% test coverage by writing unit tests using Jest for the Admin and User dashboards.",
          // "Participated in the development of an Electron.js app's UI using React.",
          "Leveraged D3.js to visualize the trade log of the automated trading software, helping the trading team to improve trade accuracy by 50%, lower MDD by 20%, and increase yearly profits by 6%.",
          "By optimizing the main trading bot, the algorithm ran 40% faster, resulting in quicker historical simulations and improved productivity.",
          // "Improved performance of our primary indicator and made its initial calculation go from O(n^2) to O(n), drastically cutting draw time.",
          "Partnered with the trading team to develop indicators and automated trading solutions for the cTrader and TradingView trading platforms.",
          // "Closely collaborated with the trading team to turn their strategies into indicators and automated trading solutions in the cTrader platform and TradingView.",
        ],
      },
    ],
  },
  personalProjects: {
    title: "Personal Projects",
    buttons: {
      github: "See the code",
      liveVersion: "Checkout the live version",
    },
    data: [
      {
        id: 1,
        imageURL: clothingShopMockup,
        imageAlt: "Clothing Shop preview",
        name: "Clothing Shop",
        description:
          "An e-commerce prototype website, made to be a playground for trying out different kinds of tech. This website utilizes the best practices of Next.js such as SSG and ISR while taking advantage of the next image and next head modules to deliver lightning fast load times and amazing SEO.",
        techStack:
          "Next.js • React • Tailwind CSS • SWR • iron-session • Prisma • PostgreSQL • TypeScript",
        githubURL: "https://github.com/PezhmanGhavami/clothing-shop",
        liveURL: "https://clothingshop.pezhman.io",
      },
      {
        id: 2,
        imageURL: chatAppMockup,
        imageAlt: "Chat App preview",
        name: "Chat App",
        description:
          "This is a prototype chat application. Like my other project, the purpose of this one is also testing out different tech but with real-time communications (Socket.IO and WebRTC) and more App like behavior.",
        techStack:
          "React • Tailwind CSS • SWR • React Router • simple-peer • Vite • Socket.IO • Express.js • iron-session • Prisma • PostgreSQL • TypeScript",
        githubURL: "https://github.com/PezhmanGhavami/chat-app",
        liveURL: "https://chatapp.pezhman.io",
      },
      {
        id: 3,
        imageURL: sortingVisualizerMockup,
        imageAlt: "Sorting Visualizer preview",
        name: "Sorting Visualizer",
        description:
          "An app to visualize different sorting algorithms with the ability to rewind them to better understand how each algorithm works. Since there are a lot of re-renderings happening, optimization was an important aspect of development, by leveraging the useCallback hook I managed to create smoother re-renders, specially when rewinding through the results.",
        techStack: "React • Vite • TypeScript",
        githubURL: "https://github.com/PezhmanGhavami/sorting-visualizer",
        liveURL: "https://sortingvisualizer.pezhman.io",
      },
    ],
  },
  // contact: {
  //   title: "Get in touch",
  //   subtitle:
  //     "If you'd like to build something cool together or have any questions, you can contact me through the ways listed below:",
  //   email: {
  //     buttonText: "Say hi via an Email",
  //     buttonTitle: "Click to send me an Email",
  //     href: "mailto:pejmanghavami@gmail.com",
  //   },
  //   linkedin: {
  //     buttonText: "Send me a message on Linkedin",
  //     buttonTitle: "Click to go to my Linkedin profile",
  //     href: "https://www.linkedin.com/in/pezhmanghavami",
  //   },
  // },
};

export type TWorkExperienceData =
  (typeof homepageContent.workExperiences.data)[0];
export type TPersonalProjectData =
  (typeof homepageContent.personalProjects.data)[0];
