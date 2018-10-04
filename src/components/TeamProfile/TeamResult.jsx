import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Result from './Result';

class TeamResult extends Component {
    render() {
        return (
            <tr>
                <td>
                    <Result 
                        name={this.props.result.local}
                        teamLogo={this.props.result.local === this.props.team ? this.props.teamLogo : this.props.result.rivalLogo} />
                </td>
                <td style={{verticalAlign: "middle"}} className={"w-25 "+(this.props.result.active ? "bg-warning" : "filled")}>
                    {this.props.result.golesL+"-"+this.props.result.golesV}
                </td>
                <td>
                    <Result 
                        name={this.props.result.visitante}
                        teamLogo={this.props.result.visitante === this.props.team ? this.props.teamLogo : this.props.result.rivalLogo} />
                </td>
            </tr>
        );
    }
}

TeamResult.propTypes = {
    result: PropTypes.shape({
        date: PropTypes.string || "00/00",
        golesL: PropTypes.number || 0,
        golesV: PropTypes.number || 0,
        hour: PropTypes.string || "00:00",
        local: PropTypes.string || "Local",
        rivalLogo: PropTypes.string || "",
        visitante: PropTypes.string || "Visitante",
        active: PropTypes.bool || false
    }),
    team: PropTypes.string,
    teamLogo: PropTypes.string
}

export default TeamResult;
