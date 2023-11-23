import {React, useEffect} from 'react'
import Background from '../assests/Background.png'
import './Home.css'
import Malhaar from '../assests/Malhaar.png'
import Timer from '../Timer/Timer';

export default function Home() {
     // Empty dependency array means useEffect runs once after the initial render
      return (
        <div className='home'>
          <div className='centerlogo'>
            <img src={Malhaar} alt="Malhaar" />
          </div>
         <Timer/>
            <button className='passbtn'>Get Your Passes!!</button>
            
           
            
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2023, All Right Reserved <span>Malhaar</span></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right footer-menu">
                        
                            
                                <p><a href="#">Linktree</a></p>
                               
                          
                       
                    </div>
               
            </div>
        </div>

      );
    }

