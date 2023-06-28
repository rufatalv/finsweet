import Image from "next/image";
import { Button } from "../Common";

interface ILink {
  title: string;
  gray: boolean;
}

interface IPricingCard {
  links: ILink[];
  best: boolean;
}

export default function PricingCard({ links, best }: IPricingCard) {
  return (
    <div
      className={`rounded-xl w-full lg:max-w-[405px] relative max-h-[745px] h-full py-8 px-8 md:py-6 md:px-8 lg:py-8 lg:pl-12 lg:pr-4 xl:py-16 xl:pl-[76px] ${
        best ? "bg-tintblue before:content-[''] before:bg-white before:hidden xl:before:block before:opacity-5 before:rounded-full overflow-hidden before:overflow-hidden before:w-[800px] before:h-full before:absolute before:left-1/2 before:right-1/2 before:-translate-x-1/2 before:-top-36 " : "bg-grey"
      }`}
    >
      <div className="flex relative z-10 items-center gap-2 mb-5">
        <h1
          className={`text-2xl lg:text-[38px] font-semibold ${
            best ? "text-white" : "text-darkblue"
          }`}
        >
          $299
        </h1>
        <p
          className={
            best
              ? "text-yellow sm:text-sm lg:text-base"
              : "text-royalblue sm:text-sm lg:text-base"
          }
        >
          Per Design
        </p>
      </div>
      <div className="flex relative z-10 flex-col gap-2">
        <h2
          className={`text-xl lg:text-2xl text-darkblue font-medium ${
            best ? "text-white" : "text-darkblue"
          }`}
        >
          Landing Page
        </h2>
        <p
          className={`lg:leading-7 opacity-70 text-sm leading-6 lg:text-base font-medium ${
            best ? "text-white" : "text-darkblue"
          }`}
        >
          When you’re ready to go beyond prototyping in Figma
        </p>
      </div>
      <div className="flex relative z-10 flex-col my-16 gap-4 lg:my-20 lg:gap-5">
        {links.map((link) => (
          <div
            key={link.title}
            className={`${
              best ? "text-white" : "text-darkblue"
            } flex items-center gap-3 sm:text-base font-normal leading-7 ${
              link.gray ? "grayscale" : ""
            }`}
          >
            <Image
              src={"/images/pointer.svg"}
              alt="pointer"
              width={26}
              height={18}
            />
            {link.title}
          </div>
        ))}
      </div>
      <div className="w-full relative z-10 text-center md:text-start">
        <Button
          styles={`text-sm sm:text-sm md:text-base lg:text-lg mx-auto md:px-10 xl:px-[76px] ${
            best
              ? "text-white bg-yellow hover:bg-darkblue hover:text-white"
              : "text-white bg-darkblue hover:bg-yellow hover:text-tinttext"
          }`}
        >
          Get started
        </Button>
      </div>
    </div>
  );
}
