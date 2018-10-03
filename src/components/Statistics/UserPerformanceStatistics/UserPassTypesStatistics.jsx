import React, { Component } from 'react';

class UserPassTypesStatistics extends Component {
    render() {
        return (
            <div>
                <h4>Tipos de pase intentados</h4>
                <pre style={{paddingLeft: ".75em"}}>
                    <h5><p>Tipos intentados</p></h5><h3>2/3</h3>
                </pre>
                <table className="table table-hover">
                    <tbody>
                        <tr>
                            <th className="text-muted">Pases cortos</th>
                            <td><h5>10</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Pases largos</th>
                            <td><h5>8</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Pases medios</th>
                            <td><h5>0</h5></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserPassTypesStatistics;
