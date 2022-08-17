import { TodoItemContainer, Name } from "./todo-item.styles";


const TodoItem = ({todoItem, toggleTodoItem}) => {
    const {title, isDone} = todoItem;
    
    const toggle = () => {
        return toggleTodoItem(todoItem);
    }

    return (
        <TodoItemContainer onClick={toggle} isDone={isDone}>
            <Name isDone={isDone}>{title}</Name>
        </TodoItemContainer>
    )
}
export default TodoItem;