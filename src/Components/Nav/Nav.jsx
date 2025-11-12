import React, { useEffect, useState } from "react";
import "../Nav/Nav.css";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";

const Nav = () => {
  const [isToggled, setIsToggled] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`nav_wrapper ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <Link to>
            <span>Apex</span>Hotels
          </Link>
        </div>

        <ul className={isToggled ? "showNav" : ""}>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Rooms</Link>
          </li>
          <li>
            <Link>Specials</Link>
          </li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
        </ul>

        <div className="nav_btns">
          <i
            id="menu_bar"
            onClick={() => {
              setIsToggled(!isToggled);
            }}
          >
            <FaBarsStaggered />
          </i>
          <button className=" btn-lg">Sign In</button>
          <button className=" btn-lg">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
