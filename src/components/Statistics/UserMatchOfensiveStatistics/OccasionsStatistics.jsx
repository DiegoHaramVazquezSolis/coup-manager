import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OccasionsStatistics extends Component {
    state = {
        sum: 0,
        loaded: false
    };

    static getDerivedStateFromProps(props, state){
        if(!state.loaded){
            return{ sum: props.ocassions.arco+props.ocassions.desviados+props.ocassions.bloqueados+props.ocassions.poste, loaded: true };
        }
        return null;
    }

    render() {
        return (
            <div>
                <h4>Ocasiones generadas</h4>
                <pre style={{paddingLeft: ".75em"}}>
                        <h5><p>Tiros totales</p></h5><h3>{this.state.sum}</h3>
                </pre>
                <table className="table" style={{paddingLeft: ".75em"}}>
                    <tbody>
                        <tr>
                            <th className="text-muted">Disparo al arco</th>
                            <td><h5>{this.props.ocassions.arco}</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Disparo desviados</th>
                            <td><h5>{this.props.ocassions.desviados}</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Disparo bloqueados</th>
                            <td><h5>{this.props.ocassions.bloqueados}</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Disparo al poste</th>
                            <td><h5>{this.props.ocassions.poste}</h5></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

OccasionsStatistics.propTypes = {
    ocassions: PropTypes.shape({
        arco: PropTypes.number || 0,
        bloqueados: PropTypes.number || 0,
        desviados: PropTypes.number || 0,
        poste: PropTypes.number || 0
    }),
}

export default OccasionsStatistics;
