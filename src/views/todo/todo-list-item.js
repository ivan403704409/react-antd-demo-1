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
	  			<button>Save</button>
	      		<button onClick={ this.onCancelClick.bind(this) }>Cancel</button>
      		</td>
  		)
  	}

  	return (
  		<td>
	  		<button onClick={this.onEditClick.bind(this)}>Edit</button>
	      	<button>Delete</button>
      	</td>
  	)
  }


  	renderTaskSection(){
  		const { task, isCompleted } = this.props
  		console.log(this.props)
  		const taskStyle = {
  			color: isCompleted ? 'green' : 'red',
  			cursor: 'pointer'
  		}
  		return (
			<td onClick={ this.props.toggleTask.bind(this, task) } style={taskStyle}>{task}</td>
  		)
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
