import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './../TeamMatchStatistics.module.css';
import CompartiveStatisticRow from '../../CompartiveStatisticRow';

class TeamMatchFaultStatistics extends Component {
    render() {
        return (
            <table className={"table "+style.statistics}>
                <tbody>
                    <CompartiveStatisticRow
                    firstValue={this.props.FaltasLocal.cometidas}
                    label="Cometidas"
                    secondValue={this.props.FaltasVisitante.cometidas} />
                    <CompartiveStatisticRow
                    firstValue={this.props.FaltasLocal.recibidas}
                    label="Recibidas"
                    secondValue={this.props.FaltasVisitante.recibidas} />
                    <CompartiveStatisticRow
                    firstValue={this.props.FaltasLocal.amarilla}
                    label="Tarjetas amarillas"
                    secondValue={this.props.FaltasVisitante.amarilla} />
                    <CompartiveStatisticRow
                    firstValue={this.props.FaltasLocal.roja}
                    label="Tarjetas rojas"
                    secondValue={this.props.FaltasVisitante.roja} />
                </tbody>
            </table>
        );
    }
}

TeamMatchFaultStatistics.propTypes = {
    FaltasLocal: PropTypes.shape({
        amarilla: PropTypes.number,
        cometidas: PropTypes.number,
        recibidas: PropTypes.number,
        roja: PropTypes.number
    }),
    FaltasVisitante: PropTypes.shape({
        amarilla: PropTypes.number,
        cometidas: PropTypes.number,
        recibidas: PropTypes.number,
        roja: PropTypes.number
    })
}

export default TeamMatchFaultStatistics;
