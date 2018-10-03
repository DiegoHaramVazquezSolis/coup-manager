import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from '../../Grid/Row/Row';
import Col from '../../Grid/Col/Col';

class UserMatchDefensiveStatistics extends Component {
    state = {
        sum: 0,
        loaded: false
    };

    static getDerivedStateFromProps(props, state){
        if(!state.loaded){
            return{ sum: props.defensiveStats.disparosBloqueados+props.defensiveStats.balonesRobados+props.defensiveStats.despejes, loaded: true };
        }
        return null;
    }

    render() {
        return (
            <Row>
                <Col cols="12">
                    <h4>Acciones a la defensiva</h4>
                    <pre style={{paddingLeft: ".75em"}}>
                        <h5><p>Acciones totales</p></h5><h3>{this.state.sum}</h3>
                    </pre>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th className="text-muted">Disparos bloqueados</th>
                                <td>{this.props.defensiveStats.disparosBloqueados}</td>
                            </tr>
                            <tr>
                                <th className="text-muted">Balones robados</th>
                                <td>{this.props.defensiveStats.balonesRobados}</td>
                            </tr>
                            <tr>
                                <th className="text-muted">Despejes</th>
                                <td>{this.props.defensiveStats.despejes}</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>                
            </Row>
        );
    }
}

UserMatchDefensiveStatistics.propTypes = {
    defensiveStats: PropTypes.shape({
        balonesRobados: PropTypes.number || 0,
        despejes: PropTypes.number || 0,
        disparosBloqueados: PropTypes.number || 0
    })
}

export default UserMatchDefensiveStatistics;
