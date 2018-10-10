import React, { Component } from 'react';
import { createAccount } from '../services/AuthService';
import { usersRef } from '../services/DatabaseService';
import toastr from 'toastr';
import Button from './CustomButtons/Button';
import CustomInput from './CustomInput/CustomInput';
import GridContainer from './Grid/GridContainer';
import GridItem from './Grid/GridItem';
import Help from '@material-ui/icons/Help';
import Tooltip from '@material-ui/core/Tooltip';

class RegisterForm extends Component {
    state = {
        name: '',
        age: 0,
        alias: '',
        email: '',
        password: ''
    };

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {email, password, age} = this.state;
        if(age > 15){
            createAccount(email, password, this.addUserInDatabase);
        } else {
            toastr.info("Debes tener al menos 16 años para participar");
        }
    }

    addUserInDatabase = (uid) => {
        const {name, age, alias, email} = this.state;
        usersRef.child(uid).update({email, name, age, alias, captain: true});
        this.props.nextStep();
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
                    labelText="Edad"
                    id="age"
                    formControlProps={{
                        fullWidth: true
                    }} 
                    value={this.state.age}
                    onChange={this.onChange}
                    required={true}
                    type="number"/>
                <CustomInput
                    labelText="Apodo (opcional)"
                    id="alias"
                    formControlProps={{
                        fullWidth: true
                    }} 
                    value={this.state.alias}
                    onChange={this.onChange}/>
                <CustomInput
                    labelText="Direccion de correo electronico"
                    id="email"
                    formControlProps={{
                        fullWidth: true
                    }} 
                    value={this.state.email}
                    onChange={this.onChange}
                    required={true}
                    type="email"/>
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
                <Button type="submit">
                    Continuar
                </Button>
            </form>
        );
    }
}

export default RegisterForm;
