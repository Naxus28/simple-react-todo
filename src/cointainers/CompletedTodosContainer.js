import React from 'react';
import CompletedTodos from '../components/CompletedTodos';
import todosUtils from 'utils/todos-utils.js';


class CompletedTodosContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completedTodos: todosUtils.getCompletedTodos()
    } 
  }

  render() {
    return this.state.completedTodos.length 
      ? <React.Fragment>
          <h1>These are the completed todos</h1>
          <CompletedTodos completedTodos={this.state.completedTodos} />
        </React.Fragment>
      : <p>No completed todos</p>
  }
}

CompletedTodosContainer.propTypes = {

};

export default CompletedTodosContainer;
