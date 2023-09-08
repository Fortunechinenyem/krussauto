import React from "react";
import { FaHome, FaUsers, FaCog, FaSignOutAlt } from "react-icons/fa"; // You can customize these icons
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";

const AdminSidebar = () => {
  return (
    <nav className="bg-[#00AE8F] text-black h-screen w-64 flex flex-col">
      <div className="p-4">
        <Link href="/" className="flex title-font font-medium items-center">
          <Image className="" src={Logo} alt="logo" width={110} priority />
        </Link>
      </div>
      <ul className="flex-1 overflow-y-auto">
        {/* Sidebar Links */}
        <li className="py-3 px-4 hover:bg-[#0B2546]">
          <Link href="/">
            <FaHome className="mr-2" />
            Dashboard
          </Link>
        </li>
        <li className="py-3 px-4 hover:bg-[#0B2546]">
          <Link href="/users">
            <FaUsers className="mr-2" />
            Users
          </Link>
        </li>
        <li className="py-3 px-4 hover:bg-[#0B2546]">
          <Link href="/settings">
            <FaCog className="mr-2" />
            Settings
          </Link>
        </li>
      </ul>
      <div className="p-4">
        {/* Logout Button */}
        {/* <button className="flex items-center text-red-500 hover:text-red-400">
          <FaSignOutAlt className="mr-2" />
          Logout
        </button> */}
      </div>
    </nav>
  );
};

export default AdminSidebar;
