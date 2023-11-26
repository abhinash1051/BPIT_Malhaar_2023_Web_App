import React from 'react'
import "./Star.css"
import Akhil from "../assests/Akhil.png"
import location from "../assests/1.png"
import calender from "../assests/3.png"
import clock from "../assests/2.png"
import page from "../assests/page1.jpg"
import page2 from "../assests/page2.jpg"
import solo from "../assests/solo.png"
export default function Star() {
  return (
    <div className='starpage'>
        <div className='content-star'>
        <img className="star-bg" src={Akhil}/>
        
        <p>Akhil Sachdeva, the acclaimed Indian musician, singer, and composer, gained recognition as the lead vocalist of the 
            Delhi-based band Nasha in 2009. His Bollywood journey took flight when his song "Humsafar" was featured in the film 
            "Badrinath Ki Dulhania." Graduating with Honours in Economics from Delhi College of Arts & Commerce, University of Delhi,
             Sachdeva's versatile talent shines through in his globally acclaimed track "Tera Ban Jaunga" from the film "Kabir Singh." 
             Managed by Mourjo Chatterjee of On Stage Talents, he continues to captivate audiences with his emotive vocals 
             and impactful compositions, solidifying his position in the realm of music.</p>
            
            <div className='image-icon'>
                <div>
            <img className="star-icons" src={location}/>   BPIT
            </div>
            <div>
            <img className="star-icons" src={clock}/>    7:00 p.m.
            
            </div>
            <div>
            <img className="star-icons" src={calender}/>    1st December
            </div>
            <div>
              <button className='pass-button' src = " www.puneetstar.com">Get Your Passes</button>
            </div>
            </div>
            </div>
            <div className='main-content'>
              {/* <img className="side-pic" src = {page}/> */}
            <h1>   Akhil <br /> Sachdeva</h1>
            {/* <img className='side-pic' src = {page2}/> */}
            </div>
            
    </div>
  )
}
