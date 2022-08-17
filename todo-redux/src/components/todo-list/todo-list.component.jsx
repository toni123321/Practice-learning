import TodoItem from "../todo-item/todo-item.component";
import { TodoListContainer } from "./todo-list.styles";
import { useDispatch } from 'react-redux';
import { ToggleTodoItem } from "../../store/todo/todo.action";
import { useSelector } from 'react-redux';
import { selectTodosReducer } from "../../store/todo.js/todo.selector";

const TodoList = () => {
    const dispatch = useDispatch();
    const todoItems = useSelector(selectTodosReducer);

    const toggleTodoItem = (todoItem) => {
        console.log(`TodoItems: ${todoItems}`);
        dispatch(ToggleTodoItem(todoItems, todoItem));
    }

    return (
        <TodoListContainer>
            { todoItems.map((item) => 
                <TodoItem key={item.id} todoItem={item} toggleTodoItem={toggleTodoItem}/>
            )}
        </TodoListContainer>
    )
}
export default TodoList;