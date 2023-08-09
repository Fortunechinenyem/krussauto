import React from "react";
import BlogHero from "../../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const BuySell = () => {
  return (
    <div>
      <Navbar />
      <div className="relative bg-gradient-to-tr from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={BlogHero}
          alt="blog hero"
          priority
        />
        <div className="p-6 md:p-24 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            Buy and Sell Your Car
          </h1>
        </div>
      </div>
      <div>
        <p className=" mt-4">
          Looking to buy or sell a car? Kruss Automotive Services is here to
          assist you with a seamless and reliable car buying and selling
          experience. Our platform connects buyers and sellers, ensuring a
          transparent and efficient process.
        </p>
        <p className=" mt-4">
          If you're looking to buy a car, explore our curated selection of
          high-quality vehicles. Our inventory features a wide range of makes
          and models, each carefully inspected to ensure its quality and
          reliability. Contact our team for more information or to schedule a
          test drive.
        </p>
        <p className=" mt-4">
          If you're selling your car, we provide a hassle-free selling process.
          Simply provide us with the necessary details, and our team will guide
          you through the process, ensuring a fair and competitive price for
          your vehicle. Let us handle the paperwork and connect you with
          potential buyers.
        </p>
        <p className=" mt-4">
          Whether you're buying or selling, Kruss Automotive Services is your
          trusted partner in the car buying and selling journey. Contact us
          today to get started.
        </p>
      </div>
      <div className="mt-9">
        <h3 className="text-3xl text-center font-bold">
          Let us take that hassle off you
        </h3>

        <div className="text-center mt-6">
          <Link href="/contact">
            <button className="inline-block self-start bg-[#006950] text-white font-bold rounded-md px-6 py-2 text-lg px-6 py-3 rounded-md text-sm font-medium mb-7">
              Book An Appointment
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuySell;
