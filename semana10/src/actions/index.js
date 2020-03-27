import Axios from "axios"
import { push } from 'connected-react-router'
import { routes } from "../containers/Router";

const user = "thales"
const baseUrl = `https://us-central1-missao-newton.cloudfunctions.net/futureX/${user}`


export const getList = listtrip => {
  return {
    type: 'LIST_TRIP',
    payload: {
      listtrip
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
//--------------------------------------------- Ação do login --------------
export const login = (email, password) => async (dispatch) => {
  const loginData = {
    email,
    password
  }

  try {
    const response = await Axios.post(`${baseUrl}/login`, loginData);
    const token = response.data.token
    localStorage.setItem("token", token)
    dispatch(push("/trips/list"))
  } catch (error) {
    console.error("ops, algo deu errado, tente novamente", error)
  }

}


// ---------------------------------------- API ---------------------------------
export const fetchGetList = () => async (dispatch, getState) => {
  const response = await Axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/thales/trips');
  dispatch(getList(response.data.trips))
}

export const fetchGetTripDetails = () => async (dispatch, getState) => {
  const response = await Axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/thales/trip/:id?=');
  dispatch(getTripDetails(response.data.trips))
}

