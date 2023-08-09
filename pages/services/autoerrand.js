import React from "react";
import BlogHero from "../../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const AutoErrand = () => {
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
            Auto Errand as a Service
          </h1>
        </div>
      </div>

      <div>
        <p className=" mt-4">
          At Kruss Automotive Services, we offer Auto Errand as a Service to
          provide convenience and assistance with your automotive-related tasks.
          Whether you need someone to pick up groceries, drop off packages, or
          handle other errands, our dedicated team is here to help.
        </p>
        <p className=" mt-4">
          Our Auto Errand service saves you time and effort by taking care of
          your errands while you focus on other important aspects of your life.
          Our reliable and professional team members will ensure that your
          errands are handled efficiently and with utmost care.
        </p>
        <p className=" mt-4">
          With our Auto Errand as a Service, you can enjoy a hassle-free
          experience and the convenience of having someone you can trust to
          handle your automotive errands. Contact us today to learn more about
          our Auto Errand service and how we can assist you.
        </p>
      </div>
      <div className="mt-9">
        <h3 className="text-3xl text-center font-bold">
          Let Us take the Load off you
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

export default AutoErrand;
