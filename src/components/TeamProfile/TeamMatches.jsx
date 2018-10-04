import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TeamProfile.css';
import { teamsRef } from '../../services/DatabaseService';
import TeamMatch from './TeamMatch';

class TeamMatches extends Component {
    state = {
        matches: '',
        loaded: false
    };

    render() {
        if (!this.state.loaded && this.props.team !== undefined) {
            teamsRef.child(this.props.team.replace(' ','').toUpperCase()).child('Matches').once('value',(partidos) => {
                this.setState({ matches: partidos.val(), loaded: true });
            });
        }
        return (
            <table className="table matches">
                <thead>
                    <tr>
                        <th colSpan="3">Siguientes partidos</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.matches instanceof Object && Object.keys(this.state.matches).map((match) => (
                        <TeamMatch teamLogo={this.props.teamLogo} key={match} match={this.state.matches[match]} team={this.props.team} />
                    ))}
                </tbody>
            </table>
        );
    }
}

TeamMatches.propTypes = {
    team: PropTypes.string,
    teamLogo: PropTypes.string
}

export default TeamMatches;
