import { combineReducers } from 'redux'
import todoReducer from "./todoReducer";
import visibilityReducer from "./visibilityReducer";

const totalReducer = combineReducers({
    todoReducer,
    visibilityReducer
});
export default totalReducer;
