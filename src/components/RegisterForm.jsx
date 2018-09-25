import React, { Component } from 'react';
import { createAccount } from '../services/AuthService';
import { usersRef } from '../services/DatabaseService';

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
        const {email, password} = this.state;
        createAccount(email, password, this.addUserInDatabase);
        this.props.nextStep();
    }

    addUserInDatabase = (uid) => {
        const {name, age, alias, email} = this.state;
        usersRef.child(uid).update({email, name, age, alias, captain: true});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre completo</label>
                    <input type="text" name="name" id="name" className="form-control" placeholder="Tu nombre completo" value={this.state.name} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Edad</label>
                    <input type="number" name="age" id="age" className="form-control" placeholder="Tu edad" value={this.state.age} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="alias">Apodo</label>
                    <input type="text" name="alias" id="alias" className="form-control" placeholder="Tu apodo (opcional)" value={this.state.alias} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Direccion de email</label>
                    <input type="email" name="email" id="email" className="form-control" placeholder="Direccion de email" value={this.state.email} onChange={this.onChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" id="password" className="form-control" placeholder="Elige tu contraseña" aria-describedby="passwordInstructions" value={this.state.password} onChange={this.onChange} />
                    <small id="passwordInstructions" className="form-text text-muted">Longitud minima de 6 caracteres</small>
                </div>
                <input type="submit" className="btn btn-primary" value="Continuar"/>
            </form>
        );
    }
}

export default RegisterForm;
