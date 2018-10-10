import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import Header from '../../Header';
import CardBody from '../../Card/CardBody';
import TeamMatchStatisticsHeader from './TeamMatchStatisticsHeader/TeamMatchStatisticsHeader';
import style from './TeamMatchStatistics.module.css';
import ThumbnailLogo from '../../TeamProfile/ThumbnailLogo';
import TeamMatchOfensiveStatistics from './TeamMatchOfensiveStatistics/TeamMatchOfensiveStatistics';
import TeamMatchPerformanceStatistics from './TeamMatchPerformanceStatistics/TeamMatchPerformanceStatistics';
import TeamMatchDefensiveStatistics from './TeamMatchDefensiveStatistics/TeamMatchDefensiveStatistics';
import TeamMatchFaultStatistics from './TeamMatchFaultStatistics/TeamMatchFaultStatistics';
import { getResult } from '../../../redux/actions/resultActions';

class TeamMatchStatistics extends Component {
    state = {
        loaded: false
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.loaded && nextProps.match.params.matchResultId !== undefined) {
            nextProps.getResult(nextProps.match.params.matchResultId);
            return {loaded: true}
        }
        return null;
    }

    render() {
        if (this.props.fetched){
            return (
                <Card>
                    <Header title={"Estadistica "+this.props.team} />
                    <CardHeader color="primary">
                        {"Estadisticas "+this.props.team}
                    </CardHeader>
                    <CardBody>
                        <TeamMatchStatisticsHeader MatchData={this.props.result.MatchData} />
                        <hr/>
                        <div className="d-flex justify-content-between">
                            <ThumbnailLogo className="rounded-circle" logo={this.props.result.MatchData.localLogo} />
                            <ThumbnailLogo className="rounded-circle" logo={this.props.result.MatchData.visitanteLogo} />
                        </div>
                        <hr/>
                        <h3 className={style.title_centered}>Ataque</h3>
                        <br/>
                        <TeamMatchOfensiveStatistics
                            OfensaLocal={this.props.result.Local.Ofensa}
                            OfensaVisitante={this.props.result.Visitante.Ofensa} />
                        <h3 className={style.title_centered}>Desempeño</h3>
                        <br/>
                        <TeamMatchPerformanceStatistics
                            PerformanceLocal={this.props.result.Local.Performance}
                            PerformanceVisitante={this.props.result.Visitante.Performance} />
                        <h3 className={style.title_centered}>Defensa</h3>
                        <br/>
                        <TeamMatchDefensiveStatistics
                            DefensaLocal={this.props.result.Local.Defensa}
                            DefensaVisitante={this.props.result.Visitante.Defensa} />
                        <h3 className={style.title_centered}>Amonestaciones</h3>
                        <br/>
                        <TeamMatchFaultStatistics
                            FaltasLocal={this.props.result.Local.Faltas}
                            FaltasVisitante={this.props.result.Visitante.Faltas} />
                    </CardBody>
                </Card>
            );
        }else {
            return (<h1>Cargando</h1>);
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dispatch)
    };
}

function mapStateToProps(state){
    return {
        team: state.user.profile.team,
        result: state.result.result,
        fetched: Object.keys(state.result.result).length > 0
    }
}

export default TeamMatchStatistics = connect(mapStateToProps, {mapDispatchToProps, getResult})(TeamMatchStatistics);
