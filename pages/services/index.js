import React from "react";

import ServicesHero from "../../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Home1 from "../../public/assets/images/img (10).jpg";
import Home2 from "../../public/assets/images/img (2).jpg";
import Home3 from "../../public/assets/images/img (4).jpg";
import Home4 from "../../public/assets/images/kruss1.jpg";
import Home5 from "../../public/assets/images/kruss2.jpg";
// import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <div className="m-2 text-xl">
      <Navbar />
      <div className="relative h-screen bg-gradient-to-b from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={ServicesHero}
          alt="about hero"
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
              Our Services
            </h1>
          </div>
        </div>
      </div>

      <div
        className="p-2 bg-[#2F4858] text-xl text-white shadow-lg rounded-lg overflow-hidden mt-9 items-center"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="">
          <Image
            className="w-full max-w-md rounded-lg"
            src={Home1}
            alt="Pre-Purchase Inspection"
            priority
          />
        </div>
        <div className="">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Pre-Purchase Inspection
          </h1>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            We offer comprehensive vehicle inspections to ensure your car is
            safe and reliable on the road. Our inspections cover all major
            systems and components, including brakes, suspension, steering,
            tires, and more.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            At Kruss Automotive Services, we provide thorough PrePurchase
            Inspection services to empower our clients with informed decisions
            before purchasing a vehicle.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            Our experienced technicians meticulously examine the vehicle,
            detecting existing issues and potential concerns. We present
            detailed reports and recommendations to ensure a confident and wise
            investment.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            Our PrePurchase Inspection covers all major components, including
            the engine, transmission, suspension, brakes, and electrical
            systems. You can trust us to provide a clear understanding of the
            vehicle's condition, helping you avoid unexpected repairs and
            ensuring your peace of mind.
          </p>
          <div className="mt-9">
            <h3 className="text-xl md:text-xl lg:text-xl text-center font-bold">
              Ready to Make an Informed Purchase?
            </h3>
            <div className="text-center mt-6 mb-5">
              <Link href="/contact">
                <button className="inline-block bg-white text-[#2F4858] font-bold rounded-md px-6 py-3 text-lg">
                  Book Your Inspection
                </button>
              </Link>
            </div>
          </div>
          {/* <div className="mx-auto mt-7 mb-4 text-lg  ">
            <Link href="/services/prepurchase">
              <FaArrowRight />
            </Link>
          </div> */}
        </div>
      </div>

      <div
        className="p-2  bg-[#2F4858] text-white shadow-lg rounded-lg overflow-hidden mt-9  items-center"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="">
          <Image
            className="w-full max-w-md rounded-lg"
            src={Home2}
            alt="Auto Errand as a Service"
            priority
          />
        </div>
        <div className="">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Auto Errand as a Service
          </h1>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            Don't have time to take care of your vehicle's maintenance needs?
            Let us handle it for you! We offer a range of auto errand services,
            including oil changes, tire rotations, and more.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            Kruss Automotive Services offers a comprehensive Auto Errand
            service, designed to provide convenience and assistance with your
            automotive-related tasks.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            Need someone to pick up groceries, drop off packages, or handle
            other errands? Our dedicated team is here to help, allowing you to
            focus on what truly matters.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            Our reliable and professional team members ensure your errands are
            handled efficiently and with the utmost care, freeing up your time
            and reducing stress.
          </p>
          <div className="mt-9">
            <h3 className="text-xl md:text-xl lg:text-xl text-center font-bold">
              Simplify Your Life with Auto Errand as a Service
            </h3>
            <div className="text-center mt-6 mb-5">
              <Link href="/contact">
                <button className="inline-block bg-white text-[#2F4858] font-bold rounded-md px-6 py-3 text-lg">
                  Book Our Errand Service
                </button>
              </Link>
            </div>
          </div>
          {/* <div className="mx-auto mt-7 mb-4 text-lg  ">
            <Link href="/services/autoerrand">
              <FaArrowRight />
            </Link>
          </div> */}
        </div>
      </div>

      <div
        className="p-2 bg-[#2F4858] text-white shadow-lg rounded-lg overflow-hidden mt-9  items-center"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="">
          <Image
            className="w-full max-w-md rounded-lg"
            src={Home3}
            alt="Fleet Management"
            priority
          />
        </div>
        <div className="">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Fleet Management
          </h1>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            Our inspection will identify any safety issues with the car. You can
            be confident that you and your loved ones are safe on the road.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            At Kruss Automotive Services, we provide comprehensive Fleet
            Management solutions tailored to help businesses effectively manage
            their vehicle fleets.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            Our fleet management services are designed to enhance operational
            efficiency, reduce costs, and improve overall fleet performance. We
            offer a range of solutions, including vehicle tracking, maintenance
            scheduling, fuel management, driver monitoring, and more.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            With advanced technologies and data-driven insights, our experienced
            team works closely with you to customize a fleet management strategy
            that aligns with your business goals. Whether you have a small fleet
            or a large-scale operation, we're here to streamline your fleet
            operations and drive your business forward.
          </p>
          <div className="mt-9">
            <h3 className="text-xl md:text-xl lg:text-xl text-center font-bold">
              Streamline Your Fleet Operations Today
            </h3>
            <div className="text-center mt-6 mb-5">
              <Link href="/contact">
                <button className="inline-block bg-white text-[#2F4858] font-bold rounded-md px-6 py-3 text-lg">
                  Book Our Fleet Management Services
                </button>
              </Link>
            </div>
          </div>
          {/* <div className="mx-auto mt-7 mb-4 text-lg  ">
            <Link href="/services/fleetmanagement">
              <FaArrowRight />
            </Link>
          </div> */}
        </div>
      </div>

      <div
        className="p-2 bg-[#2F4858] text-white shadow-lg rounded-lg overflow-hidden mt-9  items-center"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="">
          <Image
            className="w-full max-w-md rounded-lg"
            src={Home4}
            alt="Buy and Sell Cars"
            priority
          />
        </div>
        <div className="">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Buy and Sell Cars
          </h1>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            We help connect you to buyers and sellers if you either want to buy
            or sell cars.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            Looking to buy or sell a car? Kruss Automotive Services is your
            trusted partner for a transparent and efficient car buying and
            selling process.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            For buyers, we offer a curated selection of high-quality vehicles.
            Each car in our inventory is carefully inspected to ensure quality
            and reliability. Contact our team to learn more or schedule a test
            drive.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            For sellers, we provide a hassle-free selling process. Our team will
            guide you through the process, ensuring a fair and competitive price
            for your vehicle. Let us handle the paperwork and connect you with
            potential buyers.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            Whether you're buying or selling, Kruss Automotive Services is here
            to make the journey smooth and stress-free. Contact us today to get
            started.
          </p>
          <div className="mt-9 mb-7">
            <h3 className="text-2xl md:text-2xl lg:text-2xl text-center font-bold mb-4">
              How It Works
            </h3>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="bg-white text-[#2F4858] shadow-lg rounded-lg p-6">
                <h4 className="text-xl md:text-xl lg:text-xl font-bold mb-4">
                  Step 1: Explore Our Inventory
                </h4>
                <p className="text-xl md:text-xl lg:text-xl mt-4">
                  Browse through our curated selection of high-quality vehicles
                  available for purchase. Each car is meticulously inspected to
                  ensure quality and reliability.
                </p>
              </div>
              <div className="bg-white  text-[#2F4858] shadow-lg rounded-lg p-6">
                <h4 className="text-xl md:text-xl lg:text-xl font-bold mb-4">
                  Step 2: Schedule a Test Drive
                </h4>
                <p className="text-xl md:text-xl lg:text-xl mt-4">
                  Interested in a specific vehicle? Contact us to schedule a
                  test drive and experience the car firsthand before making a
                  decision.
                </p>
              </div>
              <div className="bg-white  text-[#2F4858] text- shadow-lg rounded-lg p-6">
                <h4 className="text-xl md:text-xl lg:text-xl font-bold mb-4">
                  Step 3: Sell Your Car Hassle-Free
                </h4>
                <p className="text-xl md:text-xl lg:text-xl mt-4">
                  Looking to sell your car? Provide us with the necessary
                  details, and our team will guide you through the selling
                  process, ensuring a fair and competitive price for your
                  vehicle.
                </p>
              </div>
            </div>
            <div className="text-center mt-6 mb-5">
              <Link href="/contact">
                <button className="inline-block bg-white text-[#2F4858] font-bold rounded-md px-6 py-3 text-lg">
                  Start Your Car Buying/Selling Journey with Kruss Automotive
                  Services
                </button>
              </Link>
            </div>
          </div>
          {/* <div className="mx-auto mt-7 mb-4 text-lg  ">
            <Link href="/services/buysell">
              <FaArrowRight />
            </Link>
          </div> */}
        </div>
      </div>

      <div
        className="p-2 bg-[#2F4858] text-white shadow-lg rounded-lg overflow-hidden mt-9  items-center"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="">
          <Image
            className="w-full max-w-md rounded-lg"
            src={Home5}
            alt="Auto Consultancy"
            priority
          />
        </div>
        <div className="">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Auto Consultancy
          </h1>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            We provide informed opinions on automotive products thanks to years
            of experience and exposure.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            Welcome to a world of automotive possibilities! Kruss Automotive
            Services offers you more than just cars – our Auto Consultancy
            services provide personalized advice and expert guidance on all
            things auto-related.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            Whether you're a seasoned driver, a fleet manager, or a business
            owner, our team of automotive enthusiasts and experts are here to
            help. From choosing the perfect vehicle to optimizing your fleet
            operations, we bring fun and practicality to the world of
            automobiles.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            Our range of consultancy services covers everything from vehicle
            selection, maintenance strategies, fleet management, cost
            optimization, and more. We blend our industry insights with your
            unique requirements to craft tailored solutions that keep you ahead
            in the ever-evolving automotive landscape.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            Ready to dive into the exciting world of automotive consultancy?
            Connect with us today and embark on a journey where decision-making
            becomes a delightful adventure!
          </p>

          <div className="text-center mt-6 mb-5">
            <Link href="/contact">
              <button className="inline-block bg-white text-[#2F4858] font-bold rounded-md px-6 py-3 text-lg">
                Schedule a Consultation
              </button>
            </Link>
          </div>
          {/* <div className="mx-auto mt-7 mb-4 text-lg  ">
            <Link href="/services/autoconsultancy">
              <FaArrowRight />
            </Link>
          </div> */}
        </div>
      </div>
      <div
        className="p-2 bg-[#2F4858] text-white shadow-lg rounded-lg overflow-hidden mt-9 mb-7  items-center"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="text-center">
          <Image
            className="w-full max-w-md rounded-lg"
            src={Home5}
            alt="Car Diagnostics"
            priority
          />
        </div>
        <div className="">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Expert Car Diagnostics
          </h1>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            Discover the difference with Kruss Automotive Services. Our
            comprehensive Car Diagnostics service goes beyond just reading error
            codes – our skilled technicians employ cutting-edge diagnostic tools
            and techniques to identify and address issues affecting your
            vehicle's performance.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            From warning lights to mysterious noises, we specialize in
            diagnosing complex problems across various systems and components.
            Our expertise allows us to interpret diagnostic data, analyze
            issues, and provide detailed insights into your car's condition.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            Our commitment is to keep your vehicle running optimally and
            efficiently. After a thorough diagnosis, our team will recommend
            targeted repairs or maintenance to resolve identified issues,
            ensuring your car performs at its best.
          </p>
          <p className="text-xl md:text-xl lg:text-2xl mt-4">
            Trust Kruss Automotive Services to deliver exceptional workmanship
            and exceptional customer care. Schedule a Car Diagnostics
            appointment today and experience the difference firsthand.
          </p>

          <div className="text-center mt-6 mb-5">
            <Link href="/contact">
              <button className="inline-block bg-white text-[#2F4858] font-bold rounded-md px-6 py-3 text-lg">
                Book Your Car Diagnostics Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
