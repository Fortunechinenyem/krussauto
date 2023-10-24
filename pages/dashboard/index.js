"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import UserDashboardLayout from "@/layout/UserDashboard";
import {
  AnalyticsCard,
  NotificationsCard,
  QuickActionsCard,
  RecentActivityCard,
  RecommendedContentCard,
  SupportCard,
} from "@/components/userdashboard/DashboardCards";
import { UserProfileCard } from "@/components/userdashboard/UserProfile";

export default function DashboardPage() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 0,
    });
  }, []);

  return (
    <UserDashboardLayout className="">
      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <UserProfileCard />

        <RecentActivityCard />

        <NotificationsCard />

        <QuickActionsCard />

        <AnalyticsCard />

        <RecommendedContentCard />

        <SupportCard />
      </div>
    </UserDashboardLayout>
  );
}
