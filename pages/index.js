import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Logo from "../public/assets/images/car.PNG";
import Home1 from "../public/assets/images/img (10).jpg";
import Home2 from "../public/assets/images/img (2).jpg";
import Home3 from "../public/assets/images/img (4).jpg";
import Home4 from "../public/assets/images/kruss1.jpg";
import Home5 from "../public/assets/images/img (4).jpg";
import FAQs from "./faq";

import Aos from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 0,
    });
  }, []);
  return (
    <div className="m-4">
      <Navbar />

      <div className="container">
        <div className="mt-9 mb-9 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mt-7">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Get Your Auto Services Needs Taken Care Of
            </h1>
            <p className="text-lg md:text-xl mt-4">
              Don't get stuck with a lemon – let our professionals take the load
              off you.
            </p>
            {/* <div className="mt-8 flex flex-wrap justify-center">
              <Link href="/appointment">
                <button className="inline-block self-start bg-[#006950] text-white font-bold rounded-md px-6 py-2 text-lg px-6 py-3 rounded-md text-sm font-medium">
                  Book An Appointment
                </button>
              </Link>
            </div> */}
          </div>
          <div
            className="md:w-1/2 flex justify-center mt-7 "
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <Image className="w-full max-w-md" src={Logo} alt="logo" priority />
          </div>
        </div>

        <div
          className=" bg-[#2F4858] text-white mt-9 flex flex-col md:flex-row items-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="md:w-1/2 flex justify-center mt-6 p-2">
            <Image
              className="w-full max-w-md rounded-lg"
              src={Home1}
              alt="Pre-Purchase Inspection"
              priority
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Pre-Purchase Inspection
            </h1>
            <p className="text-lg md:text-xl mt-4">
              We offer comprehensive vehicle inspections to ensure your car is
              safe and reliable on the road. Our inspections cover all major
              systems and components, including brakes, suspension, steering,
              tires, and more.
            </p>
            <div className="mx-auto mt-7 mb-4 text-lg  ">
              <Link href="/services/prepurchase">
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>

        <div
          className="  bg-[#2F4858] text-white mt-9 flex flex-col md:flex-row items-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="md:w-1/2 m-2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Auto Errand as a Service
            </h1>
            <p className="text-lg md:text-xl mt-4">
              Don't have time to take care of your vehicle's maintenance needs?
              Let us handle it for you! We offer a range of auto errand
              services, including oil changes, tire rotations, and more.
            </p>
            <div className="mx-auto mt-7 mb-4 text-lg  ">
              <Link href="/services/autoerrand">
                <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="p-2 md:w-1/2 flex justify-center mt-6 md:mt-0">
            <Image
              className="w-full max-w-md rounded-lg"
              src={Home2}
              alt="Auto Errand as a Service"
              priority
            />
          </div>
        </div>

        <div
          className=" bg-[#2F4858] text-white mt-9 flex flex-col md:flex-row items-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="md:w-1/2 flex justify-center mt-6  p-2">
            <Image
              className="w-full max-w-md rounded-lg"
              src={Home3}
              alt="Fleet Management"
              priority
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Fleet Management
            </h1>
            <p className="text-lg md:text-xl mt-4">
              Our inspection will identify any safety issues with the car. You
              can be confident that you and your loved ones are safe on the
              road.
            </p>
            <div className="mx-auto mt-7 mb-4 text-lg  ">
              <Link href="/services/fleetmanagement">
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>

        <div
          className=" bg-[#2F4858] text-white mt-9 flex flex-col md:flex-row items-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="md:w-1/2 m-2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Buy and Sell Cars
            </h1>
            <p className="text-lg md:text-xl mt-4">
              We help connect you to buyers and sellers if you either want to
              buy or sell cars.
            </p>
            <div className="mx-auto mt-7 mb-4 text-lg  ">
              <Link href="/services/buysell">
                <FaArrowRight />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 p-2">
            <Image
              className="w-full max-w-md rounded-lg"
              src={Home4}
              alt="Buy and Sell Cars"
              priority
            />
          </div>
        </div>

        <div
          className=" bg-[#2F4858] text-white mt-9 flex flex-col md:flex-row items-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <div className="md:w-1/2 flex justify-center mt-6 p-2">
            <Image
              className="w-full max-w-md rounded-lg"
              src={Home5}
              alt="Auto Consultancy"
              priority
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Auto Consultancy
            </h1>
            <p className="text-lg md:text-xl mt-4">
              We provide informed opinions on automotive products thanks to
              years of experience and exposure.
            </p>
            <div className="mx-auto mt-7 mb-4 text-lg  ">
              <Link href="/services/autoconsultancy">
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-9" data-aos="fade-down" data-aos-delay="400">
          <h3 className="text-3xl text-center font-bold">Exciting News</h3>
          <p className="text-lg md:text-xl mt-4 text-center">
            Check out our e-book{" "}
            <span className="text-blue-500">
              "How to Buy and Sell Nigerian Used Cars"
            </span>
          </p>
          <div className="text-center mt-6">
            <Link href="/ebook">
              <button className="inline-block self-start bg-[#006950] text-white font-bold rounded-md px-6 py-2 text-lg px-6 py-3 rounded-md text-sm font-medium mb-7">
                Purchase
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 mb-5">
        <FAQs />
      </div>

      <Footer />
    </div>
  );
}
