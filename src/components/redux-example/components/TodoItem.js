import React from "react";

class TodoItem extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let {onclick, completed, text, id} = this.props;
        return (
            <li
                onClick={()=>onclick(id)}
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                {id +': '+text}
            </li>

        );
    }
}

export default TodoItem;
