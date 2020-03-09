import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import PracticeTodoContainer from "./containers/PracticeTodoContainer";
import practiceReducers from "./reducers/practiceReducers";
import PracticeFilterContainer from "./containers/PracticeFilterContainer";


const store = createStore(practiceReducers);
class PracticeTodoApp extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <Provider store={store}>
                <PracticeTodoContainer/>
                <PracticeFilterContainer/>
            </Provider>
        );
    }
}

export default PracticeTodoApp;
