import React, { Component } from 'react';
import { connect } from 'react-redux'
import FormGroup from '../Forms/FormGroup';
import { usersRef, teamsRef } from '../../services/DatabaseService';
import toastr from 'toastr';
import logo from './../../assets/aprove.svg';
import CustomInput from '../CustomInput/CustomInput';
import Button from "./../CustomButtons/Button.jsx";

class UserInfo extends Component {
    state = {
        edit: false,
        name: '',
        alias: '',
        number: 0,
        position: '',
        captain: false,
        loadNumber: -1
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value, edit: true});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {name, alias, number, position} = this.state;
        usersRef.child(this.props.profile.uid).update({name, alias, number, position: position},(error) => {
            if(error) {
                toastr.error("Error al actualizar informacion");
                console.log(error);
            } else {
                teamsRef.child(this.props.profile.team.replace(' ','').toUpperCase()).child('Players').child(this.props.profile.uid).update({name, number, alias, position: position});
                toastr.success("Listo, informacion guardada");
            }
        });
        this.setState({edit: false});
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.profile.loadNumber > prevState.loadNumber){
            console.log(prevState);
            console.log(nextProps);
            return {loadNumber: nextProps.profile.loadNumber, name: nextProps.profile.name || '', alias: nextProps.profile.alias || '', number: nextProps.profile.number || 0, position: nextProps.profile.position || '', captain: nextProps.profile.captain || false};
        }
        return null;
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <CustomInput 
                    labelText="Nombre"
                    id="name"
                    formControlProps={{
                        fullWidth: true
                    }} 
                    value={this.state.name}
                    onChange={this.onChange}
                    required={true}/>
                <CustomInput 
                    labelText="Apodo"
                    id="alias"
                    formControlProps={{
                        fullWidth: true
                    }} 
                    value={this.state.alias}
                    onChange={this.onChange}
                    required={true}/>
                <CustomInput 
                    labelText="Numero"
                    id="number"
                    formControlProps={{
                        fullWidth: true
                    }} 
                    value={this.state.number}
                    onChange={this.onChange}
                    required={true}
                    type="number"/>
                <CustomInput
                    labelText="Posicion"
                    id="position"
                    formControlProps={{
                        fullWidth: true
                    }} 
                    value={this.state.position}
                    onChange={this.onChange}
                    required={true}/>
                {this.state.edit &&
                <Button type="submit">
                    Guardar cambios
                </Button>
                }
                {this.state.captain && 
                    <FormGroup>
                        <br/>
                        <img src={logo} style={{maxWidth: '25%'}} className="img-thumbnail rounded-circle" alt=""/>
                        <h4>Capitan</h4>
                    </FormGroup>
                }
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        profile: state.user.profile
    }
}

export default UserInfo = connect(mapStateToProps)(UserInfo);
