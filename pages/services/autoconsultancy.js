import React from "react";

import Image from "next/image";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { AutoConsultancyHero } from "@/public/images";
import Testimonial from "@/layout/Testimonial";
import {
  FaCar,
  FaMoneyCheck,
  FaTools,
  FaGasPump,
  FaRecycle,
} from "react-icons/fa";

const AutoConsultancy = () => {
  const autoConsultancyServices = [
    {
      title: "Vehicle Selection and Purchasing Assistance",
      description:
        "Help clients choose the right vehicle that suits their needs, preferences, and budget.",
      icon: <FaCar />,
    },
    {
      title: "Fleet Optimization",
      description:
        "Analyze and optimize the composition and operation of a vehicle fleet for businesses.",
      icon: <FaMoneyCheck />,
    },
    {
      title: "Vehicle Maintenance Planning",
      description:
        "Develop customized maintenance schedules for individual vehicles or fleets.",
      icon: <FaTools />,
    },
    {
      title: "Cost Management and Budgeting",
      description: "Create budgeting plans for vehicle-related expenses.",
      icon: <FaMoneyCheck />,
    },
    {
      title: "Vehicle Resale and Trade-In Advice",
      description:
        "Advise on when to sell or trade in a vehicle to maximize returns.",
      icon: <FaCar />,
    },
    {
      title: "Performance Upgrades and Modifications",
      description:
        "Suggest vehicle performance enhancements, modifications, or customizations.",
      icon: <FaTools />,
    },
    {
      title: "Insurance Guidance",
      description:
        "Assist clients in selecting the right auto insurance policies.",
      icon: <FaMoneyCheck />,
    },
    {
      title: "Fuel Efficiency Optimization",
      description: "Recommend fuel-efficient driving techniques.",
      icon: <FaGasPump />,
    },
    {
      title: "Eco-Friendly Vehicle Options",
      description:
        "Provide information on eco-friendly and electric vehicle choices.",
      icon: <FaRecycle />,
    },
    {
      title: "Vehicle Inspection and Documentation",
      description:
        "Offer inspection services for vehicle condition assessment.",
      icon: <FaCar />,
    },
  ];
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="relative h-screen bg-gradient-to-b from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={AutoConsultancyHero}
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
              Expert Auto Consultancy
            </h1>
          </div>
        </div>
      </div>
      <section className="mt-9 mb-7">
        <div className="text-center">
          <p className="text-lg ">
            Welcome to a world of automotive possibilities! Kruss Automotive
            Services offers you more than just cars – our Auto Consultancy
            services provide personalized advice and expert guidance on all
            things auto-related.
          </p>
          <p className="text-lg  mt-4">
            Whether you're a seasoned driver, a fleet manager, or a business
            owner, our team of automotive enthusiasts and experts are here to
            help. From choosing the perfect vehicle to optimizing your fleet
            operations, we bring fun and practicality to the world of
            automobiles.
          </p>
          <p className="text-lg  mt-4">
            Our range of consultancy services covers everything from vehicle
            selection, maintenance strategies, fleet management, cost
            optimization, and more. We blend our industry insights with your
            unique requirements to craft tailored solutions that keep you ahead
            in the ever-evolving automotive landscape.
          </p>
          <p className="text-lg mt-4">
            Ready to dive into the exciting world of automotive consultancy?
            Connect with us today and embark on a journey where decision-making
            becomes a delightful adventure!
          </p>
        </div>
      </section>
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
            Why Choose Kruss Automotive Services?
          </h2>
          <p className="text-lg text-center">
            We are dedicated to providing top-notch auto consultancy. Here's why
            you should choose us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-[#5E8BE4] p-6 rounded-lg">
              <h3 className="font-bold mb-4">Experience and Expertise</h3>
              <p className="">
                With years of experience in the automotive industry, we bring a
                wealth of expertise to every client's project.
              </p>
            </div>
            <div className=" bg-[#008199] p-6 rounded-lg">
              <h3 className="font-bold mb-4">Tailored Solutions</h3>
              <p className="">
                We believe in personalized solutions. Your project gets the
                attention and customization it deserves.
              </p>
            </div>
            <div className="bg-[#D5A419] p-6 rounded-lg">
              <h3 className="font-bold mb-4">Exceptional Support</h3>
              <p className="">
                Our dedicated team provides exceptional customer service and
                support throughout your journey with us.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" py-10">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
            Our Auto Consultancy Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {autoConsultancyServices.map((service, index) => (
              <div
                key={index}
                className="p-4 rounded-lg flex flex-col items-center text-center bg-gray-300"
              >
                <div className="text-2xl mb-2">{service.icon}</div>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-lg mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
            Discover how our consultancy has transformed the automotive
            experiences of our clients.
          </h2>
          <p className="text-[#8C8C8C] text-xl mt-2 mb-5 text-center">
            Here, we have testimonials from our past clients who have patronised
            us
          </p>
          <div>
            <Testimonial />
          </div>
        </div>
        <div className="mt-9">
          <div className="text-center mt-6">
            <Link href="/appointment">
              <button className="button ml-4 md:mt-0 sm:mt-2">
                Schedule a Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
      {/* <section className="bg-white py-10">
        <div className="container mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6">
            Explore More Resources
          </h2>
          <p className="text-xl text-center">
            Dive deeper into the world of auto consultancy with our informative
            articles and resources.
          </p>
          <div className="mt-6"></div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default AutoConsultancy;
