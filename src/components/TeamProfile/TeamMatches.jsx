import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TeamProfile.css';
import TeamMatch from './TeamMatch';

class TeamMatches extends Component {
    render() {
        if (Object.keys(this.props.matches).length > 0) {
            return (
                <table className="table matches">
                    <thead>
                        <tr>
                            <th colSpan="3">Siguientes partidos</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.matches instanceof Object && Object.keys(this.props.matches).map((match) => (
                            <TeamMatch teamLogo={this.props.teamLogo} key={match} match={this.props.matches[match]} team={this.props.team} />
                        ))}
                    </tbody>
                </table>
            );
        }else {
            return (<h1>Cargando</h1>);
        }
    }
}

TeamMatches.propTypes = {
    team: PropTypes.string,
    matches: PropTypes.object,
    teamLogo: PropTypes.string
}

export default TeamMatches;
