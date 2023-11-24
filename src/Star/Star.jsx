import React from 'react'
import "./Star.css"
import Akhil from "../assests/Akhil.jpg"
import location from "../assests/location.png"
import calender from "../assests/calendar-icon.png"
import clock from "../assests/clock.png"
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
            <img className="star-icons" src={location}/>
            </div>
            <div>
            <img className="star-icons" src={clock}/>
            
            </div>
            <div>
            <img className="star-icons" src={calender}/>
            </div>
            </div>
            </div>
            <h1> Akhil Sachdeva</h1>
            
    </div>
  )
}
