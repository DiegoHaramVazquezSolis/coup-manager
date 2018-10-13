import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import JoinForm from './components/JoinForm';
import ListOfTeams from './components/ListOfTeams';
import MemberSignIn from './components/MemberSignIn/MemberSignIn';
import ProfileView from './components/Profile/ProfileView';
import LogIn from './components/LogIn';
import UserMatchStatistics from './components/Statistics/UserMatchStatistics/UserMatchStatistics';
import TeamPrivateProfile from './components/TeamPrivateProfile/TeamPrivateProfile';
import TeamMatchStatistics from './components/Statistics/TeamMatchStatistics/TeamMatchStatistics';
import Sponsors from './views/Sponsors';
import ChatRoom from './components/Chat/ChatRoom';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LogIn} />
                <Route exact path="/sponsors" component={Sponsors} />
                <Route exact path="/registro/miembro/:id" component={MemberSignIn} />
                <Route exact path="/registro/equipo" component={JoinForm} />
                <Route exact path="/lista" component={ListOfTeams} />
                <Route exact path="/perfil" component={ProfileView} />
                <Route exact path="/perfil/equipo" component={TeamPrivateProfile} />
                <Route exact path="/chat/equipo" component={ChatRoom} />
                <Route exact path="/estadisticas/:etapa/:number" component={UserMatchStatistics} />
                <Route exact path="/equipo/estadisticas/partido/:matchResultId" component={TeamMatchStatistics} />
            </Switch>
        );
    }
}

export default Routes;
