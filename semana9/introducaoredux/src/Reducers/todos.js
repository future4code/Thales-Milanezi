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
// VAI LA NO FINAL DA PAGINA PRIMEIRO ! LEIA ISSO DAQUI DEPOIS OK? 
// Muito bem...
// primeira coisa precisamos criar esse initialestate... porque?
// vai ser o estado inicial do state, lembra do react= this.state={ alguma coisa recebe string vazia? é aqui}
// crie ele como objeto e depois crie um estado com nome do que voce quer, nesse caso o todosList é um array porque é uma lista de tarefas ne
// então dentro do objeto initialState temos o stado(todosList) que é um array com objetos dentros, aqui ele esta chumbado porque no começo é 
// importante saber onde está as coisas criado isso vamos ao todos que é onde estará nosso switch case com todas as actions creators
 

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
      {/*essa primeira action é de adicionar as tarefas, por isso é necessario nessa função passarmos os parametros state que é o estado e ele
      esta sendo igual ao inicialstate porque é o estado inicial que queremos para ele né? Pois bem o segundo parametro é a action que nada mais nada
      menos é a ação! esse switch case está cheio de ações correto? então é onde todas as ações ficarão....

      Agora está vendo que o case é  exatamente igual ao type que colocamos lá na pagina da action? Sim! Como isso está sendo usado?
      porque no switch colocamos que queremos a action.type então todos os cases serão referenciados ao type das actions
      Show ! Agora criamos uma variavel que nesse caso é a nova tarefa(newTodo) que é um objeto que possui os mesmo parametros que passamos la no 
      initialstate remember? e ai definimos ele como queremos o id precisamos de um numero e para não ser chumpado usamos o date.now(),
      para o text que é o payload da action todo definimos o que? que será a action do payload do texto por isso o action.payload.text
      e o complete começa com falso porque não queremos criar uma tarefa e já no começo ela ser setada como true ne? muito bem então agora devemos 
      nos preocupar com o return que tem que retornar um objeto  vish e o que é que aquele  tres pontinhos state(...state)? aquilo é necessário 
      para fazer uma cópia do stado inicial, oxi e pra que eu quero isso? ta vendo que tem 2 objeto e um valor filter? se eu nao coloco aqui ele 
      procura o o bjeto que ta bonitinho e descarta o filter e eu não quero que descate o filter porque vamos usa-lo depois, então é extramente impor
      tante ter essa copia par anao perder informações. 

      AAAAAAgora tem o todosList certo? onde que ta esse negocio? vai la emcima no initialState e da uma olhada........... achou? 
      isso é o nome do objeto que criamos inicialmente, o que queremos então como ele nessa parte? Ora pequeno gafanhoto
      queremos que ele retorne a nossa variavel nova que é o newTodo que é um array (porque array? porque é uma lista nao esqueça)  e faz uma copia do state
      para nao perder informações e deeeeeeepois  esse sera o nosso todosList NOVO ! olha que maravilha!! Agora não acabou aqui ne, vem a parte Osso do projeto
      vamos la na parte dos pasta componente agora que precisamos usar esse todoslist aqui nesse projeto é no componentes/ task... bora ! 
    */}
    case "TOGGLE_TASK":
      {
        const newTodosList = state.todosList.map(todo => {
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
        };
      }
    case "DELETE_TASK":
      {
        const newTodosList = state.todosList.filter(todo => {
          if (todo.id === action.payload.id) {
            return false
          }
          return true
        })
        return {
          ...state,
          todosList: [newTodo, ...state.todosList]
        };
      }
    case 'COMPLETE_ALL_TASKS': {
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
    case "DELETE_ALL_COMPLETE": {
      const newTodosList = state.todosList.filter(todo => {
        if (todo.complete === true) {
          return false
        }
        return true
      })
      return {
        ...state,
        todosList: [newTodo, ...state.todosList]
      };
    }
    case 'SET_FILTER': {
      return {
        ...state,
        filter: action.payload.filter
      }
    }
    default:
      return state
  }
}

// essa pagina aqui amigo é onde voce vai colocar as actions em um switch case
// essa pagina todos tera que entrar no index.js do reducers... PORQUE?
// não é no index.js dos reducers que estamos combinando todos os reducers?
// olha lá emcima aqui nessa pagina, não estamos criando uma função chamada todos?
// então todos as actions estão juntas em switch cases  para depois na index.js do reducers serem combinados e depois exportados na Store
// que caminho doido ne? mas assim parece mais facil para entender
// agora vamos subir la no codigo nessa mesmas pagina e continuar os comentarios 