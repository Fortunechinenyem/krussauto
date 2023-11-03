import React from "react";

import Image from "next/image";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaTruck, FaHardHat, FaShippingFast, FaLandmark } from "react-icons/fa";
import { FleetManagementHero } from "@/public/images";
import HowItWorks from "@/components/Howitworks";
import Testimonial from "@/layout/Testimonial";
import FleetManagementPricing from "@/components/cards/FleetManangementPricing";

const FleetManagement = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <section className="relative h-screen bg-gradient-to-b from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={FleetManagementHero}
          alt="fleet management hero"
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
      </section>
      <section className="bg-white shadow-lg rounded-lg p-6 mt-9 mb-7 text-center">
        <h3 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-4">
          Efficient Fleet Management Solutions
        </h3>
        <p className="text-lg mt-4">
          At Kruss Automotive Services, we provide comprehensive Fleet
          Management solutions tailored to help businesses effectively manage
          their vehicle fleets.
        </p>
        <p className="text-lg mt-4">
          Our fleet management services are designed to enhance operational
          efficiency, reduce costs, and improve overall fleet performance. We
          offer a range of solutions, including vehicle tracking, maintenance
          scheduling, fuel management, driver monitoring, and more.
        </p>
        <p className="text-lg mt-4">
          With advanced technologies and data-driven insights, our experienced
          team works closely with you to customize a fleet management strategy
          that aligns with your business goals. Whether you have a small fleet
          or a large-scale operation, we're here to streamline your fleet
          operations and drive your business forward.
        </p>
      </section>
      <section className="bg-white p-6 mt-9 mb-7 text-center">
        <HowItWorks />
      </section>
      <section className="bg-gray-400">
        <FleetManagementPricing />
      </section>
      <section className="bg-gray-100 p-6 mt-9 mb-7 text-center">
        <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-4">
          Industries Served
        </h2>
        <p className="text-lg mt-4">
          Our fleet management services cater to a wide range of industries,
          including:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <div className="bg-[#005D60] text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <div className="text-center text-2xl ">
              <FaTruck />
            </div>
            <h4 className="text-lg font-bold mt-4">
              Transportation & Logistics
            </h4>
          </div>
          <div className="bg-[#005D60] text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <div className="text-center text-2xl ">
              <FaHardHat />
            </div>
            <h4 className="text-lg font-bold mt-4">
              Construction & Heavy Equipment
            </h4>
          </div>
          <div className="bg-[#005D60] text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <div className="text-center text-2xl ">
              <FaShippingFast />
            </div>
            <h4 className="text-lg font-bold mt-4">
              Delivery & Courier Services
            </h4>
          </div>
          <div className="bg-[#005D60] text-white p-4 rounded-lg shadow-lg flex flex-col items-center">
            <div className="text-center text-2xl text-white">
              <FaLandmark />
            </div>
            <h4 className="text-lg font-bold mt-4">Government Agencies</h4>
          </div>
        </div>
      </section>
      <section className="bg-gray-400   p-6 mt-9 mb-7 text-center">
        <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-4">
          Key Features
        </h2>
        <p className="text-lg mt-4">
          Our fleet management solutions include the following key features:
        </p>
        <div className="mx-auto">
          <ul className=" text-lg mt-4 flex md:flex-row sm:flex-col items-center">
            <li className="flex items-center">
              <span className="bg-[#005D60] w-4 h-4 rounded-full mr-2"></span>
              Real-time vehicle tracking and location services.
            </li>
            <li className="flex items-center mt-2">
              <span className="bg-[#005D60] w-4 h-4 rounded-full mr-2"></span>
              Maintenance scheduling and automated service reminders.
            </li>
            <li className="flex items-center mt-2">
              <span className="bg-[#005D60] w-4 h-4 rounded-full mr-2"></span>
              Fuel management and cost-effective routing.
            </li>
            <li className="flex items-center mt-2">
              <span className="bg-[#005D60] w-4 h-4 rounded-full mr-2"></span>
              Driver behavior monitoring and safety alerts.
            </li>
          </ul>
        </div>
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
            Streamline Your Fleet Operations Today
          </h3>
          <div className="text-center mt-6">
            <Link href="/appointment">
              <button className="button ml-4 md:mt-0 sm:mt-2">
                Book Our Fleet Management Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FleetManagement;
