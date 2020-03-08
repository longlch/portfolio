import {ADD_TODO, TOGGLE_TODO} from "../actions/action";

const initialState = {
    todos: [
        {
            id: 1,
            text: 'long',
            completed: false
        }
    ]
}

const todoReducer = (state = initialState.todos, action) => {

    switch (action.type) {
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

        case TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id == action.id) {
                    todo.completed = !todo.completed
                }
                return todo;
            });
            break;

        default:
            return state;

    }
};

export default todoReducer;
