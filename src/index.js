import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodosContainer from './cointainers/TodosContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <TodosContainer />, 
  document.getElementById('root')
);
registerServiceWorker();
