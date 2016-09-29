import React from 'react';

export default class CreateTodo extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
        error: null
    }
  }

  render() {
    let { error } = this.state
    return (
        <form onSubmit={this.handleCreate.bind(this)}>
            <input type="text" placeholder="What do I need do?" ref="createInput" />
            <button >Create</button>
            {
                error && <p style={{color: 'red'}}>{error}</p>
            }
        </form>
    );
  }

  handleCreate(ev){
  	ev.preventDefault()
  	let value = this.refs.createInput.value

    let exit = !!this.props.todos.filter(todo => todo.task === value)[0]
    if(value && exit){
        this.setState({ error: 'Task already exits!'})
        return
    }

  	if(value){
  		this.props.createTask( this.refs.createInput.value )
  		this.refs.createInput.value = ''
        this.setState({ error: null})
        return
  	}

    this.setState({ error: 'Please Enter Somthing Todo!'})

  }

}
				