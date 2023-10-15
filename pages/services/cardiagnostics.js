import React from "react";
import CarDiagnosticsHero from "../../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const CarDiagnostics = () => {
  return (
    <div className="m-2 text-xl">
      <Navbar />
      <div className="relative h-screen bg-gradient-to-b from-gray-500 to-gray-700 w-full bg-cover">
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
      </div>
      <div className="mt-9 mb-7 text-xl">
        {/* <h3 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-4">
          Expert Car Diagnostics
        </h3> */}
        <div className="text-center md:max-w-2xl mx-auto">
          <p className="text-lg md:text-xl">
            Discover the difference with Kruss Automotive Services. Our
            comprehensive Car Diagnostics service goes beyond just reading error
            codes – our skilled technicians employ cutting-edge diagnostic tools
            and techniques to identify and address issues affecting your
            vehicle's performance.
          </p>
          <p className="text-lg md:text-xl mt-4">
            From warning lights to mysterious noises, we specialize in
            diagnosing complex problems across various systems and components.
            Our expertise allows us to interpret diagnostic data, analyze
            issues, and provide detailed insights into your car's condition.
          </p>
          <p className="text-lg md:text-xl mt-4">
            Our commitment is to keep your vehicle running optimally and
            efficiently. After a thorough diagnosis, our team will recommend
            targeted repairs or maintenance to resolve identified issues,
            ensuring your car performs at its best.
          </p>
          <p className="text-lg md:text-xl mt-4">
            Trust Kruss Automotive Services to deliver exceptional workmanship
            and exceptional customer care. Schedule a Car Diagnostics
            appointment today and experience the difference firsthand.
          </p>
        </div>
        <div className="text-center mt-6">
          <Link href="/contact">
            <button className="inline-block bg-[#006950] text-white font-bold rounded-md px-6 py-3 text-lg">
              Book Your Car Diagnostics Appointment
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CarDiagnostics;
