import React, { Component } from 'react'
import Button from '@material-ui/core/Button'



class HomeButton extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Button onClick={this.props.onClick} variant="contained" color="primary" >
        {this.props.children}
      </Button>
    )
  }
}


export default HomeButton