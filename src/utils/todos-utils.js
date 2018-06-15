// service used to share todos state across components 
// that are not on the same component tree 

import _ from 'lodash';

let TODOS = []

let flagDeletedTodo = (deletedTodo) => {
  // create new array and new obj to avoid mutation
  let todosCopy = [...getTodos()];
  deletedTodo = Object.assign({}, deletedTodo, {deleted: true});

  let deletedIndex = _.findIndex(todosCopy, (todo) => todo.id === deletedTodo.id);
  todosCopy.splice(deletedIndex, 1, deletedTodo);

  setTodos(todosCopy);
}

let generateTodoId = (todos) => {
  return todos.length 
    ? (TODOS[TODOS.length-1].id + 1) 
    : 1;
};

let getTodos = () => TODOS;
let setTodos = (todos) => TODOS = [...todos];

let getDeletedTodos = () => TODOS.filter(todo => todo.deleted);
let getCompletedTodos = () => TODOS.filter(todo => todo.completed);


export default {
  flagDeletedTodo,
  generateTodoId,
  getTodos,
  setTodos,
  getDeletedTodos,
  getCompletedTodos,
}