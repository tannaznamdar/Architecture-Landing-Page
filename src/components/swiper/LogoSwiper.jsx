import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function LogoSwiper({ logoImage }) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      breakpoints={{
        480: { slidesPerView: 4 },
        640: { slidesPerView: 5 },
        1024: { slidesPerView: 6 },
      }}
    >
      {logoImage.map((item, index) => (
        <SwiperSlide key={index}>
          <figure className="lg:h-[60px] lg:w-[150px] h-9 w-[90px]">
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
