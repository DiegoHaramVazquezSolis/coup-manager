import React, { Component } from 'react';
import FormInput from '../Forms/FormInput';
import FormInputSmall from '../Forms/FormInputSmall';
import { createAccount } from '../../services/AuthService';
import { usersRef, teamsRef, notificationsRef } from '../../services/DatabaseService';
import toastr from 'toastr';
import { withRouter } from 'react-router-dom'

class MemberSignInForm extends Component {
    state = {
        email: '',
        password: '',
        name: '',
        age: '',
        alias: ''
    };

    componentWillMount(){
        console.log(this.props.team.replace(' ','').toUpperCase());
        teamsRef.child(this.props.team.replace(' ','').toUpperCase()).once('value', (data) => {
            console.log(data);
            if(!data.exists()){
                toastr.error("Este equipo no existe");
                this.props.history.push('/');
            }
        });
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {email, password, age} = this.state;
        if(age > 15){
        createAccount(email, password, this.addUserInDatabase);
        }else {
            toastr.info("Debes tener al menos 16 años para participar");
        }
    }

    addUserInDatabase = (Uid) => {
        const {email, name, age, alias} = this.state;
        usersRef.child(Uid).update({email, name, age, alias, captain: false, team: this.props.team});
        teamsRef.child(this.props.team.replace(' ','').toUpperCase()).child('Players').child(Uid).update({captain: false, name, status: 'p'});
        teamsRef.child(this.props.team.replace(' ','').toUpperCase()).child('Players').orderByChild('captain').equalTo(true).once('value',(captain) => {
            console.log(captain.val());
            captain.forEach(function (capi) {
                notificationsRef.child(capi.key).push().update({
                    type: 'solicitud',
                    name: name,
                    sender: Uid
                });
            });
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} >
                <FormInput 
                    placeholder="Nombre completo" 
                    label="Nombre completo"
                    id="name" 
                    required={true} 
                    value={this.state.name}
                    onChange={this.onChange} />
                <FormInput 
                    placeholder="Edad" 
                    label="Edad"
                    type="number"
                    id="age"
                    required={true}
                    value={this.state.age}
                    onChange={this.onChange} />
                <FormInput 
                    placeholder="Apodo (opcional)" 
                    label="Apodo"
                    id="alias" 
                    value={this.state.alias}
                    onChange={this.onChange} />
                <FormInput 
                    placeholder="Direccion de email" 
                    type="email" 
                    label="Direccion de correo electronico" 
                    id="email" 
                    required={true} 
                    value={this.state.email} 
                    onChange={this.onChange} />
                <FormInputSmall 
                    smallId="passwordInstructions" 
                    small="La contraseña debe contener al menos 6 caracteres" 
                    placeholder="Contraseña" 
                    type="password" 
                    label="Contraseña" 
                    id="password" 
                    required={true} 
                    value={this.state.password} 
                    onChange={this.onChange} />
                <input className="btn btn-secondary btn-lg" type="submit" value="Registrar"/>
            </form>
        );
    }
}

export default MemberSignInForm = withRouter(MemberSignInForm);
