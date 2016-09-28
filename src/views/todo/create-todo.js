import React from 'react';

export default class CreateTodo extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
		<form onSubmit={this.handleCreate.bind(this)}>
			<input type="text" placeholder="What do I need do?" ref="createInput" />
			<button >Create</button>
		</form>
    );
  }

  handleCreate(ev){
  	ev.preventDefault()
  	let value = this.refs.createInput.value
  	if(value){
  		this.props.createTask( this.refs.createInput.value )
  		this.refs.createInput.value = ''
  	}
  }

}
				