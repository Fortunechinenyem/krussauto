import React from "react";

import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/Topnav";

const InspectionLayout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="main-content">
          <TopNav />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default InspectionLayout;
