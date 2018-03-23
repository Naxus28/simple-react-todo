import React from 'react';
import PropTypes from 'prop-types';
import Todo from 'components/Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);     
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  handleToggle(item, id) {
    this.props.handleToggle(item, id);
  }
  
  handleDelete(todoId) {
    this.props.handleDelete(todoId);
  }
  
 // use 'id' instead of 'index' for 'key' property in the loop: 
 // https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
 // https://reactjs.org/docs/reconciliation.html#recursing-on-children
  render() {
    return (
      <div className="todos-wrapper">
        <ol>
          {this.props.todos.map(todo => {
            return !todo.deleted &&
                     <li key={todo.id} >
                        <Todo todo={todo} 
                              todoId={todo.id} 
                              toggleTodo={this.handleToggle}
                              deleteTodo={this.handleDelete} />
                      </li>
          })}
        </ol>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func
};

export default TodoList;