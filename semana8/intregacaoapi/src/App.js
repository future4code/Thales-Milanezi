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
      changePage:'pagOne'
    }
  }

 switchPag = () => {
   if(this.state.changePage === 'pagOne'){
    this.setState({changePage:'pagTwo'})
   } else {
    this.setState({changePage:'pagOne'})
   }
 }

  render(){
    const textBotao = this.state.changePage === "pagOne"? " Lista de Cadastrados": "Voltar para a Tela Inicial";

    return(
      <Container>
       <BtnList onClick={this.switchPag}>{textBotao} </BtnList>
       <Header>Cadastro de Usuários</Header>
       {this.state.changePage === "pagOne"? <Register/> : <List/>}
      </Container>
    );
  }
}
export default App;
