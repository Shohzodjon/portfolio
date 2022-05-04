import React from "react";
import "./portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import sidebar from "../../assets/img/sidebar.png";
import ecommerce from "../../assets/img/ecommerce.png";
import hoc from "../../assets/img/hoc.png";
import musicapp from "../../assets/img/musicapp.png";
import "swiper/css";
function Portfolio() {
  return (
    <section className="portfolio">
      <h1>Recent Projects</h1>
      <h1>
        <span>Portfolio</span>
      </h1>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className={"portfolio-slider"}
      >
        <SwiperSlide>
          <img src={sidebar} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ecommerce} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hoc} alt="sidebar" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={musicapp} alt="sidebar" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Portfolio;
