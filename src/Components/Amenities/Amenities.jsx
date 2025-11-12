import React from "react";
import "./../Amenities/Amenities.css";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import Pool_Img from "../../assets/Pool.jpg";
import Gym_Img from "../../assets/Gym.jpg";
import Sports_Img from "../../assets/Sports.jpg";

const Amenities = () => {
  return (
    <>
      <div className="amenities_wrapper section">
        <small className="section_Heading">Luxury Amenities</small>
        <h2 className="section_Title">
          Our Best <span>Amenities</span>
        </h2>
        <Swiper>
          <SwiperSlide>
            <div className="amenities_items">
              <img src={Pool_Img} alt="amenities-img" />

              <div className="amenities_content">
                <h2>Swimming Pool</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laboriosam tempora corrupti perspiciatis explicabo nobis
                  repudiandae, doloribus voluptatibus officia! Repellat,
                  nostrum.
                </p>
                <button className="btn-sm">Book Now</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="amenities_items">
              <img src={Gym_Img} alt="amenities-img" />

              <div className="amenities_content">
                <h2>Gym</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laboriosam tempora corrupti perspiciatis explicabo nobis
                  repudiandae, doloribus voluptatibus officia! Repellat,
                  nostrum.
                </p>
                <button className="btn-sm">Book Now</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="amenities_items">
              <img src={Sports_Img} alt="amenities-img" />

              <div className="amenities_content">
                <h2>Sports</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laboriosam tempora corrupti perspiciatis explicabo nobis
                  repudiandae, doloribus voluptatibus officia! Repellat,
                  nostrum.
                </p>
                <button className="btn-sm">Book Now</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Amenities;
