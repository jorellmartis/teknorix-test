import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  href: string;
  type?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  onClick?: (...rest: any) => void;
  btnText: string;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

const Button = ({
  href,
  type,
  size,
  onClick,
  target,
  btnText,
  className,
}: ButtonProps) => {
  return (
    <Link
      className={cn(
        "py-2 px-6 max-md:text-sm font-bold md:px-11 flex w-max rounded-3xl bg-tertiary text-white md:hover:bg-white md:hover:text-tertiary md:hover:ring-1 transition-all duration-200",
        className && className,
        type === "primary" &&
          "bg-tertiary text-white md:hover:bg-white md:hover:text-tertiary md:hover:ring-1",
        type === "secondary" && "",
        type === "tertiary" &&
          "bg-transparent text-slate-500  md:hover:text-tertiary md:hover:ring-1"
      )}
      href={href}
      target={target}
    >
      {btnText}
    </Link>
  );
};

export default Button;
