"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import UserDashboardLayout from "@/layout/UserDashboard";
import DashboardCard from "@/components/DashboardCard";

export default function DashboardPage() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 0,
    });
  }, []);

  return (
    <UserDashboardLayout>
      <div className="max-w-5xl mx-auto mb-9">
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
          <DashboardCard title="Investment" value="" />
          <DashboardCard title="Investment" value="" />
        </div>
      </div>
      <div className="mt-[27px] p-0 overflow-x-auto block shadow border border-[#DADCE0] hover:drop-shadow-[0px_1px_3px_#D7D7E0] bg-white rounded-lg">
        <table className="min-w-[800px] w-full">
          <thead className="text-[14px] text-ash rounded-lg bg-ash1 border-b border-b-ash2">
            <tr className="text-left">
              <th className="pl-10 py-3 font-light">ACTION</th>
              <th className="font-light">REF</th>
              <th className="font-light">DATE</th>
              <th className="font-light">ACC NAME</th>

              <th className="font-light">AMOUNT</th>
              <th className="pr-10 font-light">STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-[12px] last-of-type:border-b-0 border-b border-b-ash2">
              <td className="p-3 pl-2 lg:pl-10 w-full lg:w-auto">
                <div className="flex items-center">
                  <span></span>
                </div>
              </td>
              <td className="py-3"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </UserDashboardLayout>
  );
}
