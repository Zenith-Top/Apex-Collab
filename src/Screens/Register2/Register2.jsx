import React, { useState } from "react";
import "./Register2.css";
import { Link, useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import axios from "axios";

const Register2 = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const api = "https://students-learning-api.onrender.com/api/auth";
  const payload = {
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    password,
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await axios.post(api, payload);
      console.log(res.data);
      navigate("/sign_in");
    } catch (error) {
      console.error(error.response.data.error);
      setError(error.response.data.error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="screen_con">
        <div className="screen_wrapper register">
          {/* picture div */}
          <div className="col_1"></div>

          <div className="col_2">
            <div className="form_box">
              <h1>{error ? error : "Create an Account"}</h1>

              {/* Put your onSubmit action here */}
              <form onSubmit={handleRegister}>
                <div className="user_box">
                  <input
                    type="firstname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <label htmlFor="firstname">First Name</label>
                </div>
                <div className="user_box">
                  <input
                    type="lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                  <label htmlFor="lastname">Last Name</label>
                </div>
                <div className="user_box">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="user_box">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="user_box">
                  <input
                    type="phonenumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                  <label htmlFor="phonenumber">Phone Number</label>
                </div>
                <div className="user_box">
                  <input
                    type="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <label htmlFor="address">Address</label>
                </div>
                <button type="submit" className="submit-btn">
                  {loading ? (
                    <InfinitySpin
                      color="#fff"
                      size={12}
                      width={100}
                      height={50}
                      margin={0}
                      loading={loading}
                    />
                  ) : (
                    "Register"
                  )}
                </button>

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

export default Register2;
