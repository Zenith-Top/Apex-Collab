import React from "react";
import "../Home/Home.css";
import Header from "../Header/Header";
import Amenities from "../Amenities/Amenities";

const Home = () => {
  return (
    <>
      <div className="app_container">
        <Header />
        <Amenities />
      </div>
    </>
  );
};

export default Home;
