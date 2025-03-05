import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function BannerSwiper({ banner }) {
  const swiperRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {banner.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <figure className="w-full md:h-[540px] h-[320px]">
                <img
                  src={item.image}
                  alt="#"
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="absolute md:left-[50px] left-4 md:bottom-[50px] bottom-4 lg:w-1/6 w-2/3">
                <h2 className="font-semibold md:text-2xl text-[16px] font-raleway text-white md:mb-[25px] mb-2">
                  {item.title}
                </h2>
                <span className="md:text-[16px] text-sm text-white font-medium text-justify font-inconsolata">
                  {item.desc}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className=" backdrop-blur-xs px-[15px] py-2 absolute bottom-0 right-0 z-10">
        <div className="flex gap-5">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className=" text-white transition"
          >
            <ChevronLeftIcon className="hover:text-gray-800 size-5" />
          </button>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className=" text-white transition"
          >
            <ChevronRightIcon className="hover:text-gray-800 size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
