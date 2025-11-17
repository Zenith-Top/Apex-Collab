import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
// import RoomsRating from "./Components/RoomsRating/RoomsRating";
import Login from "./Screens/Login/Login";
import Register from "./Screens/Register/Register";
import Amenities from "./Components/Amenities/Amenities";
import Contact from "./Components/Contact/Contact";
import Book from "./Screens/Book/Book";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<Login />} />
        <Route path="/sign_up" element={<Register />} />
        {/* <Route path="/rooms" element={<RoomsRating />} /> */}
        <Route path="/specials" element={<Footer />} />
        <Route path="/about" element={<Amenities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
      </Routes>

      {/* <Home /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
