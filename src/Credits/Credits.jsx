import React from 'react'
import './Credits.css';
import doge from '../assests/doge.png'
import Footer from '../Footer/Footer';


export default function Credits () {
    const arr = [
        1,2,3,4,5
    ]
  return (
    <div className='team'> 
    <div className="subteam">
       Contributors
    </div>
    <div className="container">
    {arr.map(events=>{
                return (
    <div className="profile" key={events}>
        <div className='profile-image'><img className="image" src={doge} alt="team"></img></div>
        <div className='text'>
          <h2>Doge</h2>
          <h4 >designation</h4>
        </div>
    </div>
                )})}</div>
    <Footer/>
    </div>
  )
}
