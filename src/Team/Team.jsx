import {React, useState} from 'react'
import doge from '../assests/doge.png'
import './Team.css'

export default function Team() {
    
  return (
    <div className='team'> 
        <div className="subteam">
           THE DREAM TEAM
        </div>
        <div className="container">
        <div className="profile">
            <div className='profile-image'><img className="image" src={doge} alt="team"></img></div>
            <div className='text'>
              <h2>Doge</h2>
              <h4 >designation</h4>
            </div>
        </div>
        <div className="profile">
          <div className='profile-image'><img className="image" src={doge} alt="team"></img></div>
          <div className='text'>
            <h2>Doge</h2>
            <h4 >designation</h4>
          </div>
        </div>
        {/* tech divv */}
        <div className="tech-content">
        <h4>Tech Team</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={doge} alt="img" />
            </div>
            <div className="text">
                    <h4>Sher Billu</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={doge} alt="img" />
             </div>
             <div className="text">
                    <h4>Sher Billu</h4>
                    <h6>Head</h6>
            </div>
          </div>
        </div>
        </div>
        
         {/* Graphics Team */}
         <div className="tech-content">
        <h4>Graphics Team</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={doge} alt="img" />
            </div>
            <div className="text">
                    <h4>Sher Billu</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={doge} alt="img" />
             </div>
             <div className="text">
                    <h4>Sher Billu</h4>
                    <h6>Head</h6>
            </div>
          </div>
        </div>
        </div>
        

         {/* Content Team */}
         <div className="tech-content">
        <h4>Content Team</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={doge} alt="img" />
            </div>
            <div className="text">
                    <h4>Sher Billu</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={doge} alt="img" />
             </div>
             <div className="text">
                    <h4>Sher Billu</h4>
                    <h6>Head</h6>
            </div>
          </div>
        </div>
        </div>

         {/* Event team  */}
         <div className="tech-content">
        <h4>Event Team</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={doge} alt="img" />
            </div>
            <div className="text">
                    <h4>Sher Billu</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={doge} alt="img" />
             </div>
             <div className="text">
                    <h4>Sher Billu</h4>
                    <h6>Head</h6>
            </div>
          </div>
        </div>
        </div>
        {/* Sponsorship */}
        <div className="tech-content">
        <h4>Sponsorship Team</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={doge} alt="img" />
            </div>
            <div className="text">
                    <h4>Sher Billu</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={doge} alt="img" />
             </div>
             <div className="text">
                    <h4>Sher Billu</h4>
                    <h6>Head</h6>
            </div>
          </div>
        </div>
        </div>

        {/* Decor Team */}
        <div className="tech-content">
        <h4>Decor Team</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={doge} alt="img" />
            </div>
            <div className="text">
                    <h4>Sher Billu</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={doge} alt="img" />
             </div>
             <div className="text">
                    <h4>Sher Billu</h4>
                    <h6>Head</h6>
            </div>
          </div>
        </div>
        </div>
          
        </div>
    </div>
    
  
  )
}
