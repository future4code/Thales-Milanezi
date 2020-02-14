import React from 'react'
import './Post.css'

function Post(props){
    return(

        <div className='post-container'>
            {props.children}
        </div>
    )
}









export default Post