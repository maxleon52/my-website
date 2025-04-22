export function About() {
  return (
    <section className="flex w-full items-center justify-center gap-8 pb-16">
      <div className="flex max-w-[1200px] gap-8">
        <div className="max-w-[650px]">
          <small className="font-science-personal-use-only text-max-yellow-200">
            I&apos;m
          </small>

          <p className="text-5xl">
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
