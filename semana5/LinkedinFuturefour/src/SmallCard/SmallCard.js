import React from "react";
import './SmallCard.css'



function SmallCard(props){
    return(
        <div className='pequenocard'>
            <image src={props.imagem}/>
            <h5>{props.text}</h5>
        </div>
        
    )
}
export default SmallCard;