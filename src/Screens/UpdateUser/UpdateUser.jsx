import React, { useState } from 'react'
import '../UpdateUser/UpdateUser.css'
import { useNavigate, useParams } from 'react-router-dom'
import { InfinitySpin } from 'react-loader-spinner';
import axios from 'axios';

const UpdateUser = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const payload = { firstName, lastName, email };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = axios.put(
                `https://students-learning-api.onrender.com/api/auth/update/${id}`,
                payload
            );
            console.log(res.response);
            setLoading(false);
            navigate("/student_list");
            // setTimeout(() => navigate(-1), 1500)
        }   catch (error) {
            console.error(error);
            setError(error);
            setLoading(false);
        }
    };
  return (
    <>
    <div className="screen_con update">
        <div className="screen_wrapper"> 

            <div className="page">
                <h2> Update Student</h2>
                <small>Update your student details</small>

                <form className='update-form' onSubmit={handleUpdate}>
            <div className='project'>
              {/* <label>Full Name</label> */}
              <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}className='field' placeholder='Enter your fisrt name'  />
            </div> 
            <div className='project'>
              {/* <label>Phone</label> */}
              <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}className='field' placeholder='Enter your last name' />
            </div> 
            <div className='project'>
              {/* <label>Ema il</label> */}
              <input type='email'value={email} onChange={(e) => setEmail(e.target.value)}className='field' placeholder='Enter your Email'  />
            </div> 

            <div className="btnss">
              <button className="Keyholder" type='submit'>{loading ? <InfinitySpin/> : "Update"}</button>
              <button className="interest" type='submit' onClick={() => navigate(-1)}>Cancel</button>
            </div>
            
          </form>
                
            </div>
            

        </div>
    </div>
    </>
  );
};

export default UpdateUser;
