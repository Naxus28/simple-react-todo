import React from 'react';
import ReadOnlyTodoList from '../components/ReadOnlyTodoList';
import todosUtils from 'utils/todos-utils.js';


class CompletedTodosContainer extends React.Component {
  constructor(props) {
    super(props);

    // preferable to set state in constructor than componentWillMount
    // https://reactjs.org/docs/react-component.html#componentwillmount
    this.state = {
      completedTodos: todosUtils.getCompletedTodos()
    } 
  }

  render() {
    return <div className="completed-todos-wrapper">
              {this.state.completedTodos.length 
                ? <React.Fragment>
                    <h1>These are the completed todos</h1>
                    <ReadOnlyTodoList todos={this.state.completedTodos} />
                  </React.Fragment>
                : <p>No completed todos</p>
              }
          </div>
  }
}


export default CompletedTodosContainer;
