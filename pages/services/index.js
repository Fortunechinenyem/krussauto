import React from "react";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";
import ProductCards2 from "@/components/cards/ProductCards2";
import Invest from "@/components/investment";

const Services = () => {
  return (
    <div className="container mx-auto">
      <Navbar />
      <section className="container mx-auto mt-12 py-10 md:py-10 text-center">
        <div className="mt-9 mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Expert Automotive Services
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore a wide range of automotive services designed to enhance your
            driving experience and vehicle performance.
          </p>
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
