import React from 'react';
import PropTypes from 'prop-types';
import Todo from 'components/Todo';

class DeletedTodos extends React.Component {
  render() {
    let { deletedTodos } = this.props;

    return (
      <div className="deleted-todos-wrapper">
        <ol>
         {deletedTodos.length > 0 && deletedTodos.map(deletedTodo => {
            return <Todo todo={deletedTodo} 
                         key={deletedTodo.id} 
                         todoId={deletedTodo.id} />
          })}
        </ol>
      </div>
    );
  }
}

DeletedTodos.propTypes = {
  deletedTodos: PropTypes.array.isRequired
};

export default DeletedTodos;
