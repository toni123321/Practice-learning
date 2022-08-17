import { TODO_TYPES } from "./todo.types";

const INITIAL_STATE = {
    todos: []
}

export const todoReducer = (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type){
        case TODO_TYPES.SET_TODO_ITEMS:
            return { ...state, todos: payload }
        case TODO_TYPES.ADD_TODO:
            return { ...state, todos: payload }
        case TODO_TYPES.TOGGLE_TODO:
            return { ...state, todos: payload }
        default:
            return state;
    }
}

