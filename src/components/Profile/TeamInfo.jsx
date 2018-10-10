import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from './../Card/Card';
import CardBody from './../Card/CardBody';
import { teamsRef } from './../../services/DatabaseService';
import Edit from '@material-ui/icons/Edit';
import Cancel from '@material-ui/icons/Cancel';
import UploadImage from '../UploadImage/UploadImage';
import { uploadFile } from '../../services/StorageService';
import CardAvatar from '../Card/CardAvatar';
import Button from '../CustomButtons/Button';

class TeamInfo extends Component {
    state = {
        logo: '',
        loaded: false,
        edit: false,
        progress: 0,
        captainName: ''
    };

    handleUpload = (event) => {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({edit: true, logo: e.target.result});
        };
        this.setState({ file: event.target.files[0] });
        reader.readAsDataURL(event.target.files[0]);
    }

    saveImage = (e) => {
        e.preventDefault();
        uploadFile('ProfilePictures/'+this.props.uid,this.state.file,this.setProgress,this.afterUpload)
    }

    setProgress = (progress) => {
        this.setState({ progress: progress });
    }

    afterUpload = (downloadURL) => {
        teamsRef.child(this.props.team.replace(' ','').toUpperCase()).update({logo: downloadURL});
        this.setState({ edit: false });
    }

    saveImage = (e) => {
        e.preventDefault();
        uploadFile('TeamsLogos/'+this.props.team,this.state.file,this.setProgress,this.afterUpload);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.loaded) {
            for (const player in nextProps.team.Players) {
                if (nextProps.team.Players.hasOwnProperty(player)) {
                    const jugador = nextProps.team.Players[player];
                    if(jugador.captain === true){
                        return {logo: nextProps.team.logo, captainName: jugador.name, loaded: true}
                    }
                }
            }
        }
        return null;
    }

    render() {
        return (
            <Card profile={true}>
                <CardAvatar profile>
                    <img src={this.state.logo} alt="Logo del equipo" />
                </CardAvatar>
                <CardBody>
                    {this.state.edit &&
                        <div>
                            <UploadImage fileLabel="Selecciona el nuevo logo" handleUpload={this.handleUpload} uploadProgress={this.state.progress} />
                            <Button onClick={this.saveImage}>
                                Guardar cambios
                            </Button>
                        </div>
                    }
                    <h3>{this.props.team.name}
                    </h3>
                    <h5>Capitan: {this.state.captainName}</h5>
                        {!this.state.edit
                        ?
                        <Edit onClick={() => this.setState({ edit: true })} />
                        :
                        <Cancel onClick={() => this.setState({ edit: false })} />
                        }
                </CardBody>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {
        team: state.userTeam.team
    }
}

export default TeamInfo = connect(mapStateToProps)(TeamInfo);
