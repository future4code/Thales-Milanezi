import { Switch } from "@material-ui/core"

const initialState = {
  listtrip: []
}

export const alltrips = (state= initialState, action) => {
  switch (action.type){
    case "LIST_TRIP":
      return{
        ...state, 
        listtrip: action.payload.listtrip
      }
      /*
      case "TRIP_DETAILS":
          {const newlisttrip = state.listtrip.map(listrip => {
            if (listrip.id === action.payload.id) {
              return {
            ...state,
            listtrip: [newlisttrip]
            }
          })
          };}*/
      default:
    return state
  }
}