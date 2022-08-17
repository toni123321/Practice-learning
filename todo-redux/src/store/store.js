import { todoReducer } from './todo/todo.reducer';
import { configureStore } from '@reduxjs/toolkit';


const rootReducer = {
    todo: todoReducer,
}

export const store = configureStore({
    reducer: rootReducer
})