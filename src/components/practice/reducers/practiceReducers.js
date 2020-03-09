import {combineReducers} from "redux";
import {practiceTodoReducer} from "./practiceTodoReducer";
import practiceFilterReducer from "./praticeFilterReducer";


const practiceReducers = combineReducers({
    practiceTodoReducer,
    practiceFilterReducer
});

export default practiceReducers;
