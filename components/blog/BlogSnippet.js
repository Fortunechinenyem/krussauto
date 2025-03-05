import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogImage } from "@/public/images";

const BlogSnippet = () => {
  const snippetContent = `
    Curious about the future of electric cars? With advancements in technology, electric vehicles (EVs) are becoming more mainstream, offering eco-friendly and cost-effective alternatives. Discover the latest innovations and benefits of electric cars in our blog.
  `;

  return (
    <div className="relative bg-gradient-to-b from-gray-700 to-gray-900">
      {/* Background Image */}
      <Image
        className="object-cover w-full h-[50vh] md:h-[70vh] lg:h-[80vh]"
        src={BlogImage}
        alt="Blog Image"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-full max-w-4xl mx-4 p-6 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-2xl text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Exciting News
          </h3>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Check out our e-book{" "}
            <span className="text-blue-600 font-semibold">
              "How to Buy and Sell Nigerian Used Cars"
            </span>
          </p>
          <div className="mb-6">
            <Link href="/ebook">
              <button className="button px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                Purchase Now
              </button>
            </Link>
          </div>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            {snippetContent}
          </p>
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSnippet;
