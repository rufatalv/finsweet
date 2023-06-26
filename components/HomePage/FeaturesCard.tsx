import React from "react";

interface FeaturesCard {
  text: string;
  children: React.ReactNode;
  heading: string;
}

export const FeaturesCard: React.FC<FeaturesCard> = ({
  text,
  children,
  heading,
}) => {
  return (
    <div className="pb-12 pt-8 lg:pt-[58px] pl-8 lg:pl-12 pr-8 bg-white w-full md:w-[48%] lg:w-[405px] text-darkblue">
      <div className="text-royablue">{children}</div>
      <div className="flex flex-col mt-3 lg:mt-5">
        <div className="font-medium text-2xl">{heading}</div>
        <div className="opacity-70 text-base mt-3">{text}</div>
      </div>
    </div>
  );
};
