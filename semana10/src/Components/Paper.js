import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import { Card } from '@material-ui/core'

export const Papel = styled(Card)`
display: flex;
flex-direction: column;
justify-items: center;
align-content: center;
`


class PaperCard extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Papel item xs={3} color="#80A1D4">
        {this.props.children}
      </ Papel>
    )
  }
}

export default PaperCard