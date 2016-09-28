import React from 'react';
import TodoListHeader from './todo-list-header'
import TodoListItem from './todo-list-item'

export default class TodoList extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  renderItems(){
  	return this.props.todos.map((todo, index) => {
  		return <TodoListItem key={index} {...todo} toggleTask={this.props.toggleTask} />
  	})
  }

  render() {
    return (
      <table>
      	<TodoListHeader />
      	<tbody>
      		{ this.renderItems () }
      	</tbody>
      </table>
    );
  }
}
