import React from "react";

import { FaUserCircle } from "react-icons/fa"; // You can replace this with your user profile icon
import AdminNav from "@/components/admin/AdminNav";
import AdminSidebar from "@/components/admin/AdminSidebar";

const AdminLayout = ({ children, user }) => {
  return (
    <div className="h-screen flex bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminNav user={user} />

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-end">
              <div className="flex items-center space-x-2">
                <FaUserCircle className="text-2xl text-gray-600" />
                <span className="text-gray-700">{user}</span>
              </div>
            </div>

            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
