const initialState = {
  todosList: [{
    id: 1,
    text: 'tarefa 1 do redux',
    complete: false
  },
  {
    i: 2,
    text: 'tarefa 2 do redux',
    complete: true
  }
],
filter: 'todas'
};


export const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        complete: false
      }
      return {
        ...state,
        todosList: [newTodo, ...state.todosList]
      };
    case "TOGGLE_TASK":
      {const newTodosList = state.todosList.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo
      })
      return {
        ...state,
        todosList: [newTodosList]
      };}
    case "DELETE_TASK":
      {const newTodosList = state.todosList.filter(todo => {
        if(todo.id === action.payload.id){
          return false
        }
        return true
      })
      return {
        ...state,
        todosList: [newTodo, ...state.todosList]
      };}
      case 'COMPLETE_ALL_TASKS':{
        const newTodosList = state.todosList.map(todo => {
            return {
              ...todo,
              complete: true
            }
        })
        return {
          ...state,
          todosList: [newTodosList]
        };
      }
      case "DELETE_ALL_COMPLETE":{
        const newTodosList = state.todosList.filter(todo => {
          if(todo.complete === true){
            return false
          }
          return true
        })
        return {
          ...state,
          todosList: [newTodo, ...state.todosList]
        };
      }
      case 'SET_FILTER':{
        return{
          ...state,
          filter: action.payload.filter 
        }
      }
    default:
      return state
  }
}