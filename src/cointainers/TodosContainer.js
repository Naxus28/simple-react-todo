import React from 'react';
import PropTypes from 'prop-types';
import TodoList from 'components/TodoList.js';
import Button from 'components/Button';
import todosUtils from 'utils/todos-utils.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.setState({
      todos: todosUtils.getTodos()
    });
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.todos !== this.state.todos) {
      todosUtils.setTodos(nextState.todos);
    }
  }

  handleAdd(input) {
    if (!input.value) {
      alert('Please enter a todo');
      return;
    }

    let todos = this.state.todos;

    let updatedTodos = [
      ...todos, 
      {
        item: input.value,
        completed: false,
        id: todosUtils.getTodoId(todos)
      }
    ]; 

    this.setState({
      todos: updatedTodos
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
    let deletedTodo = todos.filter(todo => todo.id === todoId)[0];

    this.setState({
      todos: todos.filter(todo => todo.id !== todoId)
    });

    todosUtils.setDeletedTodos(deletedTodo);
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
