import React from "react";

interface BenefitsCard {
  text: string;
  children: React.ReactNode;
  heading: string;
}

export const BenefitsCard: React.FC<BenefitsCard> = ({
  text,
  children,
  heading,
}) => {
  return (
    <div className="hover:bg-royalblue group bg-grey transition-all lg:last-of-type:hidden duration-400 hover:-translate-x-2 hover:-translate-y-2 hover:rounded-lg ease-in-out cursor-pointer lg:w-full text-darkblue px-6 py-6 lg:px-8 lg:py-8 xl:px-12 xl:py-12">
      <div className="text-royalblue group-hover:text-white">{children}</div>
      <div className="flex flex-col group-hover:text-white mt-3 lg:mt-5">
        <div className="font-medium text-xl lg:text-2xl">{heading}</div>
        <div className="opacity-70 text-sm lg:text-base mt-3">{text}</div>
      </div>
    </div>
  );
};
