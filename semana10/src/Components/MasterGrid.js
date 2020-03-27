import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid"


class MasterGrid extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <Grid container spacing={16} color="C0B9DD"/>
    )
  }
}

export default MasterGrid