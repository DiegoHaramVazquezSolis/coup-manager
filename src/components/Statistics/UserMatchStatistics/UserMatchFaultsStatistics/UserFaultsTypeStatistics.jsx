import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './../UserMatchStatistics.module.css';

class UserFaultsTypeStatistics extends Component {
    render() {
        return (
            <div>
                <h4>Tarjetas</h4>
                <table className={"table "+style.statistics}>
                    <tbody>
                        <tr>
                            <th className="text-muted">Tarjetas amarillas</th>
                            <td><h5>{this.props.amarilla}</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Tarjetas rojas</th>
                            <td><h5>{this.props.roja}</h5></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

UserFaultsTypeStatistics.propTypes = {
    amarilla: PropTypes.number || 0,
    roja: PropTypes.number || 0
}

export default UserFaultsTypeStatistics;
