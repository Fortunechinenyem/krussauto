import React from "react";
import BlogHero from "../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CarDiagnostics = () => {
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
            Car Diagnostics
          </h1>
        </div>
      </div>
      <div>
        <p className=" mt-4">
          At Kruss Automotive Services, we offer comprehensive Car Diagnostics
          to identify and address issues with your vehicle's performance. Our
          skilled technicians utilize advanced diagnostic tools and techniques
          to accurately diagnose problems in various systems and components of
          your car.
        </p>
        <p className=" mt-4">
          Whether you're experiencing warning lights, strange noises, or unusual
          behavior from your vehicle, our Car Diagnostics service can help
          pinpoint the root cause. We perform thorough inspections and use our
          expertise to interpret diagnostic codes, analyze data, and provide
          detailed reports on the condition of your car.
        </p>
        <p className=" mt-4">
          Our goal is to ensure that your vehicle is running optimally and
          efficiently. Once the diagnostics are complete, we can recommend the
          necessary repairs or maintenance services to address any identified
          issues. Our team is committed to delivering high-quality workmanship
          and exceptional customer service.
        </p>
        <p className=" mt-4">
          Contact us today to schedule a Car Diagnostics appointment and let our
          experienced technicians diagnose and address any performance issues
          with your vehicle. Trust us to keep your car running smoothly and
          reliably.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default CarDiagnostics;
