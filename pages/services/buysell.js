import React from "react";
import BuySellHero from "../../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const BuySell = () => {
  return (
    <div className="m-2 text-xl">
      <Navbar />
      <div className="relative h-screen bg-gradient-to-b from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={BuySellHero}
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
              Buy or Sell Your Car
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl">
              We source for trusted buyers or sellers for your car
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mt-9 mb-7 text-center">
        <h3 className="text-2xl md:text-2xl lg:text-4xl font-bold mb-4">
          Seamless Car Buying and Selling Experience
        </h3>
        <p className="text-xl md:text-xl lg:text-3xl mt-4">
          Looking to buy or sell a car? Kruss Automotive Services is your
          trusted partner for a transparent and efficient car buying and selling
          process.
        </p>
        <p className="text-xl md:text-xl lg:text-3xl mt-4">
          For buyers, we offer a curated selection of high-quality vehicles.
          Each car in our inventory is carefully inspected to ensure quality and
          reliability. Contact our team to learn more or schedule a test drive.
        </p>
        <p className="text-xl md:text-xl lg:text-3xl mt-4">
          For sellers, we provide a hassle-free selling process. Our team will
          guide you through the process, ensuring a fair and competitive price
          for your vehicle. Let us handle the paperwork and connect you with
          potential buyers.
        </p>
        <p className="text-xl md:text-xl lg:text-3xl mt-4">
          Whether you're buying or selling, Kruss Automotive Services is here to
          make the journey smooth and stress-free. Contact us today to get
          started.
        </p>
        <div className="mt-9 mb-7">
          <h3 className="text-3xl md:text-3xl lg:text-4xl text-center font-bold mb-4">
            How It Works
          </h3>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                Step 1: Explore Our Inventory
              </h4>
              <p className="text-lg md:text-xl">
                Browse through our curated selection of high-quality vehicles
                available for purchase. Each car is meticulously inspected to
                ensure quality and reliability.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                Step 2: Schedule a Test Drive
              </h4>
              <p className="text-lg md:text-xl">
                Interested in a specific vehicle? Contact us to schedule a test
                drive and experience the car firsthand before making a decision.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h4 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                Step 3: Sell Your Car Hassle-Free
              </h4>
              <p className="text-lg md:text-xl">
                Looking to sell your car? Provide us with the necessary details,
                and our team will guide you through the selling process,
                ensuring a fair and competitive price for your vehicle.
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link href="/contact">
              <button className="inline-block bg-[#006950] text-white font-bold rounded-md px-6 py-3 text-lg">
                Start Your Car Buying/Selling Journey with Kruss Automotive
                Services
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuySell;
