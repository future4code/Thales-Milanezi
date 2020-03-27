
const initialState = {
 tripsList: []
}

export const trips = (state= initialState, action) => {
  switch (action.type){
    case "SET_TRIPS":
      return{
        ...state, 
        tripsList: action.payload.tripsList
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