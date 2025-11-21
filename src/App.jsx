import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import RoomsRating from "./Components/RoomsRating/RoomsRating";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <RoomsRating />
      <Footer />
    </>
  );
}

export default App;
