const initialState = {
  profileToSwipe: undefined,
  matches: undefined

}

const profiles = (state = initialState, action) => {
  switch(action.type){
    case 'STORE_PROFILE':
      return {
        ...state,
        profileToSwipe: action.payload.profileToSwipe
      }
      case 'MATCHES':
        return{
          ...state, 
         matches: action.payload.matches
        }
  }
  return state
}

export default profiles
