import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Link, useNavigate } from "react-router-dom";
import logo3 from "../Assets/logo.3.png";

import Carticon from "../Assets/cart_icon.png";
import "./Dashboard.css";

function Navbar() {
  const { currentuser, logoutUser } = useContext(UserContext);
  const [active, setActive] = useState("home");
  console.log(currentuser);

  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    // navigate('/');
  };

  const handleLoginClick = () => {
    navigate("/signin");
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo3} alt="" className="img" />
          {/* <h6 className='website'>Electronic Shop</h6> */}
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => setActive("home")}
            className={active === "home" ? "active" : ""}
          >
            {" "}
            <Link className="links" to="/dashboard">
              Home
            </Link>
          </li>
          <li
            onClick={() => setActive("about")}
            className={active === "about" ? "active" : ""}
          >
            <Link className="links" to="/aboutpage">
              About
            </Link>
          </li>
          <li
            onClick={() => setActive("shop")}
            className={active === "shop" ? "active" : ""}
          >
            <Link className="links" to="/shoppage">
              Shop
            </Link>
          </li>
          <li
            onClick={() => setActive("contact")}
            className={active === "contact" ? "active" : ""}
          >
            <Link className="links" to="/contactpage">
              Contact
            </Link>
          </li>
        </ul>
        <div className="login">
          <p class="navbar-brand">
            {currentuser ? "Welcome" + " " + currentuser.firstname : ""}
          </p>
          {currentuser ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={handleLoginClick}>Login</button>
          )}
          <img src={Carticon} alt="" className="cart" />
          <div className="cart-count">0</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
