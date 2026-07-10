"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


export default function HeroSlider() {

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
    >

      <SwiperSlide>
        <div className="h-[500px] bg-blue-500 flex items-center justify-center text-white text-4xl">
          Slide 1
        </div>
      </SwiperSlide>


      <SwiperSlide>
        <div className="h-[500px] bg-green-500 flex items-center justify-center text-white text-4xl">
          Slide 2
        </div>
      </SwiperSlide>


      <SwiperSlide>
        <div className="h-[500px] bg-red-500 flex items-center justify-center text-white text-4xl">
          Slide 3
        </div>
      </SwiperSlide>


    </Swiper>
  );
}