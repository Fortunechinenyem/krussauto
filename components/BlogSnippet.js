import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogImage from "../public/assets/images/car.png";

const BlogSnippet = () => {
  const snippetContent = `
    Curious about the future of electric cars? With advancements in technology, electric vehicles (EVs) are becoming more mainstream, offering eco-friendly and cost-effective alternatives. Discover the latest innovations and benefits of electric cars in our blog.
  `;

  return (
    <div className=" rounded-lg p-6 shadow-lg flex items-center">
      <div className="w-1/2 mr-4">
        <Image src={BlogImage} alt="Blog Image" width={200} height={150} />
      </div>
      <div className="w-1/2">
        <p className="text-lg mb-4">{snippetContent}</p>
        <Link href="/blog">Read more</Link>
      </div>
    </div>
  );
};

export default BlogSnippet;
