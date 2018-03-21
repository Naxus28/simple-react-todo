import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return <React.Fragment>             
            <header className="App-header">
              <h1 className="App-title">Simple React Todo</h1>  
            </header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/deleted">Deleted Todos</Link>
                </li>
              </ul>
            </nav>
          </React.Fragment>;
  }
}

export default Header;
