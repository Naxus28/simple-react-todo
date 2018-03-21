import React from 'react';
import PropTypes from 'prop-types';
import TodoList from 'components/TodoList.js';
import Button from 'components/Button';
import todosUtils from 'utils/todos-utils.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    // initial sample data
    this.state = {
      todos: todosUtils.getTodos()
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
        id: (todos.length && todos[todos.length-1].id + 1) || 1
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
    let todos = this.state.todos;
    let deletedTodo = todos.filter(todo => todo.id === todoId);

    this.setState({
      todos: todos.filter(todo => todo.id !== todoId),
    });
    console.log(...deletedTodo);
    todosUtils.setDeletedTodos(...deletedTodo);
  }

  render() {
    return (
      <div className="App">
        <Button addTodo={this.handleAdd}/>
        <TodoList todos={this.state.todos}
                  handleAdd={this.handleAdd} 
                  handleToggle={this.handleToggle}
                  handleDelete={this.handleDelete} />
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};


export default App;
