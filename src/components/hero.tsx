"use client";

import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import React, { useRef } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { useInView } from "motion/react";
import { BookACall } from "./book-a-call";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "700"] });

export function PlayfulHeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref} className="mb-20 w-full">
      <div className="mx-auto items-start gap-10 overflow-hidden pt-10">
        <div className="px-4 py-10">
          <RoughNotationGroup show={isInView}>
            <h2
              className={cn(
                "text-center text-2xl font-bold tracking-tight text-neutral-900 sm:text-left sm:text-4xl lg:text-7xl dark:text-neutral-50",
                manrope.className
              )}
            >
              Do more with your data
              <br />
              <RoughNotation
                type="highlight"
                animationDuration={2000}
                iterations={3}
                color="#facc1580"
                multiline
              >
                <span className="text-currentColor">— no full-time team</span>
              </RoughNotation>{" "}
              required
            </h2>
            <p className="mt-4 max-w-4xl text-center text-xs text-neutral-500 sm:text-left md:mt-10 md:text-lg dark:text-neutral-400">
              I strongly believe, not only big companies who can release from{" "}
              <RoughNotation
                type="underline"
                animationDuration={2000}
                iterations={3}
                color="#facc15"
              >
                spreadsheets hell and scattered data,
              </RoughNotation>
              <br /> but also small and medium businesses can benefit from using
              data to make better decisions.
              <br />
              <br />
              Let&apos;s build something great together.
            </p>
          </RoughNotationGroup>
          <div className="mt-4">
            <BookACall />
          </div>
        </div>
      </div>
    </div>
  );
}

export const MobileMockup = ({ className }: { className?: string }) => {
  return (
    <svg
      width="421"
      height="852"
      viewBox="0 0 421 852"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "absolute inset-0 mx-auto h-full w-full flex-shrink-0 object-cover object-top text-neutral-900 dark:text-neutral-50",
        className
      )}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M73 0H348C386.66 0 418 31.3401 418 70V782C418 820.66 386.66 852 348 852H73C34.3401 852 3 820.66 3 782V70C3 31.3401 34.3401 0 73 0ZM348 6H73C37.6538 6 9 34.6538 9 70V782C9 817.346 37.6538 846 73 846H348C383.346 846 412 817.346 412 782V70C412 34.6538 383.346 6 348 6Z"
        fill="currentColor"
      />
      <rect
        x="318"
        width="10"
        height="6"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect
        x="93"
        y="846"
        width="10"
        height="6"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect
        x="3"
        y="90"
        width="6"
        height="10"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect
        x="412"
        y="90"
        width="6"
        height="10"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect
        x="3"
        y="752"
        width="6"
        height="10"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect
        x="412"
        y="752"
        width="6"
        height="10"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M417.971 266H418.981C420.096 266 421 266.895 421 268V364C421 365.105 420.096 366 418.981 366H417.971V266Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 302C0 300.895 0.90402 300 2.01918 300H3.02878V363H2.01918C0.90402 363 0 362.105 0 361V302Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 223C0 221.895 0.90402 221 2.01918 221H3.02878V284H2.01918C0.90402 284 0 283.105 0 282V223Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 162C0 160.895 0.90402 160 2.01918 160H3.02878V193H2.01918C0.90402 193 0 192.105 0 191V162Z"
        fill="currentColor"
      />
      <rect
        x="150"
        y="30"
        width="120"
        height="35"
        rx="17.5"
        fill="currentColor"
      />
      <rect
        x="244"
        y="41"
        width="13"
        height="13"
        rx="6.5"
        fill="currentColor"
        fillOpacity="0.1"
      />
    </svg>
  );
};
