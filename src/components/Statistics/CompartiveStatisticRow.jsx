import React, { Component } from 'react';
import style from './TeamMatchStatistics/TeamMatchStatistics.module.css';

class CompartiveStatisticRow extends Component {
    render() {
        return (
            <tr>
                <td className="w-25"><h3>{this.props.firstValue}</h3></td>
                <th scope="row" className="w-50 text-muted"><h3 className={style.bold}>{this.props.label}</h3></th>
                <td className="w-25"><h3>{this.props.secondValue}</h3></td>
            </tr>
        );
    }
}

export default CompartiveStatisticRow;
