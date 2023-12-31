import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";

import { MdChat, MdHome, MdPerson, MdSupportAgent } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

import { useRouter } from "next/router";
import { Logo } from "@/public/images";
import { FcInspection } from "react-icons/fc";

const UserDashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex ">
      <nav
        className={`${
          isSidebarOpen ? "w-60" : "w-16"
        } bg-gradient-to-b from-[#00B0BA] to-gray-500 shadow-md flex flex-col transition-all duration-300 ease-in-out`}
      >
        <div className="w-full flex flex-col">
          <Link href="/" className="logo flex gap-2 items-center py-6 pl-5">
            <Image src={Logo} width={90} alt="logo" priority />
          </Link>

          <ul className="pl-5 pt-5 pb-2 text-zinc-500 md:block">
            <li>
              <Link
                href="/"
                onClick={toggleSidebar}
                className={`flex gap-3 items-center py-3 stroke-zinc-600 hover:text-blue-1 hover:stroke-blue-1 cursor-pointer ${
                  router.pathname === "/" ? "text-blue-1 stroke-blue-1" : ""
                }`}
              >
                <MdHome width={18} height={27} />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/profile"
                onClick={toggleSidebar}
                className={`flex gap-3 items-center py-3 stroke-zinc-600 hover:text-blue-1 hover:stroke-blue-1 cursor-pointer ${
                  router.pathname === "/dashboard/profile"
                    ? "text-blue-1 stroke-blue-1"
                    : ""
                }`}
              >
                <MdPerson width={18} height={27} />
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link
                href="/inspection"
                onClick={toggleSidebar}
                className={`flex gap-3 items-center py-3 stroke-zinc-600 hover:text-blue-1 hover:stroke-blue-1 cursor-pointer ${
                  router.pathname === "/dashboard/portfolio"
                    ? "text-blue-1 stroke-blue-1"
                    : ""
                }`}
              >
                <FcInspection width={18} height={27} />
                <span>Inspection</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/forum"
                onClick={toggleSidebar}
                className={`flex gap-3 items-center py-3 stroke-zinc-600 hover:text-blue-1 hover:stroke-blue-1 cursor-pointer ${
                  router.pathname === "/dashboard/forum"
                    ? "text-blue-1 stroke-blue-1"
                    : ""
                }`}
              >
                <MdChat width={18} height={27} />
                <span>Forum</span>
              </Link>
            </li>
            <li>
              <a
                className="flex gap-3 items-center py-3 stroke-zinc-600 hover:text-blue-1 hover:stroke-blue-1 cursor-pointer"
                target="_blank"
                href="https://wa.me/2349025301696"
              >
                <MdSupportAgent width={18} height={27} />
                <span>Support</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gradient-to-b from-[#00B0BA] to-gray-500">
        <header className="p-4 flex justify-between items-center shadow-md">
          <div className="profile flex items-center gap-2">
            <span
              className={`md:hidden mt-10 mr-3 cursor-pointer transition-transform transform ${
                isSidebarOpen ? "rotate-0" : "rotate-180"
              }`}
              onClick={toggleSidebar}
            >
              <FaHamburger />
            </span>
          </div>
          <div>
            <button>
              <BiLogOut />
              <span>Log out</span>
            </button>
          </div>
        </header>
        <main className="dashboard__content flex-grow p-8 md:px-2">
          {children}
        </main>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
