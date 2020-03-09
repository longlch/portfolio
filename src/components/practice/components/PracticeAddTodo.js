import React from "react";

class PracticeAddTodo extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            text: ''
        }
    }

    onKeyUp = (text) => {
        this.setState({text: text})
    }

    render() {
        const {addTodo} = this.props;
        const {text} = this.state;

        return (
            <div>
                <input onBlur={event=>this.onKeyUp(event.target.value)} type="text"/>
                <button
                    onClick={()=>{
                        addTodo(text)
                    }}
                    >
                    Add me
                </button>

            </div>
        );
    }
}

export default PracticeAddTodo;
