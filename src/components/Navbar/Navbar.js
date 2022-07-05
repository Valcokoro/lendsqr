import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
   return (
       <nav className="navbar">
           <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
               onClick = {() => setIsMobile(false)}
           >
               <Link to='/' className='login'>
                   <li>Login Page</li>
               </Link>
               <Link to='/users' className='userspage'>
                   <li>Users Page</li>
               </Link>
               <Link to='/userdetails' className='userdetails'>
                   <li>User Details</li>
               </Link>
               
           </ul>
           <button className='phone-menu-icon'
              onClick={ () => setIsMobile(!isMobile)} >
               {isMobile ? (
               <i className="times icon"></i> 
               )
               : (<i className="bars icon"></i>)}
           </button>
       </nav>
   )
}


export default Navbar;