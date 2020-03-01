import React from 'react';
import Portfolio from "./components/portfolio/Portfolio";
import {BrowserRouter as Router, Route} from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home";
import {Switch} from "react-router";

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/home'><Home></Home></Route>
                    <Route path='/'><Portfolio></Portfolio></Route>
                </Switch>
            </Router>

        );
    }
}

export default App;
