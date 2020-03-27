import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'


class AllTittles extends Component{
  constructor(props){
    super(props)
    this.state={
      titulo:''
    }
  }
  render(){
    return(
      <div>
        <Typography variant="h5" gutterBottom></Typography>
      </div>
    )
  }
} 

export default AllTittles