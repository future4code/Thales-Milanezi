import React, { Component } from "react"
import styled from 'styled-components'

import PaperCard from "../../Components/Paper"
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import HomeButton from '../../Components/HomeButton'
import MasterGrid from '../../Components/MasterGrid'
import AllTittles from '../../Components/AllTittles'
import LittleGrid from "../../Components/LittleGrid"

import { push } from 'connected-react-router'
import { routes } from "../Router";
import { connect } from "react-redux"




class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <MasterGrid>
        <Header/>
        <LittleGrid>
            <PaperCard>
              <AllTittles>Faça seu login </AllTittles>
              <HomeButton onClick={this.props.screenLoginPage}>Login</HomeButton>
            </PaperCard>
          </LittleGrid>

          <LittleGrid>
            <PaperCard>
            <AllTittles>Candidate-se a uma viagem</AllTittles>
              <HomeButton onClick={this.props.screencreateTripPage} >Candidatos</HomeButton>
            </PaperCard>
          </LittleGrid>
        <Footer/>
      </MasterGrid>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    tripsList: state.trips.tripsList 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  screenlistTripsPage: () => dispatch(push(routes.listTripsPage)),
  screenLoginPage: () => dispatch(push(routes.aplicationForm)),
 // fetchGetTripDetails: () =>dispatch(getTripDetails()),
  //fetchGetList: () => dispatch(getList())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

// Essa deve ser a Primeira pagina que qualquer usuário deva ver, Tanto ADM quando Publico
// Chamei de applicationForm a pagina de login e isso fica confuso pra todo mundo 