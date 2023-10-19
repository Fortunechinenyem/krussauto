import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/public/images";
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
    <div className="container mx-auto bg-gradient-to-b from-[#00B0BA] to-gray-400  text-black p-4 ">
      <div className="h-1/2 w-full flex md:flex-row flex-col justify-around items-start ">
        <div className="p-5">
          <Link href="/" className="flex title-font font-medium items-center">
            <Image
              className=" mb-5"
              src={Logo}
              alt="logo"
              width={150}
              priority
            />
          </Link>
        </div>

        <div className="p-5 ">
          <ul className="">
            <p className=" font-bold text-2xl pb-4">Quick Links</p>
            <li className=" text-md pb-2  hover:text-gray-400 cursor-pointer ml-1">
              <Link href="/">Home</Link>
            </li>
            <li className=" text-md pb-2  hover:text-gray-400 cursor-pointer ml-1">
              <Link href="/AboutUs">About Us</Link>
            </li>
            <li className=" text-md pb-2  hover:text-gray-400 cursor-pointer ml-1">
              <Link href="/OurWork">Our Work</Link>
            </li>
            <li className=" text-md pb-2  hover:text-gray-400 cursor-pointer ml-1">
              <Link href="/Services">Services</Link>
            </li>
            <li className=" text-md pb-2  hover:text-gray-400 cursor-pointer ml-1">
              <Link href="/Blog">Blog</Link>
            </li>
          </ul>
        </div>

        <div className="p-5">
          <p className=" font-bold text-2xl pb-4">Contact US</p>
          <p className="font-bold">Address</p>
          <p className="mb-2">Kosofe, Lagos, Nigeria</p>
          <p className="font-bold">Email</p>
          <p className="mb-2"> team@krussautomotiveservices.com</p>
          <p className="font-bold">Phone</p>
          <p className="mb-2"> +2349025301696 </p>
          <button className=" mt-4 bg-white text-black font-medium rounded-md px-4 py-2">
            <BsWhatsapp className="inline-block mr-2 text-xl" /> Chat on
            WhatsApp
          </button>
        </div>

        <div className=" p-5 ">
          <p className=" font-bold text-2xl pb-4">Stay Connected</p>
          <p className="mb-2">
            Keep up to date with industry insights and latest news
          </p>{" "}
          <input
            required
            type="email"
            placeholder="Email address"
            className="ring-1 ring-black-300  rounded-md px-4 py-2 outline-none focus:none "
          />
          <button className=" m-2 bg-white text-black font-medium rounded-md px-4 py-2 ">
            Subscribe
          </button>
          <div className="flex gap-6 mt-5">
            <Link href="/">
              <button className="cursor-pointer text-2xl hover:text-gray-400">
                <BsLinkedin />
              </button>
            </Link>

            <Link href="/">
              <button className="cursor-pointer text-2xl hover:text-gray-400">
                <BsInstagram />
              </button>
            </Link>

            <Link href="/">
              <button className="cursor-pointer text-2xl hover:text-gray-400">
                <BsTwitter />
              </button>
            </Link>

            <Link href="/">
              <button className="cursor-pointer text-2xl hover:text-gray-400">
                <BsFacebook />
              </button>
            </Link>

            <Link href="/">
              <button className="cursor-pointer text-2xl hover:text-gray-400">
                <BsYoutube />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <hr />

      <footer className="py-4 bg-gray-500  text-center">
        <p>
          &copy; {new Date().getFullYear()} Kruss Automotive Services. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
