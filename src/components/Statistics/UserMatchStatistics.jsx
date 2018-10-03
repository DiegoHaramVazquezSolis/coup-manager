import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import CardBody from '../Card/CardBody';
import Header from '../Header';
import './UserMatchStatistics.css';
import UserMatchStatisticsHeader from './UserMatchStatisticsHeader';
import UserMatchOfensiveStatistics from './UserMatchOfensiveStatistics/UserMatchOfensiveStatistics';
import UserPerformanceStatistics from './UserPerformanceStatistics/UserPerformanceStatistics';
import UserMatchDefensiveStatistics from './UserMatchDefensiveStatistics/UserMatchDefensiveStatistics';
import UserMatchFaultsStatistics from './UserMatchFaultsStatistics/UserMatchFaultsStatistics';

class UserMatchStatistics extends Component {
    render() {
        return (
            <Card>
                <Header></Header>
                <CardHeader>
                    Tus estadisticas del partido {this.props.title}
                </CardHeader>
                <CardBody>
                    <UserMatchStatisticsHeader />
                    <hr/>
                    <h3>Tus estadisticas en el ataque</h3>
                    <br/>
                    <UserMatchOfensiveStatistics />
                    <hr/>
                    <h3>Tu desempeño</h3>
                    <br/>
                    <UserPerformanceStatistics />
                    <hr/>
                    <h3>Tus estadisticas en la defensa</h3>
                    <br/>
                    <UserMatchDefensiveStatistics />
                    <hr/>
                    <h3>Tus amonestaciones</h3>
                    <br/>
                    <UserMatchFaultsStatistics />
                </CardBody>
            </Card>
        );
    }
}

UserMatchStatistics.propTypes = {
    title: PropTypes.string.isRequired
}

export default UserMatchStatistics;
