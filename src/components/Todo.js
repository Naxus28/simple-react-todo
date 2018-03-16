import React from 'react';
import PropTypes from 'prop-types';

// the callback pattern (with the .bind) is more verbose than using an arrow function in the 
// render method (i.e. onClick={() => this.props.toggleTodotodo.item, todoId)}) but it is more 
// performant as it creates the function only once when the component is instantiated (mounted) 
// as opposed to re-creating the function on every render 
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  handleToggle() {
    const { todo, todoId } = this.props;
    this.props.toggleTodo(todo.item, todoId);
  }
  
  handleDelete () {
    this.props.deleteTodo(this.props.todoId);
  }
  
  render() {
    const todo = this.props.todo;

    return <li>
              <span onClick={this.handleToggle} 
               className={todo.completed ? 'completed' : ''}>{todo.item}</span>
              <span onClick={this.handleDelete}>x</span>
           </li>
  }
}

Todo.propTypes = {
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func
};

export default Todo;
