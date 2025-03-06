import React, { useState } from "react";
import Sidebar from "@/components/inspection/Sidebar";
import TopNav from "@/components/inspection/Topnav";

const InspectionLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-30 p-2 bg-gray-800 text-white rounded-md"
      >
        {isSidebarOpen ? "✕" : "☰"}
      </button>

      <div
        className={`fixed inset-y-0 z-20 w-64 bg-gray-800 text-white transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      <div
        className={`transition-margin duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
          <TopNav />
        </div>

        <main className="pt-16 p-4 md:p-8 lg:p-12">{children}</main>
      </div>
    </div>
  );
};

export default InspectionLayout;
