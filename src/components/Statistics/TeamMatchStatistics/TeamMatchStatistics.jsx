import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import Header from '../../Header';
import CardBody from '../../Card/CardBody';
import { resultsRef, teamsRef } from '../../../services/DatabaseService';
import TeamMatchStatisticsHeader from './TeamMatchStatisticsHeader/TeamMatchStatisticsHeader';
import style from './TeamMatchStatistics.module.css';
import ThumbnailLogo from '../../TeamProfile/ThumbnailLogo';
import TeamMatchOfensiveStatistics from './TeamMatchOfensiveStatistics/TeamMatchOfensiveStatistics';
import TeamMatchPerformanceStatistics from './TeamMatchPerformanceStatistics/TeamMatchPerformanceStatistics';
import TeamMatchDefensiveStatistics from './TeamMatchDefensiveStatistics/TeamMatchDefensiveStatistics';
import TeamMatchFaultStatistics from './TeamMatchFaultStatistics/TeamMatchFaultStatistics';

class TeamMatchStatistics extends Component {
    state = {
        statistics: null,
        localLogo: '',
        visitanteLogo: '',
        loaded: false
    };

    /*componentDidUpdate(){
        if(!this.state.loaded && this.props.team !== undefined){
            resultsRef.child(this.props.match.params.matchResultId).on('value',(statistics) => {
                console.log(statistics.val());
                this.setState({ statistics: statistics.val(), loaded: true  });
                teamsRef.child(statistics.val().MatchData.local.replace(' ','').toUpperCase()).child('logo').once('value', (logo) => {
                    this.setState({ localLogo: logo.val()  });
                });
                teamsRef.child(statistics.val().MatchData.visitante.replace(' ','').toUpperCase()).child('logo').once('value', (logo) => {
                    this.setState({ visitanteLogo: logo.val()  });
                });
            });
        }
    }*/

    render() {
        if(!this.state.loaded && this.props.team !== undefined){
            resultsRef.child(this.props.match.params.matchResultId).on('value',(statistics) => {
                this.setState({ statistics: statistics.val(), loaded: true  });
                teamsRef.child(statistics.val().MatchData.local.replace(' ','').toUpperCase()).child('logo').once('value', (logo) => {
                    this.setState({ localLogo: logo.val()  });
                });
                teamsRef.child(statistics.val().MatchData.visitante.replace(' ','').toUpperCase()).child('logo').once('value', (logo) => {
                    this.setState({ visitanteLogo: logo.val()  });
                });
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
                        <TeamMatchStatisticsHeader MatchData={this.state.statistics.MatchData} />
                    }
                    <hr/>
                    <div className="d-flex justify-content-between">
                        <ThumbnailLogo className="rounded-circle" logo={this.state.localLogo} />
                        <ThumbnailLogo className="rounded-circle" logo={this.state.visitanteLogo} />
                    </div>
                    <hr/>
                    <h3 className={style.title_centered}>Ataque</h3>
                    <br/>
                    {this.state.statistics &&
                        <TeamMatchOfensiveStatistics
                            OfensaLocal={this.state.statistics.Local.Ofensa}
                            OfensaVisitante={this.state.statistics.Visitante.Ofensa} />
                    }
                    <h3 className={style.title_centered}>Desempeño</h3>
                    <br/>
                    {this.state.statistics &&
                        <TeamMatchPerformanceStatistics
                            PerformanceLocal={this.state.statistics.Local.Performance}
                            PerformanceVisitante={this.state.statistics.Visitante.Performance} />
                    }
                    <h3 className={style.title_centered}>Defensa</h3>
                    <br/>
                    {this.state.statistics &&
                        <TeamMatchDefensiveStatistics
                            DefensaLocal={this.state.statistics.Local.Defensa}
                            DefensaVisitante={this.state.statistics.Visitante.Defensa} />
                    }
                    <h3 className={style.title_centered}>Amonestaciones</h3>
                    <br/>
                    {this.state.statistics &&
                        <TeamMatchFaultStatistics
                            FaltasLocal={this.state.statistics.Local.Faltas}
                            FaltasVisitante={this.state.statistics.Visitante.Faltas} />
                    }
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
