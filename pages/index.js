import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

import Logo from "../public/assets/images/carbg.png";

import { FcInspection } from "react-icons/fc";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdSyncProblem } from "react-icons/md";
import { GiDiscussion } from "react-icons/gi";
import FAQs from "./faq";

import Aos from "aos";
import "aos/dist/aos.css";
import LanguageSelector from "@/components/LanguageSelector";

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
    <>
      <Navbar />
      {/* <LanguageSelector /> */}

      <div className="container mx-auto">
        <div className="mt-9 mb-9 flex flex-col md:flex-row items-center">
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
                className=" rounded-lg p-6 mt-7 shadow-lg"
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
                    Ensure peace of mind before buying a car with our
                    comprehensive pre-purchase inspection service.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/services/autoerrand">
              {" "}
              <div
                className=" rounded-lg p-6 mt-7 shadow-lg"
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
                    Let us take care of your auto errands, from picking up
                    groceries to dropping off packages.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/services">
              <div
                className=" rounded-lg p-6 mt-7 shadow-lg"
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
                  <p className="">
                    Efficiently manage your vehicle fleet with our advanced
                    fleet management solutions.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/services">
              <div
                className=" rounded-lg p-6 mt-7 shadow-lg "
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
                  <p className="">
                    Explore our curated selection of high-quality cars or sell
                    your car hassle-free.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/services">
              {" "}
              <div
                className=" rounded-lg p-6 mt-7 shadow-lg"
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
                  <p className="">
                    Get comprehensive Car Diagnostics to identify and address
                    issues with your vehicle's performance.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/services">
              {" "}
              <div
                className=" rounded-lg p-6 mt-7 shadow-lg"
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
                    Get expert advice and guidance on all your automotive needs
                    from our experienced consultants.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>
        <section className="container mx-auto  bg-[#EEF8F8]">
          <div className="text-center mt-9 mb-9">
            <h3 className="text-3xl font-bold">How It Works</h3>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-3 gap-6 mb-7 mt-9">
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
          </div>
          <div className="mt-8 text-center ">
            <Link href="/appointment">
              <button className="inline-block self-start bg-[#0B2546] text-white font-bold rounded-md px-6 py-2 text-lg px-6 py-3 rounded-md text-sm font-medium">
                Get Started
              </button>
            </Link>
          </div>
        </section>
        <div className="text-center mt-7 mb-7 shadow-lg rounded-lg overflow-hidden mt-9 flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-[#2D3748] via-[#718096] to-[#2D3748] p-10">
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

        <div
          className="mt-9 shadow-lg rounded-lg overflow-hidden mt-9 bg-white p-8 text-center"
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
            <Link
              href="/services"
              className="text-white bg-[#0B2546] hover:bg-[#1A365D] px-6 py-3 rounded-md text-lg md:text-xl font-bold"
            >
              See how it Works
            </Link>
          </div>
        </div>

        <div
          className="mt-9 shadow-lg rounded-lg overflow-hidden mt-9  items-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <h3 className="text-3xl text-center font-bold">Exciting News</h3>
          <p className="text-lg md:text-xl mt-4 text-center">
            Check out our e-book{" "}
            <span className="text-blue-500">
              "How to Buy and Sell Nigerian Used Cars"
            </span>
          </p>
          <div className="text-center mt-6">
            <Link href="/ebook">
              <button className="inline-block self-start bg-[#0B2546] text-white font-bold rounded-md px-6 py-2 text-lg px-6 py-3 rounded-md text-sm font-medium mb-7">
                Purchase
              </button>
            </Link>
          </div>
        </div>
      </div>
      <section className="container mx-auto">
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
      <section className="container mx-auto">
        <div className="text-center mt-6 mb-5">
          <FAQs />
        </div>
      </section>

      <Footer />
    </>
  );
}
