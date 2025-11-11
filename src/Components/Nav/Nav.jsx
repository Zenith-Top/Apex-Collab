import React, { useState } from "react";
import "../Nav/Nav.css";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";

const Nav = () => {
  const [isToggled, setIsToggled] = useState(false);

  //   const handleToggle = () => {
  //     setIsToggled((prevIsToggled) => !prevIsToggled);
  //   };

  return (
    <>
      <div className="app_container">
        <div className="nav_wrapper">
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
              <Link>Contact</Link>
            </li>
            <li>
              <Link>Specials</Link>
            </li>
            <li>
              <Link>About</Link>
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
      </div>
    </>
  );
};

export default Nav;
