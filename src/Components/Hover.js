import React from "react";
import './Hover.css';
export default function Hover() {
    return(
        <div className="circle" >
            <div className="radious">
                <img alt="R" src={require('./images/ramsey.jpg')}/>
                <h2 className='white'>Ramsey<br/><span className='span'>Front-End</span></h2>
<a href="#">Hire me</a>
            </div>
        </div>
    )
}