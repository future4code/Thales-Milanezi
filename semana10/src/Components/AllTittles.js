import React, { Component } from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

export const Titulo = styled(Typography)`
margin: 0 auto;
background-color: #C0B9DD;

`


class AllTittles extends Component{
  constructor(props){
    super(props)
    this.state={
    }
  }
  render(){
    return(
      <div>
        <Titulo variant="h5" gutterBottom>
          {this.props.children}
          {this.props.imagem}
        </Titulo>
      </div>
    )
  }
} 

export default AllTittles