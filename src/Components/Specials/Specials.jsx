import React from "react";
import "../Specials/Specials.css";
import { Link } from "react-router-dom";
import students_img from "../../assets/Student.jpg";
import Family_img from "../../assets/Family.jpg";
import Work_img from "../../assets/Work.jpg";

const Specials = () => {
  return (
    <>
      <div className="app-container">
        <div className="specials_wrapper">
          <h1>Travel Tour</h1>
          <p>
            Experience luxury hotel stays, explore new places with our guided
            tours.
          </p>
        </div>

        <section className="section">
          <small className="section_Heading">View Our Categories</small>
          <h2 className="section_Title">
            <span>Students' </span> Category
          </h2>

          <div className="specials shared-div">
            <img
              src={students_img}
              alt="category-img"
              className="category-img"
            />

            <div className="col_2 category-content">
              <p>
                Our hotel offers specialized school trip services with
                comfortable accommodation and varied, healthy meal options. We
                provide a safe, engaging environment for students to learn and
                grow, ensuring a memorable and educational experience.
              </p>
              <button className="btn-sm view-btn">
                <Link to="/student_list"> View Student List</Link>
              </button>
            </div>
          </div>
          {/* Next category */}
          <h2 className="section_Title">
            <span>Family </span> Category
          </h2>

          <div className="specials shared-div">
            <img src={Family_img} alt="category-img" className="category-img" />

            <div className="col_2 category-content">
              <p>
                Make your next family holiday unforgettable. Enjoy thoughtful
                services, safe play zones, and comfortable accommodations
                designed for parents and children to relax and connect.
              </p>
              <button className="btn-sm view-btn">
                <Link> Popular Family Spots</Link>
              </button>
            </div>
          </div>

          <h2 className="section_Title">
            <span> Career </span> Category
          </h2>
          {/* Next category */}
          <div className="specials shared-div">
            <img src={Work_img} alt="category-img" className="category-img" />

            <div className="col_2 category-content">
              <p>
                Our hotel offers seamless work trip services. Benefit from
                high-speed Wi-Fi, comfortable rooms, and business amenities. We
                ensure a productive, stress-free stay for all corporate
                travelers.
              </p>
              <button className="btn-sm view-btn">
                <Link> Popular Meeting Spaces</Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Specials;
