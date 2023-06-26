import Link from "next/link";
import React from "react";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  return (
    <div className="bg-white">
      <div className="container px-4 lg:px-0 justify-between md:pt-24 lg:py-32">
        <div className="lg:w-[25%] flex flex-col text-center md:text-start gap-4">
          <h1 className="text-[32px] lg:text-[38px] font-semibold text-darkblue">
            Frequently asked questions
          </h1>
          <Link
            href={"/contacts"}
            className="text-royalblue font-medium leading-7"
          >
            Contact us for more info
          </Link>
        </div>
        <div className="lg:w-[70%]">
          <FAQAccordion number={1}>How much time does it take?</FAQAccordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
