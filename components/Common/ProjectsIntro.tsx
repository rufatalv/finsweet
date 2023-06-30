import Image from "next/image";
import Link from "next/link";

interface Image {
  url: string;
}

interface Project {
  title: string;
  category: string;
  description: string;
  heroDescription: string;
  shortDescription: string;
  image: Image;
  client: string;
  slug: string;
  service: string;
  deliverable: string;
  keywords: string;
}

interface OurBlogProps {
  data: Project[];
}
export default function ProjectsIntro({ data }: OurBlogProps) {
  return (
    <div className="container px-4 lg:px-0 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between mb-16 items-center">
        <h1 className="text-darkblue text-3xl md:text-[32px] lg:text-5xl font-semibold">
          View our projects
        </h1>
        <Link
          href={`/projects`}
          className="text-[#282938] flex gap-3 text-sm md:text-base items-center group font-medium"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="12"
            viewBox="0 0 25 12"
            className="fill-darkblue w-[20px] md:w-[25px] h-auto group-hover:animate-moving-right"
          >
            <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:flex justify-between gap-8 md:max-h-[600px]">
        <div className="md:w-[65%] cursor-pointer group h-80 md:h-auto relative col-start-1">
          <Image
            alt="Image"
            className="w-full h-full object-cover"
            src={data[0].image.url}
            width={990}
            height={990}
          />
          <div className="absolute opacity-100 md:opacity-0 group-hover:opacity-100 transition-all  flex top-0 left-0 h-full w-full md:w-2/3 lg:w-1/2 bg-gradient-to-t from-[#1c1e53] to-[#1c1e536b]">
            <div className="pl-6 lg:pl-12 pr-4 md:pr-6 pb-8 md:pb-[76px] mt-auto">
              <h1 className="text-white text-sm sm:text-lg md:text-2xl mb-4 lg:leading-9 font-semibold">
                {data[0].title}
              </h1>
              <p className="text-white hidden lg:block opacity-80 mb-10 font-normal">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam
              </p>
              <Link
                href={`/projects/${data[0].slug}`}
                className="text-yellow flex gap-1 md:gap-3 text-xs sm:text-sm md:text-base items-center group font-medium"
              >
                View project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="12"
                  viewBox="0 0 25 12"
                  className="fill-yellow w-[20px] md:w-[25px] h-auto group-hover:animate-moving-right"
                >
                  <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-[33%] grid grid-rows-2 gap-8">
          <div className="relative h-80 group cursor-pointer  md:h-auto">
            <Image
              alt="image"
              src={data[1].image.url}
              height={600}
              className="w-full h-full object-cover"
              width={600}
            />
            <div className="absolute opacity-100 md:opacity-0 transition-all group-hover:opacity-100 flex left-0 top-0 w-full h-full bg-gradient-to-t from-[#1c1e53] to-[#1c1e536b]">
              <div className="pl-6 lg:pl-12 pr-2 md:pr-6 pb-8 md:pb-11 mt-auto">
                <h1 className="text-white sm:text-lg lg:text-2xl mb-4 leading-9 font-semibold">
                  {data[1].title}
                </h1>
                <Link
                  href={`/projects/${data[1].slug}`}
                  className="text-yellow flex gap-3 text-sm md:text-base items-center group font-medium"
                >
                  View project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="12"
                    viewBox="0 0 25 12"
                    className="fill-yellow w-[20px] md:w-[25px] h-auto group-hover:animate-moving-right"
                  >
                    <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative h-80 cursor-pointer  md:h-auto">
            <Image
              alt="image"
              src={data[2].image.url}
              height={600}
              className="w-full h-full object-cover"
              width={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
