import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
export default function OurTeam() {
  return (
    <div className="bg-grey py-32">
      <div className="container px-4 lg:px-0">
        <h1 className="text-darkblue font-semibold text-5xl text-center mb-12">
          Our Team
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:px-5 xl:px-11 bg-white pt-12 pb-8 flex flex-col justify-center items-center">
            <div className="rounded-full relative before:block group before:absolute before:w-full before:h-full before:left-0 before:top-0 before:content-[''] before:bg-gradient-to-t before:from-[#5239FA] before:opacity-0 before:transition-all cursor-pointer before:duration-700 hover:before:opacity-50 overflow-hidden w-[168px] h-[168px] mb-7">
              <Image
                src={"/images/team1.jpg"}
                alt="logo"
                className="w-full h-full object-cover"
                width={200}
                height={200}
              ></Image>
              <div
                className="flex gap-3 absolute transition-all duration-500 -bottom-1/4 group-hover:bottom-[10%] left-1/2 -translate-x-1/2"
                id="socials"
              >
                <Link href="#">
                  <FaFacebook size={13} color="#fff" />
                </Link>
                <Link href="#">
                  <FaTwitter size={13} color="#fff" />
                </Link>
                <Link href="#">
                  <FaLinkedin size={13} color="#fff" />
                </Link>
              </div>
            </div>
            <h1 className="text-2xl text-darkblue font-medium mb-1">
              John Smith
            </h1>
            <p className="text-base text-darkblue opacity-70">CEO</p>
          </div>
          <div className="lg:px-5 xl:px-11 bg-white pt-12 pb-8 flex flex-col justify-center items-center">
            <div className="rounded-full relative before:block group before:absolute before:w-full before:h-full before:left-0 before:top-0 before:content-[''] before:bg-gradient-to-t before:from-[#5239FA] before:opacity-0 before:transition-all cursor-pointer before:duration-700 hover:before:opacity-50 overflow-hidden w-[168px] h-[168px] mb-7">
              <Image
                src={"/images/team2.jpg"}
                alt="logo"
                className="w-full h-full object-cover"
                width={200}
                height={200}
              ></Image>
              <div
                className="flex gap-3 absolute transition-all duration-500 -bottom-1/4 group-hover:bottom-[10%] left-1/2 -translate-x-1/2"
                id="socials"
              >
                <Link href="#">
                  <FaFacebook size={13} color="#fff" />
                </Link>
                <Link href="#">
                  <FaTwitter size={13} color="#fff" />
                </Link>
                <Link href="#">
                  <FaLinkedin size={13} color="#fff" />
                </Link>
              </div>
            </div>
            <h1 className="text-2xl text-darkblue font-medium mb-1">
              Simon Adams
            </h1>
            <p className="text-base text-darkblue opacity-70">CTO</p>
          </div>
          <div className="lg:px-5 xl:px-11 bg-white pt-12 pb-8 flex flex-col justify-center items-center">
            <div className="rounded-full relative before:block group before:absolute before:w-full before:h-full before:left-0 before:top-0 before:content-[''] before:bg-gradient-to-t before:from-[#5239FA] before:opacity-0 before:transition-all cursor-pointer before:duration-700 hover:before:opacity-50 overflow-hidden w-[168px] h-[168px] mb-7">
              <Image
                src={"/images/team3.jpg"}
                alt="logo"
                className="w-full h-full object-cover"
                width={200}
                height={200}
              ></Image>
              <div
                className="flex gap-3 absolute transition-all duration-500 -bottom-1/4 group-hover:bottom-[10%] left-1/2 -translate-x-1/2"
                id="socials"
              >
                <Link href="#">
                  <FaFacebook size={13} color="#fff" />
                </Link>
                <Link href="#">
                  <FaTwitter size={13} color="#fff" />
                </Link>
                <Link href="#">
                  <FaLinkedin size={13} color="#fff" />
                </Link>
              </div>
            </div>
            <h1 className="text-2xl text-darkblue font-medium mb-1">
              Paul Jones
            </h1>
            <p className="text-base text-darkblue opacity-70">Design Lead</p>
          </div>
          <div className="lg:px-5 xl:px-11 bg-white pt-12 pb-8 flex flex-col justify-center items-center">
            <div className="rounded-full relative before:block group before:absolute before:w-full before:h-full before:left-0 before:top-0 before:content-[''] before:bg-gradient-to-t before:from-[#5239FA] before:opacity-0 before:transition-all cursor-pointer before:duration-700 hover:before:opacity-50 overflow-hidden w-[168px] h-[168px] mb-7">
              <Image
                src={"/images/team4.jpg"}
                alt="logo"
                className="w-full h-full object-cover"
                width={200}
                height={200}
              ></Image>
              <div
                className="flex gap-3 absolute transition-all duration-500 -bottom-1/4 group-hover:bottom-[10%] left-1/2 -translate-x-1/2"
                id="socials"
              >
                <Link href="#">
                  <FaFacebook size={13} color="#fff" />
                </Link>
                <Link href="#">
                  <FaTwitter size={13} color="#fff" />
                </Link>
                <Link href="#">
                  <FaLinkedin size={13} color="#fff" />
                </Link>
              </div>
            </div>
            <h1 className="text-2xl text-darkblue font-medium mb-1">
              Sara Hardin
            </h1>
            <p className="text-base text-darkblue opacity-70">
              Project Manager
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
