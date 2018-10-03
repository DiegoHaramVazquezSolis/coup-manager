import React, { Component } from 'react';
import Row from '../../Grid/Row/Row';
import Col from '../../Grid/Col/Col';

class UserMatchDefensiveStatistics extends Component {
    render() {
        return (
            <Row>
                <Col cols="12">
                    <h4>Acciones a la defensiva</h4>
                    <pre style={{paddingLeft: ".75em"}}>
                        <h5><p>Acciones totales</p></h5><h3>7</h3>
                    </pre>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th className="text-muted">Disparos bloqueados</th>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th className="text-muted">Balones robados</th>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th className="text-muted">Despejes</th>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>                
            </Row>
        );
    }
}

export default UserMatchDefensiveStatistics;
