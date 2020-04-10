import React, { Component } from "react";
import { connect } from "react-redux";
import { MainCard, TaskCard, AllTexts, Tasks, HandleAllCard } from './plannerStyle'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import ListTask from "../../Components/ListTask/ListTask";



class Planner extends Component {
  render() {

    const taskSegunda = []//taskList.filter(task => task.newTask === "Segunda")
    const taskTerca = []
    const taskQuarta = []
    const taskQuinta = []
    const taskSexta = []
    const taskSabado = []
    const taskDomingo = []


    return (
      <MainCard>
        <AllTexts variant="h2">Planner Semanal</AllTexts>
        <Header />
        <HandleAllCard>
          <ListTask />
          <TaskCard>
            <AllTexts>Segunda-Feira</AllTexts>
            <Tasks>{taskSegunda.filter}</Tasks>
          </TaskCard>
          <TaskCard>
            <AllTexts>Terça-Feira</AllTexts>
            <Tasks>{taskTerca.filter}</Tasks>
          </TaskCard>
          <TaskCard>
            <AllTexts>Quarta-Feira</AllTexts>
            <Tasks>{taskQuarta.filter}</Tasks>
          </TaskCard>
          <TaskCard>
            <AllTexts>Quinta-Feira</AllTexts>
            <Tasks>{taskQuinta.filter}</Tasks>
          </TaskCard>
          <TaskCard>
            <AllTexts>Sexta-Feira</AllTexts>
            <Tasks>{taskSexta.filter}</Tasks>
          </TaskCard>
          <TaskCard>
            <AllTexts>Sábado</AllTexts>
            <Tasks>{taskSabado.filter}</Tasks>
          </TaskCard>
          <TaskCard>
            <AllTexts>Domingo</AllTexts>
            <Tasks>{taskDomingo.filter}</Tasks>
          </TaskCard>
        </HandleAllCard>
        <Footer />
      </MainCard>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    taskList: state.tasks.tasks
  }
  }
  
  const mapDispatchToProps = (dispatch) => {
  return{

  }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Planner)
