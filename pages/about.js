import React from "react";

import AboutHero from "../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="relative bg-gradient-to-tr from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={AboutHero}
          alt="about hero"
          priority
        />
        <div className="p-6 md:p-24 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            About
          </h1>
        </div>
      </div>
      <div>
        <h3 className="text-center ">Our Story</h3>
        <p className="text-center">
          Kruss Automotive Services started from a need to provide professional
          services to clients who might not have the time to go to auto
          workshops themselves considering the times and society where everyone
          has things to do, we understood the pain of looking for trustworthy
          auto-technicians and the service they render.
        </p>
      </div>
      <div>
        <h3 className="text-center ">Our Values</h3>
        <p className="text-center">Kruss Automotive Services</p>
      </div>
      <div>
        <h3 className="text-center ">Our Journey</h3>
        <p className="text-center">So far, So good</p>
      </div>
      <div>
        <h3 className="text-center ">Meet the team</h3>
        <p className="text-center">Joshua Aribido</p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
