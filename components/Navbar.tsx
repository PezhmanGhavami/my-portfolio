"use client";

import { useEffect, useRef, useState } from "react";

const navLinkStyles =
  "transition-colors duration-300 hover:text-white hover:bg-neutral-800 px-2 py-1.5 rounded-md";

const buttonStyles =
  "rounded-md border border-neutral-600 px-3 py-1 transition-colors duration-300 hover:bg-neutral-800 hover:text-white";

const Navbar = () => {
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

  // TODO - refactor
  useEffect(() => {
    const handleScroll = () => {
      const aboutTriggerPoint = aboutRef.current?.clientHeight;
      const workTriggerPoint = aboutTriggerPoint! * 2 + 48;
      const projectsTriggerPoint =
        workRef.current?.clientHeight! + workTriggerPoint + 48;
      const contactTriggerPoint =
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
        globalThis.window.scrollY >= projectsTriggerPoint! &&
        globalThis.window.scrollY < contactTriggerPoint!
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
    globalThis.document.addEventListener("scroll", handleScroll);
    return () => {
      globalThis.document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   if (!childrenContainer.current) return;

  //   /**
  //    *
  //    * This function loop through the children of this container and highlights them if the element is in view
  //    */
  //   const navHighlighter = () => {
  //     if (!childrenContainer.current?.children) return;

  //     const topSectionHeight =
  //       (
  //         globalThis.document.querySelector(
  //           "#product-single-top-section",
  //         ) as HTMLElement
  //       )?.offsetHeight || 0;

  //     // Get current scroll position
  //     const scrollY = globalThis.window.scrollY;

  //     for (
  //       let index = 0;
  //       index < childrenContainer.current.children.length;
  //       index++
  //     ) {
  //       const currentItem = childrenContainer.current.children[
  //         index
  //       ] as HTMLElement;

  //       const sectionHeight = currentItem.offsetHeight;
  //       const sectionTop = currentItem.offsetTop + topSectionHeight;
  //       const sectionId = currentItem.getAttribute("id");

  //       if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
  //         globalThis.document
  //           .querySelector("#bottom-section-navbar a[href*=" + sectionId + "]")
  //           ?.classList.add("text-q-primary");
  //       } else {
  //         globalThis.document
  //           .querySelector("#bottom-section-navbar a[href*=" + sectionId + "]")
  //           ?.classList.remove("text-q-primary");
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", navHighlighter);

  //   return () => window.removeEventListener("scroll", navHighlighter);
  // }, []);

  return (
    <>
      {openMenu && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-10 h-screen w-screen bg-neutral-900/10 backdrop-blur-sm"
        />
      )}
      <header className="fixed inset-x-0 top-0 z-30 mx-auto flex max-w-3xl items-center justify-between bg-neutral-900/95 pr-3 shadow-lg backdrop-blur-sm sm:justify-start lg:p-0">
        {/* Logo */}
        <a
          href="#intro"
          title="Click to go back to top"
          className={`m-2 rounded-md text-4xl font-medium text-blue-400${
            openMenu ? "pointer-events-none blur-sm" : ""
          }`}
        >
          PG
        </a>
        {/* Menu button */}
        <div
          onClick={toggleMenu}
          className={`z-40 flex h-8 w-8 flex-col items-center justify-center space-y-1 rounded-md bg-neutral-700 p-1 transition sm:hidden duration-300${
            openMenu ? "ring-2 ring-neutral-400" : ""
          }`}
        >
          <div
            className={`h-[2px] w-full transition duration-300 ${
              openMenu
                ? "translate-y-[0.2rem] -rotate-45 bg-white"
                : "bg-neutral-300"
            }`}
          />
          <div
            className={`h-[2px] transition duration-300 ${
              openMenu
                ? "w-full -translate-y-[0.2rem] rotate-45 bg-white"
                : "w-4/6 self-end bg-neutral-300"
            }`}
          />
        </div>
        {/* Nav links and resume button */}
        <nav
          className={`absolute right-0 top-0 z-20 flex h-screen w-2/3 flex-1 flex-col justify-evenly bg-neutral-800 px-10 text-center text-lg transition-transform duration-300 sm:static sm:ml-2 sm:h-auto sm:translate-x-0 sm:flex-row sm:items-center sm:justify-between sm:bg-transparent sm:px-0 sm:text-base${
            openMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex h-2/3 flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0">
            <li>
              <a
                href="#about"
                title="Click to go to the about section"
                onClick={closeMenu}
                className={`${navLinkStyles}${
                  isInAbout ? "font-semibold text-white" : ""
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#work-experience"
                title="Click to go to the work experience section"
                onClick={closeMenu}
                className={`${navLinkStyles}${
                  isInWork ? "font-semibold text-white" : ""
                }`}
              >
                Work Experience
              </a>
            </li>
            <li>
              <a
                href="#personal-projects"
                title="Click to go to the personal projects section"
                onClick={closeMenu}
                className={`${navLinkStyles}${
                  isInProjects ? "font-semibold text-white" : ""
                }`}
              >
                Perosnal Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                title="Click to go to the contact section"
                onClick={closeMenu}
                className={`${navLinkStyles}${
                  isInContact ? "font-semibold text-white" : ""
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            href="/resume.pdf"
            target="_blank"
            title="Click to download my resume"
            className={buttonStyles}
          >
            Resume
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
