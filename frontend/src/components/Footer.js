import React from 'react'
import { MdHome , MdFacebook } from "react-icons/md"
import { BsTwitter } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom";
const Footer = () => {
  return (

    <footer className='footer'>
        <div className='footer-half1'>

            <span className='footer-half1-section1'>
            <MdHome size="2em" color='blue' />
            <h3>Real Estate</h3>
            </span>
            <span className='footer-half1-section2'>
                <p>The shortest distance between paradise and the place you call home  </p>
            </span>
        </div>
        <div className='footer-half2'>
            <span className='footer-half2-section1'>
            <Link to="/" > Home  </Link>
            <Link to="/Agent" > Agent  </Link>
            <Link to="/Sales" > Sales  </Link>
            </span>
            <span className='footer-half2-section2'>
                <p>Follow Us</p>
                  <p> <MdFacebook/> </p>
                  <p> <BsTwitter/> </p>
                  <p> <FaInstagram/> </p>
                  
                  
                  
            </span>
        </div>
    </footer>
  )
}

export default Footer