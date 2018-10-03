import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserFaultsStatistics extends Component {
    render() {
        return (
            <div>
                <h4>Faltas cometidas</h4>
                <pre style={{paddingLeft: ".75em"}}>
                    <h3>{this.props.cometidas}</h3>
                </pre>
            </div>
        );
    }
}

UserFaultsStatistics.propTypes = {
    cometidas: PropTypes.number || 0
}

export default UserFaultsStatistics;
