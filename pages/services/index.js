import React from "react";

// import Image from "next/image";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";
// import Link from "next/link";

// import { ServicesHero } from "@/public/images";
import ProductCards2 from "@/components/cards/ProductCards2";
import Invest from "@/components/investment";

const Services = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <section className="container mx-auto mt-12   py-10 md:py-10">
        <div className="mt-9 p-4 mb-9 text-black flex flex-col md:flex-row items-center">
          <div className="text-center mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Welcome to Our Services
            </h1>
            <p className="mt-4 text-lg">
              Discover a wide range of services tailored to meet your needs and
              exceed expectations.
            </p>
          </div>
        </div>
      </section>
      <section>
        <ProductCards2 />
      </section>
      <section>
        <Invest />
      </section>
      <Footer />
    </div>
  );
};

export default Services;
