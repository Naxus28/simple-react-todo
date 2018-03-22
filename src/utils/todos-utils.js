// service used to share todos state across components 
// that are not on the same component tree 
// (thus state could not be passed down as props or up in callbacks)
const TODOS = {
  todos: [],
  deleted: [],
  completed: []
};

let getTodoId = (todos) => {
  return todos.length 
    ? (todos[todos.length-1].id + 1) 
    : 1;
};

let getTodos = () => TODOS.todos;
let setTodos = (todos) => TODOS.todos = [...todos];

let getDeletedTodos = () => TODOS.deleted;
let setDeletedTodos = (todo) => setTodosHelper('deleted', todo);

let getCompletedTodos = () => TODOS.completed;
let setCompletedTodos = (todo) => {
  if (todo.completed) {
    setTodosHelper('completed', todo);
  } else {
    TODOS.completed = TODOS.completed.filter(completedTodo => completedTodo.id !== todo.id);
  }
};

// need to track todo id in relation to the array in which it is contained
let setTodosHelper = (todoType, todo) => {
  let todos = TODOS[todoType];

  todo = Object.assign({}, todo, {id: getTodoId(todos)});
  TODOS[todoType] = [...todos, todo];
};



export default {
  getTodoId,
  getTodos,
  setTodos,
  getDeletedTodos,
  setDeletedTodos,
  getCompletedTodos,
  setCompletedTodos
}