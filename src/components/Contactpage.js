import React from "react";
import conbanner1 from "../Assets/con1.png";
import "./contact.css";

function Contactpage() {
  return (
    <>
      <div className="contact-section">
        <h1>CONTACT_US</h1>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 carousel-img"
              src={conbanner1}
              alt="First slide"
            />
          </div>
        </div>

        <div className="map">
          <div className="google-map-code">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
              width="600"
              height="450"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>

          <div className="contact-form">
            <div className="containers">
              <form>
                <h1>Contact Us</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                  <div className="field">
                    <label>First name</label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="Firstname"
                    />
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="field">
                    <label>Address</label>
                    <input type="password" placeholder="Address" />
                  </div>
                  <button className="fluid ui button blue">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactpage;
