import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TeamResult from './TeamResult';

class TeamResults extends Component {
    render() {
        if(Object.keys(this.props.results).length > 0){
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
                        {this.props.results instanceof Object && Object.keys(this.props.results).map((result) => (
                            <TeamResult teamLogo={this.props.teamLogo} key={result} result={this.props.results[result]} team={this.props.team} />
                        ))}
                    </tbody>
                </table>
            );
        }else {
            return (<h1>No hay resultados registrados</h1>)
        }
    }
}

TeamResults.propTypes = {
    results: PropTypes.object,
    teamLogo: PropTypes.string
}

export default TeamResults;
