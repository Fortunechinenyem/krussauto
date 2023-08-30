"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import UserDashboardLayout from "@/layout/UserDashboard";
import RoadsideAssistance from "@/components/RoadsideAssistance";

import VehicleComparison from "@/components/VehicleComparison";
import ExclusiveOffers from "@/components/ExclusiveOffers";
import VehicleRecommendations from "@/components/VehicleRecommendations";
import ServiceHistory from "@/components/ServiceHistory";
import VehicleHealthSummary from "@/components/VehicleHealthSummary";

// import InspectionReports from "@/components/InspectionReports";
// import Notifications from "@/components/Notifications";
// import FAQs from "./faq";
// import CreateNewInspection from "@/components/CreateNewInspection";
import ProfileSummary from "@/components/ProfileSummary";
import UpcomingAppointments from "@/components/UpComingAppointments";

export default function DashboardPage({ user }) {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 0,
    });
  }, []);

  return (
    <UserDashboardLayout>
      {" "}
      <div className="text-xl">
        <div className="flex gap-3 space-between">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xl">
            <div
              className="col-span-1"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <UpcomingAppointments />
            </div>
            <div
              className="col-span-1"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <VehicleHealthSummary />
            </div>
            <div
              className="col-span-1"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <ServiceHistory />
            </div>
            <div
              className="col-span-1"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <VehicleRecommendations />
            </div>
            <div
              className="col-span-1"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <ExclusiveOffers />
            </div>
            <div
              className="col-span-1"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <VehicleComparison />
            </div>

            <div
              className="col-span-1"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              <RoadsideAssistance />
            </div>
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
