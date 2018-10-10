import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import { teamsRef } from '../../services/DatabaseService';
import Snackbar from '../Snackbar/Snackbar';
import MoodBad from '@material-ui/icons/MoodBad';
import Mood from '@material-ui/icons/Mood';
import ToolTip from '@material-ui/core/Tooltip';

class TeamPlayers extends Component {
    state = {
        players: {},
        loaded: false,
        active: true,
        tc: false
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.loaded) {
            var players = {}, active;
            for (const player in nextProps.players) {
                if (nextProps.players.hasOwnProperty(player)) {
                    const jugador = nextProps.players[player];
                    if(nextProps.uid === player){
                        active = jugador.active;
                    }
                    players[player] = jugador;
                }
            }
            return {players, active, loaded: true};
        }
        return null;
    }

    changeActive = (e) => {
        this.setState({ active: e.target.checked, tc: true });
        teamsRef.child(this.props.team.replace(' ','').toUpperCase()).child('Players').child(this.props.uid)
        .update({active: e.target.checked});
        this.alertTimeout = setTimeout(
        function() {
            this.setState({tc: false});
        }.bind(this),
        1250
        );
    }

    render() {
        if (Object.keys(this.state.players).length > 0) {
            return (
                <div>
                    <table className="table players">
                        <thead>
                            <tr>
                                <th>Jugadores</th>
                                <th>Activo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.players instanceof Object && Object.keys(this.state.players).map((player) => (
                                <tr key={player}>
                                    <td>
                                        <ListItem>
                                            <Avatar src={this.state.players[player].foto} alt="No foto" />
                                            <ListItemText primary={this.state.players[player].name} secondary={this.state.players[player].position || ""} />
                                        </ListItem>
                                    </td>
                                    <td>
                                        {player === this.props.uid ?
                                            <div>
                                                <ToolTip title={this.state.active ? "Que bueno que vas a ir" : "¿No Asistiras?"}>
                                                    <Checkbox
                                                        color="default"
                                                        onChange={this.changeActive}
                                                        checked={this.state.active}
                                                        />
                                                </ToolTip>
                                                <Snackbar 
                                                    place="tr"
                                                    color={this.state.active ? "success" : "info"}
                                                    open={this.state.tc}
                                                    message={this.state.active ? "Si iras" : "No sera lo mismo sin ti"}
                                                    icon={this.state.active ? Mood : MoodBad}
                                                    closeNotification={() => this.setState({ tc: false })}
                                                    close />
                                            </div>
                                                :
                                            <ToolTip title={this.state.players[player].active ? "Asistira" : "No asistira"}>
                                                <Checkbox
                                                    color="default"
                                                    icon={<MoodBad />}
                                                    checkedIcon={<Mood />}
                                                    checked={this.state.players[player].active || false}
                                                    />
                                            </ToolTip>
                                        }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                </div>
            );
        }else {
            return (<h1>Cargando</h1>);
        }
    }
}

TeamPlayers.propTypes = {
    team: PropTypes.string,
    players: PropTypes.object,
    uid: PropTypes.string
}

export default TeamPlayers;
