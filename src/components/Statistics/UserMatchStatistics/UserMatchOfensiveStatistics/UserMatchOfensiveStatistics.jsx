import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from '../../../Grid/Row/Row';
import Col from '../../../Grid/Col/Col';
import GoalStatistics from './GoalStatistics';
import OccasionsStatistics from './OccasionsStatistics';
import OtherStatistics from './OtherStatistics';

class UserMatchOfensiveStatistics extends Component {
    render() {
        return (
            <Row>
                <Col cols="4" left={false}>
                    <GoalStatistics goals={this.props.offensiveStats.goles} />
                </Col>
                <Col cols="4" left={false}>
                    <OccasionsStatistics ocassions={this.props.offensiveStats.Ocassions} />
                </Col>
                <Col cols="4" left={false}>
                    <OtherStatistics other={this.props.offensiveStats.Otras} />
                </Col>
            </Row>
        );
    }
}

UserMatchOfensiveStatistics.propTypes = {
    offensiveStats: PropTypes.shape({
        Ocassions: PropTypes.shape({
            arco: PropTypes.number || 0,
            bloqueados: PropTypes.number || 0,
            desviados: PropTypes.number || 0,
            poste: PropTypes.number || 0
        }),
        Otras: PropTypes.shape({
            Centros: PropTypes.shape({
                completados: PropTypes.number || 0,
                enviados: PropTypes.number || 0
            }),
            asistencia: PropTypes.number || 0,
            regates: PropTypes.number || 0,
            tirosDeEsquina: PropTypes.number || 0
        }),
        goles: PropTypes.number || 0
    })
}

export default UserMatchOfensiveStatistics;
