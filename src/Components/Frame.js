import React from 'react';


export default function Frame(props) {
  
    return(
        <div>
        <div className='box'>
            <span></span>
            <img alt='qw' src={props.src}></img>
        </div>
        <h2 className='frame-title'>{props.title}</h2>
        <button onClick={props.click} className='frame-button'> {props.buttonText}</button>
        <img alt='xbox' className='x-box' src={require("./images/xbox.png")}></img>
        <img alt='ps5' className='ps5' src={require("./images/ps5.png")}/>
        <img alt='pc' className='pc' src={require("./images/pc.png")}/>
        <img alt='xbox-one' className='xbox-one' src={require("./images/xbox-one.png")}/>
        <img alt='ps4' className='ps4' src={require("./images/ps4.png")}/>
        <p className='copyright'>CD PROJECT®, Hyperpunk®, Hyperpunk 2033® Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
       <div>
       <img alt='tube' className='tube' src={require("./images/tube.png")}/>
       <img alt='fb' className='fb' src={require("./images/fb.png")}/>
       <img alt='twitter' className='twitter' src={require("./images/twitter.png")}/>
       </div>
       
        </div>
    )
}