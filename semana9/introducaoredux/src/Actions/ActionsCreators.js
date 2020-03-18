
/*
Estrutura do Actions creator 
function nome_da_function(Parametro da function){
  return{
    type: 'QUALQUER NOME QUE FALE SOBRE A FUNÇÃO',                           // tem que ser em capslock
    payload:{
      valor: parametro                                                 // esses parametros são os parametros da função la no nome da funçao
     }                            
  }
}
*/

// ----------------------------------------------- exercício da tarde dia 16/03 -------------------------------------------

//ação de escrever  o nome da tarefa no input
 export function writeTask (name){
  return{
    type: 'TASK_NAME',
    payload:{
      name: name
    }
  }
}

// ação de mostrar a tarefa na tela
export function showTaskOnScreen (show){
  return{
    type: 'SHOW_TAKS',
    payload:{
      show: show
    }
  }
}

// ação de riscar o nome da tarefa completa
export function completedTask (risk){
  return{
    type: 'TASK_COMPLETE',
    payload:{
      risk: risk
    }
  }
}

// ação de mostrar todas as tarefas
export function showAllTask (alltask){
  return{
    type: 'SHOW_ALL_TASK',
    payload:{
      risk: alltask
    }
  }
}

//ação de mostrar todas as tarefas dependentes
export function pendingTask (pending){
  return{
    type: 'PENDING_TASK',
    payload:{
      pending: pending
    }
  }
}

// ação de mostrar todas as tarefas completas
export function showCompleteTask (complete){
  return{
    type: 'SHOW_COMPLETE_TASK',
    payload:{
      complete: complete
    }
  }
}

// ação de remover todas as tarefas completas
export function deleteTask (deleted){
  return{
    type: 'DELETE_ALL_COMPLETE_TASK',
    payload:{
      deleted: deleted
    }
  }
}

// depois fazer o export default dessa pagina 