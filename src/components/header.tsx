"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";
import IconHeader from "./svg/icon-header";

gsap.registerPlugin(useGSAP);

export function Header() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 3.5, defaults: { duration: 0.3 } });

      tl.from("#nav-item-1", {
        x: -20,
        opacity: 0,
      })
        .from("#nav-item-2", {
          x: -20,
          opacity: 0,
        })
        .from("#nav-item-3", {
          x: -20,
          opacity: 0,
        })
        .from("#nav-item-4", {
          x: -20,
          opacity: 0,
        })
        .from("#nav-item-5", {
          x: -20,
          opacity: 0,
        });
    },
    { scope: container },
  );

  return (
    <header className="bg-max-blue-900/10 fixed top-0 right-0 left-0 z-10 flex h-20 items-center justify-center backdrop-blur-sm">
      <nav className="flex w-full items-center justify-center">
        <ul
          ref={container}
          className="flex w-full max-w-5xl items-center justify-between px-4"
        >
          <li id="nav-item-1">
            <Link
              className="hover:text-max-yellow-200 transition-all"
              href={"#about"}
            >
              About
            </Link>
          </li>
          <li id="nav-item-2">
            <Link
              className="hover:text-max-yellow-200 transition-all"
              href={"#hard-skills"}
            >
              Hard Skills
            </Link>
          </li>
          <li id="nav-item-3">
            <Link className="transition-all" href={"#hero"}>
              <IconHeader className="hover:text-max-yellow-200 transition-all" />
            </Link>
          </li>
          <li id="nav-item-4">
            <Link
              className="hover:text-max-yellow-200 transition-all"
              href={"#projects"}
            >
              Projects
            </Link>
          </li>
          <li id="nav-item-5">
            <Link
              className="hover:text-max-yellow-200 opacity-100 transition-all"
              href={"#contact"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
