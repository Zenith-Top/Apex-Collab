import React from "react";
import "../Home/Home.css";
import Header from "../Header/Header";
import Amenities from "../Amenities/Amenities";
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <>
      <div className="app_container">
        <Header />
        <Amenities />
        <Contact />
        
      </div>
    </>
  );
};

export default Home;
