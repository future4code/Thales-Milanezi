import React, { Component } from 'react'
import Button from '@material-ui/core/Button'



class HomeButton extends Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return(
      <div>
        <Button variant="contained" color="primary"/>
      </div>
    )
  }
}


export default HomeButton