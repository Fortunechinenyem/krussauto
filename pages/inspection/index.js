import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import InspectionLayout from "@/layout/InspectionLayout";
import CheckedBoxesSection from "@/components/CheckedBoxesSection";
import CommentsSection from "@/components/CommentsSection";
import DamagedPartsSection from "@/DamagedPartsSection";
import PercentageChecksSection from "@/components/PercentageCheck";
import VehicleInformationSection from "@/components/VehicleInformation";

export default function InspectionPage() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 0,
    });
  }, []);

  return (
    <InspectionLayout>
      <div className="px-6 py-8">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Vehicle Inspection Report
        </h1>
        <div className="grid grid-cols-1 gap-6">
          <div
            className="rounded-lg bg-white shadow-md p-6"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <VehicleInformationSection />
          </div>
          <div
            className="rounded-lg bg-white shadow-md p-6"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <PercentageChecksSection />
          </div>
          <div
            className="rounded-lg bg-white shadow-md p-6"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <CommentsSection />
          </div>
          <div
            className="rounded-lg bg-white shadow-md p-6"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <CheckedBoxesSection />
          </div>
          <div
            className="rounded-lg bg-white shadow-md p-6"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <DamagedPartsSection />
          </div>
        </div>
      </div>
    </InspectionLayout>
  );
}
