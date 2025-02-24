import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function LogoSwiper({ logoImage }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={6}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {logoImage.map((item, index) => (
        <SwiperSlide key={index}>
          <figure className="h-[60px] w-[150px]">
            <img
              src={item}
              alt="#"
              className="h-full w-auto overflow-hidden"
            ></img>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
