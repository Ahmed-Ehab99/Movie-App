/* eslint-disable react/prop-types */
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "./MovieSwiper.css";

export default function MovieSwiper({ slides, handleSlideChange }) {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      modules={[Autoplay, EffectCoverflow]}
      className="movieSwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide._id}>
          <img
            src={slide.previewImg}
            alt="Preview Image"
            onClick={() => handleSlideChange(slide._id)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
