import React from "react";
import "../Users/Users.css";
import { Link } from "react-router-dom";

const Users = () => {
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
              <td>1.</td>
              <td>Name</td>
              <td>abc2GAMAIL.COM</td>
              <td>
                <button
                  className="btn-sm action-btn"
                  // onClick={() => navigate(`/viewStudent/${student.id}`)}
                >
                  View
                </button>
                <button
                  className="btn-sm action-btn"
                  // onClick={() => navigate(`/editStudent/${student.id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn-sm action-btn"
                  // onClick={() => navigate(`/deleteStudent/${student.id}`)}
                >
                  Delete
                </button>
              </td>
            </tbody>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
