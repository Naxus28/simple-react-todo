import React from 'react';
import PropTypes from 'prop-types';
import Todo from 'components/Todo';

class ReadOnlyTodoList extends React.Component {
  render() {
    let { todos, className } = this.props;
    let todoList = todos.map(todo => (
        <li key={todo.id}>
          <Todo todo={todo} todoId={todo.id} />
        </li>
      )
    );

    return  <div className={className}>
              <ol> {todoList} </ol>
            </div>
  }
}

ReadOnlyTodoList.propTypes = {
  todos: PropTypes.array,
  className: PropTypes.string
};

export default ReadOnlyTodoList;
