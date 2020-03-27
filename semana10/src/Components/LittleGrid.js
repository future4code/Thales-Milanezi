import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'



class LittleGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Grid item xs={3} color="80A1D4"/>
    )
  }
}

export default LittleGrid