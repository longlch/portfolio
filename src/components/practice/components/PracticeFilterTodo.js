import React from "react";
import {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} from "../actions/actions";

class PracticeFilterTodo extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            filterBtns: [
                {
                    text: 'All',
                    type: SHOW_ALL
                },
                {
                    text: 'Complete',
                    type: SHOW_COMPLETED

                },
                {
                    text: 'Active',
                    type: SHOW_ACTIVE
                }
            ]
        }
    }

    isCurrentMode = (filterMode, currentType) => {
        return filterMode === currentType;
    }

    render() {
        const {filterBtns} = this.state;
        const {filter, filterMode} = this.props;


        return (
            <div>
                {filterBtns.map((item, index)=>(
                    <button
                        key={index}
                        onClick={()=>{
                            filter(item.type);
                        }}
                        disabled={this.isCurrentMode(filterMode, item.type)}
                        style={{
                            color: !this.isCurrentMode(filterMode, item.type) ? 'blue' : ''
                        }}
                    >
                        {item.text}
                    </button>
                ))}
            </div>
        );
    }
}

export default PracticeFilterTodo;
