import React, { Component } from 'react';
import styled from 'styled-components';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';


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
    return (

      <div>
        <RadioGroup
          aria-label="Gender"
          name="gender1"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <FormControlLabel value="newTask" control={<Radio />} label="Nova Tarefa" />
      </div>
    )
  }
}
export default Tasks