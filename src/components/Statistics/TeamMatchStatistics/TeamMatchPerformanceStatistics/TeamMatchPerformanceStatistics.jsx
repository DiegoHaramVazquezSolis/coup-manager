import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './../TeamMatchStatistics.module.css';
import CompartiveStatisticRow from '../../CompartiveStatisticRow';

class TeamMatchPerformanceStatistics extends Component {
    state = {
        pasesTotalesLocal: 0,
        pasesTotalesVisitante: 0,
        loaded: false
    };

    componentDidUpdate(){
        if(!this.state.loaded && this.props.PerformanceLocal !== undefined){
            this.setState({
                pasesTotalesLocal: this.props.PerformanceLocal.Pases.completos + this.props.PerformanceLocal.Pases.fallidos + this.props.PerformanceLocal.Pases.incompletos,
                pasesTotalesVisitante: this.props.PerformanceVisitante.Pases.completos + this.props.PerformanceVisitante.Pases.fallidos + this.props.PerformanceVisitante.Pases.incompletos,
                loaded: true
            });
        }
    }
    
    render() {
        return (
            <table className={"table "+style.statistics}>
                <tbody>
                    <CompartiveStatisticRow
                        firstValue={this.state.pasesTotalesLocal}
                        label="Pases"
                        secondValue={this.state.pasesTotalesVisitante} />
                    <CompartiveStatisticRow
                    firstValue={this.props.PerformanceLocal.Pases.completos}
                    label="Completos"
                    secondValue={this.props.PerformanceVisitante.Pases.completos} />
                    <CompartiveStatisticRow
                    firstValue={this.props.PerformanceLocal.Pases.fallidos}
                    label="Fallados"
                    secondValue={this.props.PerformanceVisitante.Pases.fallidos} />
                    <CompartiveStatisticRow
                    firstValue={this.props.PerformanceLocal.Pases.incompletos}
                    label="Incompletos"
                    secondValue={this.props.PerformanceVisitante.Pases.incompletos} />
                    <CompartiveStatisticRow
                    firstValue={this.props.PerformanceLocal.TiposDePases.corto}
                    label="Cortos"
                    secondValue={this.props.PerformanceVisitante.TiposDePases.corto} />
                    <CompartiveStatisticRow
                    firstValue={this.props.PerformanceLocal.TiposDePases.media}
                    label="Medios"
                    secondValue={this.props.PerformanceVisitante.TiposDePases.media} />
                    <CompartiveStatisticRow
                    firstValue={this.props.PerformanceLocal.TiposDePases.largo}
                    label="Largos"
                    secondValue={this.props.PerformanceVisitante.TiposDePases.largo} />
                </tbody>
            </table>
        );
    }
}

TeamMatchPerformanceStatistics.propTypes = {
    PerformanceLocal: PropTypes.shape({
        Pases: PropTypes.shape({
            completos: PropTypes.number,
            fallidos: PropTypes.number,
            incompletos: PropTypes.number
        }),
        TiposDePases: PropTypes.shape({
            corto: PropTypes.number,
            largo: PropTypes.number,
            media: PropTypes.number
        })
    }),
    PerformanceVisitante: PropTypes.shape({
        Pases: PropTypes.shape({
            completos: PropTypes.number,
            fallidos: PropTypes.number,
            incompletos: PropTypes.number
        }),
        TiposDePases: PropTypes.shape({
            corto: PropTypes.number,
            largo: PropTypes.number,
            media: PropTypes.number
        })
    })
}

export default TeamMatchPerformanceStatistics;
