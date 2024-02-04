import React from 'react'
import './Events.css'
import Footer from '../Footer/Footer'
import e1 from '../assests/e1.jpg'
import e2 from '../assests/e2.jpg'
import e3 from '../assests/e3.jpg'
import e4 from '../assests/e4.jpg'
import e5 from '../assests/e5.jpg'
import e6 from '../assests/e6.jpg'
import e7 from '../assests/e7.jpg'
import e8 from '../assests/e8.jpg'
import e9 from '../assests/e9.jpg'
import e10 from '../assests/e10.jpg'
import e11 from '../assests/e11.jpg'
import e12 from '../assests/e12.jpg'
import e13 from '../assests/e13.jpg'
import e14 from '../assests/e14.jpg'
import e15 from '../assests/e15.jpg'

import bgmi from '../assests/bgmi (Poster).jpg'
import BYTEWIZARD from '../assests/BYTEWIZARD JAM.jpg'
import kairos from '../assests/kairos (4).jpg'





const arr = [
    e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,bgmi,BYTEWIZARD,kairos
]
export default function Events() {
    return (
    <div>
        <div className="container-event">
            <header>
                <h1>EVENTS</h1>
            </header>
            <div className="events-list">
            {arr.map(events=>{
                return (
                <div className="card-event" key={events}>
                
                <img src={events} alt={events} />
                

                        {/* <img src={e1} alt="Event 1" />
                        <img src={e2} alt="Event 2" />
                        <img src={e3} alt="Event 3" />
                        <img src={e4} alt="Event 4" />
                        <img src={e5} alt="Event 5" />
                        <img src={e6} alt="Event 6" />
                        <img src={e7} alt="Event 7" />
                        <img src={e8} alt="Event 8" />
                        <img src={e9} alt="Event 9" />
                        <img src={e10} alt="Event 10" />
                        <img src={e11} alt="Event 11" />
                        <img src={e12} alt="Event 12" />
                        <img src={e13} alt="Event 13" /> */}
                        {/* <img src={e14} alt="Event 14" />
                        <img src={e15} alt="Event 15" />
                        <img src={e16} alt="Event 16" />
                        <img src={event} alt="Event 17" />
                        <img src={event} alt="Event 18" />
                        <img src={event} alt="Event 19" />
                        <img src={event} alt="Event 20" /> */}
                    {/* <div className="info"></div> */}
                </div>

                

                
                )
            })}
            </div>
            
            </div>
            <Footer/>
            </div>
            
    )
}
