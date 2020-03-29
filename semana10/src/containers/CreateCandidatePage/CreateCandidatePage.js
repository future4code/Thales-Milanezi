import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField'
import HomeButton from '../../Components/HomeButton'

import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import MasterGrid from '../../Components/MasterGrid'
import PaperCard from '../../Components/Paper'
import AllTittles from '../../Components/AllTittles'

import { connect } from 'react-redux';
import { push } from "connected-react-router";


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
    name: 'idade',
    label: "Idade",
    type: "number",
    required: true,
    min: 18,
    title: "Digite sua idade - Deverá ser maior que 18 anos"
  },
  {
    name: "Porque voce é um bom candidato?",
    label: "Escreva seu texto para inscrição",
    type: "text",
    required: true,
    pattern: "[a-zA-Z]{30,100}",
    title: "Texto com no mínimo 30 caracteres"
  },
  {
    name: 'Profissão',
    label: "Profissão ",
    type: "text",
    required: true,
    pattern: "[a-zA-Z]{10,}",
    title: "Digite o nome da sua profissão atual"
  },
  {
    name: "País",
    label: "Escolha um país ",
    type: "text",
    required: true,
    title: "Escolha ao menos um país"
  },
]

class CandidatePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {}
    }
  }

  handleInputform = event => {
    const { name, value } = event.target;
    this.setState({
      ...this.state.form,
      [name]: value
    })
  }

  handleCheckCandidate = event => {
    event.preventDefault();
    console.log(this.state.form)
  }


  render() {
    return (
      <MasterGrid>
        <Header />
        <PaperCard>
          <AllTittles>Faça sua inscrição </AllTittles>
          <form onSubmit={this.handleCheckCandidate}>
            {createCandidate.map(field => {
              return (
                <div key={field.name}>
                  <label html={field.name}>{field.label}</label>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    value={this.state.form[field.name]}
                    onChange={this.handleInputChange}
                    inputProps={{ pattern: field.pattern }}
                    min={field.min}
                    required={field.required}
                    title={field.title}
                  />

                </div>
              )
            })}
            <HomeButton type='submit' variant="contained">Inscreva-se</HomeButton>
          </form>
        </PaperCard>
        <Footer />
      </MasterGrid>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    screenCreateCandidate: () => dispatch(push('/CreateCandidatePage'))
  }
}

export default connect(null, mapDispatchToProps)(CandidatePage)