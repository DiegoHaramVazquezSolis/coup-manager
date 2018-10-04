import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import Header from '../Header';
import CardBody from '../Card/CardBody';
import { resultsRef, teamsRef } from '../../services/DatabaseService';
import TeamMatchStatisticsHeader from './TeamMatchStatisticsHeader/TeamMatchStatisticsHeader';
import './TeamMatchStatistics.css';
import Row from '../Grid/Row/Row';
import Col from '../Grid/Col/Col';
import ThumbnailLogo from '../TeamProfile/ThumbnailLogo';

class TeamMatchStatistics extends Component {
    state = {
        statistics: null,
        localLogo: '',
        visitanteLogo: '',
        loaded: false
    };

    render() {
        if(!this.state.loaded && this.props.team !== undefined){
            resultsRef.child(this.props.match.params.matchResultId).on('value',(statistics) => {
                console.log(statistics.val());
                teamsRef.child(statistics.val().MatchData.local.replace(' ','').toUpperCase()).child('logo').once('value', (logo) => {
                    this.setState({ localLogo: logo.val()  });
                });
                teamsRef.child(statistics.val().MatchData.visitante.replace(' ','').toUpperCase()).child('logo').once('value', (logo) => {
                    this.setState({ visitanteLogo: logo.val()  });
                });
                this.setState({ statistic: statistics.val(), loaded: true  });
            });
        }
        return (
            <Card>
                <Header title={"Estadistica "+this.props.team} />
                <CardHeader>
                    {"Estadisticas "+this.props.team}
                </CardHeader>
                <CardBody>
                    {this.state.loaded &&
                        <TeamMatchStatisticsHeader MatchData={this.state.statistic.MatchData} />
                    }
                    <hr/>
                    <Row>
                        <Col cols="4" left={true}>
                            <ThumbnailLogo className="rounded-circle w-50" logo={this.state.localLogo} />
                        </Col>
                        <Col cols="4" left={true}>
                            <ThumbnailLogo className="rounded-circle w-50" logo={this.state.visitanteLogo} />
                        </Col>
                    </Row>
                    <hr/>
                    <h3 className="title-centered">Ataque</h3>
                    <br/>
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

export default TeamMatchStatistics = connect(mapStateToProps)(TeamMatchStatistics);
