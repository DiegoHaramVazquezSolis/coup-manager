import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../Card/Card';
import CardHeader from '../../Card/CardHeader';
import CardBody from '../../Card/CardBody';
import Header from '../../Header';
import UserMatchStatisticsHeader from './UserMatchStatisticsHeader';
import UserMatchOfensiveStatistics from './UserMatchOfensiveStatistics/UserMatchOfensiveStatistics';
import UserPerformanceStatistics from './UserPerformanceStatistics/UserPerformanceStatistics';
import UserMatchDefensiveStatistics from './UserMatchDefensiveStatistics/UserMatchDefensiveStatistics';
import UserMatchFaultsStatistics from './UserMatchFaultsStatistics/UserMatchFaultsStatistics';
import { statisticsRef } from '../../../services/DatabaseService';

class UserMatchStatistics extends Component {
    state = {
        statistic: null,
        loaded: false
    };

    componentDidUpdate(){
        if(!this.state.loaded && this.props.uid !== undefined){
            statisticsRef.child(this.props.uid).child(this.props.match.params.etapa+this.props.match.params.number).on('value',(statistics) => {
                this.setState({ statistic: statistics.val(), loaded: true  });
            });
        }
    }

    render() {
        return (
            <Card>
                <Header title={"Estadisticas jornada 1 "+(this.props.name !== undefined ? this.props.name : "")}>
                </Header>
                <CardHeader>
                    Tus estadisticas del partido de la {this.props.match.params.etapa+" "+this.props.match.params.number}
                </CardHeader>
                <CardBody>
                    {this.state.loaded ?
                        <UserMatchStatisticsHeader MatchData={this.state.statistic.MatchData} />
                    :
                        <h1>Cargando</h1>
                    }
                    <hr/>
                    <h3>Tus estadisticas en el ataque</h3>
                    <br/>
                    {this.state.loaded ?
                        <UserMatchOfensiveStatistics offensiveStats={this.state.statistic.Ofensa} />
                        :
                        <h1>Cargando</h1>
                    }
                    <hr/>
                    <h3>Tu desempeño</h3>
                    <br/>
                    {this.state.loaded ?
                        <UserPerformanceStatistics performanceStats={this.state.statistic.Performance} />
                    :
                        <h1>Cargando</h1>
                    }
                    <hr/>
                    <h3>Tus estadisticas en la defensa</h3>
                    <br/>
                    {this.state.loaded ?
                        <UserMatchDefensiveStatistics defensiveStats={this.state.statistic.Defensa} />
                    :
                        <h1>Cargando</h1>
                    }
                    <hr/>
                    <h3>Tus amonestaciones</h3>
                    <br/>
                    {this.state.loaded ?
                        <UserMatchFaultsStatistics faultStats={this.state.statistic.Faltas} />
                    :
                        <h1>Cargando</h1>
                    }
                </CardBody>
            </Card>
        );
    }
}

function mapStateToProps(state){
    return {
        uid: state.user.profile.uid,
        name: state.user.profile.name
    }
}

export default UserMatchStatistics = connect(mapStateToProps)(UserMatchStatistics);
