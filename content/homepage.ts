import chatAppMockup from "@/public/mockups/chat-app-mockup.png";
import clothingShopMockup from "@/public/mockups/clothing-shop-mockup.png";
import sortingVisualizerMockup from "@/public/mockups/sorting-visualizer-mockup.png";

export const homepageContent = {
  intro: {
    title: "hey, I'm Pezhman 👋",
    subtitle:
      "I'm a Full-Stack Developer with an IMMENSE passion for the bleeding-edge.",
  },
  about: {
    title: "About Me",
    text: "Driven by curiosity and a deep desire to create, I am a Front-End Developer with more than five years of experience in building, testing and deploying scalable websites and web applications.",
  },
  workExperiences: {
    title: "Work Experience",
    data: [
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
        liveURL: "https://clothingshop.pezhmanghavami.com",
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
        liveURL: "https://chatapp.pezhmanghavami.com",
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
        liveURL: "https://sortingvisualizer.pezhmanghavami.com",
      },
    ],
  },
  contact: {
    title: "Get in touch",
    subtitle:
      "If you'd like to build something cool together or have any questions, you can contact me through the ways listed below:",
    buttons: {
      email: "Say hi via an Email",
      linkedin: "Send me a message on Linkedin",
    },
  },
};

export type TWorkExperienceData =
  (typeof homepageContent.workExperiences.data)[0];
export type TPersonalProjectData =
  (typeof homepageContent.personalProjects.data)[0];
