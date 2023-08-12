import BlogSide from "@/components/BlogSide";
import React from "react";

const BlogLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-2/3 pr-8">
        <main>{children}</main>
      </div>
      <div className="w-1/3">
        {" "}
        <BlogSide />
      </div>
    </div>
  );
};

export default BlogLayout;
