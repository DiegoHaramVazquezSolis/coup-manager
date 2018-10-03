import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from '../../Grid/Row/Row';
import Col from '../../Grid/Col/Col';
import UserFaultsStatistics from './UserFaultsStatistics';
import UserFaultsTypeStatistics from './UserFaultsTypeStatistics';
import UserFaultsReceivedStatistics from './UserFaultsReceivedStatistics';

class UserMatchFaultsStatistics extends Component {

    render() {
        return (
            <Row>
                <Col cols="3" left={false}>
                    <UserFaultsStatistics cometidas={this.props.faultStats.cometidas} />
                </Col>
                <Col cols="6" left={false}>
                    <UserFaultsTypeStatistics amarilla={this.props.faultStats.amarilla} roja={this.props.faultStats.roja} />
                </Col>
                <Col cols="3" left={false}>
                    <UserFaultsReceivedStatistics recibidas={this.props.faultStats.recibidas} />
                </Col>
            </Row>
        );
    }
}

UserMatchFaultsStatistics.propTypes = {
    faultStats: PropTypes.shape({
        amarilla: PropTypes.number || 0,
        cometidas: PropTypes.number || 0,
        recibidas: PropTypes.number || 0,
        roja: PropTypes.number || 0
    })
}

export default UserMatchFaultsStatistics;
