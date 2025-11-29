// import React, { useState } from "react";
// import "./Login2.css";
// import { Link, useNavigate } from "react-router-dom";
// import { FaFacebook } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { TiVendorMicrosoft } from "react-icons/ti";
// import { InfinitySpin } from "react-loader-spinner";
// import axios from "axios";

// const Login2 = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const api = "https://students-learning-api.onrender.com/api/auth/login";
//   const payload = {
//     email,
//     password,
//   };

//   const loginLogic = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     try {
//       const data = await axios.post(api, payload);
//       console.log(data);
//       navigate("/book");
//     } catch (error) {
//       console.error(error.response.data.error);
//       setError(error.response.data.error);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="screen_con">
//         <div className="screen_wrapper login">
//           <div className="col_1"></div>

//           <div className="col_2">
//             <div className="form_box">
//               <h1> {error ? error : "Sign In"} </h1>

//               {/* Put your onSubmit action here */}
//               <form onSubmit={loginLogic}>
//                 <div className="user_box">
//                   <input
//                     label="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                   <label htmlFor="email">Email</label>
//                 </div>
//                 <div className="user_box">
//                   <input
//                     label="password"
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                   <label htmlFor="password">Password</label>
//                 </div>
//                 <div className="remember">
//                   <input type="checkbox" /> Remember Me
//                 </div>
//                 <button type="submit" className="submit-btn">
//                   {loading ? (
//                     <InfinitySpin
//                       color="#fff"
//                       size={12}
//                       width={100}
//                       height={50}
//                       loading={loading}
//                     />
//                   ) : (
//                     "Login"
//                   )}
//                 </button>
//                 <div className="switch">
//                   <span>Don't have an account?</span>
//                   <Link to="/sign_up">Sign Up</Link>
//                 </div>
//                 <div className="sign-up">
//                   <span>Or sign up using</span>

//                   <div className="socials">
//                     <i className="icons">
//                       <FcGoogle />
//                     </i>
//                     <i className="icons">
//                       <FaFacebook />
//                     </i>
//                     <i className="icons">
//                       <TiVendorMicrosoft />
//                     </i>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login2;

import React from "react";
import { FaHome, FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom'
import axios from "axios";
import "./Login2.css";
import { useState } from "react";
const Login = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let Handlelogin = async () => {
    setLoading(true);
    setError("");

    try {
      const great = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
        { email, password }
      );
      console.log(great);
      navigate("");
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="name">
        <div className="pic">
          <div
            className="go"
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
              textWrap: "nowrap",
            }}
          >
            {/* made changes */}
            <h2
              className="signup-logo"
              style={{
                textalign: "center",
                color: "#cb5c00",
                paddingTop: "10px",
              }}
            >
              {" "}
              <FaHome color="white" /> {error ? error : "Apex Hotels"}{" "}
              <hr className="nice" style={{ width: "7rem" }} />
            </h2>

            <div
              className="pink text"
              style={{ display: "flex", flexDirection: "column", gap: "5px" }}
            >
              <span
                style={{
                  backgroundColor: "#9d7e54",
                  color: "white",
                  padding: "8px",
                  paddingTop: "10px",
                }}
              >
                Find more than a{" "}
                <span style={{ fontSize: "20px" }}>
                  {" "}
                  <b>home.</b>
                </span>
              </span>

              <span style={{ color: "white", padding: "10px" }}>
                Find your{" "}
                <span style={{ fontSize: "20px" }}>
                  {" "}
                  <b>space </b>{" "}
                  <hr style={{ display: "inline", margin: "10px" }} />
                </span>
              </span>
            </div>
          </div>

          <div className="left">
            <form className="signup-form" action="" style={{}}>
              <h2> Welcome Back </h2>
              <p textalign="center">
                Login to your your account to explore our hotel
              </p>{" "}
              <br />
              <label htmlFor="">Email</label> <br />{" "}
              <input
                type="email"
                placeholder="Email address"
                style={{ width: "97%", height: "5vh" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />{" "}
              <br /> <br />
              <label htmlFor=""> password</label> <br />{" "}
              <input
                type="password"
                placeholder="Password"
                style={{ width: "97%", height: "5vh" }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />{" "}
              <br /> <br />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-betwen",
                  color: "black",
                }}
              >
                <a href="" color="black" className="forgot-a">
                  Forgot Password?
                </a>
                <span>
                  <input type="checkbox" /> Remember me
                </span>{" "}
                <br />
              </div>
              <p>
                <button
                  style={{
                    width: "100%",
                    backgroundColor: "black",
                    color: "white",
                    height: "5vh",
                  }}
                  onClick={Handlelogin}
                >
                  Login
                </button>
              </p>{" "}
              <br />
              <p style={{ textAlign: "center" }}>
                Don't have an account?{" "}
                <Link to="/sign_up" style={{ color: "black" }}>
                  Signup
                </Link>
              </p>{" "}
              <br />
              <div className="dust">
                <span className="frog">
                  <hr />
                </span>
                <span
                  style={{
                    position: "relative",
                    bottom: "6px",
                    paddingRight: "5px",
                  }}
                >
                  or
                </span>
                <span className="frog">
                  <hr />
                </span>
              </div>
              <div>
                <button
                  className="google-btn"
                  style={{ width: "100%", height: "5vh" }}
                  onClick={() => (window.location.href = "https://google.com")}
                >
                  {" "}
                  <a href="google.com"></a> <FaGoogle /> Continue with Google
                </button>{" "}
                <br />
                {/* <br /> */}
                <button style={{ width: "100%", height: "5vh" }}>
                  {" "}
                  <FaApple /> Continue with Apple
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
