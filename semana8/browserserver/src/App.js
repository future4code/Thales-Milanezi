import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Wheater from './Components/Wheater'


const Mainwrapper = styled.div`
display: grid;
grid-template-columns: 1fr;
justify-items: center;
align-content: center;
border: 1pt solid black;
background-color: #6D3FB2;
color:white;
padding-bottom: 120px;

h3{
    color:#077EDF;
}

`
const ButtonStyle = styled.button`
font-size: 45px;
border-radius:50%;

`



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      handlePag: 'showUp'
    }
  }

  handleChangePage = () => {
    if (this.state.handlePag === 'showUp') {
      this.setState({ handlePag: 'hide' })
    } else {
      this.setState({ handlePag: 'showUp' })
    }
  }

  render() {

    return (
      <Mainwrapper>
        <h1>Bem vindo ao seu Clima tempo favorito !</h1>
        <h3>Quer saber como será o dia hoje nas Grande Capitais do Brasil?</h3>
        {this.state.handlePag === 'showUp' ? <ButtonStyle onClick={this.handleChangePage}>Vamos Começar!</ButtonStyle> : <Wheater />}
      </Mainwrapper>
    )
  }
}

export default App;
