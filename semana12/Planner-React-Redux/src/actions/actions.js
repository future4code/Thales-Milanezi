import axios from 'axios'

const baseUrl ='https://us-central1-missao-newton.cloudfunctions.net/generic/planner-sagan-thales'

export const createNewTask = () => async(dispatch) =>{
  const newtasks = { 
    day,
    text
  }
  try{
    const response = await axios.post(`${baseUrl}`, newtasks)
    dispatch(createTask(response.data))
  }catch(error){
    alert('Não foi possivel mostrar as tarefas', error)
      console.log(error)
  }
}

export const getAllTasks = () => async (dispatch) => {
  try {
      const response = await axios.get(`${baseUrl}`, {
          headers: {
              auth: "thales"
          }
      })
      dispatch(getTasks(response.data))
  } catch (error) {
      alert('Não foi possivel mostrar as tarefas', error)
      console.log(error)
  }
}

export const createTask = (newTask) => ({
  type:"CREATE_TASK",
  payload:{
    newTask
  }
})

export const getTasks = (alltasks) => ({
  type:"GET_TASKS",
  payload:{
    alltasks
  }
})

