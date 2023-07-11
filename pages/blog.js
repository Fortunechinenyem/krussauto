import React from "react";
import BlogHero from "../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const Blog = () => {
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
            Blog
          </h1>
        </div>
      </div>
      <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Image
            className="w-full h-48 object-cover rounded-t-lg"
            width={110}
            height={110}
            src="/assets/images/engine-maintenance.jpg"
            alt="Engine Maintenance"
            priority
          />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            How to Maintain Your Car's Engine
          </h2>
          <p className="mb-4">
            Proper engine maintenance is essential for the longevity and
            performance of your car. Regular oil changes, checking and replacing
            filters, and inspecting the ignition system are some of the key
            steps to keep your engine in top shape.
          </p>
          <Link href="/blog/engine-maintenance">
            <button className="text-blue-500">Read More</button>
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Image
            className="w-full h-48 object-cover rounded-t-lg"
            src="/assets/images/tire-selection.jpg"
            width={110}
            height={110}
            alt="Tire Selection"
            priority
          />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            Tips for Choosing the Right Tires for Your Car
          </h2>
          <p className="mb-4">
            Selecting the right tires for your car involves considering factors
            such as the type of vehicle, driving conditions, and desired
            performance. It's important to choose tires that provide optimal
            grip, handling, and durability for a safe and comfortable driving
            experience.
          </p>
          <Link href="/blog/tire-selection">
            <button className="text-blue-500">Read More</button>
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Image
            className="w-full h-48 object-cover rounded-t-lg"
            src="/assets/images/car-exterior-maintenance.jpg"
            width={110}
            height={110}
            alt="Car Exterior Maintenance"
            priority
          />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            How to Maintain Your Car's Exterior
          </h2>
          <p className="mb-4">
            Regular washing and waxing, protecting the paint from sun damage,
            and addressing any scratches or dents are essential for maintaining
            your car's exterior. Taking proper care of your car's appearance not
            only enhances its aesthetics but also helps preserve its value.
          </p>
          <Link href="/blog/car-exterior-maintenance">
            <button className="text-blue-500">Read More</button>
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <Image
            className="w-full h-48 object-cover rounded-t-lg"
            src="/assets/images/brake-maintenance.jpg"
            width={110}
            height={110}
            alt="Brake Maintenance"
            priority
          />
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
            Signs that Your Car's Brakes Need Attention
          </h2>
          <p className="mb-4">
            Squeaking or grinding noises, a spongy brake pedal, and vibrations
            when braking are signs that your car's brakes may need attention.
            Regular brake inspections and timely brake pad replacements are
            crucial for ensuring your safety on the road.
          </p>
          <Link href="/blog/brake-maintenance">
            <button className="text-blue-500">Read More</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
