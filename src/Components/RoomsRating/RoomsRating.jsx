import React from 'react'
import "../RoomsRating/RoomsRating.css"
import { useNavigate } from 'react-router-dom'

const RoomsRating = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="room-header-img"></div>
    <div className='wholebody section'>
      <small className="section_Heading">Luxury Rooms</small>
        <h2 className="section_Title">
          Our Best <span>Rooms</span>
        </h2>

                <div className="Rooms_Class_Container">
                  {/* grid begins */}
                  <div className="img1"></div>
                  <div className="room-content">
                    <small className="section_Heading">$50 | NIGHT</small>
                <h2 className="section_Title">Standard <span>Rooms</span></h2>

                    <ul className="Standard_Amenities">
                    <h3>Amenities</h3>
                    <li>Single bed</li>
                    <li>Private bathroom</li>
                    <li>Fan</li>
                    <li>TV</li>
                    <li>Free Wi-Fi</li>
                </ul>

                <button className="btn-sm room-btn" onClick={() => navigate('/book')}>Book Now</button>
                  </div>

                  <div className="room-content">
                    <small className="section_Heading">$80 | NIGHT</small>
                <h2 className="section_Title">Deluxe <span>Rooms</span></h2>

                <ul className="Deluxe_Amenities">
                    <h3>Amenities</h3>
                    <li>Queen bed</li>
                    <li>Private bathroom with hot water</li>
                    <li>Air Conditioning</li>
                    <li>TV</li>
                    <li>Free Wi-Fi</li>
                </ul>

                <button className="btn-sm room-btn" onClick={() => navigate('/book')}>Book Now</button>
                  </div>
                  <div className="img2"></div>


                  <div className="img3"></div>
                  <div className="room-content">
                    <small className="section_Heading">$120 | NIGHT</small>
                <h2 className="section_Title">Family <span>Rooms</span></h2>

                <ul className="Family_Amenities">
                    <h3>Amenities</h3>
                    <li>Two double beds or bunk beds</li>
                    <li>Two bathrooms with hot water</li>
                    <li>Air Conditioning</li>
                    <li>TV</li>
                    <li>Free Wi-Fi</li>
                </ul>

                <button className="btn-sm room-btn" onClick={() => navigate('/book')}>Book Now</button>
                  </div>

                  <div className="room-content">
                    <small className="section_Heading">$200 | NIGHT</small>
                <h2 className="section_Title">Premium <span>Rooms</span></h2>

                <ul className="Premium_Amenities">
                    <h3>Amenities</h3>
                    <li>Queen bed</li>
                    <li>private bathroom with hot water</li>
                    <li>Air Conditioning</li>
                    <li>Smart TV</li>
                    <li>Free Wi-Fi</li>
                    <li>Workspace / Desk</li>
                </ul>

                <button className="btn-sm room-btn" onClick={() => navigate('/book')}>Book Now</button>
                  </div>
                  <div className="img4"></div>                  

                  <div className="img5"></div>
                  <div className="room-content">
                    <small className="section_Heading">$300 | NIGHT</small>
                <h2 className="section_Title">Exclusive <span>Rooms</span></h2>

                <ul className="Exclusive_Amenities">
                    <h3>Amenities</h3>
                    <li>King-size bed</li>
                    <li>Private balcony with view</li>
                    <li>Jacuzzi / bathtub</li>
                    <li>Smart TV with streaming</li>
                    <li>Mini-bar</li>
                    <li>24/7 Room service</li>
                </ul>

                <button className="btn-sm room-btn" onClick={() => navigate('/book')}>Book Now</button>
                  </div>

                  <div className="room-content">
                    <small className="section_Heading">$2000 | NIGHT</small>
                <h2 className="section_Title">Presidential <span>Rooms</span></h2>

                <ul className="Presidential_Amenities">
                    <h3>Amenities</h3>
                    <li>Bedroom & Living area</li>
                    <li>Bathroom & Wellness</li>
                    <li>View & Outdoor Space</li>
                    <li>Entertainment & Technology</li>
                    <li>Food & Beverage</li>
                    <li>Services & Extras</li>
                </ul>

                <button className="btn-sm room-btn" onClick={() => navigate('/book')}>Book Now</button>
                  </div>
                  <div className="img6"></div>
                  {/* grid-end */}
                </div>
        </div>
  </>  
  )
}

export default RoomsRating