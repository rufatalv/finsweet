import Image from "next/image";
import Link from "next/link";
import React from "react";

const HowWeWork: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container pt-32 pb-32 justify-between px-4 gap-12 lg:gap-0 flex flex-col items-center lg:items-start lg:flex-row lg:px-0">
        <div className="lg:w-4/12 flex flex-col gap-4 mr-auto">
          <h1 className="text-3xl md:text-[40px] lg:text-5xl text-darkblue font-semibold">How we work</h1>
          <p className="text-darkblue text-md lg:text-base leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <Link
            className="text-royalblue font-medium flex gap-4 group items-center text-lg"
            href={"/contact"}
          >
            Get in touch with us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="12"
              viewBox="0 0 25 12"
              className="fill-royalblue group-hover:animate-moving-right"
            >
              <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" />
            </svg>
          </Link>
        </div>
        <div className="lg:w-6/12 flex gap-6 sm:gap-12 flex-col">
          <div className="flex gap-6 flex-wrap sm:flex-nowrap">
            <div id="card" className="flex flex-col md:w-1/2">
              <Image
                alt="how-1"
                src={"/images/how-1.svg"}
                width={50}
                height={50}
              />
              <h1 className="text-darkblue mt-4 mb-2 text-2xl lg:text-[32px] font-medium">
                Strategy
              </h1>
              <p className="leading-7 text-darkblue opacity-[0.699999988079071]">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div id="card" className="flex flex-col md:w-1/2">
              <Image
                alt="how-2"
                src={"/images/how-2.svg"}
                width={50}
                height={50}
              />
              <h1 className="text-darkblue mt-4 mb-2 text-2xl lg:text-[32px] font-medium">
                Wireframing
              </h1>
              <p className="leading-7 text-darkblue opacity-[0.699999988079071]">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
          </div>
          <div className="flex gap-6 flex-wrap sm:flex-nowrap">
            <div id="card" className="flex flex-col md:w-1/2">
              <Image
                alt="how-2"
                src="/images/how-3.svg"
                width={50}
                height={50}
              />
              <h1 className="text-darkblue mt-4 mb-2 text-2xl lg:text-[32px] font-medium">
                Design
              </h1>
              <p className="leading-7 text-darkblue opacity-[0.699999988079071]">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
            <div id="card" className="flex flex-col md:w-1/2">
              <Image
                alt="how-2"
                src={"/images/how-4.svg"}
                width={50}
                height={50}
              />
              <h1 className="text-darkblue mt-4 mb-2 text-2xl lg:text-[32px] font-medium">
                Development
              </h1>
              <p className="leading-7 text-darkblue opacity-[0.699999988079071]">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
