import React from 'react';

// ref is used on uncontrolled components to collect form data
// https://reactjs.org/docs/uncontrolled-components.html
// https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.addTodo(this.input);
  }
  
  render() {
    return <React.Fragment>
            <input type="text" 
                   id="add-todo" 
                   ref={node => this.input=node} />
            <button onClick={this.handleClick}>Add todo</button>
          </React.Fragment>
  }
}


export default Button;