import React from "react";
// import BlogHero from "../public/assets/images/kruss (1).jpg";
// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EngineMaintenance = () => {
  return (
    <div className="m-2 text-xl">
      <Navbar />
      <div className="relative bg-gradient-to-tr from-gray-500 to-gray-700 w-full bg-cover">
        {/* <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={BlogHero}
          alt="blog hero"
          priority
        /> */}
        <div className="p-6 md:p-24 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold">
            Engine Maintenance
          </h1>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EngineMaintenance;
