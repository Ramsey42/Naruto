import React from "react";
import Frame from "./Frame";
export default function RenderingGif() {

    const [gif, setGif] = React.useState(4)

    function clickHandler() {
       setGif(prevGif=>  {
        if(prevGif === 4){
           return  0;
        }else if (gif === 0){
            return  1;
        } else if(gif === 1){
            return  4;
        } else {
            return 5;
        }
       })
    }

    return (
        <div>
            
            {gif === 4 &&  <Frame   
            src="https://i.imgur.com/FMJwNr4.gif" click={clickHandler} buttonText="Watch Next Story" title=" Gaara and  Rock Lee Talent VS Effort"/> }
           
           {gif === 0 && <Frame 
            src="https://steamuserimages-a.akamaihd.net/ugc/866239812089420852/7886E8356D8E337896F238FA100CE3750ACD64A9/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
            click={clickHandler}
            buttonText="There is one more"
           title="Obito and Kakashi two views of same story"
            /> }
            {gif === 1 && <Frame 
            src="https://i.pinimg.com/originals/9c/62/34/9c6234a41527bef9388e63b032e4eb44.gif"
            click={clickHandler}
            buttonText="Previous one"
           title=""
            /> }
           

           
              
        </div>
    )
}