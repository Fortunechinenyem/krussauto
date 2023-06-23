"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
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
  // const handleLogout = () => {
  //   // Clear the token cookie
  //   Cookies.remove("token");

  //   // Redirect to the login page
  //   router.push("/login");
  // };

  return (
    <UserDashboardLayout>
      <div>
        <h1 className="text-2xl text-center font-bold mb-5 mt-5">Dashboard</h1>
      </div>
    </UserDashboardLayout>
  );
}
