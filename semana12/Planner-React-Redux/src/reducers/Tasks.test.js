import tasks from './tasks'
import {createTask} from '../actions/actions'


const mockStore = {
  tasks: []
}

describe("Testing all Reducers", () =>{
  test("test new tasks", () => {
    const mockText = "Fazer abdominais"
    const newTaskAction = createTask(mockText)
    const newStore = Tasks(mockStore, newTaskAction)

    expect(newStore.tasks).toHaveLength(1)
  })
})