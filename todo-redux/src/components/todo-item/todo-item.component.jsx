import { TodoItemContainer, Name } from "./todo-item.styles";

const TodoItem = ({todoItem}) => {
    const {title, isDone} = todoItem;

    return (
        <TodoItemContainer isDone={isDone}>
            <Name isDone={isDone}>{title}</Name>
        </TodoItemContainer>
    )
}
export default TodoItem;