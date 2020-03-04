import React, { Component } from "react"
import styled from "styled-components"
import axios from "axios"


const MainList = styled.div`
border: 1pt solid black;
`
const BackButton = styled.button`
background-color:lightblue;
font-size:20px;
`
const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

class List extends Component{
    constructor(props){
        super (props)
        this.state={

        }
    }
    switchPag = () => {
        if(this.state.firstPage === 'pagOne'){
         this.setState({firstPage:'pagTwo'})
        } else {
         this.setState({firstPage:'PagOne'})
        }
      }
     
    render (){
        return(
            <MainList>
                <BackButton onClick={this.switchPag}>Voltar para Pagina Inicial</BackButton>
                <ul>
                    <li>
                    
                    </li>
                </ul>
            </MainList>
        )
    }
}

export default List