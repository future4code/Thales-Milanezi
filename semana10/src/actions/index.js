import Axios from "axios"

export const getList = id => {
  return {
    type: 'LIST_TRIP',
    payload: {
      id
    }
  }
}

export const getTripDetails = id => {
  return{
    type: "TRIP_DETAILS",
    payload: {
      id
    }
  }
}


// ---------------------------------------- API ---------------------------------
export const fetchGetList = () => (dispatch, getState) => {
  const response = await Axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/thales/trips');
  dispatch(getList(reponse.data.trips))
}

export const fetchGetTripDetails = () => (dispatch, getState) => {
  const response = await Axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/thales/trip/:id?=');
  dispatch(getTripDetails(reponse.data.trips))
}