import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {alltrips} from './actionTrips'



export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    alltrips
    // Outros reducers aqui
  });
