import React from "react";
import "../../App.css";
import "../Book/Book.css";
import { Link } from "react-router-dom";

const Book = () => {
  return (
    <>
      <div className=" screen_con book_con">
        <div className="screen_wrapper book_wrapper">
          <div className="col_2">
            <div className="form_box">
              <h1>Make a reservation</h1>
              <p className="sub-title">Guest Information</p>

              {/* Put your onSubmit action here */}
              <form>
                {/* Names */}
                <p className="sub-heading">Full name</p>
                <div className="shared-div">
                  <div className="user_box">
                    <input type="text" id="firstname" required />
                    <label htmlFor="firstname">First </label>
                  </div>
                  <div className="user_box">
                    <input type="text" id="lastname" required />
                    <label htmlFor="lastname">Last </label>
                  </div>
                </div>
                {/* Adress */}
                <p className="sub-heading">Address</p>
                <div className="user_box">
                  <input type="text" id="" required />
                  <label htmlFor="">Address Line 1</label>
                </div>
                <div className="user_box">
                  <input type="text" id="" />
                  <label htmlFor="">Address Line 2</label>
                </div>
                <div className="shared-div">
                  <div className="user_box">
                    <input type="text" id="" required />
                    <label htmlFor="">City</label>
                  </div>
                  <div className="user_box">
                    <input type="text" id="" required />
                    <label htmlFor="">Region</label>
                  </div>
                  <div className="user_box">
                    <input type="text" id="" />
                    <label htmlFor="">Postal/Zip Code</label>
                  </div>
                  <div className="user_box">
                    <input type="text" id="" required />
                    <label htmlFor="">Country</label>
                  </div>
                </div>
                {/* Contact */}
                <p className="sub-heading">Contact Information</p>
                <div className="shared-div">
                  <div className="user_box">
                    <input type="text" id="email" required />
                    <label htmlFor="email">Contact Email</label>
                  </div>
                  <div className="user_box">
                    <input type="tel" id="phone" required />
                    <label htmlFor="phone">Contact Phone</label>
                  </div>
                </div>
                {/* Accomodation */}
                <p className="sub-heading">Accomodation</p>
                <div className="shared-div">
                  <div className="user_box">
                    <input type="tel" id="" required />
                    <label htmlFor="">Number of adults</label>
                  </div>
                  <div className="user_box">
                    <input type="tel" id="" />
                    <label htmlFor="">Number of kids</label>
                  </div>
                </div>
                {/* Buttons */}
                <div className="shared-div">
                  <button className="btn-lg book-btn">
                    <Link to="/home">Confirm Booking</Link>
                  </button>
                  <button className="btn-sm">View Info</button>
                </div>
              </form>

              {/* form end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
