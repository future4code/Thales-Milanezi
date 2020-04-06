import React, { Component } from 'react'
import styled from 'styled-components'

const MainFooter = styled.div`
background-color:"#DED9E2";
margin: 0 auto;
color: orange;
`
const Tittle = styled.div`
`


class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <MainFooter>
        <Tittle>
          <h1> FutureX - A viagem dos seus sonhos </h1>
          <p>Feito Por Thales Fernando Milanezi</p>
        </Tittle>
      </MainFooter>
    )
  }
}

export default Footer