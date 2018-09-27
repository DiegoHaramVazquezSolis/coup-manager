import React, { Component } from 'react';
import Card from './Card/Card';
import CardHeader from './Card/CardHeader';
import CardBody from './Card/CardBody';
import ListGroup from './List/ListGroup';
import { teamsRef } from '../services/DatabaseService';

class ListOfTeams extends Component {
    state = {
        teams: []
    };

    componentWillMount(){
        teamsRef.once('value', (teams) => {
            let teamsArray = [];
            teams.forEach(function (team) {
                teamsArray.push(team.val());
            });
            this.setState({teams: teamsArray});
            console.log(teamsArray);
        });
    }

    render() {
        return (
            <Card>
                <CardHeader>
                    Lista de equipos
                </CardHeader>
                <CardBody>
                    <input type="text" readonly class="form-control-plaintext" value="Selecciona el equipo al que perteneces" />
                    <ListGroup items={this.state.teams} />
                </CardBody>
            </Card>
        );
    }
}

export default ListOfTeams;
