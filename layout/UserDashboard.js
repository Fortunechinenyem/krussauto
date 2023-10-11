import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
import { MdChat, MdHome, MdPerson, MdSupportAgent } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import Logo from "../public/assets/images/logo.png";

const UserDashboardLayout = ({ children }) => {
  return (
    <div className=" h-screen blur-sm">
      <nav className=" grow bg-white shadow-md flex flex-col">
        <div className="w-full flex flex-col">
          <Link href="/" className="logo flex gap-2 items-center py-6 pl-5">
            <Image src={Logo} width={90} alt="logo" priority />
          </Link>
          <ul className="pl-5 pt-5 pb-2 text-zinc-500 md:block grow">
            <li>
              <Link
                href="/"
                className="flex gap-3 items-center py-3 stroke-zinc-600 hover:text-blue-1 hover:stroke-blue-1"
                target="_blank"
              >
                <MdHome width={18} height={27} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex gap-3 items-center py-3 stroke-zinc-600 hover:text-blue-1 hover:stroke-blue-1"
                target="_blank"
              >
                <MdPerson width={18} height={27} />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex gap-3 items-center py-3 stroke-zinc-600 hover:text-blue-1 hover:stroke-blue-1"
                target="_blank"
              >
                <ImBriefcase width={18} height={27} />
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex gap-3 items-center py-3 stroke-zinc-600 hover:text-blue-1 hover:stroke-blue-1"
                target="_blank"
              >
                <MdChat width={18} height={27} />
                <span>Forum</span>
              </Link>
            </li>
            <li>
              <Link
                href={`https://wa.me/2349025301696`}
                className="flex gap-3 items-center py-3 stroke-zinc-600 hover:text-blue-1 hover:stroke-blue-1"
                target="_blank"
              >
                <MdSupportAgent width={18} height={27} />
                <span>Support</span>
              </Link>
            </li>
          </ul>
          <span className="md:hidden mt-10 mr-3 cursor-pointer">
            <FaHamburger />
          </span>
        </div>
      </nav>

      <div className="main w-full flex flex-col">
        <header className="p-4 flex justify-between items-center shadow-md">
          <div className="profile flex items-center gap-2">
            <Image
              alt=""
              src=""
              width={35}
              height={35}
              className="rounded-full border-2 border-blue-1"
            />
          </div>
          <div>
            <button>
              <BiLogOut />
              <span>Log out</span>
            </button>
          </div>
        </header>
      </div>

      <main className="dashboard__content grow  px-8 md:px-2">{children}</main>
    </div>
  );
};

export default UserDashboardLayout;
