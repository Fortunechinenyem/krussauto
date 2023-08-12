import React from "react";
import BlogHero from "../../public/assets/images/kruss (1).jpg";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import BlogSide from "@/components/BlogSide";
import BlogLayout from "@/layout/BlogLayout";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-screen bg-gradient-to-b from-gray-500 to-gray-700 w-full bg-cover">
        <Image
          className="absolute w-full h-full object-cover mix-blend-overlay"
          src={BlogHero}
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
              Blog
            </h1>
          </div>
        </div>
      </div>
      <BlogLayout>
        <div className="mt-8  ">
          <div className=" flex gap-4 bg-white shadow-lg rounded-lg p-6">
            <div className="">
              <div className="">
                <Image
                  className="w-full h-48 object-cover rounded-t-lg"
                  width={110}
                  height={110}
                  src="/assets/images/engine-maintenance.jpg"
                  alt="Engine Maintenance"
                  priority
                />
              </div>
            </div>
            <div className="">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                How to Maintain Your Car's Engine
              </h2>
              <p className="mb-4">
                Proper engine maintenance is essential for the longevity and
                performance of your car. Regular oil changes, checking and
                replacing filters, and inspecting the ignition system are some
                of the key steps to keep your engine in top shape.
              </p>
              <Link href="/blog/engine-maintenance">
                <button className="text-blue-500">Read More</button>
              </Link>
            </div>
          </div>

          <div className="mt-8 flex gap-4 bg-white shadow-lg rounded-lg p-6">
            <div className="">
              <Image
                className="w-full h-48 object-cover rounded-t-lg"
                src="/assets/images/tire-selection.jpg"
                width={110}
                height={110}
                alt="Tire Selection"
                priority
              />
            </div>
            <div className="">
              <div className="">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                  Tips for Choosing the Right Tires for Your Car
                </h2>
                <p className="mb-4">
                  Selecting the right tires for your car involves considering
                  factors such as the type of vehicle, driving conditions, and
                  desired performance. It's important to choose tires that
                  provide optimal grip, handling, and durability for a safe and
                  comfortable driving experience.
                </p>
                <Link href="/blog/tire-selection">
                  <button className="text-blue-500">Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </BlogLayout>

      <Footer />
    </div>
  );
};

export default Blog;
