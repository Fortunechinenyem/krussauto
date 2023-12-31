import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import InspectionLayout from "@/layout/InspectionLayout";
import CheckedBoxesSection from "@/components/inspection/CheckedBoxesSection";
import CommentsSection from "@/components/forum/CommentsSection";
import DamagedPartsSection from "@/components/inspection/DamagedPartsSection";
import PercentageChecksSection from "@/components/inspection/PercentageCheck";

export default function InspectionPage() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 0,
    });
  }, []);

  return (
    <InspectionLayout>
      <div className="m-2 text-xl">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Vehicle Inspection Report
        </h1>
        <div className="grid grid-cols-1 gap-6">
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
