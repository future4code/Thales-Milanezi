import React, {Component} from 'react'
import { connect } from 'react-redux'

class ListTask extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    console.log(this.props.taskList)
    return(
      <ul>
        {this.props.taskList.filter(task => <li>{task.text}</li>)}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
return{
  taskList: state.tasks.tasks
}
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(ListTask)