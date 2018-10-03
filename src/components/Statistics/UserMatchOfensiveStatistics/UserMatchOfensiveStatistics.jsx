import React, { Component } from 'react';
import Row from '../../Grid/Row/Row';
import Col from '../../Grid/Col/Col';
import GoalStatistics from './GoalStatistics';
import OccasionsStatistics from './OccasionsStatistics';
import OtherStatistics from './OtherStatistics';

class UserMatchOfensiveStatistics extends Component {
    render() {
        return (
            <Row>
                <Col cols="4" left={false}>
                    <GoalStatistics />
                </Col>
                <Col cols="4" left={false}>
                    <OccasionsStatistics />
                </Col>
                <Col cols="4" left={false}>
                    <OtherStatistics />
                </Col>
            </Row>
        );
    }
}

export default UserMatchOfensiveStatistics;
