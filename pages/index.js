import React, { useState, useEffect } from "react";
import PageSEO from "@/components/pageSEO";
import Head from "next/head";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

import { Hero } from "../public/images/index";
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
    Aos.init({ duration: 1800, offset: 0 });
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
    <div className="bg-gray-50">
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

      <section className="bg-gradient-to-b from-[#00B0BA] to-gray-800 py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get Your Auto Services Needs Taken Care Of
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Don't get stuck with a lemon – let our professionals take the load
              off you.
            </p>
            <Link
              href="/appointment"
              className="inline-block px-8 py-3 bg-white text-[#00B0BA] font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Book Now
            </Link>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <Image
              src={Hero}
              alt="Hero Image"
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Kruss?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Exceptional Service",
                description:
                  "We provide top-notch automotive services with a focus on quality and excellence.",
                bgColor: "bg-blue-50",
              },
              {
                title: "Reliable Solutions",
                description:
                  "Count on us for consistent and dependable solutions tailored to meet your automotive needs.",
                bgColor: "bg-green-50",
              },
              {
                title: "Customer Satisfaction",
                description:
                  "Your satisfaction is our priority. We aim to exceed your expectations in every service we offer.",
                bgColor: "bg-yellow-50",
              },
              {
                title: "Innovative Solutions",
                description:
                  "We constantly innovate and adapt to provide cutting-edge solutions that redefine the automotive experience.",
                bgColor: "bg-pink-50",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${item.bgColor}`}
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#00B0BA] to-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <ProductCards />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <HowItWorks />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#00B0BA] to-gray-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="text-white">
              <p className="text-4xl font-bold">{customerCount}+</p>
              <p className="text-xl">Satisfied Customers</p>
            </div>
            <div className="text-white">
              <p className="text-4xl font-bold">{brandCount}+</p>
              <p className="text-xl">Trusted Brands</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Don't Just Take Our Word for It...
          </h2>
          <Testimonial />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <FAQs />
        </div>
      </section>

      <section className="py-16 bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Check Out Our Latest Blog Post
          </h2>
          <BlogSnippet />
        </div>
      </section>

      <Footer />
    </div>
  );
}
