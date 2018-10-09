import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from '../../../Grid/Row/Row';
import Col from '../../../Grid/Col/Col';
import UserPassAccuracyStatistics from './UserPassAccuracyStatistics';
import UserPassTypesStatistics from './UserPassTypesStatistics';

class UserPerformanceStatistics extends Component {
    render() {
        return (
            <Row>
                <Col cols="4" left={false}>
                    <UserPassAccuracyStatistics passAccuracy={this.props.performanceStats.Pases} />
                </Col>
                <Col cols="5" left={false}>
                    <UserPassTypesStatistics passType={this.props.performanceStats.TiposDePases} />
                </Col>
                <Col cols="3" left={false}>
                    <h4>Tiempo de juego</h4>
                    <br/>
                    <pre style={{paddingLeft: ".75em"}}>
                        <h5>Minutos jugados: {this.props.performanceStats.tiempoJugado}/40</h5>
                    </pre>
                </Col>
            </Row>
        );
    }
}

UserPerformanceStatistics.propTypes = {
    performanceStats: PropTypes.shape({
        Pases: PropTypes.shape({
            completos: PropTypes.number || 0,
            fallidos: PropTypes.number || 0,
            incompletos: PropTypes.number || 0
        }),
        TiposDePases: PropTypes.shape({
            corto: PropTypes.number || 0,
            largo: PropTypes.number || 0,
            medio: PropTypes.number || 0
        }),
        tiempoJugado: PropTypes.number || 0
    })
}

export default UserPerformanceStatistics;
