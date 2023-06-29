import React from "react";
import BlogCard from "./BlogCard";

interface Image {
  url: string;
}

interface Post {
  title: string;
  createdAt: string;
  slug: string;
  id: number;
  description: string;
  publishedAt: string;
  updatedAt: string;
  image: Image;
  shortDescription: string;
}

interface OurBlogProps {
  data: Post[];
  isMain: boolean;
}

const OurBlog: React.FC<OurBlogProps> = ({ data, isMain }) => {
  console.log(isMain)
  return (
    <div className="container px-4 lg:px-0 pb-32">
      <h1
        className={`text-[32px] mb-8 lg:mb-16 lg:text-5xl text-darkblue ${
          isMain ? "text-center" : ""
        } font-semibold`}
      >
        Our blog
      </h1>
      <div className="grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid gap-8 md:gap-4 lg:gap-6 xl:gap-8">
        {data.map((post, idx) => (
          <BlogCard key={idx} isMain={isMain} data={post} />
        ))}
      </div>
    </div>
  );
};

export default OurBlog;
