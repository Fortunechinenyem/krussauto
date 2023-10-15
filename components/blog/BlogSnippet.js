import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogImage } from "@/public/images";

const BlogSnippet = () => {
  const snippetContent = `
    Curious about the future of electric cars? With advancements in technology, electric vehicles (EVs) are becoming more mainstream, offering eco-friendly and cost-effective alternatives. Discover the latest innovations and benefits of electric cars in our blog.
  `;

  return (
    <div className="relative bg-gradient-to-b from-gray-500 to-gray-700">
      <Image
        className="object-cover w-full h-[50vh] md:h-screen"
        src={BlogImage}
        alt="Blog Image"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex flex-col md:flex-row w-full max-w-5xl p-6 bg-white text-black rounded-lg">
          <div className="md:w-1/2 p-6">
            <h3 className="text-3xl text-center font-bold mb-4">
              Exciting News
            </h3>
            <p className="text-lg md:text-xl text-center mb-4">
              Check out our e-book{" "}
              <span className="text-blue-500">
                "How to Buy and Sell Nigerian Used Cars"
              </span>
            </p>
            <div className="text-center">
              <Link href="/ebook">
                <button className="button px-6 py-3 text-lg">Purchase</button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 p-6">
            <p className="text-lg mb-4">{snippetContent}</p>
            <Link href="/blog" className="text-blue-500">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSnippet;
