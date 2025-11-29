// import React, { useState } from "react";
// import "./Register2.css";
// import { Link, useNavigate } from "react-router-dom";
// import { InfinitySpin } from "react-loader-spinner";
// import axios from "axios";

// const Register2 = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [password, setPassword] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [address, setAddress] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const api = "https://students-learning-api.onrender.com/api/auth";
//   const payload = {
//     firstName,
//     lastName,
//     email,
//     phoneNumber,
//     address,
//     password,
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     try {
//       const res = await axios.post(api, payload);
//       console.log(res.data);
//       navigate("/sign_in");
//     } catch (error) {
//       console.error(error.response.data.error);
//       setError(error.response.data.error);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="screen_con">
//         <div className="screen_wrapper register">
//           {/* picture div */}
//           <div className="col_1"></div>

//           <div className="col_2">
//             <div className="form_box">
//               <h1>{error ? error : "Create an Account"}</h1>

//               {/* Put your onSubmit action here */}
//               <form onSubmit={handleRegister}>
//                 <div className="user_box">
//                   <input
//                     type="firstname"
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                     required
//                   />
//                   <label htmlFor="firstname">First Name</label>
//                 </div>
//                 <div className="user_box">
//                   <input
//                     type="lastname"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                     required
//                   />
//                   <label htmlFor="lastname">Last Name</label>
//                 </div>
//                 <div className="user_box">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                   />
//                   <label htmlFor="email">Email</label>
//                 </div>
//                 <div className="user_box">
//                   <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                   />
//                   <label htmlFor="password">Password</label>
//                 </div>
//                 <div className="user_box">
//                   <input
//                     type="phonenumber"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     required
//                   />
//                   <label htmlFor="phonenumber">Phone Number</label>
//                 </div>
//                 <div className="user_box">
//                   <input
//                     type="address"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     required
//                   />
//                   <label htmlFor="address">Address</label>
//                 </div>
//                 <button type="submit" className="submit-btn">
//                   {loading ? (
//                     <InfinitySpin
//                       color="#fff"
//                       size={12}
//                       width={100}
//                       height={50}
//                       margin={0}
//                       loading={loading}
//                     />
//                   ) : (
//                     "Register"
//                   )}
//                 </button>

//                 <div className="switch">
//                   <span>Already have an account?</span>
//                   <Link to="/sign_in">Sign In</Link>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register2;
import React from "react";
import { FaArrowLeft, FaApple, FaGoogle, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./Register2.css";

import "../../App";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  let handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth`,
        { email, password, firstName, lastName, phoneNumber }
      );

      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.error(error);
      const msg =
        error.response?.data?.message || error.message || "Signup failed";
      setError(msg);
      setLoading(false);
    }
  };

  return (
    <>
 <div className='hello'>
  
   

  <div className='gap'>

    <div className='lash'>

    <span>

      <h1  style={{color:'whitesmoke', textAlign:'left', fontWeight:'lighter', padding:'15px'}}>   
      
      <span className='kin' style={{color:'cadetblue', borderRadius:'70px', padding:'15px', paddingTop:'5px', paddingBottom:'5px', backgroundColor:'white', margin:'10px', fontSize:'50px', border:'none'}}>H</span>

       Home Away</h1>

       </span>
 

    <div className='spider'> 

     <FaArrowLeft
      style={{position:'relative', top:'60px', borderRadius:'50px', border:'none', paddingTop:'10px', paddingBottom:'10px', textAlign:'center', padding:'10px', marginLeft:'10px', backgroundColor:'cadetblue', 
       }}
      /> 

     <span style={{ paddingLeft:'100px', textAlign:'left', paddingBottom:'20px'}}> away from home, <br /> yet feels like home</span> 
    </div>

    </div>

    <div className='chip'>
    
      <h3 style={{textAlign:'center', padding:'20px'}}>
  <FaUser/> <br /> { error || 'signup' } <br /> on
</h3>

      
      {/* made  changes here in  the user link */}
    <div className='elf'>  
    <button  className='hy'><Link to='/user' style={{textDecoration:'none', color:'white'}}>user </Link>
    
    </button>




    <button className='fish'><Link to='/business' style={{textDecoration:'none', color:'white'}} >Business</Link> </button> 
    </div>
      
<div>

    <div className='fat'>

  <form action="" onSubmit={handleSignup} >

    <div className='digit'>
    <input type="text" placeholder='First name' className='two' 
     value={firstName}
      onChange={(e) => setFirstName(e.target.value)} 
    /> 

     <input type="text" placeholder='Last Name' className='two' 
     value={lastName}
      onChange={(e) => setLastName(e.target.value)}
    /> <br /> <br />
    </div> <br />

    <input type="Email" placeholder='Email' className='one'
     value={email}
     onChange={(e) => setEmail(e.target.value)}
    /> <br /> <br />
    <input   type="password" placeholder='password '  className='one'
    value={password}
     onChange={(e) => setPassword(e.target.value)} 
    />  <br /> <br />

     <input   type="phoneNumber" placeholder='phonenumber '  className='one'
    value={phoneNumber}
     onChange={(e) => setPhoneNumber(e.target.value)} 
    />  <br />  <br />
    
 
    <div className='juice'>
  
      <input type="checkbox" />
      <label htmlFor="termsCheck"> i agree to the terms and condition  
      </label>
      {/* <select name="" id=""> 
      <option value="" style={{textWrap:'wrap', width:'10rem'}}>
      </option>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quas quisquam dolor aliquid alias. Exercitationem praesentium tenetur velit sequi possimus?
      </select> */}
     
    </div>



 <div style={{textAlign:'center',}}>

<button style={{width:'50%', height:'4vh', backgroundColor:'cadetblue', border:'none', color:'white', margin:'5px' }}> signup </button> <br />  
</div>




<div className='hog' style={{display:'flex', gap:'5px', justifyContent:'center', margin:'10px' }}>
  <button  onClick={() => window .location. href= "https://google.com"}> <a href="google.com"></a> <FaGoogle/> Continue with Google</button> <br /> <br />
  <button> <FaApple/> Continue with Apple</button>
</div>

    
    </form>

    </div>


</div>

    </div>

  </div>

    </div>

</>
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
                      className="loader"
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

export default Signup;
