import React, { Component } from "react"
import Grid from '@material-ui/core/Grid'
import { Button } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import { push } from 'connected-react-router'
//import { routes } from "../containers/Router";
//import {getList, getTripDetails} from '../../actions/index'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import HomeButton from '../../Components/HomeButton'
import MasterGrid from '../../Components/MasterGrid'
import AllTittles from '../../Components/AllTittles'
import LittleGrid from "../../Components/LittleGrid"

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
        <Typography component="h2" variant="h1" gutterBottom>FutureX</Typography>
        <Grid container>

        <LittleGrid>
            <Paper>
            <AllTittles> Login </AllTittles>
              <HomeButton onClick={this.props.screenLoginPage}>Login</HomeButton>
            </Paper>
          </LittleGrid>

          <LittleGrid>
            <Paper>
            <AllTittles> Detalhes da Viagem </AllTittles>
              <HomeButton onClick={this.props.screenTripsDetail} >Viagem</HomeButton>
            </Paper>
          </LittleGrid>

          <LittleGrid>
            <Paper>
            <AllTittles>Viagens disponíveis</AllTittles>
              <HomeButton onClick={this.props.screenlistTripsPage} >Ver as Viagens</HomeButton>
            </Paper>
          </LittleGrid>

          <LittleGrid>
            <Paper>
            <AllTittles>Candidate-se a uma viagem</AllTittles>
              <HomeButton onClick={this.props.screencreateTripPage} >Candidatos</HomeButton>
            </Paper>
          </LittleGrid>
        </Grid>
        <Footer/>
      </MasterGrid>
    )
  }
}


const mapStateToProps = (state) => {
  return {
 //   alltriplist: state.actionsTrips.listtrips 
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
//    screenTripsDetail: () => dispatch(push(routes.tripDetailsPage)),
 //   screencreateTripPage: () => dispatch(push(routes.createTripPage)),
///    screenlistTripsPage: () => dispatch(push(routes.listTripsPage)),
 //   screenLoginPage: () => dispatch(push(routes.LoginPage)),
//    fetchGetTripDetails: () =>dispatch(getTripDetails()),
//    fetchGetList: () => dispatch(getList())
  }
}


export default (mapStateToProps, mapDispatchToProps)(HomePage)

// Essa deve ser a Primeira pagina que qualquer usuário deva ver, Tanto ADM quando Publico
