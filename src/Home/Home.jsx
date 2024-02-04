import {React, useEffect} from 'react'
import Background from '../assests/Background.png'
import './Home.css'
import Malhaar from '../assests/Malhaar.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faStarOfLife } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'


import Timer from '../Timer/Timer';
import Footer from '../Footer/Footer';

export default function Home() {
     // Empty dependency array means useEffect runs once after the initial render
      return (
        <div>
        <div className='home'>
          <div className='centerlogo'>
            <img src={Malhaar} alt="Malhaar" />
            
          </div>
         <Timer/>
           <a href="https://insider.in/-akhil-sachdeva-live-at-malhaar-23-nov30-2023/event"> <button className='passbtn'>Get Your Passes!!</button></a>
            
           
            </div>
          <div className='social'>
            <a href="https://instagram.com/malhaarbpit?igshid=OGQ5ZDc2ODk2ZA=="> <FontAwesomeIcon icon={faInstagram} /></a>
           <a href="https://x.com/Malhaar_bpit?t=5NWXSmLS4YEUXgwFJFSIxw&s=09"> <FontAwesomeIcon icon={faTwitter} /></a>
            
            <a href="https://www.linkedin.com/in/malhaarbpit?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon icon={faLinkedin}/></a>
            
            <a href="https://linktr.ee/bpit_malhaar"><FontAwesomeIcon icon={faStarOfLife}/></a>
            
            {/* <a href="credits"></a><FontAwesomeIcon icon={faUsers} /> */}
            
            </div>

          <Footer/>
        </div>

      );
    }

