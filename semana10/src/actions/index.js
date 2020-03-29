import axios from "axios"
import { push } from 'connected-react-router'
import { routes } from "../containers/Router";


const user = "thales"
const baseUrl = `https://us-central1-missao-newton.cloudfunctions.net/futureX/${user}`


export const setTrips = tripsList => {
  return {
    type: 'SET_TRIPS',
    payload: {
      tripsList
    }
  }
}

export const getTripDetails = id => {
  return {
    type: "TRIP_DETAILS",
    payload: {
      id
    }
  }
}

export const setCandidate = (candidate) => {
  return{
    type:"SET_CANDIDATE",
    payload:{
      candidate
    }
  }
}

export const getTrips =() => async (dispatch) => {
  try{
    const response = await axios.get(`${baseUrl}/trips`)
    dispatch(setTrips(response.data.trips))
  } catch(error){
    console.log(error)
    window.alert("error, sem lista de viagens!")
  }
}
//--------------------------------------------- Ação do login --------------
export const login = (email, password) => async (dispatch) => {
  const loginData = {
    email,
    password
  }

  try {
    const response = await axios.post(`${baseUrl}/login`, loginData);
    const token = response.data.token
    localStorage.setItem("token", token)
    dispatch(push(routes.root))
  } catch (error) {
    window.alert("ops, algo deu errado, tente novamente", error)
  }

}


// ---------------------------------------- API ---------------------------------
export const fetchGetList = () => async (dispatch, getState) => {
  const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/thales/trips');
  dispatch(setTrips(response.data.trips))
}

export const fetchGetTripDetails = () => async (dispatch, getState) => {
  const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/thales/trip/:id?=');
  dispatch(getTripDetails(response.data.trips))
}

