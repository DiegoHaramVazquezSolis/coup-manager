import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserInfo from './UserInfo';
import './Profile.css';
import Header from './../Header';
import edit from './../../assets/avatar.svg';
import UploadImage from '../UploadImage/UploadImage';
import FormGroup from '../Forms/FormGroup';
import { uploadFile } from '../../services/StorageService';
import { usersRef } from '../../services/DatabaseService';


class UserProfile extends Component {
    state = {
        edit: false,
        image: edit,
        imageSecure: edit,
        progress: 0,
        file: edit
    };

    static getDerivedStateFromProps(nextProps, prevState){
        if(prevState.image === edit){
            return {image: nextProps.image || edit, imageSecure: nextProps.image || edit};
        }
        return null;
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleUpload = (event) => {
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({edit: true, image: e.target.result});
        };
        this.setState({ file: event.target.files[0] });
        reader.readAsDataURL(event.target.files[0]);
    }

    saveImage = (e) => {
        e.preventDefault();
        uploadFile('ProfilePictures/'+this.props.uid,this.state.file,this.setProgress,this.afterUpload);
    }

    setProgress = (progress) => {
        this.setState({ progress: progress });
    }

    afterUpload = (downloadURL) => {
        usersRef.child(this.props.uid).update({foto: downloadURL});
        this.setState({ edit: false });
    }

    render() {
        return (
            <div className="row">
                <Header title={this.props.name} />
                <div className="col">
                    <UserInfo />
                </div>
                <div className="col">
                    <FormGroup>
                        <UploadImage fileLabel={this.state.edit ? "Nueva imagen" : "Imagen actual"} handleUpload={this.handleUpload} uploadProgress={this.state.progress} />
                    </FormGroup>
                    <FormGroup>
                        <img className="img-thumbnail rounded-circle profile-image" src={this.state.image} alt=""/>
                    </FormGroup>
                    {this.state.edit && 
                        <center>
                            <input type="button" onClick={this.saveImage} className="btn btn-dark btn-lg" value="Guardar cambios" />
                        </center>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        image: state.user.profile.foto,
        name: state.user.profile.name,
        uid: state.user.profile.uid
    }
}

export default UserProfile = connect(mapStateToProps)(UserProfile);
