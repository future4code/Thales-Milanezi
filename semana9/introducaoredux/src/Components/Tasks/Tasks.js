import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';



class Tasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: ''
    }
  }
  handleChange = (event) => {
    const newTask = event.target.value
    this.setState({ task: newTask })
  }

  render() {
    console.log(this.props.taskList)
    return (
      <div>
        <ul>
          {this.props.taskList.filter((task) => {
            const filter = this.props.filter
            if (filter === 'pendentes') {
              return task.complete === false
            }
            if (filter === 'completas') {
              return task.complete === true
            }
            return true
          }).map(task => (<li key={task.id}
            onClick={() => this.props.toggleTask(task.id)}
          >
            {task.text} - Completa: {String(task.complete)}
            <button onClick={() => this.props.deleteTask}>Deletar</button>
          </li>
          ))}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    taskList: state.todos.todosList,
    filter: state.todos.filter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTask: (id) => dispatch(toggleTask(id)),
    deleteTask: (id) => dispatch(deleteTask(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)