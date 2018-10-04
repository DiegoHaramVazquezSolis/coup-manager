import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from '../Grid/Row/Row';
import Col from '../Grid/Col/Col';
import ThumbnailLogo from './ThumbnailLogo';
import Match from './Match';

class TeamMatch extends Component {
    render() {
        return (
            <tr>
                <td>
                    <Match team={this.props.match.local}
                    teamLogo={this.props.match.local === this.props.team ? this.props.teamLogo : this.props.match.rivalLogo} />
                </td>
                <td className="filled">VS</td>
                <td>
                    <Match team={this.props.match.visitante}
                    teamLogo={this.props.match.visitante === this.props.team ? this.props.teamLogo : this.props.match.rivalLogo} />
                </td>
            </tr>
        );
    }
}

TeamMatch.propTypes = {
    match: PropTypes.shape({
        date: PropTypes.string || "00/00",
        hour: PropTypes.string || "00:00",
        local: PropTypes.string || "Local",
        rivalLogo: PropTypes.string || "",
        visitante: PropTypes.string || "Visitante",
    }),
    team: PropTypes.string,
    teamLogo: PropTypes.string
}

export default TeamMatch;
