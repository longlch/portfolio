import React from "react";

class FilterButton extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
        }
    }

    render() {
        const {isDisabled, children, filterTodo} = this.props;
        return (
            <button
                disabled={isDisabled}
                onClick={filterTodo}
                style={{marginLeft: '4px', color: isDisabled ? 'grey' : 'blue'}}
                >
                {children}
            </button>
        );
    }
}

export default FilterButton;
