import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Link, useNavigate } from "react-router-dom";
import logo3 from "../Assets/logo.3.png";
import "./Dashboard.css";
// import Cart from "./Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { currentuser, logoutUser, cart} = useContext(UserContext);
  const [active, setActive] = useState("home");
 
  // currentuser = currentuser?.length>0 ? currentuser : JSON.parse(localStorage.getItem('users'))
  // console.log(currentuser);

  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    // navigate('/');
  };

  const handleLoginClick = () => {
    navigate("/signin");
  };

  const handleCartClick = () => {
    navigate('/cart')
    console.log("Handle Cart Click");
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
            {/* {currentuser ? "Welcome" + " " + currentuser.firstname : "" } */}
            {currentuser ? `Welcome ${currentuser.firstname}` : ""}

          </p>
          {currentuser? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={handleLoginClick}>Login</button>
          )}
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="carts"
            onClick={handleCartClick}
            style={{ cursor: "pointer", fontSize: "24px" }}
          />
          <div className="cart-count">{cart.length}</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
