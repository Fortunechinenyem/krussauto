import React from "react";

import Image from "next/image";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";
import { FaWrench, FaCheckCircle, FaChartBar, FaHammer } from "react-icons/fa";

import { CarDiagnosticsHero } from "@/public/images";
import Testimonial from "@/layout/Testimonial";
import CarDiagnosticsPricing from "@/components/cards/CarDiagnosticsPricing";

import Link from "next/link";

const CarDiagnostics = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <section className="relative h-screen bg-gradient-to-b from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={CarDiagnosticsHero}
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
              Expert Car Diagnostics
            </h1>
          </div>
        </div>
      </section>
      <section className="mt-9 mb-7 text-lg">
        <div className="text-center  ">
          <p className="text-lg">
            Discover the difference with Kruss Automotive Services. Our
            comprehensive Car Diagnostics service goes beyond just reading error
            codes – our skilled technicians employ cutting-edge diagnostic tools
            and techniques to identify and address issues affecting your
            vehicle's performance.
          </p>
          <p className="text-lg  mt-4">
            From warning lights to mysterious noises, we specialize in
            diagnosing complex problems across various systems and components.
            Our expertise allows us to interpret diagnostic data, analyze
            issues, and provide detailed insights into your car's condition.
          </p>
          <p className="text-lg mt-4">
            Our commitment is to keep your vehicle running optimally and
            efficiently. After a thorough diagnosis, our team will recommend
            targeted repairs or maintenance to resolve identified issues,
            ensuring your car performs at its best.
          </p>
          <p className="text-lg mt-4">
            Trust Kruss Automotive Services to deliver exceptional workmanship
            and exceptional customer care. Schedule a Car Diagnostics
            appointment today and experience the difference firsthand.
          </p>
        </div>
      </section>
      <section className="bg-[#F7F7F7] p-6 mt-9 mb-7 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
          Why Choose Our Car Diagnostics Service
        </h2>
        <div className="text-lg mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#5E8BE4] p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Skilled Technicians</h3>
            <p>
              Our experienced technicians employ advanced diagnostic tools and
              techniques.
            </p>
          </div>
          <div className="bg-[#008199] p-4 rounded-lg ">
            <h3 className="text-xl font-bold mb-2">
              Comprehensive Diagnostics
            </h3>
            <p>
              We identify and address complex issues affecting your vehicle's
              performance.
            </p>
          </div>
          <div className="bg-[#00CDE9] p-4 rounded-lg ">
            <h3 className="text-xl font-bold mb-2">Professional Analysis</h3>
            <p>
              We interpret diagnostic data, analyze problems, and provide
              detailed insights into your car's condition.
            </p>
          </div>
          <div className="bg-[#D5A419] p-4 rounded-lg ">
            <h3 className="text-xl font-bold mb-2">Optimal Performance</h3>
            <p>Our recommendations ensure your car runs efficiently.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-500 text-white p-6 mt-9 mb-7 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
          Our Car Diagnostics Process - Step by Step
        </h2>
        <div className="text-lg mt-4 grid grid-cols-1 md:grid-cols-4 md:gap-4">
          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-[#005D60] text-white flex items-center justify-center">
              <FaWrench size={32} />
            </div>
            <p className="font-bold mt-2">Step 1: Initial Diagnosis</p>
            <p className="text-left">
              Our technicians perform an initial diagnosis to identify issues.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-[#005D60] text-white flex items-center justify-center">
              <FaCheckCircle size={32} />
            </div>
            <p className="font-bold mt-2">Step 2: Advanced Testing</p>
            <p className="text-left">
              We employ advanced diagnostic tools to conduct comprehensive
              testing.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-[#005D60] text-white flex items-center justify-center">
              <FaChartBar size={32} />
            </div>
            <p className="font-bold mt-2">Step 3: Data Analysis</p>
            <p className="text-left">
              Our team analyzes diagnostic data and provides detailed insights.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-[#005D60] text-white flex items-center justify-center">
              <FaHammer size={32} />
            </div>
            <p className="font-bold mt-2">Step 4: Recommendations</p>
            <p className="text-left">
              Based on our analysis, we recommend targeted repairs or
              maintenance.
            </p>
          </div>
        </div>
      </section>
      <section>
        <CarDiagnosticsPricing />
      </section>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
            What Our Clients Say What Our Clients Say About Our Car Diagnostics
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
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
            Ready to Diagnose Your Car's Issues?
          </h2>
          <div className="text-center mt-6">
            <Link href="/appointment">
              <button className="button ml-4 md:mt-0 sm:mt-2">
                Book Your Car Diagnostics Appointment
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CarDiagnostics;
