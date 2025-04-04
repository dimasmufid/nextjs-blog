import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandTelegram,
} from "@tabler/icons-react";
import { Logo } from "./logo";
import Link from "next/link";
import React from "react";

export function Footer() {
  const pages = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Course", href: "/course" },
  ];

  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-neutral-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500  justify-between items-start  md:px-8">
        <div className="flex flex-col items-center justify-center w-full relative">
          <div className="mr-0 md:mr-4  md:flex mb-4">
            <Logo />
          </div>

          <ul className="transition-colors flex sm:flex-row flex-col hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none gap-4">
            {pages.map((page, idx) => (
              <li key={"pages" + idx} className="list-none">
                <Link
                  className="transition-colors hover:text-text-neutral-800 "
                  href={page.href}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>

          <GridLineHorizontal className="max-w-7xl mx-auto mt-8" />
        </div>
        <div className="flex sm:flex-row flex-col justify-between mt-8 items-center w-full">
          <p className="text-neutral-500 dark:text-neutral-400 mb-8 sm:mb-0">
            &copy; Dimas Mufid
          </p>
          <div className="flex gap-4">
            <Link href="https://twitter.com/dimasmufid">
              <IconBrandTwitter className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link href="https://linkedin.com/in/dimasmufid">
              <IconBrandLinkedin className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link href="https://github.com/dimasmufid">
              <IconBrandGithub className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
            <Link href="https://t.me/dimasmufid">
              <IconBrandTelegram className="h-6 w-6 text-neutral-500 dark:text-neutral-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "w-[calc(100%+var(--offset))] h-[var(--height)]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};
