import React from "react";
import "../Header/Header.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Parallax } from "swiper/modules";

const Header = () => {
  return (
    <>
      <div className="app_container">
        <div className="header_wrapper">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            className="swiper"
            autoplay={{
              delay: 2500,
            }}
            parallax={true}
            speed={1500}
            modules={[Autoplay, Parallax]}
          >
            <SwiperSlide>
              <div className="Header_slide header_slide1">
                <div className="header_content ">
                  <small data-swipe-parallax="-200">
                    Luxury Hotel & Resort
                  </small>
                  <h2 data-swipe-parallax="-400">
                    Enjoy your <span>Dream</span> Time with <br />
                    <span>Luxury</span> experience
                  </h2>
                  <button className="btn-sm book_btn">Book Now</button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="Header_slide header_slide2">
                <div className="header_content ">
                  <small data-swipe-parallax="-200">
                    Luxury Hotel & Resort
                  </small>
                  <h2 data-swipe-parallax="-400">
                    Enjoy your <span>Dream</span> Time with <br />
                    <span>Luxury</span> experience
                  </h2>
                  <button className="btn-sm">Book Now</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Header;
