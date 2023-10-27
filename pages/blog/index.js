import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsYoutube,
} from "react-icons/bs";
import BlogNav from "@/components/Nav/BlogNav";
import { BlogHero, Blog1, Blog2, Blog3 } from "../../public/images/index";

const Blog = () => {
  return (
    <div className="container mx-auto">
      <BlogNav />

      <div className="mt-9 relative w-full h-[50vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] bg-gradient-to-b from-gray-500 to-gray-700 bg-cover">
        <Image
          className="absolute w-full h-full object-cover"
          src={BlogHero}
          alt="blog hero"
          priority
        />
      </div>

      <div className="text-xl m-4 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6">
          <div className="w-full md:w-5/12">
            <Image
              className="w-full h-48 object-cover rounded-t-lg"
              width={110}
              height={110}
              src={Blog1}
              alt="Engine Maintenance"
              priority
            />
          </div>
          <div className="w-full md:w-7/12 flex flex-col justify-between">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
              How to Maintain Your Car's Engine
            </h2>
            <p className="mb-4">
              Proper engine maintenance is essential for the longevity and
              performance of your car. Regular oil changes, checking and
              replacing filters, and inspecting the ignition system are some of
              the key steps to keep your engine in top shape.
            </p>
            <Link href="/blog/engine-maintenance">
              <button className="text-blue-500 mt-2">Read More</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6">
          <div className="w-full md:w-5/12">
            <Image
              className="w-full h-48 object-cover rounded-t-lg"
              src={Blog2}
              width={110}
              height={110}
              alt="Tire Selection"
              priority
            />
          </div>
          <div className="w-full md:w-7/12 flex flex-col justify-between">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
              Tips for Choosing the Right Tires for Your Car
            </h2>
            <p className="mb-4">
              Selecting the right tires for your car involves considering
              factors such as the type of vehicle, driving conditions, and
              desired performance. It's important to choose tires that provide
              optimal grip, handling, and durability for a safe and comfortable
              driving experience.
            </p>
            <Link href="/blog/tire-selection">
              <button className="text-blue-500 mt-2">Read More</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="m-4 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-5 bg-white shadow-lg rounded-lg">
          <div className="text-xl font-bold mb-4">Stay Connected</div>
          <p className="mb-2">
            Keep up to date with industry insights and latest news
          </p>
          <div className="flex items-center gap-4">
            <input
              required
              type="email"
              placeholder="Email address"
              className="ring-1 ring-black-300 rounded-md px-4 py-2 outline-none focus:none"
            />
            <button className="button px-4 py-2">Subscribe</button>
          </div>
          <div className="flex mt-4 gap-2">
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

        <div className="p-5 bg-white shadow-lg rounded-lg">
          <p className="font-bold text-xl mb-4">News</p>
          <Link href="/" className="items-center mb-7">
            <Image
              className="w-full h-48 object-cover rounded-t-lg"
              src={Blog3}
              width={110}
              height={110}
              alt="logo"
              priority
            />
          </Link>
        </div>

        <div className="p-5 bg-white shadow-lg rounded-lg">
          <p className="font-bold text-xl mb-4">Recent Posts</p>
          {/* Add links to recent blog posts here */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
