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
    <div className="bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] bg-gradient-to-b from-gray-700 to-gray-900">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={AboutHero}
          alt="About Hero"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            Who We Are
          </h1>
          <p
            className="text-lg md:text-xl lg:text-2xl text-gray-200"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            Your Trusted Partner in Automotive Services
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="bg-white shadow-lg rounded-xl p-8 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FaUserTie className="text-5xl mb-4 text-blue-600 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Story
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Kruss Automotive Services began with a vision to provide
            professional auto services to busy clients who value convenience and
            quality. In a world where time is precious, we understand the
            importance of reliable and trustworthy automotive solutions.
          </p>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div
            className="bg-white shadow-lg rounded-xl p-8 text-center"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <FaBullseye className="text-5xl mb-4 text-green-600 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              At Kruss Automotive Services, our vision is to lead the automotive
              industry by offering exceptional service and innovative solutions
              that redefine customer expectations.
            </p>
          </div>

          {/* Mission */}
          <div
            className="bg-white shadow-lg rounded-xl p-8 text-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <FaRegBuilding className="text-5xl mb-4 text-purple-600 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Our mission is to deliver top-quality automotive services with an
              unwavering commitment to customer satisfaction, reliability, and
              continuous improvement. We aspire to establish enduring
              partnerships with our customers, becoming their trusted automotive
              ally.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="bg-white shadow-lg rounded-xl p-8 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FaHeartbeat className="text-5xl mb-4 text-red-600 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Integrity
              </h3>
              <p className="text-lg text-gray-600">
                Upholding the highest ethical standards, fostering honesty,
                transparency, and trust in all our interactions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Excellence
              </h3>
              <p className="text-lg text-gray-600">
                Pioneering excellence in every facet of our work, aiming for
                supreme service quality and exceeding customer expectations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Reliability
              </h3>
              <p className="text-lg text-gray-600">
                Striving to be an unwavering partner, consistently providing
                dependable solutions and services that cater to our customers'
                automotive needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Journey Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="bg-white shadow-lg rounded-xl p-8 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <FaCarSide className="text-5xl mb-4 text-yellow-600 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Our journey is a testament to dedication, passion, and growth. With
            each step, we continue to evolve and enhance our offerings, ensuring
            that we remain your trusted destination for all automotive needs.
          </p>
        </div>
      </div>

      {/* Meet Our Founder Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="bg-white shadow-lg rounded-xl p-8 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Founder
          </h2>
          <div className="mx-auto rounded-full overflow-hidden w-48 h-48">
            <Image
              className="w-full h-full object-cover"
              src={Founder}
              alt="Founder"
              priority
            />
          </div>
          <p className="text-xl md:text-2xl font-semibold mt-4 text-gray-800">
            Joshua Aribido
          </p>
          <p className="text-lg text-gray-600 mt-2">
            Visionary Leader & Automotive Expert
          </p>
        </div>
      </div>

      {/* Join Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="bg-white shadow-lg rounded-xl p-8 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <IoMdPeople className="text-5xl mb-4 text-blue-600 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Want to Join Our Story?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our current job openings and become a part of our journey to
            conquer the automotive industry!
          </p>
          <div className="mt-6">
            <Link href="/careers">
              <button className="px-8 py-3 button text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
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
