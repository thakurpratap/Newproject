import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png'
import Carticon from '../Assets/cart_icon.png'
import product1 from '../Assets/1stpage.png'
import product2 from '../Assets/2ndpage.png'
import product3 from '../Assets/3rdpage.png'
import product4 from '../Assets/4thpage.png'
import product5 from '../Assets/5thpage.png'
import './Dashboard.css';



function Dashboard() {
    const { currentuser, logoutUser} = useContext(UserContext);
    const [active, setActive] = useState("home")
    console.log(currentuser);

    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        navigate('/');
    };

    return (
        <>
         <div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" className='img'/>
            <h5 >Electronic Shop</h5>
        </div>
        <ul className='nav-menu'>
        {/* <li onClick={()=> setActive('home')} className={active === 'home' ? 'active' : ''}>home</li> */}
        {/* <li onClick={()=> setActive('home')}  style={{ color: active === 'home' ? 'orange' : 'black' }}> <Link to='/homepage' className='link' >Home</Link></li> */}
          <li onClick={()=> setActive('home')} className={active === 'home' ? 'active' : ''}> <Link className={active === 'home' ? 'active' : ''} style={{textDecoration : 'none'}} to='/dashboard' >Home</Link></li>
          <li onClick={()=> setActive('about')} className={active === 'about' ? 'active' : ''}><Link style={{textDecoration : 'none'}} to='/aboutpage'>About</Link></li>
          <li onClick={()=> setActive('shop')} className={active === 'shop' ? 'active' : ''}><Link style={{textDecoration : 'none'}} to='/shoppage'>Shop</Link></li>
          <li onClick={()=> setActive('contact')} className={active === 'contact' ? 'active' : ''}><Link style={{textDecoration : 'none'}} to='/contactpage'>Contact</Link></li>
        </ul>
        <div className='login'>
        <p class="navbar-brand">Welcome, {currentuser ? currentuser.firstname : 'Guest' }!</p>
        <button onClick={handleLogout}>Logout</button>
        <img src={Carticon} alt="" className='cart'/>
        <div className="cart-count">0</div>
        </div>
    </div>

    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 carousel-img" src={product1} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 carousel-img" src={product2} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 carousel-img" src={product3} alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 carousel-img" src={product4} alt="Third slide"/>
    </div>
    <div className="carousel-item"> 
      <img className="d-block w-100 carousel-img" src={product5} alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

<div className="contain">
  <div className="name">

    <div className="num">
    <h5>01</h5>
    <h1>Order Online</h1>
    <div className="tex">
    <h6>Share some details here. This is
    <br/> Flexible section where you can 
    <br/> share anything you want.</h6>
      </div>
    </div>

    <div className="num">
    <p>02</p>
    <h1>Free Shipping</h1>
    <div className="tex">
    <h6>Share some details here. 
    This is Flexible section where 
    you can share anything you want.</h6>
      </div>
    </div>

    <div className="num">
    <p>03</p>
    <h1>More Freshness</h1>
    <div className="tex">
    <h6>Share some details here. This is Flexible section where you can share anything you want.</h6>
      </div>
    </div>

    <div className="num">
    <p>04</p>
    <h1>Safe Payment</h1>
    <div className="tex">
    <h6>Share some details here. This is Flexible section where you can share anything you want.</h6>
      </div>
    </div>

  </div>
</div>
    </>
    );
}

export default Dashboard;




   /* <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 h-50" src={Carticon} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 h-50" src={Carticon} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
</div> */