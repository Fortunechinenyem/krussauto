import React from "react";
import Image from "next/image";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";
import { CNGHero } from "@/public/images";
import Testimonial from "@/layout/Testimonial";
import HowItWorks from "@/components/Howitworks";
import CNGPricing from "@/components/cards/CNGPricingCards";
import Link from "next/link";

const CNGInstallation = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="relative h-screen bg-gradient-to-b from-green-600 to-green-800 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={CNGHero}
          alt="CNG Installation Hero"
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
              CNG Installation Service
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl">
              Drive smarter, save more, and reduce emissions with our expert CNG
              conversion services.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mt-9 mb-7">
        <p className="text-lg mt-4 mb-2">
          Upgrade your vehicle to run on **Compressed Natural Gas (CNG)** and
          experience better fuel efficiency, lower costs, and a cleaner
          environment.
        </p>
        <p className="text-lg mb-2">
          Our certified technicians provide seamless and high-quality CNG
          installations, ensuring optimal safety, performance, and compliance
          with industry standards.
        </p>
        <p className="text-lg mb-2">
          Whether you're looking to save money on fuel or contribute to a
          greener planet, our CNG conversion service is the perfect choice for
          you.
        </p>
      </div>

      <section className="bg-gray-100 p-6 mt-9 mb-9 text-center">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Why Choose CNG?
        </h3>
        <div className="mt-9 flex md:flex-row sm:flex-col gap-4">
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-green-500 rounded-full text-white flex items-center justify-center"></div>
            <p className="ml-4 text-lg">
              Save up to 50% on fuel costs compared to petrol or diesel.
            </p>
          </div>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-green-500 rounded-full text-white flex items-center justify-center"></div>
            <p className="ml-4 text-lg">
              Reduce harmful emissions and promote a cleaner environment.
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-16 h-16 bg-green-500 rounded-full text-white flex items-center justify-center"></div>
            <p className="ml-4 text-lg">
              Enjoy a smoother, quieter, and more efficient engine performance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 mt-9 mb-7 text-center">
        <HowItWorks />
      </section>

      <section>
        <CNGPricing />
      </section>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
            What Our Clients Say
          </h2>
          <p className="text-[#8C8C8C] text-xl mt-2 mb-5 text-center">
            Hear from customers who have successfully switched to CNG with our
            expert installation service.
          </p>
          <div>
            <Testimonial />
          </div>
        </div>
        <div className="mt-9">
          <h3 className="text-2xl md:text-2xl lg:text-3xl text-center font-bold">
            Make the Switch to CNG Today!
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

export default CNGInstallation;
