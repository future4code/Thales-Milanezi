import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import { Card } from '@material-ui/core'

export const Papel = styled(Card)`
display: flex;
flex-direction: column;
`


class PaperCard extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Papel color="#80A1D4">
        {this.props.children}
      </ Papel>
    )
  }
}

export default PaperCard