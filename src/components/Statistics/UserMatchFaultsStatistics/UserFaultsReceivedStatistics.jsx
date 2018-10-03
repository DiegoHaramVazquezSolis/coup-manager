import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserFaultsReceivedStatistics extends Component {
    render() {
        return (
            <div>
                <h4>Faltas recibidas</h4>
                <pre style={{paddingLeft: ".75em"}}>
                    <h3>{this.props.recibidas}</h3>
                </pre>
            </div>
        );
    }
}

UserFaultsReceivedStatistics.propTypes = {
    recibidas: PropTypes.number || 0
}

export default UserFaultsReceivedStatistics;
