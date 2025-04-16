import { About } from "./(home)/about";
import { HardSkills } from "./(home)/hard-skills";
import { Hero } from "./(home)/hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero />
      <div className="flex w-full flex-col items-center justify-center gap-28">
        <About />
        <HardSkills />
      </div>
    </div>
  );
}
