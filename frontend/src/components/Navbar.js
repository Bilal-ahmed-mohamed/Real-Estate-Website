import React, { useState } from 'react'
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import { UseAuthContext } from '../hooks/UseAuthContext';
import {UseLogout} from '../hooks/UseLogout'

const  Navbar = () =>  {
const [menuStatus , setMenuStatus] = useState(true);
const [dropdownStatus , setDropdownStatus] = useState(true);
const {logout} = UseLogout()
const {user} = UseAuthContext();


const handleClick = () => {
  logout()
}
const toggleMenuStatus = () => {
  setMenuStatus(!menuStatus)
}

const toggleDropdownStatus = () => {
  setDropdownStatus(!dropdownStatus)
}

  return (

    <section className='navbar-section' >
    <nav className='navbar'>
       <span className='navbar-logo'>
        <MdHome size="2em" color='blue' />
         <h3>Real Estate</h3>
       </span>
       <div className='navbar-mobile'  style={{right: menuStatus ? '-100%' : "0" }} >
       <ul className='navbar-links' >
       <span>
        <Link to="/" > Home  </Link>
        <Link  onMouseOver={ toggleDropdownStatus }  to="/" > For Sale    </Link>
         <Link to = "/" >  For Rent  </Link>
        <Link to="/Agent" > Agent  </Link>
        <Link to="/AddProperty"> Add Listing </Link>  
       </span>
       </ul>

       <div className='navbar-buttons' >
         { user && (
           <div className='user-logged' >
              <span> <h3>{user.email}</h3> </span>
              <button onClick={handleClick} > logout </button>   
            </div> )
         }
         {
           !user && ( <div className='user-logged' >
               <button> <Link to="/Login"> Login  </Link>  </button>
               <button> <Link to="/Signup"> Signup  </Link> </button>
           </div> )
         }
       </div>
       </div>
          
       <div onClick={toggleMenuStatus} className='navbar-burger'>
        <div style={{transForm: menuStatus ? 'rotate(45deg)' : 'rotate(0)'}} ></div>
        <div></div>
        <div></div>
       </div>
      
    </nav>
    </section>
  )
}

export default Navbar
