import React from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa"; // You can customize this icon

const AdminNav = ({ user }) => {
  return (
    <header className="bg-[#414656] text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>

        <div className="flex items-center space-x-2">
          <FaUserCircle className="text-2xl" />
          <span>{user}</span>
          <Link href="/logout" className="text-red-500 hover:text-red-400">
            Logout
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AdminNav;
