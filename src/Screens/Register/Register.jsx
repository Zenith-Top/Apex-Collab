import React from "react";
import "../Register/Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="screen_con">
        <div className="screen_wrapper register">
          {/* picture div */}
          <div className="col_1"></div>

          <div className="col_2">
            <div className="form_box">
              <h1> Create an Account</h1>
              <form>
                {/* Put your onSubmit action here */}
                <div className="user_box">
                  <input type="text" id="firstname" required />
                  <label htmlFor="firstname">First Name</label>
                </div>
                <div className="user_box">
                  <input type="text" id="lastname" required />
                  <label htmlFor="lastname">Last Name</label>
                </div>
                <div className="user_box">
                  <input type="text" id="email" required />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="user_box">
                  <input type="password" id="password" required />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="user_box">
                  <input type="tel" id="phonenumber" required />
                  <label htmlFor="phonenumber">Phone Number</label>
                </div>
                <div className="user_box">
                  <input type="text" id="address" required />
                  <label htmlFor="address">Address</label>
                </div>
                <Link to="/sign_in" className="submit-btn">
                  Register
                </Link>

                <div className="switch">
                  <span>Already have an account?</span>
                  <Link to="/sign_in">Sign In</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
