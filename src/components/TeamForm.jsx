import React, { Component } from 'react';
import FormGroup from './Forms/FormGroup';
import { uploadFile } from '../services/StorageService';

class TeamForm extends Component {
    state = {
        name: '',
        uploadProgress: 0
    };

    handleUpload = (event) => {
        const file = event.target.files[0];
        uploadFile(`TeamsLogos/${this.state.name}`, file, this.setProgress);
    }

    setProgress = (progress) => {
        this.setState({uploadProgress: progress});
        console.log(progress);
    }

    onChange = (event) => {
        this.setState({name: event.target.value});
    }

    render() {
        return (
            <form >
                <FormGroup>
                    <label htmlFor="name">Nombre del equipo</label>
                    <input type="text" className="form-control" name="name" id="name" placeholder="Nombre del equipo" value={this.state.name} onChange={this.onChange} />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="image">Escoge el logo de tu equipo</label>
                    <input type="file" name="image" id="image" onChange={this.handleUpload.bind(this)} />
                </FormGroup>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: this.state.uploadProgress.toString()+"%"}} aria-valuenow={this.state.uploadProgress} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <FormGroup>
                    <img src={this.state.image} alt=""/>
                </FormGroup>
            </form>
        );
    }
}

export default TeamForm;
