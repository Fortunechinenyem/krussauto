import React from "react";
import BlogHero from "../../public/assets/images/kruss (1).jpg";
import Image from "next/image";

import Link from "next/link";
import Logo from "../../public/assets/images/img (1).jpg";
import Blog1 from "../../public/assets/images/pic (4).jpg";
import Blog2 from "../../public/assets/images/img (8).jpg";
import {
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsYoutube,
} from "react-icons/bs";
import BlogNav from "@/components/BlogNav";

const Blog = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <BlogNav />
      <div className="relative w-full h-[50vh] md:h-[50vh] lg:h-screen bg-gradient-to-b from-gray-500 to-gray-700 bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={BlogHero}
          alt="blog hero"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <div
            className="mt-9 text-white"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              How to buy Nigerian Used Cars
            </h1>
            <div className="flex text-xl justify-center items-center gap-4">
              <p>By KrussAutoServe Team</p>
              <p>.Date</p>
            </div>
            <p className=" text-xl max-w-xl mx-auto">
              Getting durable and quality Nigerian used cars have become an
              extreme sport, you need to be armed with the right information
              on...
            </p>
            <Link href="/blog/tire-selection">
              <button className="mt-9 text-black-300 bg-[#2F4858] text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-xl m-4 mt-8 grid md:grid-cols-2 gap-8">
        <div className="grid  gap-8 mt-8">
          <div className="flex gap-4 bg-white shadow-lg rounded-lg p-6">
            <div className="w-1/2">
              <Image
                className="w-full h-48 object-cover rounded-t-lg"
                width={110}
                height={110}
                src={Blog1}
                alt="Engine Maintenance"
                priority
              />
            </div>
            <div className="w-1/2 flex flex-col justify-between">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                How to Maintain Your Car's Engine
              </h2>
              <p className="mb-4">
                Proper engine maintenance is essential for the longevity and
                performance of your car. Regular oil changes, checking and
                replacing filters, and inspecting the ignition system are some
                of the key steps to keep your engine in top shape.
              </p>
              <Link href="/blog/engine-maintenance">
                <button className="text-blue-500 mt-2">Read More</button>
              </Link>
            </div>
          </div>
          <div className="flex gap-4 bg-white shadow-lg rounded-lg p-6">
            <div className="w-1/2">
              <Image
                className="w-full h-48 object-cover rounded-t-lg"
                src={Blog2}
                width={110}
                height={110}
                alt="Tire Selection"
                priority
              />
            </div>
            <div className="w-1/2 flex flex-col justify-between">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                Tips for Choosing the Right Tires for Your Car
              </h2>
              <p className="mb-4">
                Selecting the right tires for your car involves considering
                factors such as the type of vehicle, driving conditions, and
                desired performance. It's important to choose tires that provide
                optimal grip, handling, and durability for a safe and
                comfortable driving experience.
              </p>
              <Link href="/blog/tire-selection">
                <button className="text-blue-500 mt-2">Read More</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 md:w-[300px] mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Stay Updated!</h2>

            <form className="flex flex-col space-y-2">
              <input
                type="name"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />
              <button className="text-black-300 bg-[#2F4858] text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Subscribe
              </button>
            </form>
          </div>
          <div className="mt-9 mb-7 ">
            <form className="flex items-center">
              <input
                type="search"
                placeholder="Enter your search topic"
                className="border border-gray-300 rounded-l-lg px-4 py-2 w-64 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-[#2F4858] text-white hover:bg-blue-700 px-6 py-2 rounded-r-lg text-sm font-medium">
                Search
              </button>
            </form>
          </div>

          <div className="mt-9 mb-7">
            <p className="font-bold">Socials</p>
            <div className="flex gap-6 p-5">
              <Link href="/">
                <button className="cursor-pointer text-4xl hover:text-gray-400">
                  <BsLinkedin />
                </button>
                LinkedIn
              </Link>

              <Link href="/">
                <button className="cursor-pointer text-2xl hover:text-gray-400">
                  <BsInstagram />
                </button>
                Instagram
              </Link>

              <Link href="/">
                <button className="cursor-pointer text-2xl hover:text-gray-400">
                  <BsTwitter />
                </button>
                Twitter
              </Link>

              <Link href="/">
                <button className="cursor-pointer text-2xl hover:text-gray-400">
                  <BsFacebook />
                </button>
                Facebook
              </Link>

              <Link href="/">
                <button className="cursor-pointer text-2xl hover:text-gray-400">
                  <BsYoutube />
                </button>
                Youtube
              </Link>
            </div>
          </div>
          <div className="mt-9 mb-7">
            <p className="font-bold ">News</p>
            <Link href="/" className=" items-center mb-7">
              <Image className="w-64" src={Logo} alt="logo" priority />
            </Link>
          </div>
          <div className="mt-9 mb-7">
            <p className="font-bold">Recent Posts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
