import React from "react";
import Image from "next/image";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";

import { PrepurchaseHero } from "@/public/images";
import Testimonial from "@/layout/Testimonial";
import PrePurchaseInspectionCards from "@/components/cards/PrePurchaseCards";
import PricingInformation from "@/components/cards/PrepurchasePricingCards";
import Link from "next/link";

const PrePurchase = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <section className="relative h-screen bg-gradient-to-b from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={PrepurchaseHero}
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
              Make an informed decision with our professional guidance
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white shadow-lg rounded-lg p-6 mt-9 mb-7 text-center">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Comprehensive Pre-Purchase Inspection Services
        </h3>
        <p className="text-lg mt-4">
          At Kruss Automotive Services, we provide a thorough pre-purchase
          inspection service to empower our clients with informed decisions
          before purchasing a vehicle.
        </p>
        <p className="text-lg mt-4">
          Our experienced technicians meticulously examine the vehicle,
          detecting existing issues and potential concerns. We present detailed
          reports and recommendations to ensure a confident and wise investment.
        </p>
        <p className="text-lg mt-4">
          Our PrePurchase Inspection covers all major components, including the
          engine, transmission, suspension, brakes, and electrical systems. You
          can trust us to provide a clear understanding of the vehicle's
          condition, helping you avoid unexpected repairs and ensuring your
          peace of mind.
        </p>
      </section>
      <section className="bg-[#8EE4C6] p-6 mt-9 mb-7 text-center">
        <PrePurchaseInspectionCards />
      </section>
      <section className="bg-[#99B0A7] bg-gray-100 py-10">
        <PricingInformation />
      </section>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
            What Our Clients Say
          </h2>
          <p className="text-[#8C8C8C] text-xl mt-2 mb-5 text-center">
            Here, we have testimonials from our past clients who have patronised
            us
          </p>
          <div>
            <Testimonial />
          </div>
        </div>
        <div className="mt-9">
          <h3 className="text-2xl md:text-2xl lg:text-3xl text-center font-bold">
            Ready to Make an Informed Purchase?
          </h3>
          <div className="text-center mt-6">
            <Link href="/appointment">
              <button className="button ml-4 md:mt-0 sm:mt-2">
                Book An Inspection
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrePurchase;
