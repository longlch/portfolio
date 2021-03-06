// Action types
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

let nextTodoId = 1;
export const addTodo = (text) => ({  // [TOLEARN]: Abbreviation to return object in function
    type: ADD_TODO,
    id: ++nextTodoId,
    text
});

export const showVisibility = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});



