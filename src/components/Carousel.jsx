import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { images } from "../constants";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Carousel.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
      <Swiper id='gallery'
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images.map((item) => (
          <SwiperSlide>
            <img src={item.url} alt={item.id}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
