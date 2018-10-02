import React, { Component } from 'react';
import { connect } from 'react-redux'
import Card from './../Card/Card';
import CardHeader from './../Card/CardHeader';
import CardBody from './../Card/CardBody';
import { teamsRef, usersRef } from './../../services/DatabaseService';
import edit from './../../assets/pencil.png';
import UploadImage from '../UploadImage/UploadImage';
import { uploadFile } from '../../services/StorageService';
import FormGroup from '../Forms/FormGroup';

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
    }

    saveImage = (e) => {
        e.preventDefault();
        uploadFile('TeamsLogos/'+this.props.team,this.state.file,this.setProgress,this.afterUpload);
    }

    render() {
        if(!this.state.loaded && this.props.team !== undefined){
            teamsRef.child(this.props.team.replace(' ','').toUpperCase()).child('logo').once('value', (logo) => {
                this.setState({logo: logo.val(), loaded: true});
            });
            usersRef.orderByChild('captain').equalTo(true).once('value', (captains) => {
                captains.forEach((captain) => {
                    if(captain.val().team === this.props.team){
                        this.setState({ captainName: captain.val().name });
                    }
                });
            });
        }
        return (
            <Card>
                <CardHeader>
                    Informacion del equipo
                </CardHeader>
                <CardBody>
                    <img className="card-img-top img-thumbnail rounded-circle" src={this.state.logo} alt=""/>
                    {this.state.edit &&
                        <div>
                            <UploadImage fileLabel="Selecciona el nuevo logo" handleUpload={this.handleUpload} uploadProgress={this.state.progress} />
                            <FormGroup>
                                <br/>
                                <input type="button" onClick={this.saveImage} className="btn btn-dark btn-lg" value="Guardar cambios" />
                            </FormGroup>
                        </div>
                    }
                    <h3>{this.props.team}  
                    {this.props.captain &&
                        <img src={edit} alt="Editar" onClick={() => this.setState({ edit: true })} />
                    }
                    </h3>
                    <h5>Capitan: {this.state.captainName}</h5>
                </CardBody>
            </Card>
        );
    }
}

function mapStateToProps(state) {
    return {
        team: state.user.profile.team,
        captain: state.user.profile.captain
    }
}

export default TeamInfo = connect(mapStateToProps)(TeamInfo);
