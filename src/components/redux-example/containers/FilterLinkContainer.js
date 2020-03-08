import {showVisibility} from "../actions/action";
import {connect} from "react-redux";
import Footer from "../components/Footer";

const mapStateToProps = state => {
    return {
        currentVisible: state.visibilityReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filterTodo: filter => {
            dispatch(showVisibility(filter));
        }
    }
}

const FilterLinkContainer = connect(mapStateToProps, mapDispatchToProps)(Footer)
export default FilterLinkContainer;
