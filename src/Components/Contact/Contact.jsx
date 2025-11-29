import React from "react";
import "../Contact/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-header-img"></div>

      <div className="Contact_wrapper section">
        <small className="section_Heading">Reach out to us</small>
        <h2 className="section_Title">
          Send us a <span>Message</span>
        </h2>

        <div className="Contact">
          <div className="contact form_box">
            <h3>Contact Form</h3>
            <form>
              <div className="user_box">
                {/* <label>Full Name</label> */}
                <input
                  type="text"
                  className="field"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="user_box">
                {/* <label>Phone</label> */}
                <input
                  type="number"
                  className="field"
                  placeholder="+12157463321"
                  required
                />
              </div>
              <div className="user_box">
                {/* <label>Email</label> */}
                <input
                  type="email"
                  className="field"
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <div className="user_box">
                {/* <label>Your Message</label> */}
                <textarea
                  name=""
                  id=""
                  placeholder="Enter your Message"
                  required=""
                ></textarea>
              </div>
              <button className="btn-lg contact-btn" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/*   wrapper end */}
      </div>
    </>
  );
};

export default Contact;
