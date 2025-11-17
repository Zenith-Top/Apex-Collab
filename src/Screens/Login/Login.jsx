import React from "react";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TiVendorMicrosoft } from "react-icons/ti";

const Login = () => {
  return (
    <>
      <div className="screen_con">
        <div className="screen_wrapper login">
          <div className="col_1"></div>

          <div className="col_2">
            <div className="form_box">
              <h1> Sign In</h1>
              <form>
                {/* Put your onSubmit action here */}
                <div className="user_box">
                  <input type="text" id="email" required />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="user_box">
                  <input type="password" id="password" required />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="remember">
                  <input type="checkbox" /> Remember Me
                </div>
                <Link to="/" className="submit-btn">
                  Login
                </Link>
                <div className="switch">
                  <span>Don't have an account?</span>
                  <Link to="/sign_up">Sign Up</Link>
                </div>
                <div className="sign-up">
                  <span>Or sign up using</span>

                  <div className="socials">
                    <i className="icons">
                      <FcGoogle />
                    </i>
                    <i className="icons">
                      <FaFacebook />
                    </i>
                    <i className="icons">
                      <TiVendorMicrosoft />
                    </i>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
