import {SHOW_ALL, VISIBILITY_FILTER} from "../actions/actions";

const practiceFilterReducer = (state = SHOW_ALL, action)=>{

    switch (action.type) {
        case VISIBILITY_FILTER:
            return state = action.filterType
            break;
        default:
            return  state;
            break
    }
}

export default practiceFilterReducer;
