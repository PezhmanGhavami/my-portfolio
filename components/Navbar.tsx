"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import Button from "@/components/Button";
import { homepageContent } from "@/content/homepage";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // const aboutRef = useRef<HTMLAnchorElement>(null);
  const workExperienceRef = useRef<HTMLAnchorElement>(null);
  const personalProjectsRef = useRef<HTMLAnchorElement>(null);
  // const contactRef = useRef<HTMLAnchorElement>(null);

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  const closeMenu = () => {
    setOpenMenu(false);
  };

  // Disables overflow on body so the modal can be scrollable on mobile
  useEffect(() => {
    if (openMenu) {
      globalThis.document.body.classList.add(
        "overflow-hidden",
        "lg:overflow-auto",
      );
    } else {
      globalThis.document.body.classList.remove(
        "overflow-hidden",
        "lg:overflow-auto",
      );
    }
  }, [openMenu]);

  // Scroll link highlight handler
  useEffect(() => {
    const mainContainer = globalThis.document.querySelector(
      "#main-container",
    ) as HTMLElement;
    if (!mainContainer) return;

    const refSelector = {
      // about: aboutRef,
      "work-experience": workExperienceRef,
      "personal-projects": personalProjectsRef,
      // contact: contactRef,
    };

    /**
     *
     * This function loop through the children of this container and highlights them if the element is in view
     */
    const navHighlighter = () => {
      if (!mainContainer.children) return;

      // Get current scroll position
      const scrollY = globalThis.window.scrollY;

      for (let index = 0; index < mainContainer.children.length; index++) {
        const currentItem = mainContainer.children[index] as HTMLElement;

        const sectionHeight = currentItem.offsetHeight;
        const sectionTop = currentItem.offsetTop - 76; // header height and some space 76px
        const sectionId = currentItem.getAttribute("id") as
          | keyof typeof refSelector
          | "intro"
          | null;

        if (!sectionId || sectionId === "intro") continue;

        // end of page edge case
        if (
          globalThis.window.innerHeight + Math.ceil(scrollY) >=
          globalThis.document.body.offsetHeight
        ) {
          // refSelector["contact"].current?.classList.add("text-white");
          // refSelector["contact"].current?.classList.add("font-semibold");
          refSelector["personal-projects"].current?.classList.remove(
            "text-white",
          );
          refSelector["personal-projects"].current?.classList.remove(
            "font-semibold",
          );
          return;
        }

        if (
          scrollY > sectionTop &&
          scrollY <= sectionTop + sectionHeight + 48 // gap between each element gap-12 48px
        ) {
          refSelector[sectionId].current?.classList.add("text-white");
          refSelector[sectionId].current?.classList.add("font-semibold");
        } else {
          refSelector[sectionId].current?.classList.remove("text-white");
          refSelector[sectionId].current?.classList.remove("font-semibold");
        }
      }
    };

    navHighlighter();

    window.addEventListener("scroll", navHighlighter);

    return () => window.removeEventListener("scroll", navHighlighter);
  }, []);

  const navbarItems = useMemo(
    () => [
      // {
      //   id: 1,
      //   href: "#about",
      //   ref: aboutRef,
      //   title: "Click to go to the about section",
      //   text: "About",
      // },
      {
        id: 2,
        href: "#work-experience",
        ref: workExperienceRef,
        title: "Click to go to the work experience section",
        text: "Work Experience",
      },
      {
        id: 3,
        href: "#personal-projects",
        ref: personalProjectsRef,
        title: "Click to go to the personal projects section",
        text: "Personal Projects",
      },
      // {
      //   id: 4,
      //   href: "#contact",
      //   ref: contactRef,
      //   title: "Click to go to the contact section",
      //   text: "Contact",
      // },
    ],
    [],
  );

  return (
    <>
      {openMenu && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-10 h-dvh w-screen bg-neutral-900/10 backdrop-blur-sm"
        />
      )}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-30",
          "bg-neutral-900/95 pr-3 shadow-lg backdrop-blur-sm lg:p-0",
        )}
      >
        {/* Container */}
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between">
          {/* Logo */}
          <Link
            href={homepageContent.navbar.logo.href}
            title={homepageContent.navbar.logo.title}
            className={cn(
              "m-2 rounded-md text-4xl font-medium text-blue-400 sm:ms-0",
              openMenu && "pointer-events-none blur-sm",
            )}
          >
            {homepageContent.navbar.logo.text}
          </Link>
          {/* Menu button */}
          <div
            onClick={toggleMenu}
            className={cn(
              "z-40 flex h-8 w-8 flex-col items-center justify-center space-y-1 rounded-md",
              "bg-neutral-700 p-1 transition duration-300 sm:hidden",
              openMenu && "ring-2 ring-neutral-400",
            )}
          >
            <div
              className={cn(
                "h-[2px] w-full transition duration-300",
                openMenu
                  ? "translate-y-[0.2rem] -rotate-45 bg-white"
                  : "bg-neutral-300",
              )}
            />
            <div
              className={cn(
                "h-[2px] transition duration-300",
                openMenu
                  ? "w-full -translate-y-[0.2rem] rotate-45 bg-white"
                  : "w-4/6 self-end bg-neutral-300",
              )}
            />
          </div>
          {/* Nav links and resume button */}
          <nav
            className={cn(
              "absolute right-0 top-0 z-20 flex h-dvh w-2/3 flex-1 flex-col justify-evenly",
              "bg-neutral-800 px-10 text-center text-lg transition-transform duration-300",
              "sm:static sm:ml-2 sm:h-auto sm:translate-x-0 sm:flex-row sm:items-center sm:justify-between sm:bg-transparent sm:px-0 sm:text-base",
              openMenu ? "translate-x-0" : "translate-x-full",
            )}
          >
            <ul
              id="nav-links-container"
              className="flex h-2/3 flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0"
            >
              {navbarItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    ref={item.ref}
                    title={item.title}
                    onClick={closeMenu}
                    className="rounded-md px-2 py-1.5 transition-colors duration-300 hover:bg-neutral-800 hover:text-white"
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <Button>
              <Link
                download
                prefetch={false}
                target="_blank"
                href={homepageContent.navbar.resumeButton.href}
                title={homepageContent.navbar.resumeButton.title}
              >
                {homepageContent.navbar.resumeButton.text}
              </Link>
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
