import React from 'react'

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
function writeTask (name){
  return{
    type: 'TASK_NAME',
    payload:{
      valor: name
    }
  }
}

// ação de mostrar a tarefa na tela
function showTaskOnScreen (show){
  return{
    type: 'SHOW_TAKS',
    payload:{
      valor: show
    }
  }
}

// ação de riscar o nome da tarefa completa
function completedTask (risk){
  return{
    type: 'TASK_COMPLETE',
    payload:{
      valor: risk
    }
  }
}

// ação de mostrar todas as tarefas
function showAllTask (alltask){
  return{
    type: 'SHOW_ALL_TASK',
    payload:{
      valor: alltask
    }
  }
}

//ação de mostrar todas as tarefas dependentes
function pendingTask (pending){
  return{
    type: 'PENDING_TASK',
    payload:{
      valor: pending
    }
  }
}

// ação de mostrar todas as tarefas completas
function showCompleteTask (complete){
  return{
    type: 'SHOW_COMPLETE_TASK',
    payload:{
      valor: complete
    }
  }
}

// ação de remover todas as tarefas completas
function deleteTask (deleted){
  return{
    type: 'DELETE_ALL_COMPLETE_TASK',
    payload:{
      valor: deleted
    }
  }
}

// depois fazer o export default dessa pagina 