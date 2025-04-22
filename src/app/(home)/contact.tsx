import SvgBgShadowBlue from "@/components/svg/bg-shadow-blue";
import { TitleSection } from "@/components/title-section";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex h-[500px] w-full flex-col items-center justify-center gap-8 overflow-hidden py-16"
    >
      <SvgBgShadowBlue />
      <p className="text-max-blue-200 max-w-2xl text-center text-5xl">
        Let&apos;s connect, send me a email.
      </p>
      <p className="text-2xl">maxleon522@gmail.com</p>
      <TitleSection>
        <div className="flex flex-col items-center justify-center">
          <span>BYE</span>
          <small className="text-max-blue-200/50 text-sm">Do visit again</small>
        </div>
      </TitleSection>
    </section>
  );
}
