import React from 'react';
import {createStore} from 'redux';
import {Provider} from "react-redux";
import totalReducer from "./reducers/reducer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

const store = createStore(totalReducer);

class ReduxExample extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    <AddTodo/>
                    <VisibleTodoList/>
                    <Footer/>
                </Provider>
            </div>
        );
    }
}

export default ReduxExample;
