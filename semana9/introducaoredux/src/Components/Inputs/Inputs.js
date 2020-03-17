import React, { Component } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'


const InputWrapper = styled.div`

`


class Inputs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    const newInput = event.target.value
    this.setState({ name: newInput })
  }


  render() {
    return (
      <InputWrapper>
        <TextField
          id="outlined-name"
          label="O que tem que ser feito?"
          value={this.state.name}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
      </InputWrapper>
    )
  }
}

export default Inputs