import React, { Component } from 'react';
import Row from '../../Grid/Row/Row';
import Col from '../../Grid/Col/Col';
import UserPassAccuracyStatistics from './UserPassAccuracyStatistics';
import UserPassTypesStatistics from './UserPassTypesStatistics';

class UserPerformanceStatistics extends Component {
    render() {
        return (
            <Row>
                <Col cols="4" left={false}>
                    <UserPassAccuracyStatistics />
                </Col>
                <Col cols="5" left={false}>
                    <UserPassTypesStatistics />
                </Col>
                <Col cols="3" left={false}>
                    <h4>Tiempo de juego</h4>
                    <br/>
                    <pre style={{paddingLeft: ".75em"}}>
                        <h5>Minutos jugados: 37/40</h5>
                    </pre>
                </Col>
            </Row>
        );
    }
}

export default UserPerformanceStatistics;
