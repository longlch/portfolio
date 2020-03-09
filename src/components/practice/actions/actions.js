export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const  SHOW_ALL = 'SHOW_ALL';
export const  SHOW_COMPLETED = 'SHOW_COMPLETED';
export const  SHOW_ACTIVE = 'SHOW_ACTIVE';
export const  VISIBILITY_FILTER = 'VISIBILITY_FILTER';

export const filterByMode = {
    SHOW_ALL: SHOW_ALL,
    SHOW_COMPLETED: SHOW_COMPLETED,
    SHOW_ACTIVE: SHOW_ACTIVE
}

// [TOLEARN]: Abbreviation to return object in function
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});

export const filterTodo = (filterType) => ({
    type: VISIBILITY_FILTER,
    filterType
})

let id = 2;
export const addTodo = text => ({
    type: ADD_TODO,
    id: ++id,
    text
})
