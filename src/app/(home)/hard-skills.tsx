import SvgBgLinesCircles from "@/components/svg/bg-lines-circles";
import IconHighcharts from "@/components/svg/icon-highcharts";
import IconNextauth from "@/components/svg/icon-nextauth";
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

export function HardSkills() {
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

  return (
    <section className="flex w-full flex-col items-center justify-center gap-20 py-16">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="lines-before-after before:animate-growth after:animate-growth !w-fit px-2">
          TECH STACK
        </div>

        <div className="grid grid-cols-7 gap-4">
          {stack.map((item, index) => (
            <div
              key={index}
              className="group bg-max-blue-700 flex size-16 flex-col items-center justify-center rounded-sm transition-all hover:scale-200"
            >
              {item.icon}
              <span className="-mb-2.5 text-center text-[6px] opacity-0 group-hover:mb-0 group-hover:text-[8px] group-hover:opacity-100">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <h3 className="max-w-[800px] text-center text-5xl">
        Transforming code into Intuitive, Responsive and Aesthetically Pleasing
        Digital Experience.
      </h3>

      <div className="relative grid h-[500px] w-full max-w-1/2 grid-cols-2 content-between items-center justify-items-center">
        <div className="animate-slide-right flex w-fit max-w-3/4 flex-col gap-3 overflow-hidden px-4 text-center opacity-0">
          <strong className="font-science-personal-use-only text-2xl">
            FRONT-END
          </strong>
          <p>HTML / CSS / JS / TS / REACT / NEXTJS ZUSTAND / REDUX</p>
        </div>

        <div className="animate-slide-left flex w-fit max-w-3/4 flex-col gap-3 overflow-hidden px-4 text-center opacity-0">
          <strong className="font-science-personal-use-only text-2xl">
            UI LIBRARY
          </strong>
          <p>SHADNCN-UI / MATERIAL UI / TAILWIND CSS / STYLED-COMPONENTS</p>
        </div>

        <div className="animate-slide-right flex w-fit max-w-3/4 flex-col gap-3 overflow-hidden px-4 text-center opacity-0">
          <strong className="font-science-personal-use-only text-2xl">
            OTHER
          </strong>
          <p>JEST / REACT TESTING LIBRARY / NODE.JS / PRISMA / MONGODB</p>
        </div>

        <div className="animate-slide-left flex w-fit max-w-3/4 flex-col gap-3 overflow-hidden px-4 text-center opacity-0">
          <strong className="font-science-personal-use-only text-2xl">
            TOOLS
          </strong>
          <p>GIT / WEBPACK / VITE / FIGMA / JIRA</p>
        </div>
        <SvgBgLinesCircles />
      </div>
    </section>
  );
}
