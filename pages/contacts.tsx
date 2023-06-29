"use client";

import { Button } from "@/components/Common";

export default function Contacts() {
  return (
    <div className="container px-4 lg:px-0 py-16 md:py-24 lg:py-32">
      <h1 className="mb-4 text-center text-darkblue font-semibold text-3xl md:text-[32px] lg:text-5xl">
        Contact Us
      </h1>
      <p className="mb-16 text-center max-w-lg mx-auto text-darkblue opacity-70 leading-7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <div className="bg-grey max-w-[1061px] mx-auto py-8 px-12 md:py-16 md:px-[75px]">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                className="bg-transparent text-black text-xs md:placeholder:text-base placeholder:text-black py-[18px] px-8 focus:outline-none border-[1px] rounded-lg"
                name="name"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Email" className="mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                className="bg-transparent text-black text-xs md:placeholder:text-base placeholder:text-black py-[18px] px-8 focus:outline-none border-[1px] rounded-lg"
                name="Email"
                id="Email"
                placeholder="Enter your Email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="mb-2 font-medium">
                Subject
              </label>
              <input
                type="text"
                className="bg-transparent text-black text-xs md:placeholder:text-base placeholder:text-black py-[18px] px-8 focus:outline-none border-[1px] rounded-lg"
                name="subject"
                id="subject"
                placeholder="Provide context"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Subject" className="mb-2 font-medium">
                Select Subject
              </label>
              <input
                type="text"
                className="bg-transparent text-black text-xs md:placeholder:text-base placeholder:text-black py-[18px] px-8 focus:outline-none border-[1px] rounded-lg"
                name="Subject"
                id="Subject"
                placeholder="Select Subject"
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="message" className="text-black mb-4">
                Message
              </label>
              <textarea
                id="message"
                className="px-[32px] py-[18px] bg-transparent text-xs md:placeholder:text-base resize-none border-[1px] text-black placeholder:text-black rounded-lg focus:border-blue-500 outline-none"
                placeholder="Write your question here"
                rows={4}
              ></textarea>
            </div>
          </div>
          <Button
            size="lg"
            styles="bg-darkblue mt-8 text-white text-sm md:text-base lg:text-lg hover:bg-yellow hover:text-darkblue"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
