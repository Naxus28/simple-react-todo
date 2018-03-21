import React from 'react';
import DeletedTodos from '../components/DeletedTodos';
import todosUtils from 'utils/todos-utils.js';

class DeletedTodosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deletedTodos: todosUtils.getDeletedTodos()
    } 
  }

  render() {
    let content = this.state.deletedTodos.length 
      ? <React.Fragment>
          <h1>These are the deleted todos</h1>
          <DeletedTodos deletedTodos={this.state.deletedTodos} />
        </React.Fragment>
      : <p>No deleted todos</p>

    return content;
  }
}


export default DeletedTodosContainer;
