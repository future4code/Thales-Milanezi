import React from "react";
import { connect } from "react-redux";
import {GlobalStyle} from './plannerStyle'
import {MainCard, TaskCard, InputTask, ButtonTask, AllTexts, HeaderCard,Tasks, HandleAllCard, Footer} from './plannerStyle'


class Planner extends React.Component {
  render() {
    return (
      <MainCard>
        <AllTexts variant="h2">Planner Semanal</AllTexts>
      <HeaderCard>
       <AllTexts>Adicione uma Nova Tarefa</AllTexts>
       <InputTask></InputTask>
       <ButtonTask>Enviar</ButtonTask>
      </HeaderCard>
      <HandleAllCard>
      <TaskCard>
      <AllTexts>Segunda-Feira</AllTexts>
      <Tasks>oi</Tasks>
      </TaskCard>
      <TaskCard>
      <AllTexts>Terça-Feira</AllTexts>
      <Tasks>tudo bem?</Tasks>
      </TaskCard>
      <TaskCard>
      <AllTexts>Quarta-Feira</AllTexts>
      <Tasks>show</Tasks>
      </TaskCard>
      <TaskCard>
      <AllTexts>Quinta-Feira</AllTexts>
      <Tasks>eai</Tasks>
      </TaskCard>
      <TaskCard>
      <AllTexts>Sexta-Feira</AllTexts>
      <Tasks></Tasks>
      </TaskCard>
      <TaskCard>
      <AllTexts>Sábado</AllTexts>
      <Tasks></Tasks>
      </TaskCard>
      <TaskCard>
      <AllTexts>Domingo</AllTexts>
      <Tasks></Tasks>
      </TaskCard>
      </HandleAllCard>
      <Footer>Feito Por Thales Milanezi</Footer>
      </MainCard>
    );
  }
}

export default connect()(Planner);
