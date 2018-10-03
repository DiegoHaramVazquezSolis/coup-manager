import React, { Component } from 'react';

class OtherStatistics extends Component {
    render() {
        return (
            <div>
                <h4>Otras estadisticas</h4>
                <pre style={{paddingLeft: ".75em"}}>
                        <h5><p>Valor acumulado</p></h5><h3>14</h3>
                </pre>
                <table className="table" style={{paddingLeft: ".75em"}}>
                    <tbody>
                        <tr>
                            <th className="text-muted">Centros enviados</th>
                            <td><h5>6</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Centros completados</th>
                            <td><h5>2</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Saques de esquina cobrados</th>
                            <td><h5>2</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Regates</th>
                            <td><h5>2</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Asistencias</th>
                            <td><h5>2</h5></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default OtherStatistics;
