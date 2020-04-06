import React, { Component } from 'react'
import styled from 'styled-components'
import { Card } from '@material-ui/core'

export const Central = styled(Card)`
display: grid;
grid-template-columns: 1fr ;
grid-template-rows:15vh 60vh 15vh ;
background-color:#80A1D4;
width:80vw;
height: 90vh;
margin: 0 auto;
`

class MasterGrid extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <Central container spacing={16} color="C0B9DD">
        {this.props.children}
      </Central>
    )
  }
}

export default MasterGrid