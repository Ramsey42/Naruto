import React from "react";

export default function List() {
    return (
        <div className="list-wrapper">
            <h1 className="list-title">THE EDGERUNNERS UPDATE IS HERE</h1>
            <p className="list-paragraph">Say hello to the Edgerunners Update. In celebration of Cyberpunk: Edgerunners — the pulsating anime set in the world of Cyberpunk 2077 — this brand new free update brings in-game goodies inspired by the anime, as well as a host of new features and content to dig into.</p>
      <div className="list-box-wrapper">
       <div className="list-box" data-aos="fade-right" data-aos-duration="1300">
        <img alt='akatsuki' className="akatsuki" src={require('./images/akatsu.jpg')} />
        <h2 className="list-box-title">THE EDGERUNNERS UPDATE IS HERE</h2>
        <p className="list-box-paragraph">Akatsuki (暁; ; Literally meaning "Dawn" or "Daybreak"; ) was initially an organisation created by Yahiko and his two comrades Konan and Nagato in an effort to fight against the tyranny and oppression that their home village Amegakure was facing during the Third Great Shinobi War</p>
       </div>
       <div className="list-box" data-aos="fade-left" data-aos-duration="1300">
       <img alt='akatsuki' className="akatsuki" src={require('./images/sannin.png')} />
        <h2 className="list-box-title"> Sannin Legendary Three Ninja</h2>
        <p className="list-box-paragraph">Akatsuki (暁; ; Literally meaning "Dawn" or "Daybreak"; ) was initially an organisation created by Yahiko and his two comrades Konan and Nagato in an effort to fight against the tyranny and oppression that their home village Amegakure was facing during the Third Great Shinobi War</p>
       </div>
        
       </div>
      
      <div className="list-box-wrapper">
       <div className="list-box" data-aos="flip-down" data-aos-duration="1300">
        <img alt='akatsuki' className="akatsuki" src={require('./images/anbu.jpg')} />
        <h2 className="list-box-title">Anbu Clan</h2>
        <p className="list-box-paragraph">Akatsuki (暁; ; Literally meaning "Dawn" or "Daybreak"; ) was initially an organisation created by Yahiko and his two comrades Konan and Nagato in an effort to fight against the tyranny and oppression that their home village Amegakure was facing during the Third Great Shinobi War</p>
       </div>
       <div className="list-box" data-aos="flip-down" data-aos-duration="1300">
       <img alt='akatsuki' className="akatsuki" src={require('./images/madara.jpg')} />
        <h2 className="list-box-title"> Madara and Hashirama</h2>
        <p className="list-box-paragraph">Akatsuki (暁; ; Literally meaning "Dawn" or "Daybreak"; ) was initially an organisation created by Yahiko and his two comrades Konan and Nagato in an effort to fight against the tyranny and oppression that their home village Amegakure was facing during the Third Great Shinobi War</p>
       </div>
        
       </div>
        </div>
    )
}