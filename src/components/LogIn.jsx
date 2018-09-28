import React, { Component } from 'react';
import Card from './Card/Card';
import CardHeader from './Card/CardHeader';
import CardBody from './Card/CardBody';
import FormInput from './Forms/FormInput';
import { signIn } from '../services/AuthService';

class LogIn extends Component {
    state = {
        email: '',
        password: ''
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSumbit = (e) => {
        e.preventDefault();
        signIn(this.state.email, this.state.password);
    }

    render() {
        return (
            <Card>
                <CardHeader>
                    Inicio de sesion
                </CardHeader>
                <CardBody>
                    <form onSubmit={this.onSumbit}>
                        <FormInput 
                            id="email" 
                            label="Direccion de correo electronico"
                            type="email"
                            placeholder="Correo electronico"
                            value={this.state.email}
                            onChange={this.onChange}
                            required={true}
                            />
                        <FormInput 
                            id="password" 
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            value={this.state.password}
                            onChange={this.onChange}
                            required={true}
                            />
                        <input type="submit" className="btn btn-dark btn-lg" value="Ingresar"/>
                    </form>
                </CardBody>
            </Card>
        );
    }
}

export default LogIn;
