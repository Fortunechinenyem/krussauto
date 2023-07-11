import React from "react";
import Link from "next/link";
import AboutHero from "../public/assets/images/kruss (1).jpg";
import Founder from "../public/assets/images/founder.jpg";
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
            Who We Are
          </h1>
        </div>
      </div>
      <div className="mt-7">
        <h3 className="text-center ">Our Story</h3>
        <p className="text-center">
          Kruss Automotive Services started from a need to provide professional
          services to clients who might not have the time to go to auto
          workshops themselves considering the times and society where everyone
          has things to do, we understood the pain of looking for trustworthy
          auto-technicians and the service they render.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-9 mb-7">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-center mb-4 text-xl font-bold">Our Vision</h3>
          <p className="text-center">
            At Kruss Automotive Services, our vision is to revolutionize the
            automotive industry by providing exceptional service and innovative
            solutions that exceed customer expectations.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-center mb-4 text-xl font-bold">Our Mission</h3>
          <p className="text-center">
            Our mission is to deliver top-quality automotive services with a
            focus on customer satisfaction, reliability, and continuous
            improvement. We strive to create lasting relationships with our
            customers and become their trusted automotive partner.
          </p>
        </div>
      </div>
      <div className="rounded-lg p-6 mt-9 mb-7">
        <h3 className="text-center mb-4 text-xl font-bold">Our Values</h3>
        <p className="text-center">
          Integrity - We uphold the highest ethical standards, maintaining
          honesty, transparency, and trustworthiness in all our interactions.
        </p>
        <p className="text-center">
          Excellence - We are committed to delivering excellence in every aspect
          of our work, aiming for the highest quality service and customer
          satisfaction.
        </p>
        <p className="text-center">
          Reliability - We strive to be a reliable partner, consistently
          providing dependable services and solutions to meet our customers'
          automotive needs.
        </p>
      </div>

      <div className=" rounded-lg p-6 mt-9 mb-7">
        <h3 className="text-center mb-4 text-xl font-bold">Our Journey</h3>
        <p className="text-center">So far, so good</p>
      </div>
      <div className="rounded-lg p-6 mt-9 mb-7">
        <h3 className="text-center mb-4 text-xl font-bold">Meet the Team</h3>
        <div className="text-center">
          <Image
            className="w-48 mx-auto"
            src={Founder}
            alt="founder"
            priority
          />
        </div>
        <p className="text-center mt-5">Joshua Aribido</p>
      </div>

      <div className="rounded-lg p-6 mt-9 mb-7">
        <h3 className="text-center mb-4 text-xl font-bold">
          Want to Join Our Story?
        </h3>
        <p className="text-center">
          Check out our current job openings to see if you can join our journey
          to conquer the automotive industry!
        </p>
        <div className="mt-5 mb-5 text-center">
          <Link href="/careers">
            <button className="inline-block self-start bg-[#006950] text-white font-bold rounded-md px-6 py-2 text-lg">
              Go to Job Openings
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
