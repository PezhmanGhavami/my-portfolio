import { ReactNode } from "react";

const SectionHeading = ({ children }: { children: ReactNode }) => {
  return <h2 className="mb-3 text-3xl text-white sm:text-4xl">{children}</h2>;
};

export default SectionHeading;
