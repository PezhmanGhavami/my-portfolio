import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "rounded-md border border-neutral-600 px-3 py-1 transition-colors duration-300 hover:bg-neutral-800 hover:text-white",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
