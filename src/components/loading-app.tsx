"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import IconHeader from "./svg/icon-header";

gsap.registerPlugin(useGSAP);

export function LoadingApp() {
  const container = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useGSAP(
    () => {
      // Certifique-se de que o DOM está pronto antes de executar a animação
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(container.current, {
            width: "0%",
            duration: 1,
            ease: "Expo.easeInOut",
            onComplete: () => {
              document.body.style.overflow = ""; // Restaura o scroll na pagina
              setIsVisible(false); // Remove o componente do DOM
            },
          });
        },
      });
      const runAnimation = () => {
        tl.fromTo(
          "#icon-header-stroke",
          {
            stroke: "#ABD1FC",
            strokeDasharray: "1 120",
          },
          {
            stroke: "#ABD1FC",
            strokeDasharray: "120 1",
            duration: 2,
          },
          0,
        ).fromTo(
          "#icon-header-fill",
          {
            fill: "transparent",
          },
          {
            fill: "#ABD1FC",
            duration: 1,
          },
          1,
        );
      };

      if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
      ) {
        console.log("document.readyState: ", document.readyState);
        runAnimation();
      } else {
        console.log("ELSE");
        document.addEventListener("DOMContentLoaded", runAnimation);
      }

      // Cleanup para evitar múltiplos listeners
      return () => {
        tl.kill();
        document.removeEventListener("DOMContentLoaded", runAnimation);
      };
    },
    { scope: container },
  );

  return isVisible ? (
    <div
      ref={container}
      className="bg-max-blue-500 fixed !top-0 !right-0 !bottom-0 !left-0 z-999 flex h-screen w-full items-center justify-center"
    >
      <IconHeader />
    </div>
  ) : null;
}
