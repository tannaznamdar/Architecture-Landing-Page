import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import CardComponent from "../card/CompanyUsersCard";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function UsersCardsSwiper({ companyUsers }) {
  const swiperRef = useRef(null);

  return (
    <div className="">
      <Swiper
        className="mb-6"
        loop={true}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={50}
        breakpoints={{
          480: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {companyUsers.map((item, index) => (
          <SwiperSlide key={index}>
            <CardComponent item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bg-[#F2F2F2] w-fit px-[15px] py-2 mx-auto block lg:hidden">
        <div className="flex gap-5">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className=" text-gray-600 transition"
          >
            <ChevronLeftIcon className="hover:text-gray-800 size-5" />
          </button>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className=" text-gray-600 transition"
          >
            <ChevronRightIcon className="hover:text-gray-800 size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
