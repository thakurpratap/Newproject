import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { Link  } from "react-router-dom";
import logo3 from "../Assets/logo.3.png";
import "./Dashboard.css";
import Cart from "./Cart";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Signin from "./Signin";
import Signup from "./Signup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

// import Dashboard from "./Dashboard";

function Navbar() {

  const { currentuser, logoutUser, cart } = useContext(UserContext);
  const [active, setActive] = useState("home");

  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState("center");

  const [signinVisible, setSigninVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);


  const handleLogout = () => {
    logoutUser();
    toast.success("Successfully logout");
    // navigate('/');
  };

  const show = (position) => {
    setPosition(position);
    setVisible(true);
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
            <Link className="links" to="/">
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
          {currentuser ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <button onClick={() => setSigninVisible(true)}>Login</button>
            </>
          )}

          <div className="flex flex-wrap justify-content-center gap-2 mb-2">
            <FontAwesomeIcon
              icon={faShoppingCart}
              label="Right"
              onClick={() => show("right")}
              className="carts"
              style={{ cursor: "pointer", fontSize: "24px" }}
            />
          </div>
          <div className="cart-count">{cart.length}</div>
        </div>
      </div>

      {/* <Dashboard/> */}
      <Dialog
        header="Signin"
        visible={signinVisible}
        style={{ width: "30vw" }}
        onHide={() => {
          if (!signinVisible) return;
          setSigninVisible(false);
        }}
      >
        <Signin
          setSigninVisible={setSigninVisible}
          setSignupVisible={setSignupVisible}
        />
      </Dialog>

      <Dialog
        header="Registration"
        visible={signupVisible}
        style={{ width: "40vw", maxHeight: "45vw" }}
        onHide={() => {
          if (!signupVisible) return;
          setSignupVisible(false);
        }}
      >
        <Signup
          setSigninVisible={setSigninVisible}
          setSignupVisible={setSignupVisible}
        />
      </Dialog>

      <Dialog
        header="Cart"
        visible={visible}
        position={position}
        style={{ width: "60vw", height: "100%" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <Cart />
      </Dialog>
    </>
  );
}

export default Navbar;
