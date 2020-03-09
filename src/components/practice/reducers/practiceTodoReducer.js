import {ADD_TODO, TOGGLE_TODO} from "../actions/actions";

const initialState = {
    todos: [
        {
            id: 1,
            text: 'Build Side Project, Build Your Empire',
            completed: true
        },
        {
            id: 2,
            text: 'The harder that challenges you, The stronger you become',
            completed: false
        }
    ]
}

export const practiceTodoReducer = (state = initialState.todos, action) => {
    switch (action.type) {

        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (todo.id === action.id)
                    todo.completed = !todo.completed;
                return todo;
            });
            break;

        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
            break;

        default:
            return state;
            break;
    }
}
