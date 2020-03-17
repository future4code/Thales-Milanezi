const initialState = {
 allTask: ''
}

const tasks = (state = initialState, action) => {
  switch(action.type){
    case "TASK_NAME":
      return {...state, allTask: action.payload.name}
      default: 
      return state
  }
}

export function showTaskOnScreen (show){
  return{
    type: 'SHOW_TAKS',
    payload:{
      show: show
    }
  }
}

export function completedTask (risk){
  return{
    type: 'TASK_COMPLETE',
    payload:{
      risk: risk
    }
  }
}


export default tasks