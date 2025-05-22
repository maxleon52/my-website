"use client";

import IconGithub from "@/components/svg/icon-github";
import IconGmail from "@/components/svg/icon-gmail";
import IconLinkedin from "@/components/svg/icon-linkedin";
import { TitleSection } from "@/components/title-section";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 3.5 });

      tl.from(".hero-title-hi", {
        display: "none",
      })
        .from("#hero-h1-maxwell", {
          opacity: 0,
        })
        .from("#hero-h2-frontend", {
          opacity: 0,
        })
        .from("#hero-social-icons", {
          opacity: 0,
        });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="hero"
      className="flex h-screen w-full flex-col items-center justify-center space-y-4 overflow-hidden"
    >
      <div className="h-6 w-16">
        <TitleSection className="hero-title-hi">Hi, I&apos;m</TitleSection>
      </div>

      <div className="w-full sm:h-[178px] sm:w-[600px] sm:pt-12">
        <h1
          id="hero-h1-maxwell"
          className="animate-growth-color font-science-personal-use-only from-max-blue-700 to-max-blue-500 hover:!text-max-blue-200 bg-gradient-to-br bg-clip-text text-center text-7xl text-transparent sm:text-9xl"
        >
          Maxwell
        </h1>
      </div>

      <div className="h-9 sm:w-[280px]">
        <h2 id="hero-h2-frontend" className="text-2xl sm:text-3xl">
          Front-end Developer
        </h2>
      </div>

      <div className="h-6 w-24">
        <div id="hero-social-icons" className="flex gap-3">
          <IconGithub />
          <IconLinkedin />
          <IconGmail />
        </div>
      </div>
    </section>
  );
}
