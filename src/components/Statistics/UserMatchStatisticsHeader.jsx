import React, { Component } from 'react';
import Row from '../Grid/Row/Row';
import Col from '../Grid/Col/Col';

class UserMatchStatisticsHeader extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col cols="4">
                        Partido de etapa de grupos
                    </Col>
                    <Col cols="2" left={true}>
                        Fecha: 02/10/2018
                    </Col>
                </Row>
                <Row>
                    <Col cols="4">
                        Local: Equipo vergas
                    </Col>
                    <Col cols="2" left={true}>
                        Vistante: Otro equipo
                    </Col>
                </Row>
            </div>
        );
    }
}

export default UserMatchStatisticsHeader;
