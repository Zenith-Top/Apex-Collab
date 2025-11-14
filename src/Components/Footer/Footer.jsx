import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer_wrapper section">
        <div className="footer_links">
          <div className="logo">
            <h2>Apex Hotels</h2>
            <p>Best hotel franchise in the country. </p>
            <p>
              Home to the best hotels, resorts, restaurants spa and bars across
              the country, guaranteed to give the best customer experience.
            </p>
            <div>
              <i className="icons">
                <FaFacebook />
              </i>
              <i className="icons">
                <FaSquareInstagram />
              </i>
              <i className="icons">
                <AiFillTikTok />
              </i>
              <i className="icons">
                <FaSquareXTwitter />
              </i>
            </div>
          </div>
        </div>
        <div className="footer_links">
          <h3>Quick Links</h3>
          <p>
            <Link>Home</Link>
          </p>
          <p>
            <Link>About</Link>
          </p>
          <p>
            <Link>Contact Us</Link>
          </p>
          <p>
            <Link>Rooms</Link>
          </p>
          <p>
            <Link>Specials</Link>
          </p>
          <p>
            <Link>Gym</Link>
          </p>
          <p>
            <Link>Restaurants</Link>
          </p>
        </div>
        <div className="footer_links">
          <h3>City Branches</h3>
          <p>
            <Link>Owerri</Link>
          </p>
          <p>
            <Link>Abuja</Link>
          </p>
          <p>
            <Link>Lagos</Link>
          </p>
          <p>
            <Link>Aba</Link>
          </p>
          <p>
            <Link>Port Harcourt</Link>
          </p>
          <p>
            <Link>Enugu</Link>
          </p>
          <p>
            <Link>Illorin</Link>
          </p>
        </div>
        <div className="footer_links">
          <h3>Contact</h3>
          <p>Apex Hotels HQ</p>
          <p>
            Address:
            <span>
              NO. 5 Heaven Street, City of Gold, Owerri, Imo state, Nigeria
            </span>
          </p>
          <p>
            Email: <span>apexhotelshq@gmail.com</span>
          </p>
          <p>
            Phone: <span>+234 807 758 215</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
