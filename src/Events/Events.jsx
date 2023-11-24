import React from 'react'
import './Events.css'
import Footer from '../Footer/Footer'
import event from '../assests/event.jpeg'
const arr = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
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
                        <img src={event} alt="Event 1" />
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
