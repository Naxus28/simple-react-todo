import React, { Component } from 'react';
import TodoList from 'components/TodoList.js'
import Button from 'components/Button';

import 'styles/App.css';

class TodosContainer extends Component {
  constructor(props) {
    super(props);
    
    // initial sample data
    this.state = {
      todos: [
        {
          item: 'Buy groceries',
          completed: false,
          id: 1
        },
        {
          item: 'Go to bank',
          completed: false,
          id: 2
        },
        {
          item: 'Wash car',
          completed: false,
          id: 3
        },
        {
          item: 'Check stocks',
          completed: false,
          id: 4
        }
      ]
    };   

    this.handleAdd = this.handleAdd.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);   
  }

  handleAdd(input) {
    let todo = input.value;
    let todos = this.state.todos;

    let updatedTodos = [
      ...todos, 
      {
        item: todo,
        completed: false,
        id: todos[todos.length-1].id + 1 // get the last id and add 1
      }
    ]; 
    
    this.setState({
      todos: (todo && updatedTodos) || this.state.todos
    });
    
    input.value = ''; // reset input
  }

  handleToggle(item, id) {
    /* ANOTHER OPTION INSTEAD OF MAP
     * let todosCopy = this.state.todos.slice();
     * todosCopy[id].completed = !todosCopy[id].completed;
    */
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        } 
        
        return todo;
      })
    });
  }
  
  handleDelete(todoId) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple React Todo</h1>
        </header>
        <div className="todo-wrapper">
          <Button addTodo={this.handleAdd}/>
          <TodoList todos={this.state.todos} 
                    handleToggle={this.handleToggle}
                    handleDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default TodosContainer;
