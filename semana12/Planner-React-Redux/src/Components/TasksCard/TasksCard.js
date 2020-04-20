import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createTask} from '../../actions/actions'


class TasksCards extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <TaskCard>
        <AllTexts>{props.weekDay}</AllTexts>
        <Tasks>{props.text}</Tasks>
      </TaskCard>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    taskList: state.tasks.tasks
  }
  }
  
  const mapDispatchToProps = (dispatch) => {
  addTask: (newTask) => dispatch(createTask(newTask))
  }

export default connect(mapStateToProps, mapDispatchToProps)(TasksCards)