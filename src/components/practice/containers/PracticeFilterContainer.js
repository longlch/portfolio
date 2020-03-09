import {connect} from "react-redux";
import PracticeFilterTodo from "../components/PracticeFilterTodo";
import {filterTodo} from "../actions/actions";

const mapStateToProps = state => {
    return {
        filterMode: state.practiceFilterReducer
    }
}
const mapDispatchToProps = dispatch => ({
    filter: (filterMode) =>{
        dispatch(filterTodo(filterMode))
    }
})

const PracticeTodoContainers = connect(mapStateToProps, mapDispatchToProps)(PracticeFilterTodo);
export default PracticeTodoContainers
