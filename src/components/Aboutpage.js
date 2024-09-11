import React from "react";
import offerbanner3 from "../Assets/ele3.png";
import "./Aboutpage.css";
import { Link } from "react-router-dom";

function Aboutpage() {
  return (
    <>
      <div className="about-section">
        <h1>About Us</h1>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 carousel-img"
              src={offerbanner3}
              alt="First slide"
            />
          </div>
        </div>

        <div className="about-content">
          <div className="card">
            <h1>Who We Are</h1>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet.
            </h6>
          </div>
          <div className="card">
            <h1>Our Mission</h1>
            <h6>
              Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin
              ut ligula vel nunc egestas porttitor.
            </h6>
          </div>
        </div>

        <div className="call-to-action">
          <h1>Want to Know More?</h1>
          <button className="btn btn-primary">
            <Link className="links" to="/contactpage">
              Contact Us
            </Link>
          </button>
        </div>

      </div>


     
    </>
  );
}

export default Aboutpage;
