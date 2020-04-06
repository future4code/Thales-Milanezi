import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from "connected-react-router";
import { getTrips } from '../../actions';
import { routes } from '../Router';



class ListTripsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    this.props.getTrips()
  }


  render() {
   console.log(this.props.alltrips)
    return (
      <div>
        {this.props.alltrips.map(trip => (
            <p>{trip.name}</p>
          ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  alltrips: state.trips.tripsList
})

const mapDispatchToProps = (dispatch) => {
  return {
    getTrips: () => dispatch(getTrips()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage)