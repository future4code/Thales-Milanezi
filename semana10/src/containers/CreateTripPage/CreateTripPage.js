import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'



const createTrips = [

  // {id: 'Trip Id',}, backend cuidará de voce !
  {
    name: "nome",
    label: "Nome da viagem ",
    type: "text",
    required: true,
    pattern: "[a-zA-Z]{3,}",
    title: "nome da viagem com no minimo 5 letras"
  },
  {
    name: 'planeta',
    label: "Planeta para o qual irá viajar",
    type: "text",
    required: true,
    pattern: "",
    title: "escolha um planeta"
  },  //não esquece que aqui tem que ser um dropdown
  {
    name: 'data',
    label: "Data da viagem ",
    type: "date",
    required: true,
    pattern: "",
    title: "Data da viagem com dia/mes/ano"
  },// não esquece que a data será no futuro
  {
    name: 'descrição',
    label: "Descrição sobre a viagem ",
    type: "text",
    required: true,
    pattern: "",
    title: "descreva sua viagem com no minimo 30 caracteres"
  },
  {
    name: 'duração da viagem',
    label: "Tempo de duração da Viagem",
    type: "number",
    required: true,
    title: "digite um numero com quanto dias durará sua viagem, minimo de 50",
    min: 50
  } // criar um min de 50

];

class CreateTripPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {}
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    })
  }

  handleSubmission = event => {
    event.preventDefault();
    console.log(this.state.form)
  };


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmission}>
          {createTrips.map(field => {
            return (
              <div key={field.name}>
                <label htmlFor={field.name}>{field.label}</label>
                <TextField
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={this.state.form[field.name]}
                  onChange={this.handleInputChange}
                  inputProps={{ pattern: field.pattern }} // slide 23
                  min={field.min}
                  required={field.required}
                  title={field.title}
                />
              </div>
              );
          })}
          <Button type='submit' variant="contained">Cadastrar</Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    screenCreateTripPage: () => dispatch(push("/createTripPage"))
  }
}

export default connect(null, mapDispatchToProps)(CreateTripPage)