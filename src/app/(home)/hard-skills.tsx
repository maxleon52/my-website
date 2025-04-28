"use client";

import IconHighcharts from "@/components/svg/icon-highcharts";
import IconNextauth from "@/components/svg/icon-nextauth";
import { TitleSection } from "@/components/title-section";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { BiLogoAws } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiCss3,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiNodedotjs,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiSanity,
  SiShadcnui,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbApi, TbPackages } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export function HardSkills() {
  const container = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);

  const stack = [
    { name: "React", icon: <SiReact size={24} /> },
    { name: "Next.js", icon: <RiNextjsFill size={24} /> },
    { name: "Vite.js", icon: <SiVite size={24} /> },
    { name: "JavaScript", icon: <SiJavascript size={24} /> },
    { name: "TypeScript", icon: <SiTypescript size={24} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
    { name: "Shadcn UI", icon: <SiShadcnui size={24} /> },
    { name: "Material UI", icon: <SiMui size={24} /> },
    { name: "Styled Components", icon: <SiStyledcomponents size={24} /> },
    {
      name: "GSAP",
      icon: <SiGreensock size={32} className="stroke-[0.5px]" />,
    },
    {
      name: "React Hook Form",
      icon: <SiReacthookform size={24} className="stroke-[0.5px]" />,
    },
    { name: "React Query", icon: <SiReactquery size={24} /> },
    {
      name: "Zustand",
      icon: <div>{"<Z/>"}</div>,
    }, // BAIXAR SVG
    { name: "Context API", icon: <TbPackages size={24} /> },
    {
      name: "Recharts",
      icon: <div>{"<R/>"}</div>,
    },
    { name: "Highcharts", icon: <IconHighcharts /> },
    { name: "React Router", icon: <SiReactrouter size={24} /> },
    { name: "Next Auth", icon: <IconNextauth /> },
    { name: "Sanity CMS", icon: <SiSanity size={24} /> },
    { name: "REST API", icon: <TbApi size={24} /> },
    { name: "Node.js", icon: <SiNodedotjs size={24} /> },
    { name: "AWS", icon: <BiLogoAws size={24} /> },
    { name: "Vercel", icon: <SiVercel size={24} /> },
    { name: "Git", icon: <SiGit size={24} /> },
    { name: "GitHub", icon: <SiGithub size={24} /> },
    { name: "GitLab", icon: <SiGitlab size={24} /> },
    { name: "HTML5", icon: <SiHtml5 size={24} /> },
    { name: "CSS3", icon: <SiCss3 size={24} /> },
  ];

  useGSAP(
    () => {
      gsap.from(".tech-stack-title", {
        display: "none",
        opacity: 0,
        scrollTrigger: {
          trigger: ".trigger-tech-stack-title",
          start: "top bottom",
          end: "bottom bottom",
        },
      });

      gsap.from("#tech-stack-h3-title", {
        opacity: 0,
        scrollTrigger: {
          trigger: "#tech-stack-h3-title",
          start: "top center",
          end: "top center",
          onEnter: () => {
            setShowAnimation(true);
          },
        },
      });

      gsap.to("#tech-stack-div-4-stack", {
        scrollTrigger: {
          trigger: "#tech-stack-h3-title",
          start: "top center",
          end: "bottom center",
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      id="hard-skills"
      className="flex w-full flex-col items-center justify-center gap-20 py-16"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="h-6 w-[110px]">
          <TitleSection className="tech-stack-title">TECH STACK</TitleSection>
        </div>

        <div className="trigger-tech-stack-title grid grid-cols-7 gap-4">
          {stack.map((item, index) => (
            <div
              key={index}
              className="group bg-max-blue-700 hover:text-max-yellow-200 flex size-16 flex-col items-center justify-center rounded-sm transition-all hover:scale-200"
            >
              {item.icon}
              <span className="-mb-2.5 text-center text-[6px] opacity-0 group-hover:mb-0 group-hover:text-[8px] group-hover:opacity-100">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <h3
        id="tech-stack-h3-title"
        className="max-w-[800px] text-center text-5xl"
      >
        Transforming code into Intuitive, Responsive and Aesthetically Pleasing
        Digital Experience.
      </h3>

      <div
        id="tech-stack-div-4-stack"
        className="relative grid h-[500px] w-full max-w-1/2 grid-cols-2 content-between items-center justify-items-center"
      >
        <div
          className={cn(
            "flex w-fit max-w-3/4 flex-col gap-3 overflow-hidden px-4 text-center opacity-0",
            showAnimation && "animate-slide-right",
          )}
        >
          <strong className="font-science-personal-use-only text-max-yellow-200 text-2xl">
            FRONT-END
          </strong>
          <p>HTML / CSS / JS / TS / REACT / NEXTJS ZUSTAND / REDUX</p>
        </div>

        <div
          className={cn(
            "flex w-fit max-w-3/4 flex-col gap-3 overflow-hidden px-4 text-center opacity-0",
            showAnimation && "animate-slide-left",
          )}
        >
          <strong className="font-science-personal-use-only text-max-yellow-200 text-2xl">
            UI LIBRARY
          </strong>
          <p>SHADNCN-UI / MATERIAL UI / TAILWIND CSS / STYLED-COMPONENTS</p>
        </div>

        <div
          className={cn(
            "flex w-fit max-w-3/4 flex-col gap-3 overflow-hidden px-4 text-center opacity-0",
            showAnimation && "animate-slide-right",
          )}
        >
          <strong className="font-science-personal-use-only text-max-yellow-200 text-2xl">
            OTHER
          </strong>
          <p>JEST / REACT TESTING LIBRARY / NODE.JS / PRISMA / MONGODB</p>
        </div>

        <div
          className={cn(
            "flex w-fit max-w-3/4 flex-col gap-3 overflow-hidden px-4 text-center opacity-0",
            showAnimation && "animate-slide-left",
          )}
        >
          <strong className="font-science-personal-use-only text-max-yellow-200 text-2xl">
            TOOLS
          </strong>
          <p>GIT / WEBPACK / VITE / FIGMA / JIRA</p>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="706"
          height="684"
          fill="none"
          viewBox="0 0 706 684"
          className={
            "absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
          }
        >
          <g id="lines-circles">
            <g
              id="shadow-blur"
              className={cn(showAnimation && "animate-shadow-blur")}
              style={{ fillOpacity: 0 }}
              filter="url(#filter0_f_64_18)"
              opacity="0.5"
            >
              <ellipse
                cx="353"
                cy="342"
                fill="#272E3E"
                rx="203"
                ry="192"
              ></ellipse>
            </g>
            <path
              id="line-top-right"
              className={cn("opacity-0", showAnimation && "animate-show-lines")}
              stroke="#272E3E"
              d="m363.646 328.57 91.924-91.924"
            ></path>
            <path
              id="line-bottom-left"
              className={cn("opacity-0", showAnimation && "animate-show-lines")}
              stroke="#272E3E"
              d="m249.646 442.57 91.924-91.924"
            ></path>
            <path
              id="line-top-left"
              className={cn("opacity-0", showAnimation && "animate-show-lines")}
              stroke="#272E3E"
              d="m250.354 236.646 91.923 91.924"
            ></path>
            <path
              id="line-bottom-right"
              className={cn("opacity-0", showAnimation && "animate-show-lines")}
              stroke="#272E3E"
              d="m364.354 350.646 91.923 91.924"
            ></path>
            <circle
              id="circle-center"
              className={cn(showAnimation && "animate-circle-center")}
              cx="6"
              cy="6"
              r="6"
              fill="#272E3E"
              transform="matrix(1 0 0 -1 347 348)"
            ></circle>
          </g>
          <defs>
            <filter
              id="filter0_f_64_18"
              width="706"
              height="684"
              x="0"
              y="0"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                result="effect1_foregroundBlur_64_18"
                stdDeviation="75"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
}
