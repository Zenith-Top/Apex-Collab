import React, { useEffect, useState } from "react";
import "../ViewUsers/ViewUsers.css";
import { useNavigate, useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import axios from "axios";

const ViewUsers = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  let [error, setError] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://students-learning-api.onrender.com/api/auth/${id}`
        );
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (id) {
      fetchUserData();
    }
  }, [id]);

  if (loading) return <InfinitySpin color="#cb5c00" />;
  if (!user) return <h3>User Not Found</h3>;

  return (
    <>
      <div className="screen_con view">
        <div className="screen_wrapper">
          <h1>View Student</h1>

          <p>
            <span>ID: </span> {user._id}
          </p>
          <p>
            <span>Name: </span> {user.firstName} {user.lastName}
          </p>
          <p>
            <span>Email: </span> {user.email}
          </p>
          <button
            className="btn-lg screen-back-btn"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewUsers;
