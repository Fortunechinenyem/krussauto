import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

import Logo from "../public/assets/images/carbg.png";
import How from "../public/assets/images/how.png";
import InvestImage from "../public/assets/images/k5.jpeg";
import { FcInspection } from "react-icons/fc";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdSyncProblem } from "react-icons/md";
import { GiDiscussion } from "react-icons/gi";
import FAQs from "./faq";

import Aos from "aos";
import "aos/dist/aos.css";
import BlogSnippet from "@/components/BlogSnippet";

export default function HomePage() {
  const [customerCount, setCustomerCount] = useState(0);
  const [brandCount, setBrandCount] = useState(0);

  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);

  useEffect(() => {
    const targetCountCustomers = 500;
    const targetCountBrands = 10;
    const incrementInterval = 30;

    let currentCountCustomers = 0;
    let currentCountBrands = 0;

    const intervalCustomers = setInterval(() => {
      currentCountCustomers += Math.ceil(
        (targetCountCustomers - currentCountCustomers) / 10
      );
      if (currentCountCustomers >= targetCountCustomers) {
        currentCountCustomers = targetCountCustomers;
        clearInterval(intervalCustomers);
      }
      setCustomerCount(currentCountCustomers);
    }, incrementInterval);

    const intervalBrands = setInterval(() => {
      currentCountBrands += Math.ceil(
        (targetCountBrands - currentCountBrands) / 10
      );
      if (currentCountBrands >= targetCountBrands) {
        currentCountBrands = targetCountBrands;
        clearInterval(intervalBrands);
      }
      setBrandCount(currentCountBrands);
    }, incrementInterval);

    return () => {
      clearInterval(intervalCustomers);
      clearInterval(intervalBrands);
    };
  }, []);

  return (
    <div className="m-2 text-xl">
      <Navbar />

      <div className="mt-9 p-4 mb-9 text-white bg-gradient-to-b from-gray-500 to-gray-700 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mt-7">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t("Get Your Auto Services Needs Taken Care Of")}
          </h1>
          <p className="text-lg md:text-xl mt-4">
            Don't get stuck with a lemon – let our professionals take the load
            off you.
          </p>
        </div>

        <div
          className="md:w-1/2 flex justify-center mt-7 "
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <Image className="w-full max-w-md" src={Logo} alt="logo" priority />
        </div>
      </div>
      <section className="">
        <div data-aos="fade-down" data-aos-delay="400">
          <h3 className="p-4 text-[#11111]  text-center text-2xl md:text-2xl lg:text-4xl font-bold mb-4">
            Our Product Suite
          </h3>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-7 mt-9 text-[#11111] text-xl md:text-xl lg:text-2xl"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <Link href="/services">
            <div
              className="bg-[] rounded-lg p-6 mt-7 shadow-lg"
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
              </div>
            </div>
          </Link>
          <Link href="/services/autoerrand">
            {" "}
            <div
              className="bg-[] rounded-lg p-6 mt-7 shadow-lg"
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
              </div>
            </div>
          </Link>
          <Link href="/services">
            <div
              className="bg-[] rounded-lg p-6 mt-7 shadow-lg"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div className=" ">
                <p className="text-xl font-bold mb-2">
                  Fleet Management{" "}
                  <span>
                    <FaCar />
                  </span>
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services">
            <div
              className="bg-[] rounded-lg p-6 mt-7 shadow-lg "
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div className=" ">
                <p className="text-xl font-bold mb-2">
                  Buy, Sell Cars{" "}
                  <span>
                    <FaMoneyBillAlt />
                  </span>
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services">
            {" "}
            <div
              className="bg-[] rounded-lg p-6 mt-7 shadow-lg"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <div className=" ">
                <p className="text-xl font-bold mb-2">
                  Car Diagnostics{" "}
                  <span>
                    <MdSyncProblem />
                  </span>
                </p>
              </div>
            </div>
          </Link>
          <Link href="/services">
            {" "}
            <div
              className="bg-[] rounded-lg p-6 mt-7 shadow-lg"
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
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section className="container mx-auto bg-[#F0F0F0]">
        <div className="text-center mt-9 mb-9">
          <h3 className="text-3xl font-bold">How It Works</h3>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div
            className="md:w-1/2 justify-center mt-7 "
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <Image className="w-full max-w-md" src={How} alt="logo" priority />
          </div>
          <div className=" md:w-1/2  justify-center mb-7 mt-9">
            <div className=" rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">Step 1</h4>
              <p className="">
                Choose the service you need and book an appointment.
              </p>
            </div>
            <div className=" rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">Step 2</h4>
              <p className="">
                Our professionals will provide the service at your convenience.
              </p>
            </div>
            <div className=" rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">Step 3</h4>
              <p className="">
                Sit back and enjoy a hassle-free experience with your vehicle.
              </p>
            </div>
            <div className="mt-8 ">
              <Link href="/appointment">
                <button className="sm:text-center bg-[#0B2546] text-white font-bold rounded-md px-6 py-2 text-lg px-6 py-3 rounded-md text-x font-medium">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-5 bg-gradient-to-b from-gray-500 to-gray-700">
        <div className="h-[50vh] md:h-screen relative">
          <Image
            className="absolute w-full h-full object-cover mix-blend-overlay"
            src={InvestImage}
            alt="Investment Image"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div
              className="text-center text-white"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <h3 className="text-3xl font-bold mb-4">
                Looking to Invest in Automobile Trading?
              </h3>
              <p className="text-lg md:text-xl mb-5">
                Earn High ROI while your money works for you.
              </p>
              <div className="text-center">
                <Link href="/services">
                  <button className="bg-[#0B2546] text-white font-bold rounded-md px-6 py-3 text-lg">
                    See how it works
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" mt-5 mx-auto">
        <div className="text-center mt-7 mb-7 shadow-lg rounded-lg overflow-hidden mt-9 flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-gray-500 to-gray-700 p-10">
          <div className="text-white">
            <p id="satisfiedCustomers" className="text-2xl font-bold">
              {customerCount} Satisfied Customers
            </p>
          </div>
          <div className="text-white ml-4">
            <p id="trustedBrands" className="text-2xl font-bold">
              {brandCount} Trusted Brands
            </p>
          </div>
        </div>
      </section>
      <section>
        <div
          className="testimonial-section bg-gray-100 py-10"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="container mx-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 text-center gap-6">
              <div
                className="testimonial-card bg-[] p-6 rounded-lg shadow-lg"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <p className=" text-lg mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam venenatis eget elit nec accumsan."
                </p>
                <p className=" font-semibold">James Sturgis</p>
              </div>
              <div
                className="testimonial-card bg-[] p-6 rounded-lg shadow-lg"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <p className=" text-lg mb-4">
                  "Suspendisse consectetur nunc eget quam vulputate, ac gravida
                  odio lacinia."
                </p>
                <p className=" font-semibold">Sheldon Cooper</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-5 container mx-auto">
        <div className="text-center mt-6 mb-5">
          <FAQs />
        </div>
      </section>
      <section className="p-5 mt-5 bg-[#F0F0F0] mx-auto my-10 rounded-lg shadow-lg">
        <div className=" mt-5">
          <h2 className="text-3xl text-center mt-5 mb-5 font-bold mb-6 text-[#515B6D]">
            Check Out Our Latest Blog Post
          </h2>
        </div>
        <BlogSnippet />
      </section>

      <Footer />
    </div>
  );
}
