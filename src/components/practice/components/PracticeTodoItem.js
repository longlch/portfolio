import React from "react";

class PracticeTodoItem extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {id, text, completed, onToggle} = this.props;
        return (
            <li
                onClick={()=>{
                    onToggle(id)
                }}
                style={{
                    'textDecoration': completed ? 'line-through' : ''
                }}
            >
                {id + ': ' + text}
            </li>
        );
    }
}

export default PracticeTodoItem;
