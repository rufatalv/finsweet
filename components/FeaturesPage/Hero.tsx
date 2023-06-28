import Image from "next/image";
import { Button } from "../Common";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Hero() {
  const router = useRouter();
  return (
    <div className="bg-tintblue">
      <div className="container px-4 lg:px-0 flex flex-col md:flex-row pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-24 lg:pb-32  justify-between items-center">
        <div id="left" className="lg:w-[41%] md:w-1/2">
          <h1 className="text-3xl md:text-[40px] lg:text-[54px] text-white text-center md:text-start font-semibold lg:leading-[74px] mb-8">
            All the features you need
          </h1>
          <h4 className="md:text-base lg:text-base text-white leading-7 text-center md:text-start opacity-70 mb-8 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
          <div className="gap-10 mb-12 md:mb-0 flex md:justify-start justify-center items-center">
            <Button
              size="lg"
              onClick={() => router.push('/pricing')}
              styles="bg-yellow text-tinttext text-sm sm:text-sm md:text-base lg:text-lg hover:bg-darkblue hover:text-white"
            >
              View Pricing
            </Button>
          </div>
        </div>
        <div className="lg:w-[45%] md:w-1/2 text-end">
          <Image
            src="/images/featurehero.svg"
            className="md:ml-auto mx-auto w-full h-auto max-w-md md:max-w-none md:min-w-full md:flex-shrink-0"
            alt="illustration"
            width={638}
            height={361}
          />
        </div>
      </div>
    </div>
  );
}
