import React, { useEffect } from "react";
import Link from "next/link";
import {
  FaRegBuilding,
  FaBullseye,
  FaHeartbeat,
  FaUserTie,
  FaCarSide,
} from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { AboutHero, Founder } from "@/public/images";

import Image from "next/image";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);

  return (
    <div className="m-2 text-xl">
      <Navbar />
      <div className="relative h-screen bg-gradient-to-b from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={AboutHero}
          alt="about hero"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div
            className="text-center text-white"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Who We Are
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl">
              Your Trusted Partner in Automotive Services
            </p>
          </div>
        </div>
      </div>

      <div
        className="mt-7 text-center text-xl"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
          <FaUserTie className=" text-center text-5xl mb-3 text-gray-700" />
          <h3 className="text-2xl md:text-2xl lg:text-2xl font-bold mb-2">
            Our Story
          </h3>
          <p className="text-lg md:text-xl lg:text-xl">
            Kruss Automotive Services began with a vision to provide
            professional auto services to busy clients who value convenience and
            quality. In a world where time is precious, we understand the
            importance of reliable and trustworthy automotive solutions.
          </p>
        </div>
      </div>

      <div
        className="flex flex-wrap justify-center gap-6 mt-9 mb-7"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
          <FaBullseye className=" text-center text-5xl mb-3 text-gray-700" />
          <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2">
            Our Vision
          </h3>
          <p className="text-lg md:text-xl lg:text-xl">
            At Kruss Automotive Services, our vision is to lead the automotive
            industry by offering exceptional service and innovative solutions
            that redefine customer expectations.
          </p>
        </div>
        <div
          className="bg-white shadow-lg rounded-lg p-6 text-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <FaRegBuilding className="text-center text-5xl mb-3 text-gray-700" />
            <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2">
              Our Mission
            </h3>
            <p className="text-lg md:text-xl lg:text-xl">
              Our mission is to deliver top-quality automotive services with an
              unwavering commitment to customer satisfaction, reliability, and
              continuous improvement. We aspire to establish enduring
              partnerships with our customers, becoming their trusted automotive
              ally.
            </p>
          </div>
        </div>
      </div>

      <div
        className="bg-white shadow-lg rounded-lg p-6 mt-9 mb-7 text-center"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
          <FaHeartbeat className=" text-center text-5xl mb-3 text-gray-700" />
          <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2">
            Our Values
          </h3>
          <p className="text-lg md:text-xl lg:text-xl">
            Integrity - Upholding the highest ethical standards, fostering
            honesty, transparency, and trust in all our interactions.
          </p>
          <p className="text-lg md:text-xl lg:text-xl">
            Excellence - Pioneering excellence in every facet of our work,
            aiming for supreme service quality and exceeding customer
            expectations.
          </p>
          <p className="text-lg md:text-xl lg:text-xl">
            Reliability - Striving to be an unwavering partner, consistently
            providing dependable solutions and services that cater to our
            customers' automotive needs.
          </p>
        </div>
      </div>

      <div
        className="bg-white shadow-lg rounded-lg p-6 mt-9 mb-7 text-center"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
          <FaCarSide className="text-center text-5xl mb-3 text-gray-700" />
          <h3 className="text-xl md:text-2xl lg:text-2xl font-bold mb-2">
            Our Journey
          </h3>
          <p className="text-lg md:text-xl lg:text-xl">
            Our journey is a testament to dedication, passion, and growth. With
            each step, we continue to evolve and enhance our offerings, ensuring
            that we remain your trusted destination for all automotive needs.
          </p>
        </div>
      </div>

      <div
        className="bg-white shadow-lg rounded-lg p-6 mt-9 mb-7 text-center"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <h3 className="text-2xl md:text-2xl lg:text-2xl font-bold mb-4">
          Meet Our Founder
        </h3>
        <div className="mx-auto rounded-full overflow-hidden w-48 h-48">
          <Image
            className="w-full h-full object-cover"
            src={Founder}
            alt="Founder"
            priority
          />
        </div>
        <p className="text-xl md:text-xl lg:text-xl font-semibold mt-4">
          Joshua Aribido
        </p>
      </div>

      <div
        className="bg-white shadow-lg rounded-lg p-6 mt-9 mb-7 text-center"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
          <IoMdPeople className="text-center text-5xl mb-3 text-gray-700" />
          <h3 className="text-2xl md:text-2xl lg:text-2xl font-bold mb-4">
            Want to Join Our Story?
          </h3>
          <p className="text-xl md:text-xl lg:text-xl">
            Explore our current job openings and become a part of our journey to
            conquer the automotive industry!
          </p>
          <div className="mt-5">
            <Link href="/careers">
              <button className="button px-6 py-3 text-lg">
                Go to Job Openings
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
