import React from "react";
import './ImageButton.css'



function ImageButton(props){
    return(
        <div className='estilo-botao'>
            <img>{props.imagens}</img>
            <button>{props.text}</button>
        </div>
    )
}

export default ImageButton;