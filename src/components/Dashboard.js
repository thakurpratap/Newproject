import React from "react";
import SaleBanner from "../Assets/sale.png";
// import products5 from "../Assets/3rdpage.png"
// import products2 from "../Assets/4thpage.png"
// import products3 from "../Assets/5thpage.png"
// import products4 from "../Assets/1stpage.png"

// import products5 from "../Assets/ele1.png"
import products2 from "../Assets/ele8.png"
import products3 from "../Assets/ele5.png"
// import products4 from "../Assets/ele4.png"

import "./Dashboard.css";
import Aboutpage from "./Aboutpage";
import shipment4 from "../Assets/distribution.png";
import Best from "../Assets/best.png";
import shopbag from "../Assets/order.png";
import payment from "../Assets/credit-card.png";

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
      <img className="d-block w-100 carousel-img" src={products5} alt="Third slide"/>
    </div> */}
    <div className="carousel-item"> 
      <img className="d-block w-100 carousel-img" src={products2} alt="Third slide"/>
    </div>
    <div className="carousel-item"> 
      <img className="d-block w-100 carousel-img" src={products3} alt="Third slide"/>
    </div>
    {/* <div className="carousel-item"> 
      <img className="d-block w-100 carousel-img" src={products4} alt="Third slide"/>
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
            <h5>
              01 <img src={shopbag} className="icons" alt="" />
            </h5>
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
            <h5>
              02 <img src={shipment4} className="icons" alt="" />
            </h5>
            <h1>Free Shipping</h1>
            <div className="tex">
              <h6>
                Share some details here. This is Flexible section where you can
                share anything you want.
              </h6>
            </div>
          </div>

          <div className="num">
            <h5>
              03 <img src={Best} className="icons" alt="" />
            </h5>
            <h1>Quality Products</h1>
            <div className="tex">
              <h6>
                Share some details here. This is Flexible section where you can
                share anything you want.
              </h6>
            </div>
          </div>

          <div className="num">
            <h5>
              04 <img src={payment} className="icons" alt="" />
            </h5>
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
