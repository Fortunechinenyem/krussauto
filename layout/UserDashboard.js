import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHamburger } from "react-icons/fa";
import { ImBriefcase } from "react-icons/im";
import { MdChat, MdHome, MdPerson, MdSupportAgent } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import Logo from "../public/images/index";
import { useRouter } from "next/router";

const UserDashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <nav
        className={`${
          isSidebarOpen ? "w-60" : "w-16"
        } bg-white shadow-md flex flex-col transition-all duration-300 ease-in-out`}
      >
        <div className="w-full flex flex-col">
          <Link href="/" className="logo flex gap-2 items-center py-6 pl-5">
            <Image src={Logo} width={90} alt="logo" priority />
          </Link>
          <ul className="pl-5 pt-5 pb-2 text-zinc-500 md:block">
            <li>
              <Link
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
                onClick={toggleSidebar}
                className={`flex gap-3 items-center py-3 stroke-zinc-600 hover:text-blue-1 hover:stroke-blue-1 cursor-pointer ${
                  router.pathname === "/dashboard/portfolio"
                    ? "text-blue-1 stroke-blue-1"
                    : ""
                }`}
              >
                <ImBriefcase width={18} height={27} />
                <span>Portfolio</span>
              </Link>
            </li>
            <li>
              <Link
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
              <Link
                onClick={toggleSidebar}
                className="flex gap-3 items-center py-3 stroke-zinc-600 hover:text-blue-1 hover:stroke-blue-1 cursor-pointer"
                target="_blank"
                href="https://wa.me/2349025301696"
              >
                <MdSupportAgent width={18} height={27} />
                <span>Support</span>
              </Link>
            </li>
          </ul>
          <span
            className={`md:hidden mt-10 mr-3 cursor-pointer transition-transform transform ${
              isSidebarOpen ? "rotate-0" : "rotate-180"
            }`}
            onClick={toggleSidebar}
          >
            <FaHamburger />
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="p-4 flex justify-between items-center shadow-md">
          <div className="profile flex items-center gap-2">
            {/* Include your user profile content */}
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
