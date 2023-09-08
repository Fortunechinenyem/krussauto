import Sidebar from "@/components/userdashboard/Sidebar";
import Topnav from "@/components/userdashboard/Topnav";
import React from "react";
import { useRouter } from "next/router";

const UserDashboardLayout = ({ children, profilePictureURL, userName }) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 text-xl">
      <div className="flex">
        <Sidebar />
        <div className="main-content">
          <Topnav profilePictureURL={profilePictureURL} user={userName} />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardLayout;
