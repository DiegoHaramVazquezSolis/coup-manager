import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './../TeamMatchStatistics.module.css';
import CompartiveStatisticRow from '../../CompartiveStatisticRow';

class TeamMatchDefensiveStatistics extends Component {
    render() {
        return (
            <table className={"table "+style.statistics}>
                <tbody>
                    <CompartiveStatisticRow
                    firstValue={this.props.DefensaLocal.balonesRobados}
                    label="Balones robados"
                    secondValue={this.props.DefensaVisitante.balonesRobados} />
                    <CompartiveStatisticRow
                    firstValue={this.props.DefensaLocal.despejes}
                    label="Despejes"
                    secondValue={this.props.DefensaVisitante.despejes} />
                    <CompartiveStatisticRow
                    firstValue={this.props.DefensaLocal.disparosBloqueados}
                    label="Disparos bloqueados"
                    secondValue={this.props.DefensaVisitante.disparosBloqueados} />
                </tbody>
            </table>
        );
    }
}

TeamMatchDefensiveStatistics.propTypes = {
    DefensaLocal: PropTypes.shape({
        balonesRobados: PropTypes.number,
        despejes: PropTypes.number,
        disparosBloqueados: PropTypes.number
    }),
    DefensaVisitante: PropTypes.shape({
        balonesRobados: PropTypes.number,
        despejes: PropTypes.number,
        disparosBloqueados: PropTypes.number
    })
}

export default TeamMatchDefensiveStatistics;
