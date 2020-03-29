
const initialState = {
 tripsList: [],
 createCandidate: []
}

export const trips = (state= initialState, action) => {
  switch (action.type){
    case "SET_TRIPS":
      return{
        ...state, 
        tripsList: action.payload.tripsList
      }
      case "SET_CANDIDATE":
        return{
          ...state,
          createCandidate: action.payload.candidate 

        }
      default:
    return state
  }
}