import React, { Component } from 'react';
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
                    <UserFaultsStatistics />
                </Col>
                <Col cols="6" left={false}>
                    <UserFaultsTypeStatistics />
                </Col>
                <Col cols="3" left={false}>
                    <UserFaultsReceivedStatistics />
                </Col>
            </Row>
        );
    }
}

export default UserMatchFaultsStatistics;
