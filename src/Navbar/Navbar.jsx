import React, { useState } from "react";
import { Link } from "react-router-dom";
import bpit from "../assests/BPIT.png"
import LOGO from "../assests/LOGO.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

import "./Navbar.css";
const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleClass = () => {
    setIsExpanded(!isExpanded);

  };

  return (
    <nav className="navigation">
      <div className={isExpanded ? "container-div  mobile-i" : "container-div"}>
        <Link to="/">
          <img className="logo" src={LOGO} />
          {/* <img className="bpit" src={bpit} /> */}
        </Link>
        <button 
          className={isExpanded ? "hamburgerMenu close" : "hamburgerMenu"} id="border-none"
          onClick={toggleClass}
        >
          {isExpanded ? <RxCross1 /> : <GiHamburgerMenu />}
        </button>

        <div id="ham" className={isExpanded ? "items expanded" : "items"}>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li id="sponsors">
              <Link className="nav-link " to="/sponsors" id="sponsors" >
                Sponsors
              </Link>{" "}
            </li>
            <li id="team">
              {" "}
              <Link className="nav-link" to="/team">
                Team
              </Link>
            </li>
            <li  id="event">
              {" "}
              <Link className="nav-link" to="/event">
                Event
              </Link>
            </li>
            <li  id="event">
              {" "}
              <Link className="nav-link" to="/star">
                Know the Star
              </Link>
            </li>

            <li>
              {" "}
              <Link className="nav-link link" to="/event">
                REGISTER
              </Link>
            </li>
           

           
           
          </ul>
          
          
        </div>
        <div className="nav-content">
          <ul>
            <li id="links">
              <Link to="/event">EVENTS</Link>
            </li>
            <li id="links">
              <Link to="/sponsors">SPONSORS</Link>
            </li>
            <li id="links">
              <Link to="/team">TEAM</Link>
            </li>
            <li id="links">
              <Link to="/about">ABOUT</Link>
            </li>
            <li id="links">
              <Link to="/star">Know the Star</Link>
            </li>
            <li id="no-hover">
              <button type="button" className="btn btn-primary btn-sm">
                Register
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
