"use client";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";
import UserDashboardLayout from "@/layout/UserDashboard";

const DynamicTopnav = dynamic(
  () => import("@/components/userdashboard/Topnav"),
  {
    ssr: false,
  }
);

export default function DashboardPage() {
  const [userName, setUserName] = useState("");
  const [profilePictureURL, setProfilePictureURL] = useState(
    "/profile-pictures.jpg"
  );

  async function testGetUsers() {
    try {
      const users = await getUsers();
      console.log("Users:", users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  // Call the test function
  testGetUsers();

  useEffect(() => {
    // Simulate fetching user data asynchronously
    const fetchUserData = async () => {
      try {
        // Make an API call to get user data
        const response = await fetch("/api/user-data"); // Replace with your API endpoint
        if (response.ok) {
          const userData = await response.json();
          setUserName(userData.userName);
          setProfilePictureURL(userData.profilePictureURL);
        } else {
          // Handle error if API call fails
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();

    // Initialize Aos after data is fetched
    Aos.init({
      duration: 800,
      offset: 0,
    });
  }, []);

  return (
    <UserDashboardLayout profilePictureURL={profilePictureURL}>
      <div className="text-xl">
        <div className="flex gap-3 space-between">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xl">
            {/* Display user name and profile picture */}
          </div>
        </div>
      </div>
    </UserDashboardLayout>
  );
}
