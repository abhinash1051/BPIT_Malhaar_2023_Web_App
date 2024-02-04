import {React, useState} from 'react'

import punee from '../assests/punee.png'
import harshit from '../assests/harshit.jpg'


import Sorav from '../assests/sorav.png'
import Kisley from '../assests/kisley.jpeg'
import ayush from '../assests/ayush.jpeg'
import Lakshay from '../assests/lAKSHAY.jpg'
import aman from '../assests/aman.jpg'
import amritansh from '../assests/amritansh.png'
import harshit2 from '../assests/harshit2.jpg'
import kartix from '../assests/kartix.jpg'
import nishant from '../assests/nishant.jpg'
import Anurag from '../assests/anurag.jpg'
import Cherish from '../assests/cherish.png'
import priyanka from '../assests/priyanka.jpg'
import divyansh from '../assests/divyansh.jpeg'
import doge from '../assests/doge.png'
import './Team.css'
import Footer from '../Footer/Footer'
import { Form } from 'react-router-dom'

export default function Team() {
    
  return (
    
    <div className='team'> 
        <div className="subteam">
           THE DREAM TEAM
        </div>
        <div className="cont">
          <div className='first-card'>
        <div className="profile">
            <div className='profile-image'><img className="image" src="#" alt="team"></img></div>
            <div className='text'>
            <h2>Randhir Shah</h2>
            <h4>(President)</h4>
            </div>
        </div>
        <div className="profile">
          <div className='profile-image'><img className="image" src={Sorav} alt="team"></img></div>
          <div className='text'>
        <h2> Sorav Gupta</h2>
            <h4>(Vice President)</h4>
          </div>
        </div>
        </div>

      
         {/* tech divv */}

        <div className='second-cards'>
        <div className="tech-content">
        <h4>Tech Team</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={Cherish} alt="img" />
            </div>
            <div className="text">
                    <h4>Cherish</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={Anurag} alt="img" />
             </div>
             <div className="text">
                    <h4>Anurag Sharma</h4>
                    <h6> vice Head</h6>
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
                <img src={priyanka} alt="img" />
            </div>
            <div className="text">
                    <h4>Priyanka Chakraborty</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={nishant} alt="img" />
             </div>
             <div className="text">
                    <h4>Nishant Jindal</h4>
                    <h6> Vice Head</h6>
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
                <img src={punee} alt="img" />
            </div>
            <div className="text">
                    <h4>Mehar Heer</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={punee} alt="img" />
             </div>
             <div className="text">
                    <h4>Tithi Jain</h4>
                    <h6> Vice Head</h6>
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
                <img src={kartix} alt="img" />
            </div>
            <div className="text">
                    <h4>Kartik Jain</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={harshit2} alt="img" />
             </div>
             <div className="text">
                    <h4>Harshit Banswal </h4>
                    <h6> vice Head</h6>
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
                <img src={aman} alt="img" />
            </div>
            <div className="text">
                    <h4>Amaan</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={amritansh} alt="img" />
             </div>
             <div className="text">
                    <h4>Amritansh</h4>
                    <h6> vice Head</h6>
            </div>
          </div>
        </div>
        </div>

        

        {/* production */}
        <div className="tech-content">
        <h4>Production Team</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={Lakshay} alt="img" />
            </div>
            <div className="text">
                    <h4>Lakshay Giamalani</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={divyansh} alt="img" />
             </div>
             <div className="text">
                    <h4>Divyansh Arora</h4>
                    <h6> vice Head</h6>
            </div>
          </div>
        </div>
        </div>


             {/* Creative */}

             <div className='second-cards'>
        <div className="tech-content">
        <h4>Creative Tean</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={Kisley} alt="img" />
            </div>
            <div className="text">
                    <h4>Kisley Kumar</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             {/* <img src={punee} alt="img" /> */}
             </div>
             <div className="text">
                    {/* <h4>Puneet Superstar</h4>
                    <h6>Head</h6> */}
            </div>
          </div>
        </div>
        </div>

        

         {/* Logistics*/}
         <div className="tech-content">
        <h4>Logistics Team</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={ayush} alt="img" />
            </div>
            <div className="text">
                    <h4>Ayush Gola</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={harshit} alt="img" />
             </div>
             <div className="text">
                    <h4>Harshi Tiwari</h4>
                    <h6>vice Head</h6>
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
                <img src={punee} alt="img" />
            </div>
            <div className="text">
                    <h4>Puneet Superstar</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={punee} alt="img" />
             </div>
             <div className="text">
                    <h4>Puneet Superstar</h4>
                    <h6> vice Head</h6>
            </div>
          </div>
        </div>
        </div>

        {/* Pr team*/}
        <div className="tech-content">
        <h4>PR TEAM</h4>
        <div className="techteam">
        
          <div className="left">
            <div className="img1">
                <img src={punee} alt="img" />
            </div>
            <div className="text">
                    <h4>Puneet Superstar</h4>
                    <h6>Head</h6>
            </div>
          </div>
          <div className="right">
             <div className="img2">
             <img src={punee} alt="img" />
             </div>
             <div className="text">
                    <h4>Puneet Superstar</h4>
                    <h6> vice Head</h6>
            </div>
          </div>
        </div>
        </div>npm

        </div>
        </div>
    </div>
    <Footer/>
    </div>
  
  )
}

