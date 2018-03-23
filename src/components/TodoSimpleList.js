import React from 'react';
import PropTypes from 'prop-types';
import Todo from 'components/Todo';

class ReadOnlyTodosList extends React.Component {
  render() {
    let { todos } = this.props;

    return (
      <div className="deleted-todos-wrapper">
        <h1>These are the deleted todos</h1>
        <ol>
         {todos.length > 0 && todos.map(deletedTodo => {
            return <li key={deletedTodo.id}>
                      <Todo todo={deletedTodo} 
                            todoId={deletedTodo.id} />
                    </li>
          })}
        </ol>
      </div>
    );
  }
}

ReadOnlyTodos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default ReadOnlyTodos;
