import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import JoinForm from './components/JoinForm';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={JoinForm} />
            </Switch>
        );
    }
}

export default Routes;
