import React from "react";
import "./../Amenities/Amenities.css";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import Pool_Img from "../../assets/Pool.jpg";
import Gym_Img from "../../assets/Gym.jpg";
import Spa_Img from "../../assets/Spa.jpg";
import Sports_Img from "../../assets/Sports.jpg";
import Cafe_Img from "../../assets/Cafe.jpg";
import Kids_Img from "../../assets/Kids.jpg";

const Amenities = () => {
  return (
    <>
      <div className="amenities_wrapper section">
        <small className="section_Heading">Luxury Amenities</small>
        <h2 className="section_Title">
          Our Best <span>Amenities</span>
        </h2>

        <Swiper
          autoHeight={true}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 1000,
          }}
          speed={2000}
          modules={[Autoplay]}
          className="swiper amenities"
        >
          <SwiperSlide className="amen_slide">
            <div className="amenities_items item1">
             <img src={Pool_Img} alt="amenities-img" />

              <div className="amenities_content">
                <h2>Swimming Pool</h2>
                <p>
                  A sparkling pool that offers a crystal-clear escape for
                  relaxation and exercise, featuring a vibrant poolside
                  atmosphere complete with loungers for soaking up the sun and
                  refreshing dips.
                </p>
                <button className="btn-sm">
                  <Link to="/book">Book Now</Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="amenities_items">
              <img src={Gym_Img} alt="amenities-img" />

              <div className="amenities_content">
                <h2>Gym</h2>
                <p>
                  Explore our dedicated space offering cardio machines, free
                  weights, and strength-training equipment, allowing guests to
                  maintain their fitness routine while traveling. It ranges from
                  small, basic rooms to large, well-equipped facilities, serving
                  as a convenient amenity for guests.
                </p>
                <button className="btn-sm">
                  <Link to="/book">Book Now</Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="amenities_items">
              <img src={Spa_Img} alt="amenities-img" />

              <div className="amenities_content">
                <h2>Spa</h2>
                <p>
                  Enjoy our wellness facility offering massages, facials, and
                  beauty treatments, often complemented by amenities like pools,
                  saunas, and fitness centers for ultimate relaxation and
                  rejuvenation. It serves as a tranquil escape for hotel guests
                  seeking to de-stress and recharge through pampering and
                  wellness experiences.
                </p>
                <button className="btn-sm">
                  <Link to="/book">Book Now</Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="amenities_items">
              <img src={Sports_Img} alt="amenities-img" />

              <div className="amenities_content">
                <h2>Sports</h2>
                <p>
                  Explore our facility tailored to guests' fitness and
                  recreation, featuring gyms, pools, and other equipment for
                  exercise and wellness. It offers amenities for physical
                  activity and relaxation, catering to guests who want to
                  maintain their health during their stay.
                </p>
                <button className="btn-sm">
                  <Link to="/book">Book Now</Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="amenities_items">
              <img src={Cafe_Img} alt="amenities-img" />

              <div className="amenities_content">
                <h2>Restro and Cafe</h2>
                <p>
                  Our restro, cafe, and lounge offers a complete dining
                  experience, from quick coffee and pastries to fine dining and
                  cocktails, all in one convenient, accessible location for
                  guests and visitors.
                </p>
                <button className="btn-sm">
                  <Link to="/book">Book Now</Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="amenities_items">
              <img src={Kids_Img} alt="amenities-img" />

              <div className="amenities_content">
                <h2>Indoor Playground</h2>
                <p>
                  Explore our fun, safe, weather-proof zone with equipment like
                  slides, ball pits, climbing structures, and tunnels, where
                  kids can climb, slide, and play actively. These areas provide
                  entertainment with creative and interactive features like
                  themed rooms and activity stations, allowing for continuous
                  fun year-round.
                </p>
                <button className="btn-sm">
                  <Link to="/book">Book Now</Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Amenities;
