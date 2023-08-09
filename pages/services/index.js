import React from "react";

import ServicesHero from "../../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="relative bg-gradient-to-tr from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={ServicesHero}
          alt="services hero"
          priority
        />
        <div className="p-6 md:p-24 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            Services
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Link href="/prepurchase">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-xl font-bold mb-2">Pre-Purchase Inspection</p>
            <p className="text-gray-600">
              Ensure peace of mind before buying a car with our comprehensive
              pre-purchase inspection service.
            </p>
          </div>
        </Link>
        <Link href="/autoerrand">
          {" "}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-xl font-bold mb-2">Auto-Errand As A Service</p>
            <p className="text-gray-600">
              Let us take care of your auto errands, from picking up groceries
              to dropping off packages.
            </p>
          </div>
        </Link>
        <Link href="/fleetmanagement">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-xl font-bold mb-2">Fleet Management</p>
            <p className="text-gray-600">
              Efficiently manage your vehicle fleet with our advanced fleet
              management solutions.
            </p>
          </div>
        </Link>
        <Link href="/buysell">
          <div className="bg-white shadow-lg rounded-lg p-6 mt-7 mb-7">
            <p className="text-xl font-bold mb-2">Buy, Sell Cars</p>
            <p className="text-gray-600">
              Explore our curated selection of high-quality cars or sell your
              car hassle-free.
            </p>
          </div>
        </Link>
        <Link href="/cardiagnostics">
          {" "}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-xl font-bold mb-2">Car Diagnostics</p>
            <p className="text-gray-600">
              Get comprehensive Car Diagnostics to identify and address issues
              with your vehicle's performance.
            </p>
          </div>
        </Link>
        <Link href="/autoconsultancy">
          {" "}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-xl font-bold mb-2">Auto Consultancy</p>
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
