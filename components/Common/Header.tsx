import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { HiXMark } from "react-icons/hi2";
import Button from "./Button";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const router = useRouter();

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="text-white bg-tintblue relative z-10 select-none">
      <div
        className={`container px-4 lg:px-0 py-4 flex items-center ${
          isNavOpen ? "fixed md:static bg-tintblue" : ""
        } justify-between`}
      >
        <div>
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <ul
          className={`flex flex-col md:flex-row gap-4 text-textgrey lg:gap-8 fixed lg:ml-auto lg:mr-12 md:static left-0 top-0 md:left-auto md:top-auto shadow-2xl md:shadow-none h-screen md:h-auto w-1/2 md:w-auto bg-tintblue md:bg-transparent p-5 pt-24 md:p-0 text-2xl md:text-base transition-transform duration-700 ${
            isNavOpen
              ? "-translate-x-0 md:-translate-x-0"
              : "-translate-x-full md:-translate-x-0"
          }`}
        >
          <li>
            <Link
              href="#"
              className={`transition-all duration-700 ease-in-out hover:text-white ${
                router.pathname == "/" ? "text-white" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`transition-all duration-700 ease-in-out hover:text-white ${
                router.pathname == "/about" ? "text-white" : ""
              }`}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`transition-all duration-700 ease-in-out hover:text-white ${
                router.pathname == "/features" ? "text-white" : ""
              }`}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`transition-all duration-700 ease-in-out hover:text-white ${
                router.pathname == "/pricing" ? "text-white" : ""
              }`}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`transition-all duration-700 ease-in-out hover:text-white ${
                router.pathname == "/faq" ? "text-white" : ""
              }`}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`transition-all duration-400 ease-in-out hover:text-white ${
                router.pathname == "/blog" ? "text-white" : ""
              }`}
            >
              Blog
            </Link>
          </li>
        </ul>
        <div onClick={handleNavOpen} className="cursor-pointer md:hidden">
          {isNavOpen ? (
            <HiXMark color="#fff" size={32} />
          ) : (
            <LiaBarsSolid color="#fff" size={32} />
          )}
        </div>
        <Button
          size=""
          styles="border-[#F4F6FC33] hover:bg-yellow border-[1px] hidden lg:block"
        >
          Contact us
        </Button>
      </div>
    </div>
  );
}
