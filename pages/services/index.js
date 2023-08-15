import React from "react";

import ServicesHero from "../../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FcInspection } from "react-icons/fc";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdSyncProblem } from "react-icons/md";
import { GiDiscussion } from "react-icons/gi";
const Services = () => {
  return (
    <div className="m-2 text-xl">
      <Navbar />
      <div className="relative h-screen bg-gradient-to-b from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={ServicesHero}
          alt="about hero"
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
              Our Product Suite
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-7 mt-9 ">
        <Link href="/services/prepurchase">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-xl font-bold mb-2">
              Pre-Purchase Inspection{" "}
              <span>
                <FcInspection />
              </span>
            </p>
            <p className="text-gray-600">
              Ensure peace of mind before buying a car with our comprehensive
              pre-purchase inspection service.
            </p>
          </div>
        </Link>
        <Link href="/services/autoerrand">
          {" "}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-xl font-bold mb-2">
              Auto-Errand As A Service{" "}
              <span>
                <MdOutlineMiscellaneousServices />
              </span>
            </p>
            <p className="text-gray-600">
              Let us take care of your auto errands, from picking up groceries
              to dropping off packages.
            </p>
          </div>
        </Link>
        <Link href="/services/fleetmanagement">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-xl font-bold mb-2">
              Fleet Management{" "}
              <span>
                <FaCar />
              </span>
            </p>
            <p className="text-gray-600">
              Efficiently manage your vehicle fleet with our advanced fleet
              management solutions.
            </p>
          </div>
        </Link>
        <Link href="/services/buysell">
          <div className="bg-white shadow-lg rounded-lg p-6 ">
            <p className="text-xl font-bold mb-2">
              Buy, Sell Cars{" "}
              <span>
                <FaMoneyBillAlt />
              </span>
            </p>
            <p className="text-gray-600">
              Explore our curated selection of high-quality cars or sell your
              car hassle-free.
            </p>
          </div>
        </Link>
        <Link href="/services/cardiagnostics">
          {" "}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-xl font-bold mb-2">
              Car Diagnostics{" "}
              <span>
                <MdSyncProblem />
              </span>
            </p>
            <p className="text-gray-600">
              Get comprehensive Car Diagnostics to identify and address issues
              with your vehicle's performance.
            </p>
          </div>
        </Link>
        <Link href="/services/autoconsultancy">
          {" "}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-xl font-bold mb-2">
              Auto Consultancy{" "}
              <span>
                <GiDiscussion />
              </span>
            </p>
            <p className="text-gray-600">
              Get expert advice and guidance on all your automotive needs from
              our experienced consultants.
            </p>
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
