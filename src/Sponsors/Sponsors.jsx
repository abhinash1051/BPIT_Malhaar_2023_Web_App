import React from 'react'
import "./Sponsors.css"
import pw from "../assests/pw.png"
import unnamed from "../assests/unnamed.png"
import dominos from "../assests/dominos.png"
export default function Sponsors() {
    return (
        <div className="sponsors">
            <div className="sponsor">
                SPONSORS
            </div>
            <div className='containerr'>
            <div className="card">
            {/*  */}
                    <h4 className='spnsrname'><b>Title Sponsor</b></h4>
                {/* </div> */}
                <img className='sponsor-image' src={pw} alt="Avatar" style={{ width: "100%" }} /> 
               
            </div>
            <div className="card">
            
                    <h4 className='spnsrname'><b>Power Sponsor</b></h4>
                
                <img className='sponsor-image' src={unnamed} alt="Avatar" style={{ width: "100%" }} /> 
                
            </div>
            <div className="card">
            
                    <h4 className='spnsrname'><b>Associate Sponsor</b></h4>
                
                <img className='sponsor-image' src={dominos} alt="Avatar" style={{ width: "100%" }} /> 
                
            </div>
            <div className="card">
            
                    <h4 className='spnsrname'><b>Gold Sponsor</b></h4>
                
                <img className='sponsor-image' src={unnamed} alt="Avatar" style={{ width: "100%" }} /> 
               
            </div>
            <div className="card">
            
                    <h4 className='spnsrname'><b>Beverage Partner</b></h4>
                
                <img className='sponsor-image' src={unnamed} alt="Avatar" style={{ width: "100%" }} /> 
               
            </div>
            <div className="card">
            
                    <h4 className='spnsrname'><b>Food Partner</b></h4>
                
                <img className='sponsor-image' src={unnamed} alt="Avatar" style={{ width: "100%" }} /> 
                
            </div>
            </div>
        </div>

    )
}
