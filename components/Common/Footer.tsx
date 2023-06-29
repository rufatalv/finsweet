import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="flex flex-col">
      <div id="up" className="bg-tintblue pt-8 md:pt-12 lg:pt-24">
        <div className="container flex flex-col md:flex-row sm:gap-8 md:gap-8 lg:gap-36">
          <div className="flex flex-col lg:max-w-lg w-full justify-between">
            <div
              id="up"
              className="max-w-md px-4 lg:px-0 pb-5 lg:pb-0 text-white"
            >
              <Image
                src="/images/footer-logo.svg"
                width={160}
                height={32}
                alt="Logo"
              />
              <p className="opacity-80 font-light mt-6">
                We are always open to discuss your project and improve your
                online presence.
              </p>
            </div>
            <div
              id="down"
              className="bg-yellow px-4 lg:px-0 lg:pl-8 py-4 flex flex-col sm:flex-row gap-2 md:gap-7"
            >
              <div className="flex flex-col text-darkblue font-medium text-base lg:text-lg">
                Email me at
                <p className="text-sm lg:text-base font-normal">
                  <Link href={"mailto:contact@website.com"}>
                    contact@website.com
                  </Link>
                </p>
              </div>
              <div className="flex flex-col text-darkblue font-medium text-base lg:text-lg">
                Call us
                <p className="text-sm lg:text-base font-normal">
                  <Link href={"tel:0927627728525"}>0927 6277 28525</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-4 md:pt-0 px-4 lg:px-0 max-w-[399px]">
            <h1 className="font-semibold text-white text-[32px] lg:text-5xl">
              Lets Talk!
            </h1>
            <p className="opacity-80 text-grey font-light mt-6 mb-7">
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
            <div className="flex gap-7 mb-24 text-white">
              <Link href={"#"}>
                <FaFacebook size={24} />
              </Link>
              <Link href={"#"}>
                <FaTwitter size={24} />
              </Link>
              <Link href={"#"}>
                <FaInstagram size={24} />
              </Link>
              <Link href={"#"}>
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        id="down"
        className="flex justify-between text-base font-medium text-darkblue"
      >
        <div className="container py-8 px-4 lg:px-0 flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
          <p className="">Copyright 2022, Finsweet.com</p>
          <ul className="flex flex-col md:flex-row gap-4 lg:gap-8 mr-16">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/#features">Features</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
