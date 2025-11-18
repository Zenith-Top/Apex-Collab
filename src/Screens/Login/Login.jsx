import React, { useState } from "react";
import "../Login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TiVendorMicrosoft } from "react-icons/ti";
import { InfinitySpin } from "react-loader-spinner";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const api = "https://students-learning-api.onrender.com/api/auth/login";
  const payload = {
    email,
    password,
  };

  const loginLogic = async () => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await axios.post(api, payload);
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="screen_con">
        <div className="screen_wrapper login">
          <div className="col_1"></div>

          <div className="col_2">
            <div className="form_box">
              <h1> {error ? error : "Sign In"} </h1>

              {/* Put your onSubmit action here */}
              <form onSubmit={loginLogic}>
                <div className="user_box">
                  <input
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="user_box">
                  <input
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="remember">
                  <input type="checkbox" /> Remember Me
                </div>
                <button className="submit-btn">
                  {loading ? (
                    <InfinitySpin
                      color="#fff"
                      size={10}
                      width={100}
                      loading={loading}
                    />
                  ) : (
                    "Login"
                  )}
                </button>
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
