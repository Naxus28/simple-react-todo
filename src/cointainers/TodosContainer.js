import React, { Component } from 'react';
import TodoList from 'components/TodoList.js'

import 'styles/App.css';

class TodosContainer extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple React Todo</h1>
        </header>
        <div className="todo-wrapper">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default TodosContainer;
