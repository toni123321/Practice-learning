import TodoList from "./components/todo-list/todo-list.component";

const todoItems = [
  {id: 1, title: "todo 1", isDone: false},
  {id: 2, title: "todo 2", isDone: false},
  {id: 3, title: "todo 3", isDone: false},
  {id: 4, title: "todo 4", isDone: false},
  {id: 5, title: "todo 5", isDone: false},
  {id: 6, title: "todo 6", isDone: true},
]

function App() {
  return (
    <TodoList todoItems={todoItems}/>
  );
}
export default App;
