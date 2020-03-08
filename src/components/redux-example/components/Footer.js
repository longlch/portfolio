import React from "react";
import {VisibilityFilters} from "../actions/action";
import FilterLinkContainer from "../containers/FilterLinkContainer";

class Footer extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            visibilityItems: [
                {
                    type: VisibilityFilters.SHOW_ALL,
                    text: 'All'
                },
                {
                    type: VisibilityFilters.SHOW_COMPLETED,
                    text: 'Completed'
                },
                {
                    type: VisibilityFilters.SHOW_ACTIVE,
                    text: 'Active'
                }
            ]
        }
    }

    render() {
        const {currentVisible, filterTodo} = this.props;
        return (
            <div>
                {
                    this.state.visibilityItems.map((item, i) =>
                        <FilterLinkContainer
                            filter={item.type}
                            key={i}
                        >
                            {item.text}
                        </FilterLinkContainer>
                    )
                }
            </div>
        );
    }
}

export default Footer;
