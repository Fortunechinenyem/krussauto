import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/images/img (1).jpg";
import {
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsYoutube,
} from "react-icons/bs";

export default function BlogSide() {
  return (
    <div className="m-4">
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
      <div className="mt-9 mb-7 mx-auto">
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
  );
}
