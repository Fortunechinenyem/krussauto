import React from "react";

import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/Topnav";

const InspectionLayout = ({ children }) => {
  return (
    <div className="px-4 md:px-8 lg:px-16 text-xl">
      <div className="flex">
        <Sidebar />
        <div className="main-content">
          <TopNav />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default InspectionLayout;
