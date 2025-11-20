import React, { useEffect, useState } from "react";
import "../Users/Users.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const api = "https://students-learning-api.onrender.com/api/auth";

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const res = await axios.get(api);
        console.log(res.data);
        setUsers(res.data);
        setLoading(false);
      } catch (error) {
        console.error(error.response.data.error);
        setError(error.response.data.error);
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  const deleteUser = async (_id) => {
    const confirm = windows.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirm) return;
    try {
      await axios.delete(
        `https://students-learning-api.onrender.com/api/auth/delete/${_id}`
      );
    } catch (error) {
      console.error(error);
      alert("Failed to delete user");
    }
  };

  if (loading) return <InfinitySpin color="#cb5c00" />;

  return (
    <>
      <div className="table-con">
        <div className="table_wrapper">
          <div className="table-header-img"></div>
          <div className="table-header">
            <h1>Student List</h1>
            <button className="btn-lg back-btn">
              <Link to="/specials">Back</Link>
            </button>
          </div>

          <div className="table_section">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {/* tbody */}
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>
                        {user.firstName} {user.lastName}
                      </td>
                      <td>{user.email}</td>
                      <td className="actions" align="center">
                        <button
                          className="btn-sm action-btn"
                          onClick={() => navigate(`/users/${user._id}`)}
                        >
                          View
                        </button>
                        <button
                          className="btn-sm action-btn"
                          onClick={() => navigate(`/users/edit/${user._id}`)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn-sm action-btn"
                          onClick={() => deleteUser(user._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} align="center">
                      <h2>No Users Found</h2>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
