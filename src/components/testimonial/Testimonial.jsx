import React from "react";
import "./testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profile1 from "../../assets/img/profile1.jpg";
import profile2 from "../../assets/img/profile2.jpg";
import profile3 from "../../assets/img/profile3.jpg";
import profile4 from "../../assets/img/profile4.jpg";
import profile5 from "../../assets/img/profile5.jpg";
import profile6 from "../../assets/img/profile6.jpg";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";
function Testimonial() {
  const data = [
    {
      id: 1,
      img: profile1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi modi quasi exercitationem laudantium laborum dignissimos, odio atque, esse minus tempora fugit expedita voluptate numquam assumenda?",
    },
    {
      id: 2,
      img: profile2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi modi quasi exercitationem laudantium laborum dignissimos, odio atque, esse minus tempora fugit expedita voluptate numquam assumenda?",
    },
    {
      id: 3,
      img: profile3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi modi quasi exercitationem laudantium laborum dignissimos, odio atque, esse minus tempora fugit expedita voluptate numquam assumenda?",
    },
    {
      id: 4,
      img: profile4,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi modi quasi exercitationem laudantium laborum dignissimos, odio atque, esse minus tempora fugit expedita voluptate numquam assumenda?",
    },
    {
      id: 5,
      img: profile5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi modi quasi exercitationem laudantium laborum dignissimos, odio atque, esse minus tempora fugit expedita voluptate numquam assumenda?",
    },
    {
      id: 6,
      img: profile6,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi modi quasi exercitationem laudantium laborum dignissimos, odio atque, esse minus tempora fugit expedita voluptate numquam assumenda?",
    },
  ];

  return (
    <section className="t-wrapper">
      <div className="t-heading">
        <h1>Clients allways get</h1>
        <h1>Exceptional Work</h1>
        <h1>for me ... </h1>
      </div>
      {/*  slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data?.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="testimonail">
                <img src={item.img} alt="img" />
                <p>{item.desc}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonial;
