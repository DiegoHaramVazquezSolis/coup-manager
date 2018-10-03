import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserPassAccuracyStatistics extends Component {
    state = {
        sum: 0,
        loaded: false
    };

    static getDerivedStateFromProps(props, state){
        if(!state.loaded){
            return{ sum: props.passAccuracy.completos+props.passAccuracy.incompletos+props.passAccuracy.fallidos, loaded: true };
        }
        return null;
    }

    render() {
        return (
            <div>
                <h4>Precision en el pase</h4>
                <pre style={{paddingLeft: ".75em"}}>
                    <h5><p>Intentos de pase</p></h5><h3>{this.state.sum}</h3>
                </pre>
                <table className="table statistics">
                    <tbody>
                        <tr>
                            <th className="text-muted">Pases completados</th>
                            <td><h5>{this.props.passAccuracy.completos}</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Pases incompletos</th>
                            <td><h5>{this.props.passAccuracy.incompletos}</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Pases fallidos</th>
                            <td><h5>{this.props.passAccuracy.fallidos}</h5></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

UserPassAccuracyStatistics.propTypes = {
    passAccuracy: PropTypes.shape({
        completos: PropTypes.number || 0,
        fallidos: PropTypes.number || 0,
        incompletos: PropTypes.number || 0
    })
}

export default UserPassAccuracyStatistics;
