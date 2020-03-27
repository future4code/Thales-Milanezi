import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { CardContent } from '@material-ui/core'

export const Cartao = styled(CardContent)`
display: grid;
`


class LittleGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Cartao color="#80A1D4">
        {this.props.children}
      </Cartao>
    )
  }
}

export default LittleGrid