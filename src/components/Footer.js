import React from 'react'
import {faFacebookF,faTwitter, faGithub, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'


function Footer() {
  return (
    <>
    <hr className='hr'/>
    <div className='footer'>
        <div className="footer-log">
            <img src="" alt="" />
        </div>
        <ul className='footer-link'>
            <li>Company</li>
            <li>Product</li>
            <li>offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

     <div className= " wrapper d-flex flex-row mb-5 justify-content-evenly" >
    <div className='icon facebooka'>
    <a href="https://www.facebook.com"  className="icon facebooka">
    <div className='tooltips'>Facebook</div>
    <span className='spa'><FontAwesomeIcon className="fonts" icon={faFacebookF}/> </span>
    </a>
    </div>

    <div className='icon twitter'>
    <a href="https://www.twitter.com" className="icon twitter">
    <div className='tooltips'>twitter</div>
    <span className='spa'><FontAwesomeIcon className="fonts" icon={faTwitter}/> </span>
    </a>
    </div>
    <div className='icon youtube'>
    <a href="https://www.youtube.com" className="icon youtube">
    <div className='tooltips'>youtube</div>
    <span className='spa'><FontAwesomeIcon className="fonts" icon={faYoutube}/> </span>
    </a>
    </div>
    <div className='icon github'>
    <a href="https://www.github.com" className="icon github">
    <div className='tooltips'>github</div>
    <span className='spa'><FontAwesomeIcon className="fonts" icon={faGithub}/> </span>
    </a>
    </div>
    <div className='icon instagram'>
    <a href="https://www.instagram.com"  className="icon instagram">
    <div className='tooltips'>instagram</div>
    <span className='spa'><FontAwesomeIcon className="fonts" icon={faInstagram}/> </span>
    </a>
    </div>
    </div> 
    
    </div>
    </>
  )
}

export default Footer