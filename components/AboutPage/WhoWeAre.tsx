import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="container px-4 lg:px-0 flex flex-col mb-12 md:mb-24 lg:mb-32">
      <div className="px-4 py-8 sm:py-10 sm:px-10 lg:py-20 bg-[#F4F5F5]  lg:px-20">
        <h4 className="text-2xl text-center md:text-start mb-4 md:mb-2 md:text-base font-medium text-darkblue">
          Who we are
        </h4>
        <div className="flex flex-wrap md:flex-nowrap justify-center text-center md:justify-normal md:text-start gap-16">
          <div className="w-full md:w-[46%] flex flex-col gap-4">
            <h1 className="text-darkblue text-xl  sm:text-xl xl:text-[38px] font-semibold">
              Goal focussed
            </h1>
            <p className="text-darkblue opacity-70 leading-6 md:leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="w-full md:w-[46%] flex flex-col gap-4">
            <h1 className="text-darkblue text-xl sm:text-xl xl:text-[38px]  font-semibold">
              Continuous improvement
            </h1>
            <p className="text-darkblue opacity-70 leading-6 md:leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full hidden md:block md:h-[280px] lg:h-[340px] bg-aboutinfo bg-center bg-cover"></div>
    </div>
  );
}
