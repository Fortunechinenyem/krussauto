import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/public/images";
import { useRouter } from "next/router";
import { NavBarItems } from "@/layout/constants";
import Hamburger from "../HamburgerMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full bg-white transition-all duration-300 ${
        hasScrolled ? "shadow-lg" : "shadow-sm"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={Logo} alt="logo" width={120} height={40} priority />
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <Hamburger isMenuOpen={isMenuOpen} />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {NavBarItems.map((item) => (
              <Link
                key={item.label}
                href={item.url}
                className={`text-gray-700 hover:text-blue-600 transition-colors duration-300 ${
                  router.pathname === item.url ? "font-bold text-blue-600" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center">
            <Link href="/appointment">
              <button className="button ml-8 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } transition-all duration-300`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-t border-gray-200">
          {NavBarItems.map((item) => (
            <Link
              key={item.label}
              href={item.url}
              className={`block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 ${
                router.pathname === item.url ? "bg-gray-100 font-bold" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4">
            <Link href="/appointment">
              <button className=" button w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
