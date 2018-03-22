// service used to share todos state across components 
// that are not on the same component tree 
// (thus state could not be passed down as props or up in callbacks)
let _todos = [];
let _deletedTodos = [];
let _completedTodos = [];

let getTodoId = (todos) => {
  return todos.length 
    ? (todos[todos.length-1].id + 1) 
    : 1;
};

let getTodos = () => _todos;
let setTodos = (todos) => _todos = [...todos];

let getDeletedTodos = () => _deletedTodos;
let setDeletedTodos = (todo) => {
  // need to track deleted todo id in relation to
  // deteled todos, not todos: one may delete todos and add more todos, 
  // in which case different deleted todos could have the same id (todos id is generated based on arrya length)
  todo = Object.assign({}, todo, {id: getTodoId(_deletedTodos)});
  _deletedTodos = [..._deletedTodos, todo];
}

let getCompletedTodos = () => _completedTodos;
let setCompletedTodos = (todo) => {
  if (todo.completed) {
    todo = Object.assign({}, todo, {id: getTodoId(_completedTodos)});
    _completedTodos = [..._completedTodos, todo];
  } else {
    _completedTodos = _completedTodos.filter(completedTodo => completedTodo.id !== todo.id)
  }
}



export default {
  getTodoId,
  getTodos,
  setTodos,
  getDeletedTodos,
  setDeletedTodos,
  getCompletedTodos,
  setCompletedTodos
}