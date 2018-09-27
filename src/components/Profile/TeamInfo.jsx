import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from './../Card/Card';
import CardHeader from './../Card/CardHeader';
import CardBody from './../Card/CardBody';
import { teamsRef } from './../../services/DatabaseService';

class TeamInfo extends Component {
    state = {
        logo: '',
        loaded: false
    };

    render() {
        if(!this.state.loaded && this.props.team !== undefined){
            teamsRef.child(this.props.team.replace(' ','').toUpperCase()).child('logo').once('value', (logo) => {
                this.setState({logo: logo.val(), loaded: true});
            });
        }
        return (
            <Card>
                <CardHeader>
                    Informacion del equipo
                </CardHeader>
                <img className="card-img-top" src={this.state.logo} alt=""/>
                <CardBody>
                    <h3>{this.props.team}</h3>
                </CardBody>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {
        team: state.user.profile.team
    }
}

export default TeamInfo = connect(mapStateToProps)(TeamInfo);
