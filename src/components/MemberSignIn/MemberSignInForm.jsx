import React, { Component } from 'react';
import { createAccount } from '../../services/AuthService';
import { usersRef, teamsRef, notificationsRef } from '../../services/DatabaseService';
import toastr from 'toastr';
import { withRouter } from 'react-router-dom'
import CustomInput from '../CustomInput/CustomInput';
import Tooltip from '@material-ui/core/Tooltip';
import Help from '@material-ui/icons/Help';
import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import Button from '../CustomButtons/Button';

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
                <CustomInput
                    labelText="Nombre completo"
                    id="name"
                    formControlProps={{
                        fullWidth: true
                    }}
                    required={true}
                    value={this.state.name}
                    onChange={this.onChange} />
                <CustomInput
                    labelText="Edad"
                    id="age"
                    formControlProps={{
                        fullWidth: true
                    }}
                    required={true}
                    value={this.state.age}
                    onChange={this.onChange}
                    type="number" />
                <CustomInput
                    labelText="Apodo (opcional)"
                    id="alias"
                    formControlProps={{
                        fullWidth: true
                    }}
                    required={true}
                    value={this.state.alias}
                    onChange={this.onChange} />
                <CustomInput
                    labelText="Direccion de correo electronico"
                    id="email"
                    formControlProps={{
                        fullWidth: true
                    }}
                    required={true}
                    value={this.state.email}
                    onChange={this.onChange} />
                    <GridContainer alignItems="flex-end">
                        <GridItem xs={11} sm={11} md={11}>
                            <CustomInput
                            labelText="Contraseña"
                            id="password"
                            formControlProps={{
                                fullWidth: true
                            }}
                            required={true}
                            value={this.state.password}
                            onChange={this.onChange}
                            type="password" />
                        </GridItem>
                        <GridItem xs={1} sm={1} md={1}>
                            <Tooltip title="Al menos 6 caracteres de longitud">
                                <Help />
                            </Tooltip>
                        </GridItem>
                    </GridContainer>
                    <br/>
                    <Button type="submit">
                        Solicitar entrar
                    </Button>
            </form>
        );
    }
}

export default MemberSignInForm = withRouter(MemberSignInForm);
