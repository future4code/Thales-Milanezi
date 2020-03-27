import React, { Component } from 'react'


const createCandidate = [
  {
    name: "nome",
    label: "Nome do Candidato ",
    type: "text",
    required: true,
    pattern: "[a-zA-Z]{3,}",
    title: "Nome Completo"
  },
  {
    name:'idade',
    label: "Idade",
    type: "number",
    required: true,
    min: 18,
    title: "Digite sua idade - Deverá ser maior que 18 anos"
  },
  {
    name:"Porque voce é um bom candidato?",
    label: "Escreva seu texto para inscrição",
    type: "text",
    required: true,
    pattern: "[a-zA-Z]{30,100}",
    title: "Texto com no mínimo 30 caracteres"
  },
  {
    name:'Profissão',
    label: "Nome do Candidato ",
    type: "text",
    required: true,
    pattern: "[a-zA-Z]{10,}",
    title: "Digite o nome da sua profissão atual"
  },
  {
    name:"País",
    label: "Nome do Candidato ",
    type: "text",
    required: true,
    pattern: "[a-zA-Z]{3,}",
    title: "Escolha ao menos um país"
  },
]

class CandidatePage extends Component{
  constructor(props){
    super(props)
    this.state={
      form:{}
    }
  }

  handleInputform = event => {
    const {name, value} =event.target;
    this.setState({
      ...this.state.form,
      [name]: value
    })
  }

  handleCheckCandidate = event => {
    event.preventDefault();
    console.log(this.state.form)
  }


  render(){
    return(
      <div>
        Oi eu preciso de um formulário aqui que cria o candidato
      </div>
    )
  }
}

export default CandidatePage