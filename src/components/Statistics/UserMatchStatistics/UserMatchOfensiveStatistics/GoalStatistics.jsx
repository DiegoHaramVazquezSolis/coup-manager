import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GoalStatistics extends Component {
    render() {
        return (
            <div>
                <h4>Goles</h4>
                <pre style={{paddingLeft: ".75em"}}>
                        <h5><p>Goles marcados</p></h5><h3>{this.props.goals}</h3>
                </pre>
            </div>
        );
    }
}

GoalStatistics.propTypes = {
    goals: PropTypes.number.isRequired
}

export default GoalStatistics;
