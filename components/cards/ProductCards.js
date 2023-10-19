import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FcInspection } from "react-icons/fc";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaArrowAltCircleRight, FaCar } from "react-icons/fa";
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
    icon: <FcInspection />,
    image: Product1,
    link: "/services/prepurchase",
  },
  {
    title: "Auto-Errand As A Service",
    icon: <MdOutlineMiscellaneousServices />,
    image: Product2,
    link: "/services/autoerrand",
  },
  {
    title: "Fleet Management",
    icon: <FaCar />,
    image: Product3,
    link: "/services/fleetmanagement",
  },
  {
    title: "Buy, Sell Cars",
    icon: <FaMoneyBillAlt />,
    image: Product4,
    link: "/services/buysell",
  },
  {
    title: "Car Diagnostics",
    icon: <MdSyncProblem />,
    image: Product5,
    link: "/services/cardiagnostics",
  },
  {
    title: "Auto Consultancy",
    icon: <GiDiscussion />,
    image: Product6,
    link: "/services/autoconsultancy",
  },
];

const ProductCards = () => {
  return (
    <section className="container mx-auto">
      <div data-aos="fade-down" data-aos-delay="400">
        <h3 className="p-4 text-[#11111] text-center text-2xl md:text-2xl lg:text-4xl font-bold mb-4">
          Our Services
        </h3>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-7 mt-9 text-[#11111] text-xl md:text-xl lg:text-2xl"
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
                <p className="text-xl font-bold my-2">{product.title}</p>
                <div className="mb-2">{product.icon}</div>
                <div>
                  <FaArrowAltCircleRight />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductCards;
