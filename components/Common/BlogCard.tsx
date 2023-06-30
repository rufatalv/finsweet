import { Post } from "@/graphcms";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  data: Post;
  isMain: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ data, isMain }) => {
  return (
    <div
      className={`flex flex-col gap-8 w-full ${
        isMain ? "" : "xl:last-of-type:hidden"
      }`}
    >
      <div className="w-full h-[285px]">
        <Image
          alt="coverPhoto"
          width={405}
          height={285}
          className="h-full w-full object-cover"
          src={data.image.url}
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-darkblue text-sm md:text-base opacity-70 font-medium">
          {moment(data.createdAt).format("D MMM YYYY")}
        </p>
        <h1 className="text-lg md:text-2xl font-medium text-darkblue md:leading-9">
          {data.title}
        </h1>
        <p className="text-darkblue opacity-70 text-sm md:text-base md:leading-7">
          {data.shortDescription}
        </p>
      </div>
      <Link
        href={`/blog/${data.slug}`}
        className="text-[#282938] flex gap-3 text-sm md:text-base items-center group font-medium"
      >
        Read More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="12"
          viewBox="0 0 25 12"
          className="fill-darkblue w-[20px] md:w-[25px] h-auto group-hover:animate-moving-right"
        >
          <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" />
        </svg>
      </Link>
    </div>
  );
};

export default BlogCard;
