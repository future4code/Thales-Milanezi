import React from "react";
import './LinkedinFutureFour.css'


function LinkedinFutureFour (props){
    return (

    <div className='dados-pessoais'>
    <img src={props.imag} />
    <h4> {props.nome} </h4>
    <p>{props.descricao}</p>
    </div>
    )
}

export default LinkedinFutureFour;