import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TeamLogo extends Component {
    render() {
        return (
            <img className="img-thumbnail rounded-circle" src={this.props.TeamLogo} alt="Logo del equipo"/>
        );
    }
}

TeamLogo.propTypes = {
    TeamLogo: PropTypes.string.isRequired
}

export default TeamLogo;
