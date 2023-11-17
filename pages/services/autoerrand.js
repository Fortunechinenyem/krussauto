import React from "react";

import Image from "next/image";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";

import { AutoErrandHero } from "@/public/images";
import Testimonial from "@/layout/Testimonial";
import HowItWorks from "@/components/Howitworks";
import AutoErrandPricing from "@/components/cards/AutoErrandPricingCards";

import Link from "next/link";

const AutoErrand = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="relative h-screen bg-gradient-to-b from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={AutoErrandHero}
          alt="Auto errand hero"
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
              Auto Arrand As A Service
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl">
              Let us do the running around for you
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mt-9 mb-7 ">
        <p className="text-lg  mt-4 mb-2">
          Kruss Automotive Services offers a comprehensive Auto Errand service,
          designed to provide convenience and assistance with your
          automotive-related tasks.
        </p>
        <p className="text-lg mb-2">
          Need someone to pick up your vehicle, fix , maintain or handle other
          errands? Our dedicated team is here to help, allowing you to focus on
          what truly matters.
        </p>
        <p className="text-lg mb-2">
          Our reliable and professional team members ensure your errands are
          handled efficiently and with the utmost care, freeing up your time and
          reducing stress.
        </p>
      </div>
      <section className="bg-gray-100 p-6 mt-9 mb-9 text-center">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Benefits of Auto Errand
        </h3>

        <div className="mt-9 flex md:flex-row sm:flex-col gap-4">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-green-500 rounded-full text-white flex items-center justify-center"></div>
            <p className="ml-4 text-lg">
              Save time and reduce stress by outsourcing errands.
            </p>
          </div>
          <div className="flex  items-center mb-4">
            <div className="w-16 h-16 bg-green-500 rounded-full text-white flex items-center justify-center"></div>
            <p className="ml-4 text-lg">
              Enjoy convenience with our reliable errand team.
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-16 h-16 bg-green-500 rounded-full text-white flex items-center justify-center"></div>
            <p className="ml-4 text-lg">
              Focus on what matters while we handle your tasks.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 mt-9 mb-7 text-center">
        <HowItWorks />
      </section>
      <section>
        <AutoErrandPricing />
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
            Simplify Your Life with Auto Errand as a Service
          </h3>
          <div className="text-center mt-6">
            <Link href="/appointment">
              <button className="button ml-4 md:mt-0 sm:mt-2">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutoErrand;
