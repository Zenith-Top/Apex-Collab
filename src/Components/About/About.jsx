import "../About/About.css";
import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";

import React from "react";

const About = () => {
  return (
    <>
      <div className="about-header-img"></div>
      <div className="about_wrapper section">
        <small className="section_Heading">Luxury Amenities</small>
        <h2 className="section_Title">
          About <span>Us</span>
        </h2>

        <div className="about_content">
          <main>
            {/* < Company Info Section  */}
            <section id="company-info">
              <h2>Our Story</h2>
              <p>
                Welcome to Apex Hotels! We are dedicated to providing
                top-quality services to our clients. Our mission is to deliver
                excellence and build long-lasting relationships with everyone we
                work with.
              </p>
            </section>

            {/* Mission & Vision Section */}
            <section id="mission-vision">
              <h2>Mission & Vision</h2>
              <p>
                <strong>Mission:</strong> To serve our clients with integrity,
                professionalism, and innovation.
              </p>
              <p>
                <strong>Vision:</strong> To become a leading company known for
                exceptional service and trusted partnerships.
              </p>
            </section>

            {/* Team Section  */}
            <section id="team">
              <h2>Meet Our Team</h2>
              <div className="team-member">
                <img src={team1} alt="Team Member" />
                <h4>Apex Hotels - CEO</h4>
                <p>
                  Zenith leads our company with passion and expertise, ensuring
                  top-quality service.
                </p>
              </div>
              <div className="team-member">
                <img src={team2} alt="Team Member" />
                <h4>Adaobi & Co - CTO</h4>
                <p>
                  Adaobi & Co drives innovation and ensures our technology is
                  always ahead of the curve.
                </p>
              </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials">
              <h2>What Our Clients Say</h2>
              <div className="testimonial">
                <p>
                  "This Hotel transformed our business with their topnotch
                  apartments convinent for any type of business! Highly
                  professional and reliable."
                </p>
                <h4>- Sarah Marcel</h4>
              </div>
              <div className="testimonial">
                <p>
                  "Amazing service and support. I would recommend them to anyone
                  anytime, anyday,anymoment."
                </p>
                <h4>- Ibekwe Victor</h4>
              </div>
              <div className="testimonial">
                <p>
                  "The team is knowledgeable and always delivers on time.
                  Excellent experience!"
                </p>
                <h4>- Nwaribe Anthony</h4>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default About;
