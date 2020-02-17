import React from 'react';
import styled from 'styled-components'

const main = styled.div`
border: 3px solid black
display: flex
flex-direction: colunm
align-items: center
`


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      FirstStage:false,
      SecondStage:false,
      ThirdStage: false,
      FourStage:false

    }
  }


  Fase2 = () =>{
    const next1 =!this.state.SecondtStage;
    this.setState({
      FirstStage: next1
    })
  }
  Fase3 = () =>{
    const next2 =!this.state.ThirdStage;
    this.setState({
      SecondStage: next2
    })
  }
  Fase4 = () =>{
    const next3 =!this.state.ThirdStage;
    this.setState({
      SecondStage: next3
    })
  }
  

  render() {
      const etapa1 = (
        <div className='main'>
            <div className='First'>
              <h1>Estapa1 - Dados Gerais</h1>
              <input type='text'>1 - Qual o seu nome?</input>
              <input type='number'>2 - Qual o sua idade?</input>
              <input type='email'>3 - Qual o seu semail?</input>
              <select>4 - Qual a sua escolaridade?
                  <option value='EFI'>Ensino Fundamental incompleto</option>
                  <option value='EFC'>Ensino Fundamental completo</option>
                  <option value='EMI'>Ensino Médio Completo incompleto</option>
                  <option value='EMC'>Ensino Médio Completo completo</option>
                  <option value='ESI'>Ensino Superior Completo incompleto</option>
                  <option value='ESC'>Ensino Superior Completo completo</option>
                  <option value='NOL'>Nenhuma das opções listadas</option>
              </select>
                <button onClick={this.Fase2} >Proxima Etapa</button>
            </div>
           )
      const etapa2 =(
            <div className='Second'>
              <h1>Informações do ensino Superior</h1>
              <input>5 - Qual seu curso?</input>
              <input>6 - Qual a sua unidade de ensino?</input>
              <button onClick={this.Fase3}>Proxima Etapa</button>
            </div>
      )
      const etapa3 = (
            <div className='Third'>
              <h1> Etapa 3 - Informações Gerais do Ensino</h1>
              <input>5 - Porque voce não terminou algum curso de graduação?</input>
              <select>6 - Fez algum curso complementar?
                  <option>Curso técnico</option>
                  <option>Curso de Linguas Estrangeiras</option>
                  <option>Curso Online</option>
                  <option>Não fiz nenhum curso complentar</option>
              </select>
              <button onClick={this.Fase4}>Proxima Etapa</button>
            </div>
      )
      const etapa4 = (
              <div>
                <h1>Este formulario acabou !!!</h1>
                <p>Obrigado pelas informações e pelo seu tempo</p>
                <p>Entraremos em contato em Breve</p>
                <p>Tenha uma ótima semana</p>
              </div>
          </div>

      )

      return(
        <div>
          {this.state.FirstStage? etapa1 : etapa2}
          {this.state.SecondStage? etapa2 : etapa3}
        </div>
      )
  }

}


export default App;
