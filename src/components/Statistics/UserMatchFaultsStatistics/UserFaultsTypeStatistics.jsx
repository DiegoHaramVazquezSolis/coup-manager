import React, { Component } from 'react';

class UserFaultsTypeStatistics extends Component {
    render() {
        return (
            <div>
                <h4>Tarjetas</h4>
                <table className="table">
                    <tbody>
                        <tr>
                            <th className="text-muted">Tarjetas amarillas</th>
                            <td><h5>1</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Tarjetas rojas</th>
                            <td><h5>0</h5></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserFaultsTypeStatistics;
