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
          className="hamburger-menu focus:outline-none md:hidden"
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
        className={`md:flex  md:ml-auto ${isOpen ? "flex flex-col" : "hidden"}`}
      >
        <Link
          href="/"
          className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-md font-medium "
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-md font-medium"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          href="/services"
          className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-md font-medium"
          onClick={toggleMenu}
        >
          Services
        </Link>
        <Link
          href="/blog"
          className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-md font-medium"
          onClick={toggleMenu}
        >
          Blog
        </Link>
        <Link
          href="/contact"
          className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-md font-medium"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </nav>
      <hr />
    </header>
  );
}

export default Navbar;
