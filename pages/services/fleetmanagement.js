import React from "react";
import FleetManagementHero from "../../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const FleetManagement = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-screen bg-gradient-to-b from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={FleetManagementHero}
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
              Fleet Management
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl">
              Let us help manage your fleet professionally
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mt-9 mb-7 text-center">
        <h3 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-4">
          Efficient Fleet Management Solutions
        </h3>
        <p className="text-xl md:text-xl lg:text-3xl mt-4">
          At Kruss Automotive Services, we provide comprehensive Fleet
          Management solutions tailored to help businesses effectively manage
          their vehicle fleets.
        </p>
        <p className="text-xl md:text-xl lg:text-3xl mt-4">
          Our fleet management services are designed to enhance operational
          efficiency, reduce costs, and improve overall fleet performance. We
          offer a range of solutions, including vehicle tracking, maintenance
          scheduling, fuel management, driver monitoring, and more.
        </p>
        <p className="text-xl md:text-xl lg:text-3xl mt-4">
          With advanced technologies and data-driven insights, our experienced
          team works closely with you to customize a fleet management strategy
          that aligns with your business goals. Whether you have a small fleet
          or a large-scale operation, we're here to streamline your fleet
          operations and drive your business forward.
        </p>
        <div className="mt-9">
          <h3 className="text-2xl md:text-2xl lg:text-3xl text-center font-bold">
            Streamline Your Fleet Operations Today
          </h3>
          <div className="text-center mt-6">
            <Link href="/contact">
              <button className="inline-block bg-[#006950] text-white font-bold rounded-md px-6 py-3 text-lg">
                Book Our Fleet Management Services
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FleetManagement;
