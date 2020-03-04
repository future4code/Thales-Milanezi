import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import Register from './Components/Register';
import List from './Components/List';

const Container = styled.div`
border: 1pt solid black;
`
const Header = styled.h1`
background-color: purple;
border: 1pt solid black;
text-align: center;

`
const BtnList = styled.button`
 background-color:lightblue;
 font-size:20px;
 `
const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      firstPage:'PagOne'
    }

//colocar as variaveis e axios aqui


  }


 switchPag = () => {
   if(this.state.firstPage === 'pagOne'){
    this.setState({firstPage:'pagTwo'})
   } else {
    this.setState({firstPage:'PagOne'})
   }
 }

  render(){
    return(
      <Container>
       <BtnList onClick={this.switchPag}>Lista de Cadastrados</ BtnList>
       <Header>Cadastro de Usuários</Header>
       {this.state.firstPage==='pagOne' ?(<Register/>):(<List/>)}
      </Container>
    )
  }
}


export default App;
