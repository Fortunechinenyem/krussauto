import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FcInspection } from "react-icons/fc";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdSyncProblem } from "react-icons/md";
import { GiDiscussion } from "react-icons/gi";
import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
} from "@/public/images";

const products = [
  {
    title: "Pre-Purchase Inspection",
    description:
      "Ensure peace of mind before buying a car with our comprehensive pre-purchase inspection service.",
    icon: <FcInspection />,
    image: Product1,
    link: "/services/prepurchase",
  },
  {
    title: "Auto-Errand As A Service",
    description:
      "Let us take care of your auto errands, as you save time and energy.",
    icon: <MdOutlineMiscellaneousServices />,
    image: Product2,
    link: "/services/autoerrand",
  },
  {
    title: "Fleet Management",
    description:
      "Efficiently manage your vehicle fleet with our advanced fleet management solutions.",
    icon: <FaCar />,
    image: Product3,
    link: "/services/fleetmanagement",
  },
  {
    title: "Buy, Sell Cars",
    description:
      "Explore our curated selection of high-quality cars that have been vetted or sell your car hassle-free.",
    icon: <FaMoneyBillAlt />,
    image: Product4,
    link: "/services/buysell",
  },
  {
    title: "Car Diagnostics",
    description:
      "Get comprehensive Car Diagnostics to identify and address issues with your vehicle's performance.",
    icon: <MdSyncProblem />,
    image: Product5,
    link: "/services/cardiagnostics",
  },
  {
    title: "Auto Consultancy",
    description:
      "Get expert advice and guidance on all your automotive needs from our experienced consultants.",
    icon: <GiDiscussion />,
    image: Product6,
    link: "/services/autoconsultancy",
  },
];

const ProductCards2 = () => {
  return (
    <section className="container mx-auto text-lg">
      <div data-aos="fade-down" data-aos-delay="400"></div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-7 mt-9 text-[#11111] text-lg"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        {products.map((product, index) => (
          <Link href={product.link} key={index}>
            <div className="bg-white rounded-lg p-6 mt-7 shadow-lg">
              <div className="flex flex-col items-center">
                <Image
                  className="w-full max-w-md rounded-lg"
                  src={product.image}
                  alt={`Product ${index + 1}`}
                  priority
                />
                <p className="text-lg font-bold my-2">{product.title}</p>
                <div className="mb-2">{product.icon}</div>
                <div className="mb-2 font-medium text-center">
                  {product.description}
                </div>
                <div className="">Read more</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductCards2;
