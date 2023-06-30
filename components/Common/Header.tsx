import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { HiXMark } from "react-icons/hi2";
import Button from "./Button";
import { link } from "fs";
import Image from "next/image";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    document.querySelectorAll("ul li a").forEach((link) => {
      link.addEventListener("click", () => {
        setIsNavOpen(false);
      });
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="text-white bg-tintblue relative z-50 select-none">
      <div
        className={`container px-4 lg:px-0 py-4 flex items-center ${
          isNavOpen ? "bg-tintblue" : ""
        } justify-between`}
      >
        <Link href={"/"}>
          <Image width={122} height={24} src="/images/logo.svg" alt="logo" />
        </Link>
        <ul
          className={`flex flex-col md:flex-row gap-4 text-textgrey lg:gap-8 fixed lg:ml-auto lg:mr-12 md:static text-right md:text-start right-0 top-0 md:left-auto md:top-auto shadow-2xl md:shadow-none h-screen md:h-auto w-1/2 md:w-auto bg-tintblue md:bg-transparent p-4 pt-4 md:p-0 text-2xl md:text-base transition-transform duration-700 ${
            isNavOpen
              ? "translate-x-0 md:translate-x-0"
              : "translate-x-full md:translate-x-0"
          }`}
        >
          <div
            onClick={handleNavOpen}
            className={`ml-auto cursor-pointer opacity-0 relative z-[5] transition-all duration-[2500] ease-[cubic-bezier(0.95,0.05,0.795,0.035)] md:hidden ${
              isNavOpen ? "opacity-100" : ""
            }`}
          >
            <HiXMark color="#fff" size={32} />
          </div>
          <li>
            <Link
              href="/"
              className={`transition-all duration-700 ease-in-out hover:text-white ${
                router.pathname == "/" ? "text-white" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`transition-all duration-700 ease-in-out hover:text-white ${
                router.pathname == "/about" ? "text-white" : ""
              }`}
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href="/features"
              className={`transition-all duration-700 ease-in-out hover:text-white ${
                router.pathname == "/features" ? "text-white" : ""
              }`}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/pricing"
              className={`transition-all duration-700 ease-in-out hover:text-white ${
                router.pathname == "/pricing" ? "text-white" : ""
              }`}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className={`transition-all duration-700 ease-in-out hover:text-white ${
                router.pathname == "/faq" ? "text-white" : ""
              }`}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`transition-all duration-400 ease-in-out hover:text-white ${
                router.pathname == "/blog" ? "text-white" : ""
              }`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              className={`transition-all duration-400 ease-in-out md:hidden hover:text-white ${
                router.pathname == "/contacts" ? "text-white" : ""
              }`}
            >
              Contacts
            </Link>
          </li>
        </ul>
        <div
          onClick={handleNavOpen}
          className={`cursor-pointer relative z-10 md:hidden`}
        >
          <LiaBarsSolid color="#fff" className={`transition-all duration-200 ${isNavOpen ? 'opacity-0' : ''}`} size={32} />
        </div>
        <Button
          onClick={() => router.push("/contacts")}
          size=""
          styles="border-[#F4F6FC33] hover:bg-yellow border-[1px] hidden lg:block"
        >
          Contact us
        </Button>
      </div>
    </div>
  );
}
