import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TeamResult from './TeamResult';
import { teamsRef } from '../../services/DatabaseService';

class TeamResults extends Component {
    state = {
        results: '',
        loaded: false
    };

    render() {
        if (!this.state.loaded && this.props.team !== undefined) {
            teamsRef.child(this.props.team.replace(' ','').toUpperCase()).child('Results').once('value',(partidos) => {
                console.log(partidos.val());
                this.setState({ results: partidos.val(), loaded: true });
            });
            teamsRef.child(this.props.team.replace(' ','').toUpperCase()).child('Results').on('child_changed',(partido) => {
                console.log(partido.val());
                let res = this.state.results;
                res[partido.key] = {
                    date: partido.val().date,
                    golesL: partido.val().golesL,
                    golesV: partido.val().golesV,
                    hour: partido.val().hour,
                    local: partido.val().local,
                    rivalLogo: partido.val().rivalLogo,
                    visitante: partido.val().visitante,
                    active: partido.val().active
                }
                this.setState({ results: res, loaded: true });
            });
        }
        return (
            <table className="table matches">
                <caption>
                    <ul className="legend-list">
                        <li className="live-result">Resultado en vivo</li>
                        <li className="final-result">Partido terminado</li>
                    </ul>
                </caption>
                <thead>
                    <tr>
                        <th colSpan="3">Resultados hasta el momento</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.results instanceof Object && Object.keys(this.state.results).map((result) => (
                        <TeamResult teamLogo={this.props.teamLogo} key={result} result={this.state.results[result]} team={this.props.team} />
                    ))}
                </tbody>
            </table>
        );
    }
}

TeamResults.propTypes = {
    team: PropTypes.string,
    teamLogo: PropTypes.string
}

export default TeamResults;
