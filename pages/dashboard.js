"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import UserDashboardLayout from "@/layout/UserDashboard";
import InspectionReports from "@/components/InspectionReports";
import Notifications from "@/components/Notifications";
import FAQs from "./faq";
import CreateNewInspection from "@/components/CreateNewInspection";
import ProfileSummary from "@/components/ProfileSummary";

export default function DashboardPage({ user }) {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 0,
    });
  }, []);

  return (
    <div>
      <div>
        <h1
          className="text-2xl text-center font-bold mb-5 mt-5"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Welcome {user}!
        </h1>
      </div>
      <div className="flex gap-3 space-between">
        <div>
          <UserDashboardLayout />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1" data-aos="fade-down" data-aos-delay="200">
            <ProfileSummary />
          </div>
          <div className="col-span-1" data-aos="fade-down" data-aos-delay="200">
            <h2 className="text-lg font-bold mb-4">Inspection Reports</h2>
            <InspectionReports />
          </div>
          <div className="col-span-1" data-aos="fade-down" data-aos-delay="200">
            <h2 className="text-lg font-bold mb-4">Create New Inspection</h2>
            <CreateNewInspection />
          </div>
          <div className="col-span-1" data-aos="fade-down" data-aos-delay="200">
            <h2 className="text-lg font-bold mb-4">Notifications</h2>
            <Notifications />
          </div>
          <div className="col-span-1" data-aos="fade-down" data-aos-delay="200">
            <h2 className="text-lg font-bold mb-4">FAQs</h2>
            <FAQs />
          </div>
        </div>
      </div>
    </div>
  );
}
