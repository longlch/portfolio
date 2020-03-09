import {connect} from "react-redux";
import PracticeTodoList from "../components/PracticeTodoList";
import {addTodo, filterByMode, toggleTodo} from "../actions/actions";
import {text} from "@fortawesome/fontawesome-svg-core";

const handleTodos = (todos, filterMode) => {

    switch (filterMode) {

        case filterByMode.SHOW_COMPLETED:
            return todos.filter(item => item.completed);
            break;

        case filterByMode.SHOW_ACTIVE:
            return todos.filter(item => !item.completed);
            break;

        default:
            return todos;
    }
}

const mapStateToProps = state => {
    return {
        todos: handleTodos(state.practiceTodoReducer, state.practiceFilterReducer),
    }
}

const mapDispatchToProps = dispatch => ({
    toggleTodo: (id) => {
        dispatch(toggleTodo(id))
    },
    addTodo: (text) => {
        dispatch(addTodo(text))
    }
})
const PracticeTodoContainer = connect(mapStateToProps, mapDispatchToProps)(PracticeTodoList);
export default PracticeTodoContainer;


