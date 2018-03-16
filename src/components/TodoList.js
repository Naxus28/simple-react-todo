import React from 'react';
import Todo from 'components/Todo';

import 'styles/Todos.css';


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
      <React.Fragment>
        <ol>
          {this.props.todos.map(todo => {
            return <Todo todo={todo} 
                         key={todo.id} 
                         todoId={todo.id} 
                         toggleTodo={this.handleToggle}
                         deleteTodo={this.handleDelete} />
          })}
        </ol>
      </React.Fragment>
    );
  }
}

export default TodoList;