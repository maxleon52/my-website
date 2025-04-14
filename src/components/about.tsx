export function About() {
  return (
    <section className="flex w-full items-center justify-center gap-8 pb-16">
      <div className="flex max-w-[1200px] gap-8">
        <div className="max-w-[650px]">
          <small className="font-science-personal-use-only">I&apos;m</small>

          <p className="text-5xl">
            Brazilian developer. Profissional in translate prototype to code.
          </p>
          {/* <p className="text-5xl">
            Brazilian developer, with 6+ years of experience. Focused 100% on
            web applications using React, Next.js and Javascript/TypeScript.
          </p> */}
        </div>

        <div
          id="four-stack"
          className="grid w-full grid-cols-2 gap-2 transition-all"
        >
          <li
            id="main-js"
            className="bg-max-blue-700 font-science-personal-use-only flex h-28 items-center justify-center rounded-sm transition-all duration-700"
          >
            JS
          </li>
          <li
            id="main-ts"
            className="bg-max-blue-700 font-science-personal-use-only flex h-28 items-center justify-center rounded-sm transition-all duration-700"
          >
            TS
          </li>
          <li
            id="main-next"
            className="bg-max-blue-700 font-science-personal-use-only flex h-28 items-center justify-center rounded-sm transition-all duration-700"
          >
            NextJS
          </li>
          <li
            id="main-react"
            className="bg-max-blue-700 font-science-personal-use-only flex h-28 items-center justify-center rounded-sm transition-all duration-700"
          >
            React
          </li>
        </div>
      </div>
    </section>
  );
}
