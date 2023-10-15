import React from "react";

import ServicesHero from "../../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FcInspection } from "react-icons/fc";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdSyncProblem } from "react-icons/md";
import { GiDiscussion } from "react-icons/gi";

// import { FaArrowRight } from "react-icons/fa";

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
              Our Services
            </h1>
          </div>
        </div>
      </div>
      <div
        className=" grid gap-4 mb-7 mt-9 text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-7 mt-9 text-white "
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <Link href="/services/prepurchase">
          <div
            className="bg-[#0B2546] flex rounded-lg p-6 mt-7"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div className="">
              <p className="text-xl font-bold mb-2">
                Pre-Purchase Inspection{" "}
                <span>
                  <FcInspection />
                </span>
              </p>
              <p className="">
                Ensure peace of mind before buying a car with our comprehensive
                pre-purchase inspection service.
              </p>
            </div>
          </div>
        </Link>
        <Link href="/services/autoerrand">
          {" "}
          <div
            className="bg-[#0B2546] flex rounded-lg p-6 mt-7"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div className="">
              {" "}
              <p className="text-xl font-bold mb-2">
                Auto-Errand As A Service{" "}
                <span>
                  <MdOutlineMiscellaneousServices />
                </span>
              </p>
              <p className="">
                Let us take care of your auto errands, from picking up groceries
                to dropping off packages.
              </p>
            </div>
          </div>
        </Link>
        <Link href="/services/fleetmanagement">
          <div
            className="bg-[#0B2546] flex rounded-lg p-6 mt-7"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div className="">
              <p className="text-xl font-bold mb-2">
                Fleet Management{" "}
                <span>
                  <FaCar />
                </span>
              </p>
              <p className="">
                Efficiently manage your vehicle fleet with our advanced fleet
                management solutions.
              </p>
            </div>
          </div>
        </Link>
        <Link href="/services/buysell">
          <div
            className="bg-[#0B2546] flex rounded-lg p-6 mt-7 "
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div className="">
              <p className="text-xl font-bold mb-2">
                Buy, Sell Cars{" "}
                <span>
                  <FaMoneyBillAlt />
                </span>
              </p>
              <p className="">
                Explore our curated selection of high-quality cars or sell your
                car hassle-free.
              </p>
            </div>
          </div>
        </Link>
        <Link href="/servicescardiagnostics">
          {" "}
          <div
            className="bg-[#0B2546] flex rounded-lg p-6 mt-7"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div className="">
              <p className="text-xl font-bold mb-2">
                Car Diagnostics{" "}
                <span>
                  <MdSyncProblem />
                </span>
              </p>
              <p className="">
                Get comprehensive Car Diagnostics to identify and address issues
                with your vehicle's performance.
              </p>
            </div>
          </div>
        </Link>
        <Link href="/services/autoconsultancy">
          {" "}
          <div
            className="bg-[#0B2546] flex rounded-lg p-6 mt-7"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div className=" ">
              {" "}
              <p className="text-xl font-bold mb-2">
                Auto Consultancy{" "}
                <span>
                  <GiDiscussion />
                </span>
              </p>
              <p className="">
                Get expert advice and guidance on all your automotive needs from
                our experienced consultants.
              </p>
            </div>
          </div>
        </Link>
      </div>
      <div
        className="mt-9 shadow-lg rounded-lg overflow-hidden  items-center"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <h3 className="text-3xl text-center font-bold">
          Looking to Invest in Automobile Trading?
        </h3>
        <p className="text-lg md:text-xl mt-4 text-center">
          Earn High ROI while you Sleep.
        </p>
        <h4 className="text-2xl text-center font-bold">How it works</h4>
        <div className="text-center mt-6 mb-5">
          <div className="">
            <Link
              href="/authentication/register"
              className="text-white bg-[#0B2546]  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Become An Investor
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
