import { TODO_TYPES } from "./todo.types";

const AddItem = (todoItems, todoItem) => {
    const isExisting = todoItems.find((item) => item.id === todoItem.id);
    if(!isExisting) {
        return [...todoItems, todoItem];
    }
    return todoItems;
}

export const AddTodoItem = (todoItems, todoItem) => {
    const updatedTodoItems = AddItem(todoItems, todoItem);
    return ({type: TODO_TYPES.ADD_TODO, payload: updatedTodoItems});
}

export const SetTodoItems = (todoItems) => 
    ({ type: TODO_TYPES.SET_TODO_ITEMS, payload: todoItems });


const toggleItem = (todoItems, todoItem) => {
    console.log(`TodoItems here: ${todoItems}`)
    return todoItems.map((item) => {
            return item.id === todoItem.id 
            ? {...item, isDone: !todoItem.isDone}
            : item
        }
    )
}

export const ToggleTodoItem = (todoItems, todoItem) => {
    const updatedItems = toggleItem(todoItems, todoItem);
    return ({ type: TODO_TYPES.TOGGLE_TODO, payload: updatedItems });
}