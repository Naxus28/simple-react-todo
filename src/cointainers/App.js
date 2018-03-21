import React from 'react';
import TodosContainer from './TodosContainer';
import DeletedTodosContainer from './DeletedTodosContainer';
import Header from '../components/Header';
import {
  Route,
  Switch
} from 'react-router-dom';

import 'styles/reset.css';
import 'styles/base.css';
import 'styles/App.css';

class App extends React.Component {
  render() {
    return  <React.Fragment>
              <div className="App">
                <Header />
                <Switch>
                  <Route exact path='/' component={TodosContainer}/>
                  <Route path='/deleted' component={DeletedTodosContainer}/>
                </Switch>
              </div>
            </React.Fragment>;
  }
}

export default App;
