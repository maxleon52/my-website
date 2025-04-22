import Link from "next/link";
import IconHeader from "./svg/icon-header";

export function Header() {
  return (
    <header className="bg-max-blue-900/10 fixed top-0 right-0 left-0 z-10 flex h-20 items-center justify-center backdrop-blur-sm">
      <nav className="flex w-full items-center justify-center">
        <ul className="flex w-full max-w-5xl items-center justify-between px-4">
          <li>
            <Link className="hover:text-max-yellow-200" href={"#about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-max-yellow-200" href={"#hard-skills"}>
              Hard Skills
            </Link>
          </li>
          <li>
            <Link className="hover:text-max-yellow-200" href={"#hero"}>
              <IconHeader />
            </Link>
          </li>
          <li>
            <Link className="hover:text-max-yellow-200" href={"#projects"}>
              Projects
            </Link>
          </li>
          <li>
            <Link className="hover:text-max-yellow-200" href={"#contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
