import IconGithub from "@/components/svg/icon-github";
import IconGmail from "@/components/svg/icon-gmail";
import IconLinkedin from "@/components/svg/icon-linkedin";
import { TitleSection } from "@/components/title-section";

export function Hero() {
  return (
    <section
      id="hero"
      className="flex h-screen w-full flex-col items-center justify-center space-y-4"
    >
      <TitleSection>Hi, I&apos;m</TitleSection>

      <div className="pt-12">
        <h1 className="animate-growth-color font-science-personal-use-only from-max-blue-700 to-max-blue-500 hover:!text-max-blue-200 bg-gradient-to-br bg-clip-text text-9xl text-transparent">
          Maxwell
        </h1>
      </div>

      <h2 className="text-3xl">Front-end Developer</h2>

      <div className="flex gap-3">
        <IconGithub />
        <IconLinkedin />
        <IconGmail />
      </div>
    </section>
  );
}
