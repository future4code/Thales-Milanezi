import {createTask, getTasks} from './actions'

describe("testando as actions do planner", () =>{
  test("Testing create tasks", () => {
    const mockCreateAction = "fazer compras online"
    const mockAction = createTask(mockCreateAction)

    expect(mockAction.type).toEqual("CREATE_TASK")
    expect(mockAction.payload.newTask).toBeDefined()
  })
  test("Testing get all tasks", () => {
    const mockGetAction = "Jogar games de esportes"
    const mockAction = getTasks(mockGetAction)

    expect(mockAction.type).toEqual("GET_TASKS")
    expect(mockAction.payload.alltasks).toBeDefined()
  })
})