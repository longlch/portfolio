import React from "react";
import {VisibilityFilters} from "../actions/action";

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
                        <button
                            disabled={currentVisible === item.type}
                            onClick={()=>{
                                filterTodo(item.type);
                            }}
                            style={{marginLeft: '4px', color: currentVisible === item.type ? 'grey' : 'blue'}}
                            key={i}>
                            {item.text}
                        </button>
                    )
                }
            </div>
        );
    }
}

export default Footer;
