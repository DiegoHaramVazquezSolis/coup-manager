import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import CardBody from '../Card/CardBody';
import CardHeader from '../Card/CardHeader';
import Header from '../Header';
import Row from '../Grid/Row/Row';
import Col from '../Grid/Col/Col';
import TeamLogo from '../TeamLogo/TeamLogo';
import TeamMatches from '../TeamProfile/TeamMatches';
import TeamPlayers from '../TeamProfile/TeamPlayers';
import TeamResults from '../TeamProfile/TeamResults';

class TeamPrivateProfile extends Component {
    render() {
        if (this.props.fetched) {
            return (
                <Card>
                    <Header title={this.props.team} />
                    <CardHeader color="primary">
                        Perfil privado {this.props.team}
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col cols="5">
                                <Col cols="10">
                                    <center>
                                        <TeamLogo TeamLogo={this.props.logo} />
                                    </center>
                                </Col>
                                <br/>
                                <Col cols="12">
                                    <TeamResults results={this.props.results} team={this.props.team} teamLogo={this.props.logo} />
                                </Col>
                            </Col>
                            <Col cols="7" left={true}>
                                <Col cols="8" left={true}>
                                    <TeamMatches matches={this.props.matches} team={this.props.team} teamLogo={this.props.logo} />
                                </Col>
                                <Col cols="12" left={true}>
                                    <TeamPlayers uid={this.props.uid} players={this.props.players} team={this.props.team} />
                                </Col>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            );
        }else {
            return (<h1>Cargando</h1>);
        }
    }
}

function mapStateToProps(state){
    return {
        team: state.userTeam.team.name,
        logo: state.userTeam.team.logo,
        results: state.userTeam.team.Results,
        matches: state.userTeam.team.Matches,
        players: state.userTeam.team.Players,
        uid: state.user.profile.uid,
        fetched: state.userTeam.team.logo !== undefined && state.userTeam.team.name !== undefined
    }
}

export default TeamPrivateProfile = connect(mapStateToProps)(TeamPrivateProfile);
