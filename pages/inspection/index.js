import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import InspectionLayout from "@/layout/InspectionLayout";
import CheckedBoxesSection from "@/components/inspection/CheckedBoxesSection";
import PercentageChecksSection from "@/components/inspection/PercentageCheck";
import DamagedPartsSection from "@/components/inspection/DamagedPartsSection";

export default function InspectionPage() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 0,
    });
  }, []);

  return (
    <InspectionLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-semibold text-center">
          Vehicle Inspection Report
        </h1>
        <div className="space-y-6">
          <div data-aos="fade-down" data-aos-delay="200">
            <PercentageChecksSection />
          </div>
          <div data-aos="fade-down" data-aos-delay="200">
            <CheckedBoxesSection />
          </div>
          <div data-aos="fade-down" data-aos-delay="200">
            <DamagedPartsSection />
          </div>
        </div>
      </div>
    </InspectionLayout>
  );
}
