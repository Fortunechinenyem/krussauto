import React from "react";
import BlogHero from "../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AutoConsultancy = () => {
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
            Auto Consultancy
          </h1>
        </div>
      </div>
      <div>
        <p className=" mt-4">
          Kruss Automotive Services offers professional Auto Consultancy
          services to assist individuals and businesses in making informed
          decisions regarding their automotive needs. Our team of experts
          provides personalized consultations and guidance, leveraging their
          extensive knowledge and industry experience.
        </p>
        <p className=" mt-4">
          Whether you're looking to purchase a new car, upgrade your fleet,
          optimize your automotive operations, or explore other
          automotive-related areas, our Auto Consultancy service can provide
          valuable insights and recommendations. We take into account your
          specific requirements, budget, and goals to deliver customized
          solutions tailored to your needs.
        </p>
        <p className=" mt-4">
          Our consultancy services cover a wide range of areas, including
          vehicle selection, fleet management strategies, maintenance planning,
          cost optimization, and more. We work closely with you to understand
          your unique challenges and objectives, offering practical advice and
          solutions to help you achieve your automotive goals.
        </p>
        <p className=" mt-4">
          Contact us today to schedule a consultation and discover how our Auto
          Consultancy services can benefit you or your business. Let our
          expertise guide you towards making the right decisions in the dynamic
          automotive landscape.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AutoConsultancy;
