import Image from "next/image";

export default function Features() {
  return (
    <div className="bg-accent">
      <div className="container px-4 lg:px-0 flex flex-col py-12 md:py-24 lg:py-32 gap-6 md:gap-12 lg:gap-24">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex sm:w-[45%] lg:w-[45%] xl:w-[45%] py-7 flex-col gap-4">
            <h4 className="text-base text-darkblue font-medium">Our Mission</h4>
            <h1 className="text-2xl md:text-[32px] lg:text-[38px]  font-semibold text-darkblue">
              Inspire, Innovate, Share
            </h1>
            <p className="text-darkblue text-sm md:text-base opacity-70 leading-6 md:leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="sm:w-[45%] lg:w-[45%] xl:w-[35%]">
            <Image
              src={"/images/mission.png"}
              width={515}
              height={336}
              className="w-full h-full object-cover"
              alt="image"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse justify-between">
          <div className="flex sm:w-[45%] lg:w-[45%] xl:w-[45%] py-7 flex-col gap-4">
            <h4 className="text-base text-darkblue font-medium">Our vision</h4>
            <h1 className="text-2xl md:text-[32px] lg:text-[38px]  font-semibold text-darkblue">
            Laser focus
            </h1>
            <p className="text-darkblue text-sm md:text-base opacity-70 leading-6 md:leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="sm:w-[45%] lg:w-[45%] xl:w-[35%]">
            <Image
              src={"/images/vision.png"}
              width={515}
              height={336}
              className="w-full h-full object-cover"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
