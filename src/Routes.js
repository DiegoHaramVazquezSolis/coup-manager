import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import JoinForm from './components/JoinForm';
import ListOfTeams from './components/ListOfTeams';
import MemberSignIn from './components/MemberSignIn/MemberSignIn';
import ProfileView from './components/Profile/ProfileView';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/registro/miembro/:id" component={MemberSignIn} />
                <Route exact path="/" component={JoinForm} />
                <Route exact path="/lista" component={ListOfTeams} />
                <Route exact path="/perfil" component={ProfileView} />
            </Switch>
        );
    }
}

export default Routes;
