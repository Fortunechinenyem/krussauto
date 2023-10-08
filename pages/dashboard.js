"use client";
import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";
import UserDashboardLayout from "@/layout/UserDashboard";

// Replace with your actual data fetching functions
const getUsers = async () => {
  // Simulated data for testing
  return [
    { id: 1, name: "User 1", vehicles: [], profitMargin: 10, commissions: 200 },
    { id: 2, name: "User 2", vehicles: [], profitMargin: 15, commissions: 300 },
    // Add more users as needed
  ];
};

const DynamicTopnav = dynamic(
  () => import("@/components/userdashboard/Topnav"),
  {
    ssr: false,
  }
);

export default function DashboardPage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const displayDetailedInfo = (info) => {
    if (!info || typeof info !== "object") {
      return "No information available.";
    }

    // Display the information using a table format
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Information</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(info).map(([category, information]) => (
            <tr key={category}>
              <td>{category}</td>
              <td>{information}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();

    Aos.init({
      duration: 800,
      offset: 0,
    });
  }, []);

  return (
    <UserDashboardLayout>
      <div className="text-xl">
        <div className="flex gap-3 space-between">
          <div className="grid grid-cols-1 gap-2 text-xl">
            <h2 className="text-2xl font-bold mb-2">Users</h2>
            <ul>
              {users.map((user) => (
                <li
                  key={user.id}
                  onClick={() => setSelectedUser(user)}
                  className={`cursor-pointer ${
                    selectedUser && selectedUser.id === user.id
                      ? "font-bold"
                      : ""
                  }`}
                >
                  {user.name}
                </li>
              ))}
            </ul>
          </div>

          {selectedUser && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xl">
              <div>
                <h2 className="text-xl font-bold mb-2">
                  {selectedUser.name}'s Vehicles
                </h2>
                {displayDetailedInfo(selectedUser.vehicles)}
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2">
                  {selectedUser.name}'s Inspection Reports
                </h2>
                {displayDetailedInfo(selectedUser.inspectionReports)}
              </div>

              <div>
                <h2 className="text-xl font-bold mb-2">
                  {selectedUser.name}'s Performance Metrics
                </h2>
                {displayDetailedInfo({
                  ProfitMargin: selectedUser.profitMargin,
                  Commissions: selectedUser.commissions,
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </UserDashboardLayout>
  );
}
