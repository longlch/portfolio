import {showVisibility} from "../actions/action";
import {connect} from "react-redux";
import FilterButton from "../components/FilterButton";

const mapStateToProps = (state, ownProps) => {
    return {
        isDisabled: ownProps.filter === state.visibilityReducer
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        filterTodo: () =>
            dispatch(showVisibility(ownProps.filter))

    }
}

const FilterLinkContainer = connect(mapStateToProps, mapDispatchToProps)(FilterButton)
export default FilterLinkContainer;
