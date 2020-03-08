import {SET_VISIBILITY_FILTER, VisibilityFilters} from "../actions/action";

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL
}

const visibilityReducer = (state = initialState.visibilityFilter, action) => {
    switch (action.type) {

        case SET_VISIBILITY_FILTER:
            return action.filter;
            break;

        default:
            return state;
    }

}

export default visibilityReducer;
