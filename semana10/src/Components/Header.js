import React, { Component } from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'


export const MainHeader = styled(Grid)`

`

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <MainHeader>
        <Typography component="h2" variant="h1" gutterBottom >
          FutureX
          {this.props.children}
         </Typography>
      </MainHeader>
    )
  }
}

export default Header