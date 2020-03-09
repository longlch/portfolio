import React from "react";
import PracticeTodoItem from "./PracticeTodoItem";
import PracticeAddTodo from "./PracticeAddTodo";

class PracticeTodoList extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {todos, toggleTodo, addTodo} = this.props;

        return (
            <div>
                <PracticeAddTodo addTodo={addTodo}/>
                <ul>
                    {
                        todos.map((todo, index)=>
                            <PracticeTodoItem
                                onToggle={toggleTodo}
                                key={index}
                                {...todo}
                            />
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default PracticeTodoList;
