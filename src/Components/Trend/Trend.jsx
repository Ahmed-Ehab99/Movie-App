import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";
import axios from "axios";
import TrendCard from "../TrendCard/TrendCard";
import "./Trend.css";
import "swiper/css";

export default function Trend() {
  let [slides, setSlides] = useState();

  async function fetchData() {
    let { data } = await axios.get(`http://localhost:5173/data/movieData.json`);
    setSlides(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section id="trend" className="trend">
        <div className="container-fluid">
          <div className="row">
            <h4 className="section-title">Coming Soon</h4>
          </div>
          <div className="row mt-3">
            <Swiper
              breakpoints={{
                425: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 30 },
                1024: { slidesPerView: 4, spaceBetween: 30 },
                1440: { slidesPerView: 5, spaceBetween: 30 },
              }}
              spaceBetween={30}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              modules={[Autoplay]}
              className="trendSwiper"
            >
              {slides &&
                slides.length > 0 &&
                slides.map((slide) => (
                  <SwiperSlide key={slide._id}>
                    <TrendCard slide={slide} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
