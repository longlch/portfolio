import React from 'react';
import App from "./components/App";


class ReduxExample extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <App/>
            </div>
        );
    }
}

export default ReduxExample;
