import Link from "next/link";
import React from "react";
import FAQAccordion from "./FAQAccordion";

const FAQ = () => {
  return (
    <div className="bg-white">
      <div className="container flex px-4 lg:px-0 flex-col gap-12 lg:gap-0 lg:flex-row justify-between py-12 md:py-24 lg:py-32">
        <div className="lg:w-[25%] flex flex-col text-center md:text-start gap-4">
          <h1 className="md:text-[32px] mx-auto lg:mx-0 leading-normal lg:text-[38px] font-semibold text-darkblue">
            Frequently asked questions
          </h1>
          <Link
            href={"/contacts"}
            className="text-royalblue mx-auto lg:mx-0 font-medium leading-7"
          >
            Contact us for more info
          </Link>
        </div>
        <div className="lg:w-[70%]">
          <FAQAccordion>
            <FAQAccordion.Number>01</FAQAccordion.Number>
            <FAQAccordion.Body>
              <FAQAccordion.Title>
                How much time does it take?
              </FAQAccordion.Title>
              <FAQAccordion.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FAQAccordion.Text>
            </FAQAccordion.Body>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordion.Number>02</FAQAccordion.Number>
            <FAQAccordion.Body>
              <FAQAccordion.Title>
                What is your class naming convention?
              </FAQAccordion.Title>
              <FAQAccordion.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FAQAccordion.Text>
            </FAQAccordion.Body>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordion.Number>03</FAQAccordion.Number>
            <FAQAccordion.Body>
              <FAQAccordion.Title>How do you communicate?</FAQAccordion.Title>
              <FAQAccordion.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FAQAccordion.Text>
            </FAQAccordion.Body>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordion.Number>04</FAQAccordion.Number>
            <FAQAccordion.Body>
              <FAQAccordion.Title>
                I have a bigger project. Can you handle it?
              </FAQAccordion.Title>
              <FAQAccordion.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FAQAccordion.Text>
            </FAQAccordion.Body>
          </FAQAccordion>
          <FAQAccordion>
            <FAQAccordion.Number>05</FAQAccordion.Number>
            <FAQAccordion.Body>
              <FAQAccordion.Title>
                What is your class naming convention?
              </FAQAccordion.Title>
              <FAQAccordion.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FAQAccordion.Text>
            </FAQAccordion.Body>
          </FAQAccordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
