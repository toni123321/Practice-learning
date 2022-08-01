import TodoItem from "../todo-item/todo-item.component";
import { TodoListContainer } from "./todo-list.styles";

const TodoList = ({todoItems}) => {
    return (
        <TodoListContainer>
            { todoItems.map((item) => 
                <TodoItem key={item.id} todoItem={item}/>
            )}
        </TodoListContainer>
    )
}
export default TodoList;