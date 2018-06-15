import React from 'react';
import TodoList from 'components/TodoList.js';
import Button from 'components/ui/Button';
import todosUtils from 'utils/todos-utils.js';

class TodosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    // preferable to set state in constructor than componentWillMount
    // https://reactjs.org/docs/react-component.html#componentwillmount
    this.state = {
      todos: todosUtils.getTodos()
    } 
  }

  // componentWillMount() {
  //   this.setState({
  //     todos: todosUtils.getTodos()
  //   });
  // }

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
        deleted: false,
        id: todosUtils.generateTodoId(todos)
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
  
  handleDelete(todo) {
    todosUtils.flagDeletedTodo(todo);

    this.setState({
      todos: todosUtils.getTodos()
    });
  }

  render() {
    return (
      <div className="todos-container">
        <Button addTodo={this.handleAdd}/>
        <TodoList todos={this.state.todos}
                  handleToggle={this.handleToggle}
                  handleDelete={this.handleDelete} />
      </div>
    );
  }
}


export default TodosContainer;
