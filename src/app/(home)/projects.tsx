import { TitleSection } from "@/components/title-section";

export function Projects() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-8 pb-16">
      <TitleSection>PROJECTS</TitleSection>

      <div className="text-max-blue-200 flex w-full items-start justify-center gap-2 text-sm">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="group card-project hover:!bg-max-blue-900 relative h-[330px] w-[230px] cursor-pointer rounded-sm p-2 transition-all duration-500 ease-in-out hover:h-[380px]"
          >
            <div className="bg-max-blue-700 absolute top-2 left-2 z-10 h-0 w-[calc(100%_-_16px)] transition-all duration-500 ease-in-out group-hover:h-4/6"></div>
            <div className="flex h-3/5 w-full items-center justify-center">
              LOGO
            </div>
            <div className="flex h-2/5 w-full flex-col items-center justify-center gap-2">
              <strong className="text-max-yellow-200 text-center">
                Project Name
              </strong>
              <small>0{index + 1}</small>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
