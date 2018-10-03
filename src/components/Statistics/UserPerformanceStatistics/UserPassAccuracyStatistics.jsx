import React, { Component } from 'react';

class UserPassAccuracyStatistics extends Component {
    render() {
        return (
            <div>
                <h4>Precision en el pase</h4>
                <pre style={{paddingLeft: ".75em"}}>
                    <h5><p>Intentos de pase</p></h5><h3>18</h3>
                </pre>
                <table className="table">
                    <tbody>
                        <tr>
                            <th className="text-muted">Pases completados</th>
                            <td><h5>10</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Pases incompletos</th>
                            <td><h5>6</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Pases fallidos</th>
                            <td><h5>2</h5></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserPassAccuracyStatistics;
