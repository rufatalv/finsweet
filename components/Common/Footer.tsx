import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="flex flex-col">
      <div id="up" className="bg-tintblue pt-24">
        <div className="container flex gap-36">
          <div className="flex flex-col max-w-lg w-full justify-between">
            <div id="up" className="max-w-md text-white">
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
            <div id="down" className="bg-yellow pl-8 py-4 flex gap-7">
              <div className="flex flex-col text-darkblue font-medium text-lg">
                Email me at
                <p className="text-base font-normal">contact@website.com</p>
              </div>
              <div className="flex flex-col text-darkblue font-medium text-lg">
                Call us
                <p className="text-base font-normal">0927 6277 28525</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-[399px]">
            <h1 className="font-semibold text-white text-5xl">Lets Talk!</h1>
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
        <div className="container py-8 flex justify-between">
          <p className="">Copyright 2022, Finsweet.com</p>
          <ul className="flex gap-8 mr-16">
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
