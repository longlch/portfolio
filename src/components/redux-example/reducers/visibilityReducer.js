import {SET_VISIBILITY_FILTER} from "../actions/action";

const initialState = {
    visibilityFilter: ''
}

const visibilityReducer = (state = '', action) => {
    switch (action.type) {

        case SET_VISIBILITY_FILTER:
            return action.filter;
            break;

        default:
            return state;
    }

}

export default visibilityReducer;
