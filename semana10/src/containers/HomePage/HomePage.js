import React, { Component } from "react"
import Grid from '@material-ui/core/Grid'
import { Button } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  render() {
    return (
      <Grid container spacing={16} color="C0B9DD">
        <Typography component="h2" variant="h1" gutterBottom>FutureX</Typography>
        <Grid container>

          <Grid item xs={3} color="80A1D4">
            <Paper>
              <Typography variant="h5" gutterBottom>Faça seu Login !</Typography>
              <Button variant="contained" color="primary">Login</Button>
            </Paper>
          </Grid>

          <Grid item xs={3} color="80A1D4">
            <Paper>
              <Typography variant="h5" gutterBottom>Viagens disponíveis</Typography>
              <Button variant="contained" color="primary">Ver as Viagens</Button>
            </Paper>
          </Grid>

          <Grid item xs={3} color="80A1D4">
            <Paper>
              <Typography variant="h5" gutterBottom>Candidate-se a uma viagem</Typography>
              <Button variant="contained" color="primary">Candidatos</Button>
            </Paper>
          </Grid>

        </Grid>
      </Grid>
    )
  }
}


export default HomePage

// Essa deve ser a Primeira pagina que qualquer usuário deva ver, Tanto ADM quando Publico
