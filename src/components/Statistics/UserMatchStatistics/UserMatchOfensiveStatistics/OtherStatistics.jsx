import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './../UserMatchStatistics.module.css';

class OtherStatistics extends Component {
    state = {
        sum: 0,
        loaded: false
    };

    static getDerivedStateFromProps(props, state){
        if(!state.loaded){
            return{ sum: props.other.asistencia+props.other.regates+props.other.tirosDeEsquina+props.other.Centros.completados+props.other.Centros.enviados, loaded: true };
        }
        return null;
    }

    render() {
        return (
            <div>
                <h4>Otras estadisticas</h4>
                <pre style={{paddingLeft: ".75em"}}>
                        <h5><p>Valor acumulado</p></h5><h3>{this.state.sum}</h3>
                </pre>
                <table className={"table "+style.statistics} style={{paddingLeft: ".75em"}}>
                    <tbody>
                        <tr>
                            <th className="text-muted">Centros enviados</th>
                            <td><h5>{this.props.other.Centros.enviados}</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Centros completados</th>
                            <td><h5>{this.props.other.Centros.completados}</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Saques de esquina cobrados</th>
                            <td><h5>{this.props.other.tirosDeEsquina}</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Regates</th>
                            <td><h5>{this.props.other.regates}</h5></td>
                        </tr>
                        <tr>
                            <th className="text-muted">Asistencias</th>
                            <td><h5>{this.props.other.asistencia}</h5></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

OtherStatistics.propTypes = {
    other: PropTypes.shape({
        Centros: PropTypes.shape({
            completados: PropTypes.number || 0,
            enviados: PropTypes.number || 0
        }),
        asistencia: PropTypes.number || 0,
        regates: PropTypes.number || 0,
        tirosDeEsquina: PropTypes.number || 0
    })
}

export default OtherStatistics;
