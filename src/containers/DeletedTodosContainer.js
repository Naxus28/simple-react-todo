import React from 'react';
import ReadOnlyTodoList from '../components/ReadOnlyTodoList';
import todosUtils from 'utils/todos-utils.js';

class DeletedTodosContainer extends React.Component {
  constructor(props) {
    super(props);

    // preferable to set state in constructor than componentWillMount
    // https://reactjs.org/docs/react-component.html#componentwillmount
    this.state = {
      deletedTodos: todosUtils.getDeletedTodos()
    } 
  }

  render() {
    return  <div className="deleted-todos-wrapper">
              {this.state.deletedTodos.length 
                ? <React.Fragment>
                    <h1>These are the deleted todos</h1>
                    <ReadOnlyTodoList todos={this.state.deletedTodos} />
                  </React.Fragment>
                : <p>No deleted todos</p>
              }
            </div>
  }
}


export default DeletedTodosContainer;
