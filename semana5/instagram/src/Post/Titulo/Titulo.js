import React from 'react'
import './Titulo.css'

function Titulo (props){
    return(
        <div>
            <img  src={props.myface} />
            <h4>{props.titulo}</h4>
        </div>
    )
}

export default Titulo