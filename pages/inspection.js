import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import InspectionLayout from "@/layout/InspectionLayout";
import CheckedBoxesSection from "@/components/CheckedBoxesSection";
import CommentsSection from "@/components/CommentsSection";
import DamagedPartsSection from "@/components/DamagedPartsSection";
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
      <div className="">
        <h1 className="text-2xl text-center font-bold mb-5 mt-5">Dashboard</h1>
        <div className="bg-[#95B1AF] text-black">
          <div className="col-span-1" data-aos="fade-down" data-aos-delay="200">
            <VehicleInformationSection />
          </div>
          <div className="col-span-1" data-aos="fade-down" data-aos-delay="200">
            {" "}
            <PercentageChecksSection />
          </div>

          <div className="col-span-1" data-aos="fade-down" data-aos-delay="200">
            {" "}
            <CommentsSection />
          </div>
          <div className="col-span-1" data-aos="fade-down" data-aos-delay="200">
            {" "}
            <CheckedBoxesSection />
          </div>
          <div className="col-span-1" data-aos="fade-down" data-aos-delay="200">
            <DamagedPartsSection />
          </div>
        </div>
      </div>
    </InspectionLayout>
  );
}
