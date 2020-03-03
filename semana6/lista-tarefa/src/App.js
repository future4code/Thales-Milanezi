import React, {Component} from 'react';
import InputEBotao from './Components/Input/InputEBotao';
import Filtro from './Components/Filtro/Filtro';
import styled from 'styled-components'


const Principal = styled.div`
display: grid;
justify-content: center;
border: 2px solid black;
background-color: lightblue;
color: #0B0B61;
width: 40%;
heigth: 50%;
padding: 20px 0px;
margin: auto;
`

class App extends React.Component {
  constructor(props){
    super(props);
    
    }
  

  render() {
  return (
    <Principal className="App">
      <h1>Lista de Tarefas</h1>
      <InputEBotao/>
      <Filtro/>
    </Principal>
  );
}
}


export default App;
