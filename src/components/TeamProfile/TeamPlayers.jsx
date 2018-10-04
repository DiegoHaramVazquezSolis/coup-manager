import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ThumbnailLogo from './ThumbnailLogo';
import { teamsRef } from '../../services/DatabaseService';

class TeamPlayers extends Component {
    state = {
        playersRow1: [{}, {}, {}, {}],
        playersRow2: [{}, {}, {}, {}],
        playersRow3: [{}, {}, {}, {}],
        loaded: false
    };
    render() {
        if(!this.state.loaded && this.props.team !== undefined){
            teamsRef.child(this.props.team.replace(' ','').toUpperCase()).child('Players').once('value', (players) => {
                var index = 0;
                var playersRow1Array = this.state.playersRow1;
                var playersRow2Array = this.state.playersRow2;
                var playersRow3Array = this.state.playersRow3;
                players.forEach((player) => {
                    if(index<3){
                        playersRow1Array[index] = player.val();
                    }else if (index < 7){
                        playersRow2Array[index] = player.val();
                    }else if (index < 11){
                        playersRow3Array[index] = player.val();
                    }
                    index++;
                });
                this.setState({ playersRow1: playersRow1Array,playersRow2: playersRow2Array,playersRow3: playersRow3Array, loaded: true });
            });
        }
        return (
            <div>
                <table className="table players">
                    <thead>
                        <tr>
                            <th colSpan="4">Jugadores</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {this.state.playersRow1 instanceof Array && this.state.playersRow1.map((player, index) => (
                                <td key={index} className="w-25">
                                    <ThumbnailLogo className="w-100 rounded-circle" logo={this.state.playersRow1[index].foto || ""} />
                                    {this.state.playersRow1[index].name || ""}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            {this.state.playersRow1 instanceof Array && this.state.playersRow2.map((player, index) => (
                                <td key={index} className="w-25">
                                    <ThumbnailLogo className="w-100 rounded-circle" logo={player.foto || ""} />
                                    {player.name}
                                </td>
                            ))}
                        </tr>
                        <tr>
                            {this.state.playersRow1 instanceof Array && this.state.playersRow3.map((player, index) => (
                                <td key={index} className="w-25">
                                    <ThumbnailLogo className="w-100 rounded-circle" logo={player.foto || ""} />
                                    {player.name}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

TeamPlayers.propTypes = {
    team: PropTypes.string
}

export default TeamPlayers;
