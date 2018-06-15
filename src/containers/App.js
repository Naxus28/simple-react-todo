import React from 'react';
import TodosContainer from './TodosContainer';
import DeletedTodosContainer from './DeletedTodosContainer';
import CompletedTodosContainer from './CompletedTodosContainer';
import NotFound from '../components/NotFound';
import Header from '../components/ui/Header';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import 'styles/reset.css';
import 'styles/base.css';
import 'styles/App.css';
import 'styles/Todos.css';


class App extends React.Component {
  render() {
    return  <React.Fragment>
              <div className="App">
                <Header />
                <Switch>
                  <Route exact path='/' component={TodosContainer} />
                  <Route path='/deleted' component={DeletedTodosContainer} />
                  <Route path='/completed' component={CompletedTodosContainer} />
                  <Route path='/404' component={NotFound} />
                  <Redirect to='/404' />
                </Switch>
              </div>
            </React.Fragment>;
  }
}

export default App;
