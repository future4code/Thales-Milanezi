import React, { Component } from 'react'
import Select from '@material-ui/core/Select'
import {FormCard, InputTask, ButtonTask} from './HeaderStyle'
import MenuItem from '@material-ui/core/MenuItem'
import { connect } from 'react-redux'
import {createTask} from '../../actions/actions'



class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: '',
      day:'',
      text: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      tasks: event.target.value
    })
  }

  handleClick = () => {
   console.log("clicou", this.state.task)
    this.props.addTask(this.state.task)
  }

  render() {
    return (
      <FormCard>
        <h2>Vamos adicionar uma tarefa?</h2>
        <InputTask
        onChange={this.handleInput}
        value={this.state.task}
        id="standard-name"
        label="Tarefa"
        margin="normal"
        />
        <span>Escolha um dia da semana !</span>
        <Select
          // value={state.age}
          // onChange={handleChange}
          // inputProps={{
          //   name: 'age',
          //   id: 'age-simple',
          // }}
        >
          <MenuItem value="">
            <em>Dias da Semana</em>
          </MenuItem>
          <MenuItem value={'SegundaFeira'}>Segunda - Feira</MenuItem>
          <MenuItem value={'TerçaFeira'}>Terça - Feira</MenuItem>
          <MenuItem value={'QuartaFeira'}>Quarta - Feira</MenuItem>
          <MenuItem value={'QuintaFeira'}>Quinta - Feira</MenuItem>
          <MenuItem value={'SextaFeira'}>Sexta - Feira</MenuItem>
          <MenuItem value={"Sábado"}>Sábado</MenuItem>
          <MenuItem value={'Domingo'}>Domingo</MenuItem>
        </Select>
        <ButtonTask type='button' onClick={this.handleClick}>Adicionar</ButtonTask>
      </FormCard>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    taskList: state.tasks.tasks
  }
  }
  
  const mapDispatchToProps = (dispatch) => {
  addTask: newTask => dispatch(createTask(newTask))
  }

export default connect(mapStateToProps, mapDispatchToProps)(Header)