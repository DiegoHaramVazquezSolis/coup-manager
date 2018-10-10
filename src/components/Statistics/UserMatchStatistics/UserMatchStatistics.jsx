import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import CardBody from '../../Card/CardBody';
import Header from '../../Header';
import UserMatchStatisticsHeader from './UserMatchStatisticsHeader';
import UserMatchOfensiveStatistics from './UserMatchOfensiveStatistics/UserMatchOfensiveStatistics';
import UserPerformanceStatistics from './UserPerformanceStatistics/UserPerformanceStatistics';
import UserMatchDefensiveStatistics from './UserMatchDefensiveStatistics/UserMatchDefensiveStatistics';
import UserMatchFaultsStatistics from './UserMatchFaultsStatistics/UserMatchFaultsStatistics';
import { getStatistic } from '../../../redux/actions/statisticActions';

class UserMatchStatistics extends Component {
    state = {
        loaded: false
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.loaded && nextProps.uid !== undefined) {
            nextProps.getStatistic(nextProps.uid,nextProps.match.params.etapa+nextProps.match.params.number);
            return {loaded: true}
        }
        return null;
    }

    render() {
        if (this.props.fetched) {
            return (
                <Card>
                    <Header title={"Estadisticas "+(this.props.name !== undefined ? this.props.name : "")+" "+this.props.match.params.etapa+" "+this.props.match.params.number} />
                    <CardHeader color="primary">
                        Tus estadisticas del partido de la {this.props.match.params.etapa+" "+this.props.match.params.number}
                    </CardHeader>
                    <CardBody>
                        <UserMatchStatisticsHeader MatchData={this.props.statistic.MatchData} />
                        <hr/>
                        <h3>Tus estadisticas en el ataque</h3>
                        <br/>
                        <UserMatchOfensiveStatistics offensiveStats={this.props.statistic.Ofensa} />
                        <hr/>
                        <h3>Tu desempeño</h3>
                        <br/>
                        <UserPerformanceStatistics performanceStats={this.props.statistic.Performance} />
                        <hr/>
                        <h3>Tus estadisticas en la defensa</h3>
                        <br/>
                        <UserMatchDefensiveStatistics defensiveStats={this.props.statistic.Defensa} />
                        <hr/>
                        <h3>Tus amonestaciones</h3>
                        <br/>
                        <UserMatchFaultsStatistics faultStats={this.props.statistic.Faltas} />
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
        uid: state.user.profile.uid,
        name: state.user.profile.name,
        statistic: state.statistic.statistic,
        fetched: Object.keys(state.statistic.statistic).length > 0
    }
}

export default UserMatchStatistics = connect(mapStateToProps, {mapDispatchToProps, getStatistic})(UserMatchStatistics);
