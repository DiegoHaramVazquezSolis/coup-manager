import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardHeader from '../Card/CardHeader';
import Header from '../Header';
import Row from '../Grid/Row/Row';
import Col from '../Grid/Col/Col';
import TeamLogo from '../TeamLogo/TeamLogo';
import { teamsRef } from '../../services/DatabaseService';
import TeamMatches from '../TeamProfile/TeamMatches';
import TeamPlayers from '../TeamProfile/TeamPlayers';
import TeamResults from '../TeamProfile/TeamResults';

class TeamPrivateProfile extends Component {
    state = {
        logo: '',
        loaded: false
    };

    render() {
        if (!this.state.loaded && this.props.team !== undefined) {
            teamsRef.child(this.props.team.replace(' ','').toUpperCase()).child('logo').once('value',(logo) => {
                this.setState({ logo: logo.val(), loaded: true });
            });
        }
        return (
            <Card>
                <Header title={this.props.team} />
                <CardHeader>
                    Perfil privado {this.props.team}
                </CardHeader>
                <CardBody>
                    <Row>
                        <Col cols="5">
                            <Col cols="10">
                                <TeamLogo TeamLogo={this.state.logo} />
                            </Col>
                            <br/>
                            <Col cols="12">
                                <TeamResults team={this.props.team} teamLogo={this.state.logo} />
                                
                            </Col>
                        </Col>
                        <Col cols="7" left={true}>
                            <Col cols="8" left={true}>
                                <TeamMatches team={this.props.team} teamLogo={this.state.logo} />
                            </Col>
                            <Col cols="12" left={true}>
                                <TeamPlayers team={this.props.team} />
                            </Col>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        );
    }
}

function mapStateToProps(state){
    return {
        team: state.user.profile.team
    }
}

export default TeamPrivateProfile = connect(mapStateToProps)(TeamPrivateProfile);
