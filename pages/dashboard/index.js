"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import UserDashboardLayout from "@/layout/UserDashboard";

export default function DashboardPage() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 0,
    });
  }, []);

  return (
    <UserDashboardLayout>
      {" "}
      <div className="profile-page grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        Users
      </div>
    </UserDashboardLayout>
  );
}
