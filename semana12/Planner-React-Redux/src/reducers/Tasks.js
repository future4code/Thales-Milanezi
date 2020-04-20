const initialState ={
  tasks:[]
}

const tasks = (state= initialState, action) =>{
  switch(action.type){
    case "CREATE_TASK":
      // const newTasks ={
      //   id:"", day:"", text:""
      // }
      console.log(action.payload)
      return{
        ...state, 
        tasks: action.payload.newtask
      }
      case "GET_TASKS":{
        return{
          ...state,
          tasks: action.payload.alltasks
        }
      }
      default:
        return state
  }
}

export default tasks