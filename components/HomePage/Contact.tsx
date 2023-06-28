import Image from "next/image";
import React from "react";
import { Button } from "../Common";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="container md:px-4 lg:px-0 mb-32">
      <div className="bg-contact flex">
        <div className="hidden lg:flex lg:w-1/2 px-24 pt-24 relative flex-col gap-4 before:block before:absolute before:w-full before:h-full before:left-0 before:top-0 before:content-[''] before:bg-tintblue before:opacity-50">
          <h1 className="md:text-4xl lg:text-5xl lg:leading-[54px] xl:leading-none xl:text-[54px] font-semibold leading-[74px] relative z-10 text-white">
            Building stellar websites for early startups
          </h1>
          <p className="text-white text-base relative z-10 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
          </p>
        </div>
        <div className="w-full lg:w-1/2 bg-tintblue pt-12 px-4 sm:px-12 md:px-24 md:pt-24 pb-12">
          <h2 className="text-2xl md:text-[32px] text-white font-medium mb-4">
            Send inquiry
          </h2>
          <p className="md:leading-7 text-white text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <form className="my-10 flex flex-col gap-4">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="py-[18px] pl-8 rounded-lg border-[1.5px] placeholder:text-sm placeholder:md:text-base bg-transparent w-full focus:outline-none border-[#ffffff] border-opacity-5"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="py-[18px] pl-8 rounded-lg border-[1.5px] placeholder:text-sm placeholder:md:text-base bg-transparent w-full focus:outline-none border-[#ffffff] border-opacity-5"
            />
            <input
              type="text"
              name="figma"
              id="figma"
              placeholder="Paste your Figma design URL"
              className="py-[18px] pl-8 rounded-lg border-[1.5px] placeholder:text-sm placeholder:md:text-base bg-transparent w-full focus:outline-none border-[#ffffff] border-opacity-5"
            />
            <Button
              size="lg"
              styles="bg-yellow mt-10 mb-3 md:mb-7 text-tinttext text-sm sm:text-sm md:text-base lg:text-lg hover:bg-darkblue hover:text-white"
            >
              Send an Inquiry
            </Button>
            <Link
              className="mx-auto w-7/12 text-xs sm:text-sm md:text-base flex items-center justify-center text-white group gap-4"
              href={"/contacts"}
            >
              Get in touch with us
              <Image
                src="/images/arrow.svg"
                className="group-hover:animate-moving-right w-1/12 md:w-auto"
                alt="arrow"
                width={24}
                height={24}
              />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
