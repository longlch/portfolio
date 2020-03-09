import React from 'react';
import App from "./components/App";
import { createStore } from 'redux';
import {Provider} from "react-redux";
import totalReducer from "./reducers/reducer";

const store = createStore(totalReducer);

class ReduxExample extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    <App/>
                </Provider>
            </div>
        );
    }
}

export default ReduxExample;
