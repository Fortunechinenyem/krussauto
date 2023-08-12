import React from "react";
import InspectionHero from "../../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const PrePurchase = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-screen bg-gradient-to-b from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={InspectionHero}
          alt="inspection hero"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <div
            className="text-center text-white"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Pre-Purchase Inspection
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl">
              Make an informed decision with our professional guidiance
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mt-9 mb-7 text-center">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
          Comprehensive PrePurchase Inspection Services
        </h3>
        <p className="text-xl md:text-xl lg:text-2xl mt-4">
          At Kruss Automotive Services, we provide thorough PrePurchase
          Inspection services to empower our clients with informed decisions
          before purchasing a vehicle.
        </p>
        <p className="text-xl md:text-xl lg:text-2xl mt-4">
          Our experienced technicians meticulously examine the vehicle,
          detecting existing issues and potential concerns. We present detailed
          reports and recommendations to ensure a confident and wise investment.
        </p>
        <p className="text-xl md:text-xl lg:text-2xl mt-4">
          Our PrePurchase Inspection covers all major components, including the
          engine, transmission, suspension, brakes, and electrical systems. You
          can trust us to provide a clear understanding of the vehicle's
          condition, helping you avoid unexpected repairs and ensuring your
          peace of mind.
        </p>
        <div className="mt-9">
          <h3 className="text-2xl md:text-2xl lg:text-3xl text-center font-bold">
            Ready to Make an Informed Purchase?
          </h3>
          <div className="text-center mt-6">
            <Link href="/contact">
              <button className="inline-block bg-[#006950] text-white font-bold rounded-md px-6 py-3 text-lg">
                Book Your Inspection
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrePurchase;
