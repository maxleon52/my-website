/* eslint-disable @next/next/no-img-element */
"use client";

import { TitleSection } from "@/components/title-section";
import { projects } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export function Projects() {
  const [showAnimation, setShowAnimation] = useState(false);

  useGSAP(() => {
    gsap.from("#project-title", {
      display: "none",
      opacity: 0,
      scrollTrigger: {
        trigger: "#projects",
        start: "top 70%",
        end: "bottom 70%",
      },
    });

    gsap.from(".card", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#container-cards-projects",
        start: "top 70%",
        end: "bottom 70%",
        onEnter: () => {
          setShowAnimation(true);
        },
      },
    });
  });

  return (
    <section
      id="projects"
      className="flex w-full flex-col items-center justify-center gap-8 overflow-hidden p-4 sm:pb-16"
    >
      <div className="h-6 w-[110px]">
        <TitleSection id="project-title" className="">
          PROJECTS
        </TitleSection>
      </div>

      <div
        id="container-cards-projects"
        className="text-max-blue-200 flex w-full gap-2 overflow-x-auto text-sm sm:items-start sm:justify-center"
      >
        {projects.map((item, index) => (
          <Link
            key={index}
            href={
              "https://www.linkedin.com/in/maxwell-alves-de-sousa-835036163/details/experience/?locale=en_US"
            }
            target="_blank"
          >
            <div
              className={cn(
                "group card hover:!bg-max-blue-900 relative h-[330px] w-[230px] cursor-pointer rounded-sm p-2 transition-all duration-500 ease-in-out hover:h-[380px]",
                showAnimation && "card-project",
              )}
            >
              <div className="bg-max-blue-700 absolute top-2 left-2 z-10 flex h-0 w-[calc(100%_-_16px)] items-center justify-center overflow-clip transition-all duration-500 ease-in-out group-hover:h-4/6">
                <img
                  src={item.imageBg.src}
                  alt={item.imageBg.alt}
                  className="h-auto w-full object-fill"
                  // width={75}
                  // height={75}
                />
              </div>
              <div className="flex h-3/5 w-full items-center justify-center">
                <img
                  src={item.logo.src}
                  alt={item.logo.alt}
                  className="h-[100px] w-[100px] object-contain"
                  // width={75}
                  // height={75}
                />
              </div>
              <div className="flex h-2/5 w-full flex-col items-center justify-center gap-2">
                <strong className="text-max-yellow-200 text-center">
                  {item.name}
                </strong>
                <small>0{index + 1}</small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
