import React from 'react';
import CreateTodo from './create-todo'
import TodoList from './todo-list';

const todos = [
	{task: 'task1', isCompleted: false },
	{task: 'task2', isCompleted: true },
]

export default class Todo extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
    	todos
    }
  }

  render() {
    return (
      <div>
        <h1>React Todos App</h1>
      	<CreateTodo createTask={this.createTask.bind(this)} todos={this.state.todos} />
 		<TodoList 
            todos={this.state.todos} 
            toggleTask={this.toggleTask.bind(this)} 
            saveTask={this.saveTask.bind(this)}  
            deleteTask={this.deleteTask.bind(this)}  
        />
      </div>
    );
  }

  createTask(task){
  	this.state.todos.push({
  		task,
  		isCompleted: false,
  	})
  	this.setState({ todos: this.state.todos })
  }

  deleteTask(task){
    let todos = this.state.todos.filter( todo => todo.task !== task )
    this.setState({ todos: todos })
  }

  saveTask(oldTask, newTask){
    let fondTodo = this.state.todos.filter( todo => todo.task === oldTask )[0]
    fondTodo.task = newTask
    this.setState({ todos: this.state.todos })
  }

  toggleTask(task){
  	let fondTodo = this.state.todos.filter( todo => todo.task === task )[0]
	fondTodo.isCompleted = !fondTodo.isCompleted
	this.setState({ todos: this.state.todos })
  }
}

