let _todos = [
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
];

let _deletedTodos = [];

let getTodos = () => _todos;
let setTodos = (todos) => todos = _todos;

let getDeletedTodos = () => _deletedTodos;
let setDeletedTodos = (todo) => _deletedTodos = [..._deletedTodos, todo];


export default {
  getTodos,
  setTodos,
  getDeletedTodos,
  setDeletedTodos
}