import React, { Component } from 'react';

class OccasionsStatistics extends Component {
    render() {
        return (
            <div>
                <h4>Ocasiones generadas</h4>
                <pre style={{paddingLeft: ".75em"}}>
                        <h5><p>Tiros totales</p></h5><h3>8</h3>
                </pre>
                <table className="table" style={{paddingLeft: ".75em"}}>
                    <tbody>
                        <tr>
                            <th className="text-muted">Disparo al arco</th>
                            <td><h5>6</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Disparo desviados</th>
                            <td><h5>2</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Disparo bloqueados</th>
                            <td><h5>2</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Disparo al poste</th>
                            <td><h5>1</h5></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default OccasionsStatistics;
