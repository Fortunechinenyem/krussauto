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
        <section className="business-overview p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Business Overview</h2>
          <p>This section provides an overview of our automobile business.</p>
          {/* Add more content here */}
        </section>

        <section className="kpi p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Key Performance Indicators</h2>
          <p>Important metrics and performance indicators for our business.</p>
          {/* Add KPI charts or data visualization here */}
        </section>

        <section className="investment-opportunities p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Investment Opportunities</h2>
          <p>
            Explore the investment opportunities in our automobile business.
          </p>
          {/* List investment opportunities with details */}
        </section>

        <section className="management-team p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Management Team</h2>
          <p>Meet our dedicated and experienced management team.</p>
          {/* Display team members with their roles and profiles */}
        </section>

        <section className="financial-info p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Financial Information</h2>
          <p>Access financial reports, statements, and forecasts.</p>
          {/* Display financial information and data */}
        </section>

        <section className="interactive-charts p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">
            Interactive Charts and Graphs
          </h2>
          <p>
            Explore interactive data charts and graphs related to our business.
          </p>
          {/* Display interactive charts using charting libraries */}
        </section>

        <section className="call-to-action p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">
            Join Our Investment Community
          </h2>
          <p>
            Take the first step towards investing in the future of automobiles.
          </p>
          {/* Add a call-to-action button or form */}
        </section>
      </div>
    </UserDashboardLayout>
  );
}
