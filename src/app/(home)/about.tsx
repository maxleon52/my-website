"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export function About() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from("#about-description-with-stack", {
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          end: "50% center",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="about"
      className="flex w-full items-center justify-center gap-8 overflow-hidden px-4 sm:overflow-visible sm:pb-16"
    >
      <div
        id="about-description-with-stack"
        className="flex max-w-[1200px] flex-col gap-8 sm:flex-row"
      >
        <div className="max-w-[650px]">
          <small className="font-science-personal-use-only text-max-yellow-200 text-2xl sm:text-base">
            I&apos;m
          </small>

          <p className="text-3xl sm:text-5xl">
            Brazilian developer. Profissional in translate prototype to code.
          </p>
        </div>

        <div
          id="four-stack"
          className="text-max-yellow-200 grid w-full grid-cols-2 gap-2 transition-all"
        >
          <li className="bg-max-blue-700 font-science-personal-use-only flex h-28 items-center justify-center rounded-sm transition-all duration-700">
            JS
          </li>
          <li className="bg-max-blue-700 font-science-personal-use-only flex h-28 items-center justify-center rounded-sm transition-all duration-700">
            TS
          </li>
          <li className="bg-max-blue-700 font-science-personal-use-only flex h-28 items-center justify-center rounded-sm transition-all duration-700">
            NextJS
          </li>
          <li className="bg-max-blue-700 font-science-personal-use-only flex h-28 items-center justify-center rounded-sm transition-all duration-700">
            React
          </li>
        </div>
      </div>
    </section>
  );
}
