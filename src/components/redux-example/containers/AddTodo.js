import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../actions/action";

class AddTodo extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let {createTodo} = this.props;
        let input


        return (
            <div>

                <form onSubmit={e =>{
                    e.preventDefault();
                    if (!input.value.trim()) {
                        return;
                    }

                    createTodo(input.value);
                    input.value = '';

                }}>
                    <input ref={node => input = node} />
                    <button>Add Todo</button>
                </form>
            </div>

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createTodo: text => {
            dispatch(addTodo(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);
