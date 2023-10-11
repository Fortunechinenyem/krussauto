import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import ModalLayout from "./ModalLayout";
import { MdClose, MdHome, MdPeople } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { FaCalendar, FaHamburger } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

const AdminLayout = ({ children }) => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);

  const router = useRouter();

  const { data: session } = useSession();

  return (
    <>
      <ModalLayout />
      <ToastContainer />
      <div className="h-screen flex">
        <nav className="grow md:max-w-xs md:w-[300px] shadow-md w-full md:relative bg-[#fff] z-[100] flex justify-between">
          <div className="w-full">
            <ul
              className={`${
                nav ? "block" : "hidden"
              } pl-5 pt-5 pb-2 text-zinc-500 md:block`}
            >
              <li>
                <Link
                  href="/admin"
                  className={`flex gap-3 items-center py-3 hover:text-blue-1 ${
                    router.pathname === "/admin" ? "text-blue-1" : ""
                  }`}
                >
                  <MdHome width={22} />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/users"
                  className={`flex gap-3 items-center py-3 hover:text-blue-1 ${
                    router.pathname.startsWith("/admin/users")
                      ? "text-blue-1"
                      : ""
                  }`}
                >
                  <MdPeople width={22} />
                  <span>Users</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/admins"
                  className={`flex gap-3 items-center py-3 hover:text-blue-1 ${
                    router.pathname === "/admin/admins" ? "text-blue-1" : ""
                  }`}
                >
                  <RiAdminFill width={22} />
                  <span>Admins</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/admin/events"
                  className={`flex gap-3 items-center py-3 hover:text-blue-1 ${
                    router.pathname === "/admin/events" ? "text-blue-1" : ""
                  }`}
                >
                  <FaCalendar width={22} />
                  <span>Events</span>
                </Link>
              </li>
            </ul>
          </div>
          <span
            className="md:hidden mt-10 mr-3 cursor-pointer"
            onClick={toggleNav}
          >
            {nav ? <MdClose /> : <FaHamburger />}
          </span>
        </nav>
      </div>
      <div className="main w-full flex flex-col">
        <header className="p-4 flex justify-between items-center shadow-md">
          <div className="profile flex items-center gap-2">
            <Image
              alt="profile"
              src=""
              width={35}
              height={35}
              className="rounded-full border-2 border-blue"
            />
            <span>{session?.user?.name}</span>
          </div>
          <div className="logout">
            <button
              className="text-zinc-600 flex items-center gap-3 hover:text-blue"
              onClick={() => signOut()}
            >
              <BiLogOut width={15} />
              <span>Logout</span>
            </button>
          </div>
        </header>
        <main className="dashboard__content grow overflow-y-scroll px-8 md:px-2">
          {children}
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
