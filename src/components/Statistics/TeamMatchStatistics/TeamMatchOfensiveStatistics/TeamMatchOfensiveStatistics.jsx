import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './../TeamMatchStatistics.module.css';
import CompartiveStatisticRow from '../../CompartiveStatisticRow';

class TeamMatchOfensiveStatistics extends Component {
    state = {
        tirosTotalesLocal: 0,
        tirosTotalesVisitante: 0,
        loaded: false
    };

    componentDidUpdate(){
        if(!this.state.loaded && this.props.OfensaLocal !== undefined){
            this.setState({
                tirosTotalesLocal: 
                    this.props.OfensaLocal.Ocassions.arco +
                    this.props.OfensaLocal.Ocassions.bloqueados +
                    this.props.OfensaLocal.Ocassions.desviados +
                    this.props.OfensaLocal.Ocassions.poste,
                tirosTotalesVisitante: 
                    this.props.OfensaVisitante.Ocassions.arco +
                    this.props.OfensaVisitante.Ocassions.bloqueados +
                    this.props.OfensaVisitante.Ocassions.desviados +
                    this.props.OfensaVisitante.Ocassions.poste,
                loaded: true
            });
        }
    }

    render() {
        return (
            <table className={"table "+style.statistics}>
                <tbody>
                    <CompartiveStatisticRow
                    firstValue={this.props.OfensaLocal.goles}
                    label="Goles"
                    secondValue={this.props.OfensaVisitante.goles} />
                    <CompartiveStatisticRow
                    firstValue={this.state.tirosTotalesLocal}
                    label="Tiros"
                    secondValue={this.state.tirosTotalesVisitante} />
                    <CompartiveStatisticRow
                    firstValue={this.props.OfensaLocal.Ocassions.arco}
                    label="A puerta"
                    secondValue={this.props.OfensaVisitante.Ocassions.arco} />
                    <CompartiveStatisticRow
                    firstValue={this.props.OfensaLocal.Ocassions.bloqueados}
                    label="Bloqueados"
                    secondValue={this.props.OfensaVisitante.Ocassions.bloqueados} />
                    <CompartiveStatisticRow
                    firstValue={this.props.OfensaLocal.Ocassions.desviados}
                    label="Desviados"
                    secondValue={this.props.OfensaVisitante.Ocassions.desviados} />
                    <CompartiveStatisticRow
                    firstValue={this.props.OfensaLocal.Ocassions.poste}
                    label="Al poste"
                    secondValue={this.props.OfensaVisitante.Ocassions.poste} />
                    <CompartiveStatisticRow
                    firstValue={this.props.OfensaLocal.Ocassions.tirosDeEsquina}
                    label="Tiros de esquina"
                    secondValue={this.props.OfensaVisitante.Ocassions.tirosDeEsquina} />
                </tbody>
            </table>
        );
    }
}

TeamMatchOfensiveStatistics.propTypes = {
    OfensaLocal: PropTypes.shape({
        Ocassions: PropTypes.shape({
            arco: PropTypes.number,
            bloqueados: PropTypes.number,
            desviados: PropTypes.number,
            poste: PropTypes.number,
            tirosDeEsquina: PropTypes.number
        }),
        goles: PropTypes.number
    }),
    OfensaVisitante: PropTypes.shape({
        Ocassions: PropTypes.shape({
            arco: PropTypes.number,
            bloqueados: PropTypes.number,
            desviados: PropTypes.number,
            poste: PropTypes.number,
            tirosDeEsquina: PropTypes.number
        }),
        goles: PropTypes.number
    })
}

export default TeamMatchOfensiveStatistics;
