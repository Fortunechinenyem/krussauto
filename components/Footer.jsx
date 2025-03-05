import React from "react";
import Link from "next/link";

import {
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsYoutube,
  BsWhatsapp,
} from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/AboutUs" },
                { label: "Our Work", href: "/OurWork" },
                { label: "Services", href: "/Services" },
                { label: "Blog", href: "/Blog" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="font-semibold">Address</p>
              <p className="text-gray-300">Lagos, Nigeria</p>
              <p className="font-semibold">Email</p>
              <p className="text-gray-300">hello@krussautoserve.ng.com</p>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-300">+2349025301696</p>
              <button className="mt-4 flex items-center bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-100 transition-colors duration-300">
                <BsWhatsapp className="inline-block mr-2 text-xl" /> Chat on
                WhatsApp
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Keep up to date with industry insights and latest news.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full sm:w-64 px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 button text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              {[
                { icon: <BsLinkedin />, href: "/" },
                { icon: <BsInstagram />, href: "/" },
                { icon: <BsTwitter />, href: "/" },
                { icon: <BsFacebook />, href: "/" },
                { icon: <BsYoutube />, href: "/" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-4 text-center">
        <p className="text-gray-300">
          &copy; {new Date().getFullYear()} Kruss Automotive Services. All
          rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
