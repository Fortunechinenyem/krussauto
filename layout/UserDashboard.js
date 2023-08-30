import Sidebar from "@/components/userdashboard/Sidebar";
import Topnav from "@/components/userdashboard/Topnav";
import React from "react";

const UserDashboardLayout = ({ children, profilePicture }) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 text-xl">
      <div className="flex">
        <Sidebar />
        <div className="main-content">
          <Topnav profilePicture={profilePicture} />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
