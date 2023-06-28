import Link from "next/link";
import { Button } from "../Common";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-tintblue">
      <div className="container px-4 lg:px-0 flex flex-col md:flex-row pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-24 lg:pb-32  justify-between items-center">
        <div id="left" className="lg:w-[45%] md:w-1/2">
          <h1 className="text-3xl md:text-[40px] lg:text-[54px] text-white text-center md:text-start font-semibold lg:leading-[74px] mb-6">
            Building stellar websites for early startups
          </h1>
          <h4 className="md:text-base lg:text-lg text-white leading-7 text-center md:text-start opacity-70 mb-12 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h4>
          <div className="gap-10 mb-12 md:mb-0 flex md:justify-start justify-center items-center">
            <Button
              size="lg"
              styles="bg-yellow text-tinttext text-sm sm:text-sm md:text-base lg:text-lg hover:bg-darkblue hover:text-white"
            >
              View our work
            </Button>
            <Link
              href={"/pricing"}
              className="text-white text-sm sm:text-sm md:text-base lg:text-lg flex gap-2 md:gap-4 group"
            >
              View Pricing
              <Image
                src="/images/arrow.svg"
                className="group-hover:animate-moving-right w-1/5 md:w-auto"
                alt="arrow"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        <div className="lg:w-[45%] md:w-1/2 text-end">
          <Image
            src="/images/hero.png"
            className="md:ml-auto mx-auto w-full h-auto max-w-md md:max-w-none md:min-w-full md:flex-shrink-0"
            alt="illustration"
            width={638}
            height={361}
          />
        </div>
      </div>
    </div>
  );
}
