import React, { useState } from 'react'
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";


const  Navbar = () =>  {
const [menuStatus , setMenuStatus] = useState(true);
const [dropdownStatus , setDropdownStatus] = useState(true);

const toggleMenuStatus = () => {
  setMenuStatus(!menuStatus)
}

const toggleDropdownStatus = () => {
  setDropdownStatus(!dropdownStatus)
}

  return (
    <navbar className='navbar' >
       <span className='navbar-logo'>
        <MdHome size="2em" color='blue' />
         <h3>Real Estate</h3>
       </span>
       <ul className='navbar-links' style={{right: menuStatus ? '-100%' : "0" }}>
         
       <span>
        <Link to="/" > Home  </Link>
        <Link  onMouseOver={ toggleDropdownStatus }  to="/" > For Sale 
            <ul style={{ visibility : dropdownStatus ? 'hidden' : 'visible' }}  className='navbar-dropdown'>
              <Link to= "/" > Houses For Sale  </Link>  <br />
              <Link to= "/" > Apartments For Sale  </Link> <br />
              <Link to= "/"  > Land For Sale  </Link>
            </ul>
         </Link>
         <Link to = "/" >  For Rent  </Link>
        <Link to="/Agent" > Agent  </Link>
        
       </span>

       <div className='navbar-buttons' >
         <button> <Link to="/Login"> Login  </Link>  </button>
         <button> <Link to="/Signup"> Signup  </Link> </button>
         <button> <Link to="/ContactUs"> Contact Us </Link>  </button>
       </div>
          
       </ul>

       <div onClick={toggleMenuStatus} className='navbar-burger'>
        <div style={{transForm: menuStatus ? 'rotate(45deg)' : 'rotate(0)'}} ></div>
        <div></div>
        <div></div>
       </div>
      
    </navbar>
  )
}

export default Navbar
