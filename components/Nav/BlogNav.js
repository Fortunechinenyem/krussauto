import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/index";
import { BiSearch } from "react-icons/bi";
import {
  // BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsFacebook,
  // BsYoutube,
} from "react-icons/bs";
import Hamburger from "../HamburgerMenu";

export default function BlogNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex  items-center justify-between py-4 px-6">
        <button
          className="hamburger-menu  "
          aria-label="Open Menu"
          onClick={toggleMenu}
        >
          <Hamburger />
        </button>
        <Link href="/" className="flex title-font font-medium items-center">
          <Image className="" src={Logo} alt="logo" width={110} priority />
        </Link>

        <nav
          className={` items-center w-full  ${isOpen ? "block" : "hidden"} `}
        >
          <div className="flex flex-col  md:ml-auto md:space-x-2">
            <div>
              Archives
              <Link
                href="/"
                className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                July 2023
              </Link>
              <Link
                href="/about"
                className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                August 2023
              </Link>
            </div>
            <div>
              Categories
              <Link
                href="/services"
                className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Maintenance
              </Link>
              <Link
                href="/blog"
                className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Repair
              </Link>
              <Link
                href="/contact"
                className="text-black-300 hover:bg-[rgb(7,39,78)] hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Uncategorized
              </Link>
            </div>
          </div>
        </nav>
        <div className="flex gap-4 justify-items md:justify-end mt-4 md:mt-0">
          <div className="flex space-x-4 md:space-x-4">
            <Link href="/">
              <BsFacebook />
            </Link>

            <Link href="/">
              <BsTwitter />
            </Link>

            <Link href="/">
              {" "}
              <BsInstagram />
            </Link>
          </div>
          <div className="">
            <Link
              href="/"
              className="button text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Go to Website
            </Link>
          </div>
          <BiSearch className="hidden md:block" />
        </div>
      </div>
    </header>
  );
}
