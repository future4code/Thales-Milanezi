import React from 'react'
import './LikeAndComent.css'


class LikeAndComent extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            imagem: require('../icones/comment_icon.svg')
            input: '<input/>' // não sei referenciar o input aqui 
        }
    }

    aoClicar =(event) => {
        if(event.target.checked){
            this.setState({
                imagem: ""
            })
        } else{
            this.setState({
                <input/>// e aqui tambem não sei o que fazer
             // como colocar um input aqui ? a cor dele fica diferente e não funciona
            })
        }
        

    }

    render() {
        return (
            <div>
                <img src={this.state.imagem} alt='A imagem quebrou'/>
                <input type='checkbox' onChange={this.aoClicar}/>
            </div>
        )
}
        }
        
export default LikeAndComent
