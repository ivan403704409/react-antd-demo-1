import React from 'react';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	isEditing: false, 
    }
  }

  onEditClick(){
  	this.setState({ isEditing: true })
  }

  onCancelClick(){
  	this.setState({ isEditing: false })
  }


  renderActionsSection(){

  	if(this.state.isEditing){	
  		return (
        <td>
          <button onClick={(ev) => this.onSaveClick(ev)}>Save</button>
          <button onClick={ this.onCancelClick.bind(this) }>Cancel</button>
        </td>
  		)
  	}

  	return (
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
      </td>
  	)
  }


  	renderTaskSection(){
  		const { task, isCompleted } = this.props

      if(this.state.isEditing){ 
          return (
            <td>
              <form onSubmit={(ev) => this.onSaveClick(ev)}>
                <input type="text" defaultValue={task} ref="editInput" />
              </form>
            </td>
          )
      }

  		const taskStyle = {
  			textDecoration: isCompleted ? 'line-through' : 'initial',
        color: isCompleted ? 'gray' : 'initial',
  			cursor: 'pointer'
  		}
  		return (
			     <td onClick={ this.props.toggleTask.bind(this, task) } style={taskStyle}>{task}</td>
  		)
  	}

    onSaveClick(ev){
      ev.preventDefault()
     
      const oldTask = this.props.task
      const newTask = this.refs.editInput.value
      this.props.saveTask(oldTask, newTask)
      this.setState({ isEditing: false })
    }

  render() {
    return (
      <tr>
      	{ this.renderTaskSection() }
      	{ this.renderActionsSection() }
      </tr>
    );
  }


}
