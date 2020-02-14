import React from 'react'
import './ImagemPost.css'

function ImagemPost(props){
    return(
        <div className='formata-imagem'>
        <img src={props.imagem} />
        </div>
    )
}
export default ImagemPost