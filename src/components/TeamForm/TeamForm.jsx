import React, { Component } from 'react';
import FormGroup from '../Forms/FormGroup';
import { uploadFile } from '../../services/StorageService';
import UploadImage from '../UploadImage/UploadImage';
import { usersRef, teamsRef } from '../../services/DatabaseService';
import { connect } from 'react-redux';
import toastr from 'toastr';

class TeamForm extends Component {
    state = {
        name: '',
        uploadProgress: 0,
        file: null
    };

    handleUpload = (event) => {
        this.setState({file: event.target.files[0]});
    }

    setProgress = (progress) => {
        this.setState({uploadProgress: progress});
        console.log(progress);
    }

    afterUpload = (downloadURL) => {
        teamsRef.child(this.state.name.replace(' ','').toUpperCase()).update({logo: downloadURL, name: this.state.name});
        toastr.success("Datos guardados con exito");
        this.props.nextStep();
    }

    onChange = (event) => {
        this.setState({name: event.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        teamsRef.child(this.state.name.replace(' ','').toUpperCase()).once('value', (data) => {
            if(!data.exists()){
                usersRef.child(this.props.uid).update({team: this.state.name});
                uploadFile(`TeamsLogos/${this.state.name}`, this.state.file, this.setProgress, this.afterUpload);
            }else {
                toastr.warning("Este nombre de equipo ya esta registrado");
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} >
                <FormGroup>
                    <label htmlFor="name">Nombre del equipo</label>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Nombre del equipo" value={this.state.name} onChange={this.onChange} required/>
                </FormGroup>
                <UploadImage fileLabel={this.state.file !== null ? this.state.name : "Escoge el logo de tu equipo"} handleUpload={this.handleUpload} uploadProgress={this.state.uploadProgress} />
                <br/>
                <FormGroup>
                    <input type="submit" className="btn btn-primary" value="Guardar datos del equipo"/>
                </FormGroup>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        uid: state.user.profile.uid
    }
}

export default TeamForm = connect(mapStateToProps)(TeamForm);
