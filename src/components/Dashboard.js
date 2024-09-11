import React from "react";
import SaleBanner from "../Assets/sale.png";
import "./Dashboard.css";
import Aboutpage from "./Aboutpage";

function Dashboard() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 carousel-img"
              src={SaleBanner}
              alt="First slide"
            />
          </div>
          {/* <div className="carousel-item">
      <img className="d-block w-100 carousel-img" src={product4} alt="Second slide"/>
    </div> */}
          {/* <div className="carousel-item">
      <img className="d-block w-100 carousel-img" src={product5} alt="Third slide"/>
    </div> */}
          {/* <div className="carousel-item">
      <img className="d-block w-100 carousel-img" src={product4} alt="Third slide"/>
    </div> */}
          {/* <div className="carousel-item"> 
      <img className="d-block w-100 carousel-img" src={product5} alt="Third slide"/>
    </div> */}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="contain">
        <div className="name">
          <div className="num">
            <h5>01</h5>
            <h1>Order Online</h1>
            <div className="tex">
              <h6>
                Share some details here. This is
                <br /> Flexible section where you can
                <br /> share anything you want.
              </h6>
            </div>
          </div>

          <div className="num">
            <h5>02</h5>
            <h1>Free Shipping</h1>
            <div className="tex">
              <h6>
                Share some details here. This is Flexible section where you can
                share anything you want.
              </h6>
            </div>
          </div>

          <div className="num">
            <h5>03</h5>
            <h1>More Freshness</h1>
            <div className="tex">
              <h6>
                Share some details here. This is Flexible section where you can
                share anything you want.
              </h6>
            </div>
          </div>

          <div className="num">
            <h5>04</h5>
            <h1>Safe Payment</h1>
            <div className="tex">
              <h6>
                Share some details here. This is Flexible section where you can
                share anything you want.
              </h6>
            </div>
          </div>
        </div>
      </div>
      <Aboutpage />
    </>
  );
}

export default Dashboard;
