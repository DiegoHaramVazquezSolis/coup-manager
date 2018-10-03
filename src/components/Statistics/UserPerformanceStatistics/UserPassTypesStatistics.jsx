import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserPassTypesStatistics extends Component {
    state = {
        sum: 0,
        loaded: false
    };

    static getDerivedStateFromProps(props, state){
        if(!state.loaded){
            var suma = 0;
            if(props.passType.corto > 0){
                suma += 1;
            }
            if(props.passType.largo > 0){
                suma += 1;
            }
            if(props.passType.medio > 0){
                suma += 1;
            }
            return{ sum: suma, loaded: true };
        }
        return null;
    }

    render() {
        return (
            <div>
                <h4>Tipos de pase intentados</h4>
                <pre style={{paddingLeft: ".75em"}}>
                    <h5><p>Tipos intentados</p></h5><h3>{this.state.sum}/3</h3>
                </pre>
                <table className="table">
                    <tbody>
                        <tr>
                            <th className="text-muted">Pases cortos</th>
                            <td><h5>{this.props.passType.corto}</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Pases largos</th>
                            <td><h5>{this.props.passType.largo}</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Pases medios</th>
                            <td><h5>{this.props.passType.medio}</h5></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

UserPassTypesStatistics.propTypes = {
    passType: PropTypes.shape({
        corto: PropTypes.number || 0,
        largo: PropTypes.number || 0,
        medio: PropTypes.number || 0
    })
}

export default UserPassTypesStatistics;
