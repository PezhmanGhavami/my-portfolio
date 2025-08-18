import Link from "next/link";
import { FaHome } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Button from "@/components/Button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-neutral-900 text-neutral-300">
      <Navbar />
      <main
        id="main-container"
        className="mx-auto my-28 flex w-11/12 max-w-3xl flex-col gap-12 text-lg"
      >
        {/* 404 Section */}
        <section
          id="not-found"
          className="flex scroll-m-16 flex-col gap-6 text-center"
        >
          {/* Error Code */}
          <div className="flex flex-col gap-4">
            <h1 className="text-8xl font-bold text-blue-400 sm:text-9xl">
              404
            </h1>
            <h2 className="text-3xl font-medium text-white sm:text-4xl">
              Page Not Found
            </h2>
            <p className="text-xl text-neutral-400 sm:text-2xl">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button>
              <Link
                href="/"
                className="flex items-center gap-2"
                title="Go back to homepage"
              >
                <FaHome className="h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NotFound;
