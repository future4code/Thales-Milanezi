import React, { Component } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux'
import { addTask } from '../../Actions/ActionsCreators'
import Button from '@material-ui/core/Button'

const InputWrapper = styled.div`

`


class Inputs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
    }
  }

  handleChange = (event) => {
    const newInput = event.target.value
    this.setState({ inputText: newInput })
  }
onclickButton = (event) => {
  this.props.addTask(this.state.inputText)
}

  render() {
    return (
      <InputWrapper>
        <TextField
          id="outlined-name"
          label="O que tem que ser feito?"
          value={this.state.inputText}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <Button variant="outlined" onClick={this.onclickButton} >
         Adicionar Tarefa
        </Button>
      </InputWrapper>
      
    )
  }
}

const mapStateToProps = (state) => {
  return{

  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addTask: text => dispatch (addTask(text))
    }
  }



export default connect(mapStateToProps, mapDispatchToProps)(Inputs)