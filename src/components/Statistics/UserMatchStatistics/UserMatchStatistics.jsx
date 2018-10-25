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
import './UserMatchStatistics.module.css';
import GridContainer from '../../Grid/GridContainer';
import GridItem from '../../Grid/GridItem';
import Button from '../../CustomButtons/Button';

class UserMatchStatistics extends Component {
    state = {
        loaded: false,
        numbersView: true,
        showResponsiveNotification: false
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.loaded && nextProps.uid !== undefined) {
            nextProps.getStatistic(nextProps.uid,nextProps.match.params.etapa+nextProps.match.params.number);
            return {loaded: true}
        }
        return null;
    }

    toogleView = () => {
        if (window.innerWidth < 600 && !this.state.numbersView === false) {
            this.setState({ showResponsiveNotification: true });
            this.alertTimeout = setTimeout(
                function() {
                    this.setState({showResponsiveNotification: false});
                }.bind(this),
                8000
            );
        }
        this.setState({ numbersView: !this.state.numbersView});
    }

    render() {
        if (this.props.fetched) {
            return (
                <Card>
                    <Header title={"Estadisticas "+(this.props.name !== undefined ? this.props.name : "")+" "+this.props.match.params.etapa+" "+this.props.match.params.number} />
                    <CardHeader color="primary">
                        <GridContainer>
                            <GridItem xs={12} sm={8} md={10} >
                                Tus estadisticas del partido de la {this.props.match.params.etapa+" "+this.props.match.params.number}
                            </GridItem>
                            <GridItem xs={12} sm={4} md={2} >
                                <Button color="info">Ver graficas</Button>
                            </GridItem>
                        </GridContainer> 
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
