import Image from "next/image";
import { BenefitsCard } from "./BenefitsCard";
import { FaPenToSquare, FaPeopleGroup, FaPenRuler } from "react-icons/fa6";

interface IBenefits {
  logoPos: string;
}

export default function Benefits({ logoPos }: IBenefits) {
  return (
    <div className="py-12 md:py-24 lg:py-32 container px-4 flex flex-col lg:px-0">
      <h1 className={`text-3xl md:text-[32px] lg:text-5xl font-semibold text-darkblue mx-auto lg:leading-[64px] text-center max-w-2xl ${logoPos === 'top' ? 'order-2 mt-24' : 'order-1'}`}>
        {logoPos === "top"
          ? "The benefits of working with our team"
          : "The benefits of working with us"}
      </h1>
      <div className={`grid grid-cols-1 sm:grid-cols-2 items-center lg:grid-cols-3 gap-6 my-12 justify-center ${logoPos === 'top' ? 'order-3' : 'order-2'}`}>
        <BenefitsCard
          heading="Customize with ease"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
          key={Math.random()}
        >
          <FaPenToSquare size={32} />
        </BenefitsCard>
        <BenefitsCard
          heading="Perfectly Responsive"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
          key={Math.random()}
        >
          <FaPenRuler size={32} />
        </BenefitsCard>
        <BenefitsCard
          heading="Friendly Support"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
          key={Math.random()}
        >
          <FaPeopleGroup size={32} />
        </BenefitsCard>
        <BenefitsCard
          heading="Fast Updates"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
          key={Math.random()}
        >
          <FaPeopleGroup size={32} />
        </BenefitsCard>
      </div>
      <div className={`grid-cols-2 hidden lg:grid md:grid-cols-5 lg:grid-cols-6 gap-4 ${logoPos === 'top' ? 'order-1' : 'order-3'}`}>
        <div className="flex col-span-2 md:col-span-6 lg:col-span-1 mx-auto flex-col gap-1">
          <div className="text-gray-800 text-[38px] font-semibold leading-10">
            100.000+
          </div>
          <div className="opacity-70 text-gray-800 text-[16px] font-normal leading-7">
            Finsweet Users
          </div>
        </div>
        <Image
          src={"/images/aboutlogo1.svg"}
          alt="Image"
          className="w-1/2 mx-auto lg:mx-0 lg:w-40 lg:h-8 relative"
          width={35}
          height={15}
        />
        <Image
          src={"/images/aboutlogo2.svg"}
          alt="Image"
          className="w-1/2 mx-auto lg:mx-0 lg:w-40 lg:h-8 relative"
          width={35}
          height={15}
        />
        <Image
          src={"/images/aboutlogo3.svg"}
          alt="Image"
          className="w-1/2 mx-auto lg:mx-0 lg:w-40 lg:h-8 relative"
          width={35}
          height={15}
        />
        <Image
          src={"/images/aboutlogo4.svg"}
          alt="Image"
          className="w-1/2 mx-auto lg:mx-0 lg:w-40 lg:h-8 relative"
          width={35}
          height={15}
        />
        <Image
          src={"/images/aboutlogo5.svg"}
          alt="Image"
          className="w-1/2 mx-auto lg:mx-0 lg:w-40 lg:h-8 relative"
          width={35}
          height={15}
        />
      </div>
    </div>
  );
}
