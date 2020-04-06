import React, { Component } from 'react'
import { connect } from 'react-redux';
import { push } from 'connected-react-router'
import { routes } from "../Router/index";

import PaperCard from "../../Components/Paper"
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import HomeButton from '../../Components/HomeButton'
import MasterGrid from '../../Components/MasterGrid'
import AllTittles from '../../Components/AllTittles'
import LittleGrid from "../../Components/LittleGrid"

class AfterLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if(token === null){
      this.props.goToLogin();
    }
  }

  render() {
    return (
      <MasterGrid>
        <Header/>
        <LittleGrid>
          <AllTittles> Bem vindo ! </AllTittles>
            <PaperCard>
            <AllTittles> Detalhes da Viagem </AllTittles>
              <HomeButton onClick={this.props.screenTripsDetail} >Viagem</HomeButton>
            </PaperCard>
          </LittleGrid>

          <LittleGrid>
            <PaperCard>
            <AllTittles>Viagens disponíveis</AllTittles>
              <HomeButton onClick={this.props.screenlistTripsPage}>Ver as Viagens</HomeButton>
            </PaperCard>
          </LittleGrid> 
          <Footer/>
      </MasterGrid>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  goToLogin: () => dispatch(push(routes.root)),
  screenTripsDetail: () => dispatch(push(routes.tripDetailsPage)),
  screencreateTripPage: () => dispatch(push(routes.createTripPage)),
})

export default connect(null, mapDispatchToProps)(AfterLogin)