import Image from "next/image";

export default function Hero() {
  return (
    <div className="py-12 md:py-24 lg:py-32 container px-4 lg:px-0 flex flex-col gap-8 md:gap-0 md:flex-row justify-between">
      <div className="md:w-[45%] xl:w-[45%]">
        <h3 className="text-base lg:text-lg text-darkblue font-medium">
          About us
        </h3>
        <h1 className="text-[32px] lg:text-[54px] font-semibold text-darkblue mb-4 md:mb-6 lg:mb-8">
          Our designs solve problems
        </h1>
        <p className="text-sm leading-6 lg:text-base lg:leading-7 md:text-justify flex flex-col opacity-70 text-darkblue ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
      <div className="md:w-[45%] xl:w-[547px] xl:h-[336px]">
        <Image
          src={"/images/abouthero.jpg"}
          alt="Hero"
          className="ml-auto flex object-cover h-full w-full"
          width={547}
          height={336}
        />
      </div>
    </div>
  );
}
