import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogImage from "../public/assets/images/img (5).jpg";

const BlogSnippet = () => {
  const snippetContent = `
    Curious about the future of electric cars? With advancements in technology, electric vehicles (EVs) are becoming more mainstream, offering eco-friendly and cost-effective alternatives. Discover the latest innovations and benefits of electric cars in our blog.
  `;

  return (
    <div className="rounded-lg p-6 shadow-lg flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 items-center">
        <Image src={BlogImage} alt="Blog Image" width={300} height={180} />
      </div>
      <div className="w-full md:w-1/2 md:pl-6">
        <p className="text-lg mb-4 text-[#515B6D]">{snippetContent}</p>
        <Link href="/blog" className="text-blue-500">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogSnippet;
