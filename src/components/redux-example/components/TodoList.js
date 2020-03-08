import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let {todos, onTodoClick} = this.props;
        return (
            <ul>
                {todos.map((todo, index) =>
                    <TodoItem
                        key={index}
                        onclick = {onTodoClick}
                        {...todo}
                    />
                )}
            </ul>
        );
    }

}

export default TodoList;
