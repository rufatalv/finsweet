"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useState } from "react";
import Image from "next/image";
const Testimonials: React.FC = () => {
  const [_, setInit] = useState<boolean>();
  const swiper = useSwiper();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="bg-grey/50">
      <div className="container py-16 lg:py-32 px-4 lg:px-0 flex flex-col gap-12 lg:gap-0 lg:flex-row">
        <div className="lg:w-[30%] flex flex-col text-center md:text-start items-center gap-4">
          <h1 className="text-3xl md:text-[32px] lg:text-[38px] font-semibold text-darkblue">
            What our clients say about us
          </h1>
          <p className="text-darkblue leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        <div className="lg:w-[70%] relative">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onInit={() => setInit(true)}
            speed={700}
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            <SwiperSlide>
              <div>
                <h1 className="text-xl sm:text-2xl md:text-[32px] text-center md:text-start lg:leading-[48px] font-semibold text-darkblue">
                  &#34;The best agency we’ve worked with so far. They understand
                  our product and are able to add new features with a great
                  focus.&#34;
                </h1>
                <div className="flex mt-8 md:mt-14">
                  <div className="flex gap-2 md:gap-2.5">
                    <div className="w-[52px] h-[52px] rounded-full overflow-hidden">
                      <Image
                        src={"/images/avatar.png"}
                        width={128}
                        className="object-cover"
                        alt="avatar"
                        height={128}
                      />
                    </div>
                    <div>
                      <h5 className="text-lg text-darkblue font-medium">
                        Jenny Wilson
                      </h5>
                      <h6 className="text-xs text-darkblue font-medium">
                        Vice President
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h1 className="text-xl sm:text-2xl md:text-[32px] text-center md:text-start lg:leading-[48px] font-semibold text-darkblue">
                  &#34;The best agency we’ve worked with so far. They understand
                  our product and are able to add new features with a great
                  focus.&#34;
                </h1>
                <div className="flex mt-8 md:mt-14">
                  <div className="flex gap-2 md:gap-2.5">
                    <div className="w-[52px] h-[52px] rounded-full overflow-hidden">
                      <Image
                        src={"/images/avatar.png"}
                        width={128}
                        className="object-cover"
                        alt="avatar"
                        height={128}
                      />
                    </div>
                    <div>
                      <h5 className="text-lg text-darkblue font-medium">
                        Jenny Wilson
                      </h5>
                      <h6 className="text-xs text-darkblue font-medium">
                        Vice President
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <h1 className="text-xl sm:text-2xl md:text-[32px] text-center md:text-start lg:leading-[48px] font-semibold text-darkblue">
                  &#34;The best agency we’ve worked with so far. They understand
                  our product and are able to add new features with a great
                  focus.&#34;
                </h1>
                <div className="flex mt-8 md:mt-14">
                  <div className="flex gap-2 md:gap-2.5">
                    <div className="w-[52px] h-[52px] rounded-full overflow-hidden">
                      <Image
                        src={"/images/avatar.png"}
                        width={128}
                        className="object-cover"
                        alt="avatar"
                        height={128}
                      />
                    </div>
                    <div>
                      <h5 className="text-lg text-darkblue font-medium">
                        Jenny Wilson
                      </h5>
                      <h6 className="text-xs text-darkblue font-medium">
                        Vice President
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="absolute z-50 bottom-0 right-0 flex gap-2.5">
              <button
                ref={prevRef}
                className="text-darkblue/60 bg-white hover:bg-white/90 p-2 md:p-4 rounded-full transition-all duration-700 ease-in-out flex items-center justify-center"
              >
                <FaChevronLeft className="text-xl" />
              </button>
              <button
                ref={nextRef}
                className="bg-royalblue text-white hover:bg-royalblue/90 p-2 md:p-4 rounded-full transition-all duration-700 ease-in-out flex items-center justify-center"
              >
                <FaChevronRight className="text-xl" />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
