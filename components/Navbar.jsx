import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
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
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      <nav
        className={`container items-center flex flex-col md:flex-row gap-4 md:gap-7 mt-2 md:mt-0 ${
          !isOpen ? "hidden md:flex" : ""
        }`}
      >
        <Link
          href="/about"
          className="text-[#111] sm:mb-3 text-xl"
          onClick={toggleMenu}
        >
          About Us
        </Link>
        <div className="group relative">
          <button
            className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-md font-medium"
            onClick={toggleMenu}
          >
            Services
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute z-10 left-0 mt-2 bg-gray-800 text-white rounded-md p-2`}
          >
            <Link
              href="/services/service1"
              className="text-[#111] sm:mb-3 text-xl"
              onClick={toggleMenu}
            >
              Service 1
            </Link>
            <Link
              href="/services/service2"
              className="text-[#111] sm:mb-3 text-xl"
              onClick={toggleMenu}
            >
              Service 2
            </Link>
            <Link
              href="/services/service3"
              className="text-[#111] sm:mb-3 text-xl"
              onClick={toggleMenu}
            >
              Service 3
            </Link>
          </div>
        </div>
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
              className="text-[#111111] rounded-md border-black text-xl sm:mb-2 sm:mt-5 ml-8 md:ml-0"
              style={{ whiteSpace: "nowrap" }}
            >
              Log In
            </Link>
          </div>
          <Link href="/appointment">
            <button className="mt-4 bg-[#00B0BA] text-black font-medium rounded-md px-4 py-2 ml-4 md:mt-0 sm:mt-2">
              Get started
            </button>
          </Link>
        </div>
      </nav>
      <hr />
    </header>
  );
}

export default Navbar;
