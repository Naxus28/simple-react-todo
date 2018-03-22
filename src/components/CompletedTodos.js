import React from 'react';
import PropTypes from 'prop-types';
import Todo from 'components/Todo';

class CompletedTodos extends React.Component {
  render() {
    let { completedTodos } = this.props;

    return (
      <div className="deleted-todos-wrapper">
        <ol>
         {completedTodos.length > 0 && completedTodos.map(completedTodo => {
            return <li key={completedTodo.id}>
                      <Todo todo={completedTodo} 
                            todoId={completedTodo.id} />
                    </li>
          })}
        </ol>
      </div>
    );
  }
}

CompletedTodos.propTypes = {
  completedTodos: PropTypes.array
};

export default CompletedTodos;
