import IconGithub from "./svg/icon-github";
import IconGmail from "./svg/icon-gmail";
import IconLinkedin from "./svg/icon-linkedin";

export function Hero() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center space-y-4">
      <div className="lines-before-after before:animate-growth after:animate-growth !w-fit px-2">
        Hi, I&apos;m
      </div>

      <div className="pt-12">
        <h1
          id="my-name"
          className="animate-growthColor font-science-personal-use-only from-max-blue-700 to-max-blue-500 hover:!text-max-blue-200 bg-gradient-to-br bg-clip-text text-9xl text-transparent"
        >
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
