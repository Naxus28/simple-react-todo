import React from 'react';
import Todo from 'components/Todo';
import Button from 'components/Button';

import 'styles/Todos.css';


class TodoList extends React.Component {
  constructor(props) {
    super(props);     
    
    // initial sample data
    this.state = {
      todos: [
        {
          item: 'Buy groceries',
          completed: false,
          id: 1
        },
        {
          item: 'Go to bank',
          completed: false,
          id: 2
        },
        {
          item: 'Wash car',
          completed: false,
          id: 3
        },
        {
          item: 'Check stocks',
          completed: false,
          id: 4
        }
      ]
    };        

    this.handleAdd = this.handleAdd.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  

  handleAdd(input) {
    let todo = input.value;
    let todos = this.state.todos;

    let updatedTodos = [
      ...todos, 
      {
        item: todo,
        completed: false,
        id: (todos.length && todos[todos.length-1].id + 1) || 1
      }
    ]; 
    
    this.setState({
      todos: (todo && updatedTodos) || this.state.todos
    });
    
    input.value = ''; // reset input
  }

  handleToggle(item, id) {
    /* ANOTHER OPTION INSTEAD OF MAP
     * let todosCopy = this.state.todos.slice();
     * todosCopy[id].completed = !todosCopy[id].completed;
    */
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        } 
        
        return todo;
      })
    });
  }
  
  handleDelete(todoId) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    });
  }
  
 // use 'id' instead of 'index' for 'key' property in the loop: 
 // https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
 // https://reactjs.org/docs/reconciliation.html#recursing-on-children
  render() {
    return (
      <React.Fragment>
        <Button addTodo={this.handleAdd}/>

        <ol>
          {this.state.todos.map(todo => {
            return <Todo todo={todo} 
                         key={todo.id} 
                         todoId={todo.id} 
                         toggleTodo={this.handleToggle}
                         deleteTodo={this.handleDelete} />
          })}
        </ol>
      </React.Fragment>
    );
  }
}

export default TodoList;