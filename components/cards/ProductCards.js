import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FcInspection } from "react-icons/fc";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaArrowAltCircleRight, FaCar } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdSyncProblem } from "react-icons/md";
import { GiDiscussion, GiGasPump } from "react-icons/gi";
import {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5,
  Product6,
  Product7,
} from "@/public/images";

const products = [
  {
    title: "Pre-Purchase Inspection",
    icon: <FcInspection className="text-4xl text-blue-500" />,
    image: Product1,
    link: "/services/prepurchase",
  },
  {
    title: "Auto-Errand As A Service",
    icon: (
      <MdOutlineMiscellaneousServices className="text-4xl text-purple-500" />
    ),
    image: Product2,
    link: "/services/autoerrand",
  },
  {
    title: "Fleet Management",
    icon: <FaCar className="text-4xl text-green-500" />,
    image: Product3,
    link: "/services/fleetmanagement",
  },
  {
    title: "Buy, Sell Cars",
    icon: <FaMoneyBillAlt className="text-4xl text-yellow-500" />,
    image: Product4,
    link: "/services/buysell",
  },
  {
    title: "Car Diagnostics",
    icon: <MdSyncProblem className="text-4xl text-red-500" />,
    image: Product5,
    link: "/services/cardiagnostics",
  },
  {
    title: "Auto Consultancy",
    icon: <GiDiscussion className="text-4xl text-indigo-500" />,
    image: Product6,
    link: "/services/autoconsultancy",
  },
  {
    title: "CNG Installation",
    icon: <GiGasPump className="text-4xl text-orange-500" />,
    image: Product7,
    link: "/services/cng-installation",
  },
];

const ProductCards = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-[#F0F0F0] to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
          Our Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Link href={product.link} key={index}>
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-2 cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                </div>
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-4">{product.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.title}
                  </h4>
                  <div className="flex justify-center mt-4">
                    <FaArrowAltCircleRight className="text-2xl text-blue-500 hover:text-blue-700 transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCards;
