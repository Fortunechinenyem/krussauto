import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/public/images";
import Hamburger from "../HamburgerMenu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto">
      <header className="flex flex-col md:flex-row items-center justify-between p-4 w-full">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex title-font font-medium">
            <Image className="" src={Logo} alt="logo" width={110} priority />
          </Link>

          <button
            className="focus:outline-none md:hidden"
            aria-label="Open Menu"
            onClick={toggleMenu}
          >
            <Hamburger />
          </button>
        </div>

        <nav
          className={`container items-center flex flex-col md:flex-row gap-4 md:gap-5 mt-2 md:mt-0 ${
            !isOpen ? "hidden md:flex" : ""
          }`}
        >
          <Link
            href="/"
            className="text-[#111] sm:mb-3 text-xl"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-[#111] sm:mb-3 text-xl"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-[#111] sm:mb-3 text-xl"
            onClick={toggleMenu}
          >
            Services
          </Link>

          <Link
            href="/blog"
            className="text-[#111] sm:mb-3 text-xl"
            onClick={toggleMenu}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-[#111] sm:mb-3 text-xl"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <div
            className={`md:flex md:flex-row sm:gap-4 sm:flex-col mt-2 sm:mb-4 sm:mt-5 md:mt-0 items-center ${
              !isOpen ? "hidden md:flex" : ""
            }`}
          >
            <div className="login mb-2 md:mb-0  sm:mb-5">
              <Link
                href="/login"
                className="button2 rounded-md border-black text-xl sm:mb-2 sm:mt-5 ml-8 md:ml-0"
                style={{ whiteSpace: "nowrap" }}
              >
                Log In
              </Link>
            </div>
            <Link href="/appointment">
              <button className="mt-4 button px-4 py-2 ml-4 md:mt-0 sm:mt-2">
                Get started
              </button>
            </Link>
          </div>
        </nav>
        <hr />
      </header>
    </div>
  );
}

export default Navbar;
