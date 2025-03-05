import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function ImageSwiper({ projectImg }) {
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
        {projectImg.map((item, index) => (
          <SwiperSlide key={index}>
            <figure className="md:h-[500px] h-[300px]">
              <img src={item} alt="#" className="w-full h-full object-cover" />
            </figure>
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
