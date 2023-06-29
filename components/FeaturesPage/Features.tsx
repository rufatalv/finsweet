import Image from "next/image";

export default function Features() {
  return (
    <div className="">
      <div className="bg-white">
        <div className="container px-4 lg:px-0 ">
          <div className="flex flex-col pb-12 md:pb-24 lg:pb-32 sm:flex-row justify-between">
            <div className="flex sm:w-[45%] lg:w-[45%] xl:w-[50%] py-7 flex-col gap-4">
              <h4 className="text-base text-darkblue font-medium">
                Use Client-first
              </h4>
              <h1 className="text-2xl md:text-[32px] lg:text-[38px] lg:leading-[56px] font-semibold text-darkblue">
                Top agencies and freelancers around the world use Client-first
              </h1>
              <p className="text-darkblue text-sm md:text-base opacity-70 leading-6 md:leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            <div className="sm:w-[45%] lg:w-[45%] xl:w-[45%]">
              <Image
                src={"/images/features-2.jpg"}
                width={515}
                height={336}
                className="w-full h-full object-cover"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-grey">
        <div className="container px-4 lg:px-0">
          <div className="flex flex-col py-12 md:py-24 lg:py-32 sm:flex-row-reverse justify-between">
            <div className="flex sm:w-[45%] lg:w-[45%] xl:w-[50%] py-7 flex-col gap-4">
              <h4 className="text-base text-darkblue font-medium">
                Free Revision Rounds
              </h4>
              <h1 className="text-2xl md:text-[32px] lg:text-[38px] lg:leading-[56px] font-semibold text-darkblue">
                Get free Revisions and one week of free maintenance
              </h1>
              <p className="text-darkblue text-sm md:text-base opacity-70 leading-6 md:leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="sm:w-[45%] lg:w-[45%] xl:w-[45%]">
              <Image
                src={"/images/features-2.jpg"}
                width={515}
                height={336}
                className="w-full h-full object-cover"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="container px-4 lg:px-0 ">
          <div className="flex flex-col py-12 md:py-24 lg:py-32 sm:flex-row justify-between">
            <div className="flex sm:w-[45%] lg:w-[45%] xl:w-[50%] py-7 flex-col gap-4">
              <h4 className="text-base text-darkblue font-medium">
                24/7 Support
              </h4>
              <h1 className="text-2xl md:text-[32px] lg:text-[38px] lg:leading-[56px] font-semibold text-darkblue">
                Working with us, you will be getting 24/7 priority support
              </h1>
              <p className="text-darkblue text-sm md:text-base opacity-70 leading-6 md:leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="sm:w-[45%] lg:w-[45%] xl:w-[45%]">
              <Image
                src={"/images/features-3.jpg"}
                width={515}
                height={336}
                className="w-full h-full object-cover"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow/10">
        <div className="container px-4 lg:px-0">
          <div className="flex flex-col py-12 md:py-24 lg:py-32 sm:flex-row-reverse justify-between">
            <div className="flex sm:w-[45%] lg:w-[45%] xl:w-[50%] py-7 flex-col gap-4">
              <h4 className="text-base text-darkblue font-medium">
                Quick Delivery
              </h4>
              <h1 className="text-2xl md:text-[32px] lg:text-[38px] lg:leading-[56px] font-semibold text-darkblue">
                Guranteed 1 week delivery for standard five pager website
              </h1>
              <p className="text-darkblue text-sm md:text-base opacity-70 leading-6 md:leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="sm:w-[45%] lg:w-[45%] xl:w-[45%]">
              <Image
                src={"/images/features-last.jpg"}
                width={515}
                height={336}
                className="w-full h-full object-cover"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
