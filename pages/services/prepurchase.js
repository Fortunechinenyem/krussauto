import React from "react";
import BlogHero from "../../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const PrePurchase = () => {
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
        <div className="p-6 md:p-24 text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            PrePurchase Inspection
          </h1>
        </div>
      </div>
      <p className=" mt-4">
        At Kruss Automotive Services, we offer comprehensive PrePurchase
        Inspection services to help our clients make informed decisions before
        buying a car. Our experienced technicians thoroughly examine the
        vehicle, identifying any existing issues or potential problems, and
        providing detailed reports and recommendations.
      </p>
      <p className=" mt-4">
        Our PrePurchase Inspection includes a comprehensive check of various
        aspects, including the engine, transmission, suspension, brakes,
        electrical systems, and more. We aim to provide our clients with a clear
        understanding of the vehicle's condition, helping them avoid unexpected
        repairs and ensure they are making a wise investment.
      </p>
      <p className=" mt-4">
        With our PrePurchase Inspection service, you can have peace of mind
        knowing that you are making a well-informed decision when purchasing a
        car. Contact us today to schedule an appointment and let our experts
        assist you in your car-buying journey.
      </p>
      <div className="mt-9">
        <h3 className="text-3xl text-center font-bold">
          Book A Pre-Purchase Inspection
        </h3>

        <div className="text-center mt-6">
          <Link href="/contact">
            <button className="inline-block self-start bg-[#006950] text-white font-bold rounded-md px-6 py-2 text-lg px-6 py-3 rounded-md text-sm font-medium mb-7">
              Book An Appointment
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrePurchase;
