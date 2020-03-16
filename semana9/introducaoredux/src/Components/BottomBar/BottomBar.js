import React, { Component } from 'react'
import styled from 'styled-components'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'

const SpanWrapper = styled.span`
display: flex;
flex-direction: row;
justify-content: space-between;
`


class BottomBar extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <SpanWrapper>
        <Link href='' color="inherit">
          {"Marcar como todas Completas"}
        </Link>
        <Button variant="outlined" >
          Todas
        </Button>
        <Button variant="outlined" >
          Pendentes
        </Button>
        <Button variant="outlined" >
          Completas
        </Button>
      </SpanWrapper>
    )
  }
}

export default BottomBar