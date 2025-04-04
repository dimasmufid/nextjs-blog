"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Logo } from "./logo";
import { BookACall } from "./book-a-call";

export function MainNav() {
  return (
    <div className="w-full sticky top-0 z-50">
      <Navbar />
    </div>
  );
}

const Navbar = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "Course", link: "/course" },
  ];

  return (
    <div className="w-full">
      <DesktopNav navItems={navItems} />
      <MobileNav navItems={navItems} />
    </div>
  );
};

const DesktopNav = ({
  navItems,
}: {
  navItems: { name: string; link: string }[];
}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const pathname = usePathname();

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
      }}
      className="z-[60] mx-auto hidden w-full px-8 flex-row items-center justify-between self-start py-2 lg:flex border-b border-muted bg-white dark:bg-neutral-950"
    >
      <Logo />
      <div className="hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2">
        {navItems.map(
          (navItem: { name: string; link: string }, idx: number) => {
            const isActive = pathname === navItem.link;
            return (
              <Link
                onMouseEnter={() => setHovered(idx)}
                className={cn(
                  "relative px-4 py-2",
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                )}
                key={`link=${idx}`}
                href={navItem.link}
              >
                {hovered === idx && !isActive && (
                  <motion.div
                    layoutId="hovered"
                    className="absolute inset-0 h-full w-full rounded-full bg-muted"
                  />
                )}
                <span className="relative z-20">{navItem.name}</span>
              </Link>
            );
          }
        )}
      </div>
      <BookACall />
    </motion.div>
  );
};

const MobileNav = ({
  navItems,
}: {
  navItems: { name: string; link: string }[];
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <motion.div
        animate={{ borderRadius: open ? "4px" : "2rem" }}
        key={String(open)}
        className="relative mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-white px-4 py-2 lg:hidden dark:bg-neutral-950"
      >
        <div className="flex w-full flex-row items-center justify-between">
          <Logo />
          {open ? (
            <IconX
              className="text-black dark:text-white"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <IconMenu2
              className="text-black dark:text-white"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 top-16 z-20 flex w-full flex-col items-start justify-start gap-4 bg-white px-4 py-8 dark:bg-neutral-950"
            >
              {navItems.map(
                (navItem: { name: string; link: string }, idx: number) => {
                  const isActive = pathname === navItem.link;
                  return (
                    <Link
                      key={`link=${idx}`}
                      href={navItem.link}
                      className={cn(
                        "relative",
                        isActive
                          ? "text-primary font-medium"
                          : "text-muted-foreground"
                      )}
                    >
                      <motion.span className="block">
                        {navItem.name}{" "}
                      </motion.span>
                    </Link>
                  );
                }
              )}
              <BookACall />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
