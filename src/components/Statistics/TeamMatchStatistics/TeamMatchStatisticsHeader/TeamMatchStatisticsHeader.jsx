import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from '../../../Grid/Row/Row';
import Col from '../../../Grid/Col/Col';

class TeamMatchStatisticsHeader extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col cols="4">
                        Partido de etapa de {this.props.MatchData.etapa}
                    </Col>
                    <Col cols="2" left={true}>
                        Fecha: {this.props.MatchData.fecha}
                    </Col>
                </Row>
                <Row>
                    <Col cols="4">
                        Local: {this.props.MatchData.local}
                    </Col>
                    <Col cols="2" left={true}>
                        Vistante: {this.props.MatchData.visitante}
                    </Col>
                </Row>
            </div>
        );
    }
}

TeamMatchStatisticsHeader.propTypes = {
    MatchData: PropTypes.shape({
        etapa: PropTypes.string.isRequired,
        fecha: PropTypes.string.isRequired,
        local: PropTypes.string.isRequired,
        visitante: PropTypes.string.isRequired
    })
}

export default TeamMatchStatisticsHeader;
