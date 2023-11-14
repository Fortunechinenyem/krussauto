import React, { useState } from "react";

import Image from "next/image";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";

import { BuySellHero } from "@/public/images";
import {
  FaCheckCircle,
  FaCar,
  FaRegGem,
  FaStar,
  FaHandshake,
} from "react-icons/fa";
import Testimonial from "@/layout/Testimonial";
import BlogSnippet from "@/components/blog/BlogSnippet";
import Appointment from "@/components/modals/AppointmentModal";

const BuySell = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const openAppointmentModal = () => {
    setIsAppointmentModalOpen(true);
  };

  const closeAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };
  return (
    <div className="container mx-auto">
      <Navbar />
      <section className="relative h-screen bg-gradient-to-b from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={BuySellHero}
          alt="Buy Sell hero"
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
              Buy or Sell Your Car
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl">
              We source for trusted buyers or sellers for your car
            </p>
          </div>
        </div>
      </section>
      <section className="mt-9 mb-7 ">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
          Seamless Car Buying and Selling Experience
        </h3>
        <p className="text-lg mt-4">
          Looking to buy or sell a car? Kruss Automotive Services is your
          trusted partner for a transparent and efficient car buying and selling
          process.
        </p>
        <p className="text-lg mt-4">
          For buyers, we offer a curated selection of high-quality vehicles.
          Each car in our inventory is carefully inspected to ensure quality and
          reliability. Contact our team to learn more or schedule a test drive.
        </p>
        <p className="text-lg mt-4">
          For sellers, we provide a hassle-free selling process. Our team will
          guide you through the process, ensuring a fair and competitive price
          for your vehicle. Let us handle the paperwork and connect you with
          potential buyers.
        </p>
        <p className="text-lg mt-4">
          Whether you're buying or selling, Kruss Automotive Services is here to
          make the journey smooth and stress-free. Contact us today to get
          started.
        </p>
      </section>

      <section className="mt-9 mb-7 p-4 bg-gradient-to-b from-[#00B0BA] to-gray-700">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
          How It Works
        </h3>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-lg font-bold mb-4">
              Step 1: Explore Our Inventory
            </h4>
            <p className="text-lg ">
              Browse through our curated selection of high-quality vehicles
              available for purchase. Each car is meticulously inspected to
              ensure quality and reliability.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-lg font-bold mb-4">
              Step 2: Schedule a Test Drive
            </h4>
            <p className="text-lg ">
              Interested in a specific vehicle? Contact us to schedule a test
              drive and experience the car firsthand before making a decision.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-lg font-bold mb-4">
              Step 3: Sell Your Car Hassle-Free
            </h4>
            <p className="text-lg ">
              Looking to sell your car? Provide us with the necessary details,
              and our team will guide you through the selling process, ensuring
              a fair and competitive price for your vehicle.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F7F7F7] p-6 mt-9 mb-7 text-center">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
          Benefits of Using Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-[#005D60] flex items-center justify-center h-16 w-16 rounded-full bg-white mx-auto">
              <FaCar />
            </div>
            <h4 className="text-xl font-bold mt-4">Convenience</h4>
            <p className="text-lg">
              We simplify the car buying and selling process.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-[#005D60] flex items-center justify-center h-16 w-16 rounded-full bg-white mx-auto">
              <FaCheckCircle />
            </div>
            <h4 className="text-xl font-bold mt-4">Trust</h4>
            <p className="text-lg">
              We build trust by offering quality vehicles and services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-[#005D60] flex items-center justify-center h-16 w-16 rounded-full bg-white mx-auto">
              <FaStar />
            </div>
            <h4 className="text-xl font-bold mt-4">Quality Assurance</h4>
            <p className="text-lg">
              Every car in our inventory undergoes thorough inspections.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-4xl text-[#005D60] flex items-center justify-center h-16 w-16 rounded-full bg-white mx-auto">
              <FaRegGem />
            </div>
            <h4 className="text-xl font-bold mt-4">Unique Selling Points</h4>
            <p className="text-lg">
              Highlight any unique features that set your services apart.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#005D60] text-white  p-6 mt-9 mb-7 text-center flex flex-col md:flex-row items-center justify-center">
        <div className="text-center  md:w-1/2">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
            Industry Partnerships
          </h2>
          <p className="text-lg mt-4">
            We're proud to partner with reputable dealerships and manufacturers,
            ensuring quality and reliability in our services.
          </p>
        </div>
        <div className=" md:w-1/2 text-8xl  flex items-center justify-center  rounded-full mx-auto md:ml-6 mt-6 md:mt-0">
          <FaHandshake />
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
            Start Your Car Buying/Selling Journey
          </h3>
          <div className="text-center mt-6">
            <button
              className="button ml-4 md:mt-0 sm:mt-2"
              onClick={openAppointmentModal}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
      <section className="container mx-auto p-5 mt-9 mb-7 bg-[#F0F0F0] mx-auto my-10 rounded-lg shadow-lg">
        <div className=" mt-5">
          <h2 className="text-3xl text-center mt-5 mb-5 font-bold mb-6 text-[#515B6D]">
            Check Out Our Latest Blog Post
          </h2>
        </div>
        <BlogSnippet />
      </section>

      <Footer />
      {isAppointmentModalOpen && (
        <Appointment onClose={closeAppointmentModal} />
      )}
    </div>
  );
};

export default BuySell;
