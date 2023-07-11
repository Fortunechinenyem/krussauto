import React from "react";
import BlogHero from "../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FleetManagement = () => {
  return (
    <div>
      <Navbar />
      <div className="relative bg-gradient-to-tr from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={BlogHero}
          alt="blog hero"
          priority
        />
        <div className="p-6 md:p-24 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            Fleet Management
          </h1>
        </div>
      </div>
      <p className=" mt-4">
        At Kruss Automotive Services, we provide efficient and comprehensive
        Fleet Management solutions to help businesses effectively manage their
        vehicle fleets. Our tailored fleet management services are designed to
        enhance operational efficiency, reduce costs, and improve overall fleet
        performance.
      </p>
      <p className=" mt-4">
        Our fleet management solutions include a range of services such as
        vehicle tracking, maintenance scheduling, fuel management, driver
        monitoring, and more. With advanced technologies and data-driven
        insights, we help businesses optimize their fleet operations, ensure
        compliance with regulations, and maximize productivity.
      </p>
      <p className=" mt-4">
        Whether you have a small fleet or a large-scale operation, our
        experienced team will work closely with you to understand your specific
        needs and customize a fleet management strategy that aligns with your
        goals. With our expertise and industry knowledge, we strive to
        streamline your fleet operations and drive your business forward.
      </p>
      <p className=" mt-4">
        Contact us today to learn more about our Fleet Management services and
        how we can help your business achieve greater efficiency and success.
      </p>

      <Footer />
    </div>
  );
};

export default FleetManagement;
