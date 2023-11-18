import React, { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from '../assests/LOGO.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

import "./Navbar.css";
const Navbar = () => {
  const[isExpanded , setIsExpanded] = useState(false);

  const toggleClass = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navigation">
      <div className={isExpanded ? "container-div  mobile-i" : "container-div"}>
      <Link to = "/">
         <img className='logo' src= {LOGO}/>
         </Link>
        <button className={isExpanded ? "hamburgerMenu close" : "hamburgerMenu"} 
        onClick={toggleClass}>
        {isExpanded ? <RxCross1 /> : <GiHamburgerMenu />}
        </button>

        <div id="ham" className={isExpanded ? "items expanded" : "items"}>
          <ul>
            <li>
          <Link to="/about">
           About
         </Link> 
</li>
<li>
         <Link className="nav-link" to='/sponsors'>Sponsors</Link>   </li>      
     <li>   <Link className="nav-link" to= '/team'>Team</Link></li>
        <li> <Link className='nav-link' to='/event'>
            Event
          </Link></li>
          </ul>
          <button type="button" class="btn btn-primary">
          Register now
        </button>
        </div>
        <div className="nav-content">
          <ul>
            <li>
              <Link to="/event">EVENTS</Link>
            </li>
            <li>
              <Link to="/sponsors">SPONSORS</Link>
            </li>
            <li>
              <Link to="/team">TEAM</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
            <button type="button" class="btn btn-primary btn-sm">
          Register now
        </button>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;


// import React, {useState} from 'react';
// import './Navbar.css';
// import LOGO from '../Linkssests/LOGO.png'
// import { Link } from 'react-router-dom';
// import { GiHamburgerMenu } from "react-icons/gi";
// import { RxCross1 } from "react-icons/rx";

// const Navbar = () => {
//         const[isExpanded , setIsExpanded] = useState(false);
      
//         const toggleClass = () => {
//           setIsExpanded(!isExpanded);
//         };
      
//   return (
//     <nav className="navbar">
//         <div className={isExpanded ? "container-div  mobile-i" : "container-div"}>
//       {/* <div className="navcontainer"> */}
        
//         <Link to = "/">
//           <img className='logo' src= {LOGO}/>
//         </Link>
//         <button className={isExpanded ? "hamburgerMenu close" : "hamburgerMenu"} 
//         onClick={toggleClass}>
//         {isExpanded ? <RxCross1 /> : <GiHamburgerMenu />}
//         </button>
        
//         <div  className="nav-links">
//         <div id="ham" className={isExpanded ? "items expanded" : "items"}>
//           <a className="nav-link" href="#event">
//             About
//           </Link> 
//           <Link className="nav-link" to='/sponsors'>Sponsors</Link>         
//           <Link className="nav-link" to= '/team'>Team</Link>
//           <Link className='nav-link' to='/event'>
//             Event
//           </Link>
//         </div>
//         </div>
//         <div className="nav-content">
//           <ul>
//             <li>
//               <Link to="/sponsors">EVENTS</Link>
//             </li>
//             <li>
//               <Link to="/sponsors">SPONSORS</Link>
//             </li>
//             <li>
//               <Link to="/sponsors">TEAM</Link>
//             </li>
//             <li>
//               <Link to="/sponsors">ABOUT</Link>
//             </li>
//           </ul>
//         </div>
//         <button className="register-btn">Register Now</button>
//       </div>
//         {/* </div> */}
//     </nav>
//   );
// };

// export default Navbar;
