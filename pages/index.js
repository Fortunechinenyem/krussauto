import React, { useState, useEffect } from "react";
import PageSEO from "@/components/pageSEO";
import Head from "next/head";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

import { Hero, InvestmentImage } from "../public/images/index";

import FAQs from "./faq";

import Aos from "aos";
import "aos/dist/aos.css";
import BlogSnippet from "@/components/blog/BlogSnippet";
import ProductCards from "@/components/cards/ProductCards";
import Testimonial from "@/layout/Testimonial";
import HowItWorks from "@/components/Howitworks";

export default function HomePage() {
  const [customerCount, setCustomerCount] = useState(0);
  const [brandCount, setBrandCount] = useState(0);

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);

  useEffect(() => {
    const targetCountCustomers = 20;
    const targetCountBrands = 5;
    const incrementInterval = 3;

    let currentCountCustomers = 0;
    let currentCountBrands = 0;

    const intervalCustomers = setInterval(() => {
      currentCountCustomers += Math.ceil(
        (targetCountCustomers - currentCountCustomers) / 10
      );
      if (currentCountCustomers >= targetCountCustomers) {
        currentCountCustomers = targetCountCustomers;
        clearInterval(intervalCustomers);
      }
      setCustomerCount(currentCountCustomers);
    }, incrementInterval);

    const intervalBrands = setInterval(() => {
      currentCountBrands += Math.ceil(
        (targetCountBrands - currentCountBrands) / 10
      );
      if (currentCountBrands >= targetCountBrands) {
        currentCountBrands = targetCountBrands;
        clearInterval(intervalBrands);
      }
      setBrandCount(currentCountBrands);
    }, incrementInterval);

    return () => {
      clearInterval(intervalCustomers);
      clearInterval(intervalBrands);
    };
  }, []);

  return (
    <div className="container mx-auto">
      <Navbar />
      <PageSEO
        title="Home"
        description="Kruss Automotive Services"
        ogImage="../public/images/index/logo.svg"
      />
      <Head>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://www.krussautoserv.ng/",
              "name": "Kruss Automotive Services",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+2349025301696",
                "contactType": "Customer service"
              }
            }
          `}
        </script>
      </Head>

      <section className="container mx-auto mt-9   py-10 md:py-10">
        <div className="mt-9 p-4 mb-9 text-white bg-gradient-to-b from-[#00B0BA] to-gray-700 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mt-7">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Get Your Auto Services Needs Taken Care Of
            </h1>
            <p className="text-lg md:text-xl mt-4">
              Don't get stuck with a lemon – let our professionals take the load
              off you.
            </p>
          </div>

          <div
            className="md:w-1/2 flex justify-center mt-7 "
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <Image className="w-full max-w-md" src={Hero} alt="logo" priority />
          </div>
        </div>
      </section>

      <section className="container mx-auto bg-[#F0F0F0]">
        <div className="text-center mt-9 mb-9">
          <h3 className="text-3xl font-bold">Why Kruss?</h3>
        </div>

        <div>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-md lg:max-w-l lg:w-1/2 p-6 rounded-lg bg-blue-300">
              <h4 className="text-2xl font-bold mb-4">Exceptional Service</h4>
              <p className="text-gray-800">
                We provide top-notch automotive services with a focus on quality
                and excellence.
              </p>
            </div>

            <div className="max-w-md lg:max-w-l lg:w-1/2 p-6 rounded-lg bg-green-300">
              <h4 className="text-2xl font-bold mb-4">Reliable Solutions</h4>
              <p className="text-gray-800">
                Count on us for consistent and dependable solutions tailored to
                meet your automotive needs.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mt-4">
            <div className="max-w-md lg:max-w-l lg:w-1/2 p-6 rounded-lg bg-yellow-300">
              <h4 className="text-2xl font-bold mb-4">Customer Satisfaction</h4>
              <p className="text-gray-800">
                Your satisfaction is our priority. We aim to exceed your
                expectations in every service we offer.
              </p>
            </div>

            <div className="max-w-md lg:max-w-l lg:w-1/2 p-6 rounded-lg bg-pink-300">
              <h4 className="text-2xl font-bold mb-4">Innovative Solutions</h4>
              <p className="text-gray-800">
                We constantly innovate and adapt to provide cutting-edge
                solutions that redefine the automotive experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-9 product suite bg-gradient-to-b from-[#00B0BA] to-gray-400">
        <ProductCards />
      </section>

      <section className="py-8 md:py-12 mb-7 bg-white px-4">
        <HowItWorks />
      </section>

      <section className="container mx-auto relative mt-9 bg-gradient-to-b from-gray-500 to-gray-700">
        <div className="h-[50vh] md:h-screen relative">
          <Image
            className="absolute w-full h-full object-cover mix-blend-overlay"
            src={InvestmentImage}
            alt="Investment Image"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div
              className="text-center text-white"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <h3 className="text-3xl font-bold mb-4">
                Looking to Invest in Automobile Trading?
              </h3>
              <p className="text-lg md:text-xl mb-5">
                Earn High ROI while your money works for you.
              </p>
              <div className="text-center">
                <Link href="/services">
                  <button className="button font-bold rounded-md px-6 py-3 text-lg">
                    See how it works
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-5 mx-auto">
        <div className="text-center mt-7 mb-7 shadow-lg rounded-lg overflow-hidden mt-9 flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-[#00B0BA] to-gray-700 p-10">
          <div className="text-white">
            <p id="satisfiedCustomers" className="text-2xl font-bold">
              {customerCount} Satisfied Customers
            </p>
          </div>
          <div className="text-white ml-4">
            <p id="trustedBrands" className="text-2xl font-bold">
              {brandCount} Trusted Brands
            </p>
          </div>
        </div>
      </section>
      <section className="testimonialsection  mx-auto bg-[#F5F5F5]">
        <div className="py-12">
          <div className="mx-auto mb-5 text-center">
            <h4 className="text-2xl mb-5  text-[#141414] font-bold">
              Dont just take Our Word for it...
            </h4>
            <p className="text-[#8C8C8C] text-xl mt-2 mb-5 text-center">
              Here, we have testimonials from our past clients who have
              patronised us
            </p>
            <div>
              <Testimonial />
            </div>
          </div>
        </div>
      </section>
      <section className=" mt-9 container mx-auto">
        <div className="text-center mt-6 mb-5">
          <FAQs />
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
    </div>
  );
}
